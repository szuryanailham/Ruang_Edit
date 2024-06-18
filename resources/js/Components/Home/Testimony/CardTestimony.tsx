import React from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/Components/shadcn/ui/avatar";
import { FaStar } from "react-icons/fa6";

interface CardTestimonyProps {
    name: string;
    comment: string;
}

const CardTestimony: React.FC<CardTestimonyProps> = ({ name, comment }) => {
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
        <div className="bg-white w-[300px] md:w-[500px] lg:w-[350px] h-fit md:h-[220px] lh:h-[200px] p-1 rounded-lg shadow-md">
            <div className="flex item-center py-2 px-3 gap-5 md:gap-7">
                <Avatar className="w-[60px] md:w-[70px] lg:w-[50px] h-[60px] md:h-[70px] lg:h-[50px]">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {/* name and rating */}
                <div>
                    {/* Nama  */}
                    <h1 className="text-xl font-bold">{name}</h1>
                    {/* Rating */}
                    <div className="mt-2">{stars()}</div>
                </div>
                {/* comment */}
            </div>
            <p className=" px-3 mb-3  text-center text-xs md:text-xl lg:text-sm md:px-10 lg:mt-5 max-w-prose leading-4 md:leading-5">
                {comment}
            </p>
        </div>
    );
};

export default CardTestimony;
