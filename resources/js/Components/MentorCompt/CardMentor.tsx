import React from "react";
import { Card, CardContent, CardHeader } from "@/Components/shadcn/ui/card";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Badge } from "@/Components/shadcn/ui/badge";
import { Link } from "@inertiajs/react";
const CardMentor: React.FC = () => {
    return (
        <Link href="/detailMentor">
            <Card className="w-full md:w-[330px] lg:w-[280px] mb-5">
                <CardHeader>
                    <div
                        style={{
                            backgroundImage: `url('/img/mentor-dummy.svg')`,
                        }}
                        className="w-full h-[180px] rounded-lg  bg-cover bg-no-repeat bg-center"
                    ></div>
                </CardHeader>
                <CardContent>
                    <h1 className="text-2xl font-bold mb-2">Mentor Name</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi ratione saepe repellat libero dolore
                        asperiores ex
                    </p>
                    <div className="flex items-center justify-between mt-3">
                        <Badge
                            className="bg-BaseColor text-white h-7 mt-3 text-sm p-4"
                            variant="outline"
                        >
                            photografer
                        </Badge>
                        {/* profile arrow */}
                        <FaSquareArrowUpRight className="text-3xl text-BaseColor mt-3" />
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};

export default CardMentor;
