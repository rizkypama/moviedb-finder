import React from "react";

export default function MovieLoading() {
    return (
        <div className="flex flex-col min-h-screen bg-one">
            <div className="w-full bg-two h-72 md:h-100 animate-pulse"></div>
            <div className="relative flex flex-col items-center px-16 -mt-36 md:-mt-24 md:items-end md:flex-row">
                <div className="px-1 py-1 rounded w-72 md:w-48 h-96 md:h-56 bg-two animate-pulse"></div>
                <div className="flex flex-col px-0 py-10 md:px-10 animate-pulse">
                    <div className="h-10 mb-6 bg-two w-80"></div>
                    <div className="bg-two h-7 w-80"></div>
                </div>
            </div>
            <div className="px-9 md:px-16 md:py-14 animate-pulse">
                <div className="h-10 mb-6 md:w-80 bg-two"></div>
                <div className="w-full h-40 bg-two"></div>
            </div>
        </div>
    );
}
