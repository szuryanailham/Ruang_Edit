import Footer from "@/Components/Home/Footer/Footer";
import NavBox from "@/Components/Home/Nav/NavBox";
import React from "react";
import { User } from "@/types";

interface Props {
    user: User;
}
const DetailMentorPage: React.FC<Props> = ({ user }) => {
    console.log(user);
    return (
        <>
            <NavBox />
            <div className="mt-2 h-fit flex flex-col w-full item-center p-3">
                {/* TITLE */}
                <h1 className=" mx-auto w-[280px] text-center text-3xl font-bold text-colorFont mb-2 mt-2">
                    Mentor of <span className="text-BaseColor">Ruang Edit</span>
                </h1>

                {/* IMAGE */}
                <div
                    style={{
                        backgroundImage: `url('/img/Mentor/mentor_image.svg')`,
                    }}
                    className="w-[95%] h-[300px] mx-auto rounded-lg bg-cover bg-center mt-3"
                ></div>

                {/* NAME */}
                <div className="flex flex-col item-center leading-2">
                    <h1 className=" mx-auto w-[250px] text-center text-3xl font-bold text-colorFont mb-2 mt-2">
                        Mentor Name
                    </h1>
                    <span className=" text-center italic">
                        Photografer mentor
                    </span>
                </div>
                {/* DESKRIPSI */}
                <p className="p-3 text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quibusdam fuga consectetur perspiciatis tempora. Cum,
                </p>
                {/* SKILL */}
                <div className="mb-3">
                    {/* skill satu */}
                    <div className="p-3">
                        <h3 className="text-md mb-1 font-bold">Skill satu</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-BaseColor h-2.5 rounded-full"
                                style={{ width: "45%" }}
                            ></div>
                        </div>
                    </div>
                    {/* skill dua */}
                    <div className="p-3">
                        <h3 className="text-md mb-1 font-bold">Skill satu</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-BaseColor h-2.5 rounded-full"
                                style={{ width: "45%" }}
                            ></div>
                        </div>
                    </div>
                    {/* skill tiga */}
                    <div className="p-3">
                        <h3 className="text-md mb-1 font-bold">Skill satu</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                                className="bg-BaseColor h-2.5 rounded-full"
                                style={{ width: "45%" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DetailMentorPage;
