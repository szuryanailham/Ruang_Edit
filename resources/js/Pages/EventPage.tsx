import CardEvent from "@/Components/Event/CardEvent";
import CarouselEvents from "@/Components/Event/CarouselEvents";
import { TextEvents } from "@/Components/Event/TextEvents";
import Footer from "@/Components/Home/Footer/Footer";
import NavBox from "@/Components/Home/Nav/NavBox";
import { Card, CardContent } from "@/Components/shadcn/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/shadcn/ui/carousel";
import React from "react";
import { User } from "@/types";

interface Props {
    user: User;
}
const EventPage: React.FC<Props> = ({ user }) => {
    return (
        <>
            <NavBox />
            <section className="mt-2 h-fit flex flex-col w-full item-center">
                {/* TITLE */}
                <h1 className=" mx-auto w-[250px] text-center text-3xl font-bold text-colorFont  mb-5">
                    Top Event of{" "}
                    <span className="text-BaseColor">Ruang Edit</span>
                </h1>
                {/* END TITLE  */}

                {/* CAROUSEL  */}
                <div>
                    <CarouselEvents />
                    <p className="p-3 text-center">
                        <TextEvents />
                    </p>
                </div>
                {/* END CAROUSEL */}

                {/* card Events */}
                <div className="text-center">
                    <h1 className="mx-auto w-[250px] text-3xl font-bold mt-3 text-BaseColor">
                        New Event
                    </h1>
                    <p className="text-colorfont italic">will comming soon</p>
                </div>
                <div className=" p-4">
                    <CardEvent
                        date={new Date(2024, 0, 22)}
                        location="Yogyakarta,Indonesia"
                        image="/img/mentor-dummy.svg"
                        description={
                            "       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempora assumenda. Libero ipsa corporis id magnam illo quibusdam, repudiandae minima."
                        }
                        title="Event of ruang Edit"
                    />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default EventPage;
