import React from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/Components/shadcn/ui/avatar";
import { FaStar } from "react-icons/fa6";

const CardTestimony: React.FC = () => {
    const stars = () => {
        const array = [...Array(5)];
        return (
            <div className="flex">
                {array.map((_, index) => (
                    <FaStar
                        key={index}
                        className="text-yellow-500 text-xl md:text-2xl"
                    />
                ))}
            </div>
        );
    };
    return (
        <div className="bg-white w-[300px] md:w-[500px] lg:w-[350px] h-[150px] md:h-[220px] lh:h-[200px] p-1 rounded-lg shadow-md">
            <div className="flex item-center py-2 px-3 gap-5 md:gap-7">
                <Avatar className="w-[60px] md:w-[70px] lg:w-[40px] h-[60px] md:h-[70px] lg:h-[40px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {/* name and rating */}
                <div>
                    {/* Nama  */}
                    <h1 className="text-xl font-bold">Ilham Suryana</h1>
                    {/* Rating */}
                    <div className="mt-2">{stars()}</div>
                </div>
                {/* comment */}
            </div>
            <p className=" px-3 mb-3 leading-5 text-center text-xs md:text-xl lg:text-sm md:px-10 lg:mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                ipsa fugit! Placeat aperiam
            </p>
        </div>
    );
};

export default CardTestimony;
