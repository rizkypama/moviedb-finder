import React from "react";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import UpcomingCard from "../../Components/card list/upcoming card";

export default function Upcoming() {
    return (
        <div className="min-h-screen bg-black -z-50 font-poppins">
            <Navbar></Navbar>
            <UpcomingCard></UpcomingCard>
            <Footer></Footer>
        </div>
    );
}
