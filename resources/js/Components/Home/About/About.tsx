import React from "react";
import { text_about } from "./Text";
const About: React.FC = () => {
    const paragraphs = text_about();
    return (
        <div className=" mt-3 h-fit w-full p-3 flex flex-col items-center">
            {/* Image */}
            <div className="w-[85%] bg-[url('/img/image_about.svg')] h-[221px] rounded-lg bg-cover "></div>
            {/* text */}
            <h1 className="text-4xl text-colorFont font-bold text-center mt-5 w-[80%] mb-3">
                What is <span className="text-BaseColor">Ruang Edit ?</span>
            </h1>
            <p className="p-3 text-center">{paragraphs[0]}</p>
            <p className="p-3 text-center">{paragraphs[1]}</p>
        </div>
    );
};

export default About;
