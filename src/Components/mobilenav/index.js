import React, { useEffect, useState, useRef } from "react";
import NavLink from "../atoms/navlink";
import { useNavigate } from "react-router-dom";

export default function MobileNav() {
    const menuRef = useRef(null);
    const [listening, setListening] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    let navigate = useNavigate();

    const home = () => {
        navigate("/");
        setShowDropDown(!showDropDown);
    };

    const upcoming = () => {
        navigate("/upcoming/page/1");
        setShowDropDown(!showDropDown);
    };

    const genre = () => {
        navigate("/genre");
        setShowDropDown(!showDropDown);
    };

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };

    const listenToScroll = () => {
        let heightToHideFrom = 30;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > heightToHideFrom) {
            setShowDropDown(false);
        } else {
            setShowDropDown(false);
        }
    };

    useEffect(() => {}, [showDropDown]);

    useEffect(() => {
        if (listening) return;
        if (!menuRef.current) return;
        setListening(true);
        [`click`, `touchstart`].forEach((type) => {
            document.addEventListener(`click`, (evt) => {
                const cur = menuRef.current;
                const node = evt.target;
                if (cur.contains(node)) return;
                setShowDropDown(false);
            });
        });
    }, [listening]);

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
    }, []);

    return (
        <div ref={menuRef} className={`order-last md:hidden`}>
            <button className="" onClick={toggleDropDown}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
            {showDropDown ? (
                <div className="fixed right-11 flex flex-col opacity-100 transition-all duration-300 items-center bg-three rounded px-1.5 py-3 gap-2 z-10">
                    <NavLink onClick={home}>Home</NavLink>
                    <NavLink onClick={upcoming}>Upcoming</NavLink>
                    <NavLink onClick={genre}>Genre</NavLink>
                </div>
            ) : (
                <div className="fixed invisible right-11 flex flex-col opacity-0 transition-all duration-300 items-center bg-three rounded px-1.5 py-3 gap-2 z-10">
                    <p className="px-2 text-2xl font-normal">Home</p>
                    <p className="px-2 text-2xl font-normal">Upcoming</p>
                    <p className="px-2 text-2xl font-normal">Genre</p>
                </div>
            )}
        </div>
    );
}
