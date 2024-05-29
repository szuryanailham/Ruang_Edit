import React, { FC, ReactElement } from "react";
import { Card, CardContent, CardHeader } from "@/Components/shadcn/ui/card";
import { MdLocationOn } from "react-icons/md";
import { IoIosCalendar } from "react-icons/io";
type ChildProps = {
    image: string;
    title: string;
    description: string;
    date: Date;
    location: string;
};
const CardEvent: FC<ChildProps> = ({
    image,
    title,
    description,
    date,
    location,
}): ReactElement => {
    return (
        <Card className="md:w-[48%] lg:w-[30%] md:h-[20%] shadow-xl mb-3">
            <CardHeader>
                <div
                    style={{ backgroundImage: `url('${image}')` }}
                    className="w-full h-[200px] rounded-lg  bg-cover bg-no-repeat bg-center"
                ></div>
            </CardHeader>
            <CardContent>
                {/* title */}
                <h1 className="p-2 w-[90%] text-3xl font-bold text-wrap">
                    {title}
                </h1>
                {/* deskripsi */}
                <p className="px-2">{description}</p>
                {/* ICON */}

                <div className="p-2">
                    {/* date and time */}
                    <div className="flex flex-row gap-3 mt-3">
                        <IoIosCalendar className="text-2xl" />
                        <p className="italic">{date.toDateString()}</p>
                    </div>
                    {/* tempat */}
                    <div className="flex flex-row gap-3 mt-3">
                        <MdLocationOn className="text-2xl" />
                        <p className="italic">{location}</p>
                    </div>
                </div>
                {/* END ICON */}
            </CardContent>
        </Card>
    );
};

export default CardEvent;
