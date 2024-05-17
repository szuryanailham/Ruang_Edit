import React from "react";
import { TextSubscribe } from "./TextSubcribe";
import { InputSubscribe } from "./InputSubscribe";
const Subscribe: React.FC = () => {
    return (
        <section className="w-full h-fit mt-5 p-3 md:p-10 flex flex-wrap item-center">
            <div className="w-full h-fit bg-BaseColor p-5 md:p-10 rounded-xl shadow-md md:full">
                <h1 className="text-3xl md:text-4xl md:w-[70%] lg:w-[45%] text-white font-bold text-center p-2 mb-2 md:mb-4 mx-auto">
                    Join membership and Learn it everywhere
                </h1>
                <p className="text-center md:mb-7 md:w-[80%] lg:w-[60%] text-white px-3 mx-auto text-xs md:text-xl ">
                    {TextSubscribe()}
                </p>
                <div className="mt-7 mb-5 md:w-full md:mx-auto">
                    <InputSubscribe />
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
