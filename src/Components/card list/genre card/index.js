import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../atoms/card";
import CardLoading from "../../atoms/card loading";
import { apiKey } from "../../../config";

export default function GenreCard() {
    const [dataMovie, setDataMovie] = useState([]);
    const [dataTv, setDataTv] = useState([]);
    const [dataGenreListMovie, setDataGenreListMovie] = useState("");
    const [dataGenreListTv, setDataGenreListTv] = useState("");
    const [totalPageMovie, setTotalPageMovie] = useState(0);
    const [totalPageTv, setTotalPageTv] = useState(0);
    const [loading, setloading] = useState(true);
    let params = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const fetchDataMovie = async (id) => {
            setloading(true);
            try {
                fetch(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${params.num}&with_genres=${id}`
                )
                    .then((response) => response.json())
                    .then((results) => {
                        setDataMovie(results.results);
                        setTotalPageMovie(results.total_pages);
                        setloading(false);
                    });
            } catch (e) {
                setloading(true);
            }
        };

        const fetchDataTv = async (id) => {
            setloading(true);
            try {
                fetch(
                    `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${params.num}&with_genres=${id}`
                )
                    .then((response) => response.json())
                    .then((results) => {
                        setDataTv(results.results);
                        setTotalPageTv(results.total_pages);
                        setloading(false);
                    })
                    .catch(() => {
                        setloading(true);
                    });
            } catch (e) {
                setloading(true);
            }
        };

        const fetchDataGenreListMovie = async () => {
            setloading(true);
            try {
                fetch(
                    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
                )
                    .then((response) => response.json())
                    .then((results) => {
                        for (let i = 0; i < results.genres.length; i++) {
                            if (results.genres[i].id.toString() === params.id) {
                                setDataGenreListMovie(results.genres[i].name);
                            }
                        }
                        fetchDataMovie(params.id);
                    });
            } catch (e) {
                setloading(true);
            }
        };

        const fetchDataGenreListTv = async () => {
            setloading(true);
            try {
                fetch(
                    `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=en-US`
                )
                    .then((response) => response.json())
                    .then((results) => {
                        for (let i = 0; i < results.genres.length; i++) {
                            if (results.genres[i].id.toString() === params.id) {
                                setDataGenreListTv(results.genres[i].name);
                            }
                        }
                        fetchDataTv(params.id);
                    });
            } catch (e) {
                setloading(true);
            }
        };
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        fetchDataGenreListMovie();
        fetchDataGenreListTv();
    }, [params.id, params.num]);

    return (
        <div className="min-h-screen px-5 py-6 text-white sm:py-14 md:px-10 lg:px-14 md:py-8">
            <h1 className="mb-3 text-2xl font-semibold text-center text-white lg:px-1 md:text-5xl sm:mb-5 md:mb-8">
                Popular Movie & Tv with genre{" "}
                {dataGenreListMovie !== ""
                    ? dataGenreListMovie
                    : dataGenreListTv}
            </h1>
            {loading ? (
                <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-items-center sm:gap-10 md:gap-12 lg:gap-14 xl:gap-y-9">
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                </div>
            ) : dataTv.length === 0 &&
              dataMovie.length === 0 &&
              loading === false ? (
                <h1 className="text-3xl font-normal text-white">Not Found</h1>
            ) : (
                <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-items-center sm:gap-10 md:gap-12 lg:gap-14 xl:gap-y-9">
                    {dataMovie.map((cardData) => (
                        <Card
                            id={cardData.id}
                            onClick={(e) => navigate(`/movie/${e.target.id}`)}
                            title={
                                cardData.title ? cardData.title : cardData.name
                            }
                            year={
                                cardData.release_date
                                    ? cardData.release_date
                                    : cardData.first_air_date
                                    ? cardData.first_air_date
                                    : "unknown"
                            }
                            image={cardData.poster_path}
                            vote={cardData.vote_average}
                        ></Card>
                    ))}
                    {dataTv.map((cardData) => (
                        <Card
                            id={cardData.id}
                            onClick={(e) => navigate(`/tv/${e.target.id}`)}
                            title={
                                cardData.title ? cardData.title : cardData.name
                            }
                            year={
                                cardData.release_date
                                    ? cardData.release_date
                                    : cardData.first_air_date
                                    ? cardData.first_air_date
                                    : "unknown"
                            }
                            image={cardData.poster_path}
                            vote={cardData.vote_average}
                        ></Card>
                    ))}
                </div>
            )}
            <div className="flex justify-center gap-5 text-white pt-14">
                <button
                    onClick={() =>
                        navigate(
                            `/genre/${params.id}/page/${
                                parseInt(params.num) > 1
                                    ? parseInt(params.num) - 1
                                    : params.num
                            }`
                        )
                    }
                    className="px-2 text-xl bg-two"
                >
                    {"<"}
                </button>
                <p className="text-2xl">
                    page {params.num} of{" "}
                    {totalPageMovie > 500 || totalPageTv > 500
                        ? 500
                        : totalPageMovie > totalPageTv
                        ? totalPageMovie
                        : totalPageTv}
                </p>
                <button
                    onClick={() =>
                        navigate(
                            `/genre/${params.id}/page/${
                                parseInt(params.num) <
                                (totalPageMovie > totalPageTv
                                    ? totalPageMovie > 500
                                        ? 500
                                        : totalPageMovie
                                    : totalPageTv > 500
                                    ? 500
                                    : totalPageTv)
                                    ? parseInt(params.num) + 1
                                    : params.num
                            }`
                        )
                    }
                    className="px-2 text-xl bg-two"
                >
                    {">"}
                </button>
            </div>
        </div>
    );
}
