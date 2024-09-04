import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navlink from "../atoms/navlink";
import MobileNav from "../mobilenav";

export default function Navbar() {
    let navigate = useNavigate();
    const [data, setData] = useState("");

    const changeHandle = (e) => {
        setData(e.target.value);
        e.target.addEventListener("keypress", (e) => {
            if (e.keyCode === 13) {
                document.getElementById("search").click();
            }
        });
    };

    const home = () => {
        navigate("/");
    };

    const search = () => {
        if (data !== "") {
            navigate(`/search/${data}/page/1`);
            setData("");
        }
    };

    const upcoming = () => {
        navigate("/upcoming/page/1");
    };

    const genre = () => {
        navigate("/genre");
    };

    return (
        <nav className="w-full h-20 antialiased text-white shadow bg-one">
            <div className="container flex items-center justify-between h-full px-6 mx-auto lg:px-0">
                <h3 className="order-1 hidden text-2xl font-semibold sm:block">
                    Movie Finder
                </h3>
                <div className="hidden lg:gap-5 sm:order-last row md:flex">
                    <Navlink onClick={home}>Home</Navlink>
                    <Navlink onClick={upcoming}>Upcoming</Navlink>
                    <Navlink onClick={genre}>Genre</Navlink>
                </div>
                <div className="relative order-3">
                    <div class="hidden md:block absolute top-2.5 left-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="z-20 text-gray-400 hover:text-gray-500"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        className="z-0 w-1/2 px-2 py-2 bg-gray-500 rounded-lg shadow lg:w-3/4 md:px-10 focus:outline-none focus:ring focus:ring-sky-900/60"
                        placeholder="Search Movie"
                        onChange={(e) => changeHandle(e)}
                        value={data}
                    />
                    <div class="absolute top-0 left-fiftyfive lg:left-eight">
                        <button
                            onClick={search}
                            id="search"
                            class="px-2 py-2 transition duration-300 text-white rounded-lg bg-three hover:bg-two focus:ring focus:ring-sky-900/60"
                        >
                            Search
                        </button>
                    </div>
                </div>
                <MobileNav></MobileNav>
            </div>
        </nav>
    );
}
