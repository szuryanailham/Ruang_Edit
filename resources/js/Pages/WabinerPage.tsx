import Footer from "@/Components/Home/Footer/Footer";
import NavBox from "@/Components/Home/Nav/NavBox";
import CardWabiner from "@/Components/Wabiner/CardWabiner";
import InputWabiner from "@/Components/Wabiner/InputWabiner";
import React from "react";
const WabinerPage: React.FC = () => {
    return (
        <>
            <NavBox />
            <div className=" h-fit w-full p-5 mb-[150px]">
                <InputWabiner />
                <div className="flex flex-wrap flex-col md:flex-row mt-2 md:mt-10 gap-4 lg:px-5">
                    <CardWabiner
                        date={new Date(2024, 0, 22)}
                        link="https://ruangedit.com/"
                        image="/img/mentor-dummy.svg"
                        description={
                            "       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempora assumenda. Libero ipsa corporis id magnam illo quibusdam, repudiandae minima."
                        }
                        title="Wabiner of ruang Edit"
                    />
                    <CardWabiner
                        date={new Date(2024, 0, 22)}
                        link="https://ruangedit.com/"
                        image="/img/mentor-dummy.svg"
                        description={
                            "       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempora assumenda. Libero ipsa corporis id magnam illo quibusdam, repudiandae minima."
                        }
                        title="Wabiner of ruang Edit"
                    />
                    <CardWabiner
                        date={new Date(2024, 0, 22)}
                        link="https://ruangedit.com/"
                        image="/img/mentor-dummy.svg"
                        description={
                            "       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempora assumenda. Libero ipsa corporis id magnam illo quibusdam, repudiandae minima."
                        }
                        title="Wabiner of ruang Edit"
                    />
                    <CardWabiner
                        date={new Date(2024, 0, 22)}
                        link="https://ruangedit.com/"
                        image="/img/mentor-dummy.svg"
                        description={
                            "       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tempora assumenda. Libero ipsa corporis id magnam illo quibusdam, repudiandae minima."
                        }
                        title="Wabiner of ruang Edit"
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default WabinerPage;
