import React, { useEffect, useState } from "react";
import { apiKey } from "../../../config";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../atoms/card";
import CardLoading from "../../atoms/card loading";

export default function Result() {
    const [dataMovie, setDataMovie] = useState([]);
    const [dataTv, setDataTv] = useState([]);
    const [totalPageMovie, setTotalPageMovie] = useState(0);
    const [totalPageTv, setTotalPageTv] = useState(0);
    const [loading, setloading] = useState(false);
    let params = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const fetchDataMovie = async () => {
            setloading(true);
            try {
                fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${params.keyword}&page=${params.num}&include_adult=false`
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

        const fetchDataTv = async () => {
            setloading(true);
            try {
                fetch(
                    `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&query=${params.keyword}&page=${params.num}&include_adult=false`
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
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        fetchDataMovie();
        fetchDataTv();
    }, [params.keyword, params.num]);

    return (
        <div className="min-h-screen px-5 py-6 text-white sm:py-14 md:px-10 lg:px-14 md:py-8">
            <h1 className="text-4xl font-semibold mb-7">Results</h1>
            {loading ? (
                <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-items-center sm:gap-10 md:gap-12 lg:gap-14 xl:gap-y-9">
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                </div>
            ) : dataMovie.length === 0 && dataTv.length === 0 ? (
                <h1 className="text-white text-3xl font-normal">Not Found</h1>
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
                            `/search/${params.keyword}/page/${
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
                            `/search/${params.keyword}/page/${
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
