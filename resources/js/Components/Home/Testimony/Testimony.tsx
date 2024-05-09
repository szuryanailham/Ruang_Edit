import React, { FC, ReactElement } from "react";
import { TextTestiomony } from "./Text";
import Carousel from "./Carousel";
const Testimony: React.FC = () => {
    return (
        <div className="bg-BaseColor p-5 flex flex-col items-center ">
            <h1 className="text-3xl text-white font-bold text-center mt-5 w-[80%] mb-3 text">
                Member Testimony
            </h1>
            <p className="text-white text-center mt-2 text-wrap">
                {TextTestiomony()}
            </p>
            <div className="mt-7">
                <Carousel />
            </div>
        </div>
    );
};

export default Testimony;
