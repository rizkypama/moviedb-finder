import React from "react";

export default function Navlink({ children, ...props }) {
    return (
        <button
            {...props}
            className="text-2xl px-2 font-normal focus:border-b-2 focus:-mb-0.5 hover:cursor-pointer"
        >
            {children}
        </button>
    );
}
