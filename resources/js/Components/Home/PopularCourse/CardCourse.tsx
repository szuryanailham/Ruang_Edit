import React from "react";
import { Card, CardContent, CardHeader } from "@/Components/shadcn/ui/card";
import { FaStar, FaBook } from "react-icons/fa";
import { Badge } from "@/Components/shadcn/ui/badge";
import { MdPerson } from "react-icons/md";

interface CardCourseProps {
    category: string;
    title: string;
    rating: number;
    course: number;
    member: number;
    image: string;
}

const CardCourse: React.FC<CardCourseProps> = ({
    category,
    title,
    rating,
    course,
    member,
    image,
}) => {
    return (
        <>
            <Card className="w-[280px] mb-5">
                <CardHeader
                    style={{ backgroundImage: `url('${image}')` }}
                    className="w-full bg-no-repeat h-[150px] bg-cover rounded-t-lg"
                ></CardHeader>
                <CardContent>
                    <div className="flex justify-between mt-3">
                        <Badge className="bg-BaseColor font-bold">
                            {category}
                        </Badge>
                        <Badge className="bg-BaseColor font-bold">
                            <FaStar />
                            <span className="p-1">{rating}</span>
                        </Badge>
                    </div>
                    <div>
                        <h1 className="leading-6.5 mt-2 mb-10 font-bold text-xl text-colorFont">
                            {title}
                        </h1>
                    </div>
                    <div className="flex justify-between mt-4 ">
                        {/* logo course */}
                        <div className="flex flex-row gap-2 items-center">
                            <FaBook />
                            <span className="text-sm">{course}+course</span>
                        </div>
                        {/* logo member */}
                        <div className="flex flex-row gap-2 items-center">
                            <MdPerson className="mt-1" />
                            <span className="text-sm">{member} Member</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    );
};

export default CardCourse;
