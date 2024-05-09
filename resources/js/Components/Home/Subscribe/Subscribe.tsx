import React from "react";
import { TextSubscribe } from "./TextSubcribe";
import { InputSubscribe } from "./InputSubscribe";
const Subscribe: React.FC = () => {
    return (
        <section className="w-full h-fit mt-5 p-3 flex flex-wrap item-center">
            <div className="w-full h-fit bg-BaseColor p-5 rounded-lg shadow-md">
                <h1 className="text-3xl text-white font-bold text-center p-2 mb-2">
                    Join membership and Learn it everywhere
                </h1>
                <p className="text-center text-white px-3">{TextSubscribe()}</p>
                <div className="mt-7 mb-2">
                    <InputSubscribe />
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
