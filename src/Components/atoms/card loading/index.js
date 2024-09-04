import React from "react";

export default function CardLoading() {
    return (
        <div className="bg-one flex flex-col rounded overflow-hidden  items-start justify-center w-24 h-44 px-0 sm:w-32 sm:h-60 md:w-44 md:h-72 xl:w-48 xl:h-80 py-0 sm:py-0">
            <div className="animate-pulse w-full h-full">
                <div className="bg-two w-full h-2/3 xl:h-56 rounded px-1 py-1"></div>
                <div className="px-4 py-6 w-full">
                    <div className="bg-two rounded w-full mb-4 h-5 px-2 py-1"></div>
                    <div className="bg-two rounded w-full h-5 divx-2 py-1"></div>
                </div>
            </div>
        </div>
    );
}
