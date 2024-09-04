import React from "react";
import Navbar from "../../Components/navbar";
import GenreCard from "../../Components/card list/genre card";
import Footer from "../../Components/footer";

export default function Genre() {
    return (
        <div className="min-h-screen bg-black -z-50 font-poppins">
            <Navbar></Navbar>
            <GenreCard></GenreCard>
            <Footer></Footer>
        </div>
    );
}
