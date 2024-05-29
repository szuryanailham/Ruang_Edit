import React from "react";
import { Card, CardContent, CardHeader } from "@/Components/shadcn/ui/card";
import { FaStar, FaBook } from "react-icons/fa";
import { Badge } from "@/Components/shadcn/ui/badge";
import { MdPerson } from "react-icons/md";
import { Link } from "@inertiajs/react";

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
        <Link href="/detailCourse">
            <Card className="w-[280px] md:w-[250px] lg:w-[250px] mb-5">
                <CardHeader
                    style={{ backgroundImage: `url('${image}')` }}
                    className="w-full bg-no-repeat h-[150px] md:h-[170px] bg-cover rounded-t-lg"
                ></CardHeader>
                <CardContent>
                    <div className="flex justify-between mt-3 md:mb-3">
                        <Badge className="bg-BaseColor font-bold md:px-3">
                            {category}
                        </Badge>
                        <Badge className="bg-BaseColor font-bold md:px-3">
                            <FaStar />
                            <span className="p-1">{rating}</span>
                        </Badge>
                    </div>
                    <div>
                        <h1 className="leading-6.5 mt-2 mb-10 md:mb-3 font-bold  md:text-md text-xl text-colorFont">
                            {title}
                        </h1>
                    </div>
                    <div className="flex justify-between mt-4">
                        {/* logo course */}
                        <div className="flex flex-row gap-2 items-center md:text-xl">
                            <FaBook />
                            <span className="text-sm md:text-md">
                                {course}+course
                            </span>
                        </div>
                        {/* logo member */}
                        <div className="flex flex-row gap-2 items-center md:text-2xl">
                            <MdPerson className="mt-1" />
                            <span className="text-sm md:text-md">
                                {member} Member
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};

export default CardCourse;
