import CardEvent from "@/Components/Event/CardEvent";
import CarouselEvents from "@/Components/Event/CarouselEvents";
import { TextEvents } from "@/Components/Event/TextEvents";
import Footer from "@/Components/Home/Footer/Footer";
import NavBox from "@/Components/Home/Nav/NavBox";
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
                <div className="flex flex-col md:flex-row md:mt-5 md:p-5">
                    <div className="md:w-1/2 lg:[60%]">
                        <CarouselEvents />
                    </div>
                    <div className="md:w-[50%] lg:w-[40%] md:p-5">
                        <p className="p-5 md:p-0">
                            <TextEvents />
                        </p>
                    </div>
                </div>

                {/* END CAROUSEL */}

                {/* card Events */}
                <div className="text-center">
                    <h1 className="mx-auto w-[250px] text-3xl font-bold mt-3 text-BaseColor">
                        New Event
                    </h1>
                    <p className="text-colorfont italic">will comming soon</p>
                </div>
                <div className="flex flex-col flex-wrap md:flex-row gap-5 p-4 md:p-10 md:px-10 mx-auto item-center">
                    <CardEvent
                        date={new Date(2024, 0, 22)}
                        location="Yogyakarta,Indonesia"
                        image="/img/mentor-dummy.svg"
                        description={
                            "       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempora assumenda. Libero ipsa corporis id magnam illo quibusdam, repudiandae minima."
                        }
                        title="Event of ruang Edit"
                    />
                    <CardEvent
                        date={new Date(2024, 0, 22)}
                        location="Yogyakarta,Indonesia"
                        image="/img/mentor-dummy.svg"
                        description={
                            "       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempora assumenda. Libero ipsa corporis id magnam illo quibusdam, repudiandae minima."
                        }
                        title="Event of ruang Edit"
                    />
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
