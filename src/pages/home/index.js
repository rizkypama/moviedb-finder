import React from "react";
import Navbar from "../../Components/navbar";
import Hero from "../../Components/hero";
import Footer from "../../Components/footer";
import TrendingMovies from "../../Components/card list/Trending Card";

export default function Home() {
    return (
        <div className="min-h-screen bg-black -z-50 font-poppins">
            <Navbar></Navbar>
            <Hero></Hero>
            <TrendingMovies></TrendingMovies>
            <Footer></Footer>
        </div>
    );
}
