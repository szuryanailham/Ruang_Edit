import React from "react";
import { TextSubscribe } from "./TextSubcribe";
import { InputSubscribe } from "./InputSubscribe";
import { motion } from "framer-motion";
const Subscribe: React.FC = () => {
    return (
        <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
                ease: "linear",
                duration: 1,
                y: { duration: 1 },
            }}
            className="w-full h-fit mt-5 p-3 md:p-10 flex flex-wrap item-center"
        >
            <div className="w-full h-fit bg-BaseColor p-5 md:p-10 rounded-xl shadow-md md:full">
                <h1 className="text-3xl md:text-4xl md:w-[70%] lg:w-[45%] text-white font-bold text-center p-2 mb-2 md:mb-4 mx-auto">
                    Subscribe and Connect with us
                </h1>
                <p className="text-center md:mb-7 md:w-[80%] lg:w-[60%] text-white px-3 mx-auto text-sm md:text-xl">
                    {TextSubscribe()}
                </p>
                <div className="mt-7 mb-5 md:w-full md:mx-auto">
                    <InputSubscribe />
                </div>
            </div>
        </motion.section>
    );
};

export default Subscribe;
