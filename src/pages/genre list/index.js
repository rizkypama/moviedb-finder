import React from "react";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import Genres from "../../Components/genres";
import RandomGenre from "../../Components/card list/random genre";

export default function GenreList() {
    return (
        <div className="min-h-screen bg-black -z-50 font-poppins">
            <Navbar></Navbar>
            <Genres></Genres>
            <RandomGenre></RandomGenre>
            <Footer></Footer>
        </div>
    );
}
