import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
    return (
        <footer className="w-full mt-10 h-52 bg-one">
            <div className="container flex flex-col items-center justify-center h-full mx-auto bg-one">
                <div className="py-3">
                    <SocialIcon
                        bgColor="white"
                        style={{ height: "30px", width: "30px" }}
                        url="https://github.com/rizkypama/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="mx-3"
                    />
                    <SocialIcon
                        bgColor="white"
                        style={{ height: "30px", width: "30px" }}
                        url="https://codepen.io/Rizkiyan-Tri-Ade-Pama"
                        target={"_blank"}
                        rel="noreferrer"
                        className="mx-3"
                    />
                    <SocialIcon
                        bgColor="white"
                        style={{ height: "30px", width: "30px" }}
                        url="https://www.instagram.com/rizky_pama/"
                        target={"_blank"}
                        rel="noreferrer"
                        className="mx-3"
                    />
                </div>
                <h5 className="mb-3 text-xl text-white md:mb-5">
                    Rizkiyan Tri Ade Pama @ 2024
                </h5>
                <div className="w-full h-0.5 bg-white mb-2"></div>
                <p className="mb-2 text-white">
                    Powered By{" "}
                    <a
                        href="https://www.themoviedb.org"
                        className="border-b-2"
                        target="_blank"
                        rel="noreferrer"
                    >
                        TMDB{" "}
                    </a>
                </p>
                <p className="text-white text-center">
                    Icon vector created by love and coffe -{" "}
                    <a href="https://www.freepik.com/vectors/icon">
                        www.freepik.com
                    </a>
                </p>
            </div>
        </footer>
    );
}
