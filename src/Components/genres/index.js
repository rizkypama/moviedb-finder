import React from "react";
import { useNavigate } from "react-router-dom";

export default function Genres() {
    let navigate = useNavigate();
    return (
        <div className="container flex flex-col gap-5 py-10 mx-auto text-center align-middle text-md">
            <h1 className="text-2xl font-semibold text-white lg:px-1 md:text-5xl sm:mb-5 md:mb-8">
                Find Movie with your favorite genre
            </h1>
            <div className="grid grid-cols-2 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4">
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="10759"
                    className="px-2 font-medium text-black transition duration-300 bg-purple-500 rounded cursor-pointer hover:bg-purple-600"
                >
                    Action & Adventure
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="10765"
                    className="px-2 font-medium text-black transition duration-300 rounded cursor-pointer bg-emerald-600 hover:bg-emerald-800"
                >
                    Sci-Fi & Fantasy
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="878"
                    className="px-2 font-medium text-black transition duration-300 rounded cursor-pointer bg-emerald-400 hover:bg-emerald-600"
                >
                    Science Fiction
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="10768"
                    className="px-2 font-medium text-black transition duration-300 bg-gray-600 rounded cursor-pointer hover:bg-gray-800"
                >
                    War & Politics
                </p>
            </div>
            <div className="grid grid-cols-2 gap-5 px-5 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="28"
                    className="px-2 font-medium text-black transition duration-300 bg-red-500 rounded cursor-pointer hover:bg-red-600"
                >
                    Action
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="12"
                    className="px-2 font-medium text-black transition duration-300 bg-teal-400 rounded cursor-pointer hover:bg-teal-600"
                >
                    Adventure
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="16"
                    className="px-2 font-medium text-black transition duration-300 bg-blue-400 rounded cursor-pointer hover:bg-blue-600"
                >
                    Animation
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="80"
                    className="px-2 font-medium text-black transition duration-300 bg-red-600 rounded cursor-pointer hover:bg-red-800"
                >
                    Crime
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="35"
                    className="px-2 font-medium text-black transition duration-300 bg-yellow-400 rounded cursor-pointer hover:bg-yellow-600"
                >
                    Comedy
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="18"
                    className="px-2 font-medium text-black transition duration-300 bg-green-400 rounded cursor-pointer hover:bg-green-600"
                >
                    Drama
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="99"
                    className="px-2 font-medium text-black transition duration-300 bg-white rounded cursor-pointer hover:bg-gray-400"
                >
                    Documentary
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="10751"
                    className="px-2 font-medium text-black transition duration-300 bg-orange-400 rounded cursor-pointer hover:bg-orange-600"
                >
                    Family
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="14"
                    className="px-2 font-medium text-black transition duration-300 rounded cursor-pointer bg-lime-400 hover:bg-lime-600"
                >
                    Fantasy
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="36"
                    className="px-2 font-medium text-black transition duration-300 rounded cursor-pointer bg-amber-400 hover:bg-amber-600"
                >
                    History
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="27"
                    className="px-2 font-medium text-black transition duration-300 bg-red-700 rounded cursor-pointer hover:bg-red-900"
                >
                    Horror
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="10762"
                    className="px-2 font-medium text-black transition duration-300 bg-orange-400 rounded cursor-pointer hover:bg-orange-600"
                >
                    Kids
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="10402"
                    className="px-2 font-medium text-black transition duration-300 bg-indigo-400 rounded cursor-pointer hover:bg-indigo-600"
                >
                    Music
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="9648"
                    className="px-2 font-medium text-black transition duration-300 bg-gray-600 rounded cursor-pointer hover:bg-gray-800"
                >
                    Mystery
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="10763"
                    className="px-2 font-medium text-black transition duration-300 bg-gray-600 rounded cursor-pointer hover:bg-gray-800"
                >
                    News
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="10764"
                    className="px-2 font-medium text-black transition duration-300 bg-gray-600 rounded cursor-pointer hover:bg-gray-800"
                >
                    Reality
                </p>

                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="10766"
                    className="px-2 font-medium text-black transition duration-300 bg-pink-400 rounded cursor-pointer hover:bg-pink-600"
                >
                    Soap
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="10749"
                    className="px-2 font-medium text-black transition duration-300 bg-pink-400 rounded cursor-pointer hover:bg-pink-600"
                >
                    Romance
                </p>

                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="10770"
                    className="px-2 font-medium text-black transition duration-300 bg-white rounded cursor-pointer hover:bg-gray-400"
                >
                    TV Movie
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="53"
                    className="px-2 font-medium text-black transition duration-300 bg-red-500 rounded cursor-pointer hover:bg-red-700"
                >
                    Thriller
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="10752"
                    className="px-2 font-medium text-black transition duration-300 bg-gray-600 rounded cursor-pointer hover:bg-gray-800"
                >
                    War
                </p>
                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="10767"
                    className="px-2 font-medium text-black transition duration-300 bg-yellow-600 rounded cursor-pointer hover:bg-yellow-800"
                >
                    Talk
                </p>

                <p
                    onClick={(e) => navigate(`/genre/${e.target.id}/page/1`)}
                    id="37"
                    className="px-2 font-medium text-black transition duration-300 bg-yellow-400 rounded cursor-pointer hover:bg-yellow-600"
                >
                    Western
                </p>
            </div>
        </div>
    );
}
