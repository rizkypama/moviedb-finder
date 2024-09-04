import React, { useState, useEffect } from "react";
import MovieDetail from "../../Components/detail";
import Navbar from "../../Components/navbar";
import { useParams } from "react-router-dom";
import { apiKey } from "../../config";
import MovieLoading from "../../Components/atoms/movie details loading";

export default function Movie() {
    const [data, setData] = useState([]);
    const [genres, setGenres] = useState([]);
    const [trailer, setTrailer] = useState([]);
    const [teaser, setTeaser] = useState([]);
    const [loading, setloading] = useState(false);
    const [failed, setFailed] = useState(false);
    let params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setloading(true);
            try {
                fetch(
                    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}`
                )
                    .then((response) => response.json())
                    .then((results) => {
                        if (results.success === false) {
                            setFailed(true);
                            setloading(false);
                        } else {
                            setData(results);
                            setGenres(results.genres.map((g) => g.id));
                            setloading(false);
                        }
                    });
            } catch (e) {
                setFailed(true);
            }
        };

        const fetchTrailer = async () => {
            setloading(true);
            try {
                fetch(
                    `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=${apiKey}&language=en-US`
                )
                    .then((response) => response.json())
                    .then((results) => {
                        for (let i = 0; i < results.results.length; i++) {
                            if (
                                results.results[i].type === "Trailer" &&
                                results.results[i].site === "YouTube"
                            ) {
                                setTrailer(results.results[i]);
                            } else if (
                                results.results[i].type === "Teaser" &&
                                results.results[i].site === "YouTube"
                            ) {
                                setTeaser(results.results[i]);
                            }
                        }
                        setloading(false);
                    });
            } catch (e) {
                setFailed(true);
            }
        };
        fetchData();
        fetchTrailer();
    }, [params.id]);

    return (
        <div className="min-h-screen bg-black -z-50 font-poppins">
            <Navbar></Navbar>
            {loading ? (
                <MovieLoading></MovieLoading>
            ) : failed ? (
                <h1 className="text-white px-10 py-10 text-5xl font-semibold">
                    Not Found
                </h1>
            ) : (
                <MovieDetail
                    title={data.title}
                    tagline={data.tagline}
                    time={data.runtime}
                    backdrop={data.backdrop_path}
                    poster={data.poster_path}
                    vote={data.vote_average}
                    overview={data.overview}
                    video={
                        trailer.length !== 0
                            ? trailer
                            : teaser.length !== 0
                            ? teaser
                            : null
                    }
                    genres={genres}
                ></MovieDetail>
            )}
        </div>
    );
}
