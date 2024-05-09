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
                    <FaStar key={index} className="text-yellow-500 text-xl" />
                ))}
            </div>
        );
    };
    return (
        <div className="bg-white w-[300px] h-[150px] p-1 rounded-t-lg shadow-md">
            <div className="flex item-center py-2 px-3 gap-5">
                <Avatar className="w-[60px] h-[60px]">
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
            <p className="p-2 px-5 mb-3 leading-5 text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing
            </p>
        </div>
    );
};

export default CardTestimony;
