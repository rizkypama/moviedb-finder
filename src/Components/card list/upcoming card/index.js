import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../../atoms/card";
import CardLoading from "../../atoms/card loading";
import { apiKey } from "../../../config";

export default function UpcomingCard() {
    const [dataMovie, setDataMovie] = useState([]);
    const [date, setDate] = useState([]);
    const [totalPageMovie, setTotalPageMovie] = useState(0);
    const [loading, setloading] = useState(false);
    let params = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        const fetchDataMovie = async () => {
            setloading(true);
            try {
                fetch(
                    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=${params.num}`
                )
                    .then((response) => response.json())
                    .then((results) => {
                        setDataMovie(results.results);
                        setTotalPageMovie(results.total_pages);
                        setDate(
                            `From ${results.dates.minimum} to ${results.dates.maximum}`
                        );
                        setloading(false);
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
    }, [params.num]);

    return (
        <div className="min-h-screen px-5 py-6 text-white sm:py-14 md:px-10 lg:px-14 md:py-8">
            <h1 className="text-4xl font-semibold mb-7">{date}</h1>
            {loading ? (
                <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-items-center sm:gap-10 md:gap-12 lg:gap-14 xl:gap-y-9">
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                    <CardLoading></CardLoading>
                </div>
            ) : dataMovie.length === 0 ? (
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
                </div>
            )}
            <div className="flex justify-center gap-5 text-white pt-14">
                <button
                    onClick={() =>
                        navigate(
                            `/upcoming/page/${
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
                    page {params.num} of {totalPageMovie}
                </p>
                <button
                    onClick={() =>
                        navigate(
                            `/upcoming/page/${
                                parseInt(params.num) < totalPageMovie
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
