import React from "react";

export default function Card(props) {
    return (
        <div
            onClick={props.onClick}
            id={props.id}
            className="flex flex-col items-start justify-center w-24 pb-5 overflow-hidden transition duration-300 rounded cursor-pointer bg-one hover:bg-two hover:opacity-70 text-ellipsis h-44 sm:w-32 sm:h-60 md:w-44 md:h-72 xl:w-48 xl:h-80 sm:pb-10"
        >
            {props.image ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500/${props.image}`}
                    alt={props.title}
                    id={props.id}
                    className="transition duration-300 h-36 sm:h-72 md:h-64 lg:h-72 w-full"
                />
            ) : (
                <div
                    id={props.id}
                    className="py-7 px-2 sm:py-20 md:px-10 md:py-24 md:text-xl bg-two"
                >
                    No Available Images
                </div>
            )}
            <div id={props.id} className="px-3 py-2">
                <h5
                    id={props.id}
                    className="overflow-hidden text-sm text-white md:text-lg whitespace-nowrap text-ellipsis max-w-mini md:max-w-readable"
                >
                    {props.title}
                </h5>
                <div id={props.id} className="flex">
                    <p
                        id={props.id}
                        className={`px-1 mr-1 text-xs text-white ${
                            props.vote > 7
                                ? "bg-green-500"
                                : props.vote >= 6
                                ? "bg-yellow-500"
                                : props.vote >= 1
                                ? "bg-red-500"
                                : "bg-gray-700"
                        } rounded sm:text-sm sm:mr-2`}
                    >
                        {props.vote === 0 ? "NA" : props.vote}
                    </p>
                    <p
                        id={props.id}
                        className="px-1 text-xs max-w-superMini overflow-hidden whitespace-nowrap text-ellipsis text-white sm:text-sm"
                    >
                        {props.year === "unknown"
                            ? "unknown"
                            : props.year.substring(0, 4)}
                    </p>
                </div>
            </div>
        </div>
    );
}
