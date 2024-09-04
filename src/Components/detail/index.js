import React from "react";
import { useNavigate } from "react-router-dom";

export default function MovieDetail(props) {
    let navigate = useNavigate();
    return (
        <div>
            <div>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${props.backdrop}`}
                    alt={props.title}
                    className="object-cover object-top w-full md:h-100 opacity-60 -z-1"
                />
            </div>
            <div
                className={`relative flex flex-col items-start px-16 ${
                    props.backdrop ? "-mt-28" : null
                } md:items-end md:flex-row`}
            >
                <img
                    src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
                    alt=""
                    className="rounded md:h-80"
                />
                <div className="px-0 py-3 md:py-0 md:px-10">
                    <h1 className="mb-2 text-2xl font-semibold text-white md:mb-1 md:text-4xl">
                        {props.title}
                    </h1>
                    <h3
                        className={`mb-2 md:mb-1 ${
                            props.tagline ? "italic" : ""
                        } text-xl font-medium text-white md:text-2xl`}
                    >
                        {props.tagline
                            ? props.tagline
                            : props.season && props.episode
                            ? `${props.season} season and ${props.episode} episode`
                            : ""}
                    </h3>
                    <p className="mb-4 text-lg font-normal text-white">
                        {Number.isInteger(props.time)
                            ? `${
                                  Math.floor(props.time / 60) === 0
                                      ? ""
                                      : `${Math.floor(props.time / 60)}h`
                              } ${
                                  props.time -
                                      Math.floor(props.time / 60) * 60 ===
                                  0
                                      ? ""
                                      : `${
                                            props.time -
                                            Math.floor(props.time / 60) * 60
                                        }m `
                              }`
                            : props.time
                            ? props.time
                            : "unknown"}

                        {props.episode && props.time ? "m in one episode" : ""}
                    </p>
                    <div className="grid items-center grid-cols-2 gap-3 mb-8 text-center align-middle md:flex md:mb-4 md:gap-0 md:space-x-4">
                        {props.genres.includes(10759) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="10759"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-purple-500 rounded hover:bg-purple-600"
                            >
                                Action & Adventure
                            </p>
                        ) : null}
                        {props.genres.includes(28) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="28"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-red-500 rounded hover:bg-red-600"
                            >
                                Action
                            </p>
                        ) : null}
                        {props.genres.includes(12) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="12"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-teal-400 rounded hover:bg-teal-600"
                            >
                                Adventure
                            </p>
                        ) : null}
                        {props.genres.includes(16) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="16"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-blue-400 rounded hover:bg-blue-600"
                            >
                                Animation
                            </p>
                        ) : null}
                        {props.genres.includes(80) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="80"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-red-600 rounded hover:bg-red-800"
                            >
                                Crime
                            </p>
                        ) : null}
                        {props.genres.includes(35) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="35"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-yellow-400 rounded hover:bg-yellow-600"
                            >
                                Comedy
                            </p>
                        ) : null}
                        {props.genres.includes(18) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="18"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-green-400 rounded hover:bg-green-600"
                            >
                                Drama
                            </p>
                        ) : null}
                        {props.genres.includes(99) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="99"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-white rounded hover:bg-gray-400"
                            >
                                Documentary
                            </p>
                        ) : null}
                        {props.genres.includes(10751) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="10751"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-orange-400 rounded hover:bg-orange-600"
                            >
                                Family
                            </p>
                        ) : null}
                        {props.genres.includes(14) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="14"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 rounded bg-lime-400 hover:bg-lime-600"
                            >
                                Fantasy
                            </p>
                        ) : null}
                        {props.genres.includes(36) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="36"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 rounded bg-amber-400 hover:bg-amber-600"
                            >
                                History
                            </p>
                        ) : null}
                        {props.genres.includes(27) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="27"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-red-700 rounded hover:bg-red-900"
                            >
                                Horror
                            </p>
                        ) : null}
                        {props.genres.includes(10762) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="10762"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-orange-400 rounded hover:bg-orange-600"
                            >
                                Kids
                            </p>
                        ) : null}
                        {props.genres.includes(10402) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="10402"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-indigo-400 rounded hover:bg-indigo-600"
                            >
                                Music
                            </p>
                        ) : null}
                        {props.genres.includes(9648) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="9648"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-gray-600 rounded hover:bg-gray-800"
                            >
                                Mystery
                            </p>
                        ) : null}
                        {props.genres.includes(10763) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="10763"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-gray-600 rounded hover:bg-gray-800"
                            >
                                News
                            </p>
                        ) : null}
                        {props.genres.includes(10764) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="10764"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-gray-600 rounded hover:bg-gray-800"
                            >
                                Reality
                            </p>
                        ) : null}
                        {props.genres.includes(10765) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="10765"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 rounded bg-emerald-600 hover:bg-emerald-800"
                            >
                                Sci-Fi & Fantasy
                            </p>
                        ) : null}
                        {props.genres.includes(10766) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="10766"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-pink-400 rounded hover:bg-pink-600"
                            >
                                Soap
                            </p>
                        ) : null}
                        {props.genres.includes(10749) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="10749"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-pink-400 rounded hover:bg-pink-600"
                            >
                                Romance
                            </p>
                        ) : null}
                        {props.genres.includes(878) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="878"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 rounded bg-emerald-400 hover:bg-emerald-600"
                            >
                                Science Fiction
                            </p>
                        ) : null}
                        {props.genres.includes(10770) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="10770"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-white rounded hover:bg-gray-400"
                            >
                                TV Movie
                            </p>
                        ) : null}
                        {props.genres.includes(53) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="53"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-red-500 rounded hover:bg-red-700"
                            >
                                Thriller
                            </p>
                        ) : null}
                        {props.genres.includes(10752) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="10752"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-gray-600 rounded hover:bg-gray-800"
                            >
                                War
                            </p>
                        ) : null}
                        {props.genres.includes(10767) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="10767"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-yellow-600 rounded hover:bg-yellow-800"
                            >
                                Talk
                            </p>
                        ) : null}
                        {props.genres.includes(10768) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="10768"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-gray-600 rounded hover:bg-gray-800"
                            >
                                War & Politics
                            </p>
                        ) : null}
                        {props.genres.includes(37) ? (
                            <p
                                onClick={(e) =>
                                    navigate(`/genre/${e.target.id}/page/1`)
                                }
                                id="37"
                                className="px-2 font-medium text-black cursor-pointer transition duration-300 bg-yellow-400 rounded hover:bg-yellow-600"
                            >
                                Western
                            </p>
                        ) : null}
                    </div>
                    <div className="flex flex-row">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-3 text-white w-7 h-7 sm:h-8 sm:w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <p className="text-xl font-medium text-white sm:text-2xl">
                            {props.vote}
                        </p>

                        {props.video ? (
                            <a
                                href={
                                    props.video.key
                                        ? `https://www.youtube.com/watch?v=${props.video.key}`
                                        : `https://www.youtube.com/results?search_query=${props.title}`
                                }
                                className={`px-3 py-1 font-medium text-black transition duration-300 ${
                                    props.video.type === "Trailer"
                                        ? "bg-yellow-400 hover:bg-yellow-600"
                                        : props.video.type === "Teaser"
                                        ? "bg-green-400 hover:bg-green-600"
                                        : ""
                                } rounded  ml-7`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {`Play ${props.video.type}`}
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
            <div className="px-16 py-3 text-white md:py-14">
                <h5 className="mb-2 text-2xl font-semibold md:text-4xl">
                    Overview
                </h5>
                <p className="text-xl font-normal md:w-3/4 md:text-3xl">
                    {props.overview}
                </p>
            </div>
        </div>
    );
}
