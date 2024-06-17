import GalleryAbout from "@/Components/About/GalleryAbout";
import { TextAbout, TextAbout2 } from "@/Components/About/TextAbout";
import YouTubeEmbed from "@/Components/About/YouTubeEmbed";
import Footer from "@/Components/Home/Footer/Footer";
import NavBox from "@/Components/Home/Nav/NavBox";
import React from "react";
import { User } from "@/types";

interface AboutPageProps {
    user: User;
}
const AboutPage: React.FC<AboutPageProps> = ({ user }) => {
    return (
        <>
            <NavBox />
            <div className="mt-2 h-fit flex flex-col w-full item-center p-3">
                {/* IMAGE PROFILE */}
                <YouTubeEmbed videoId="65bXrcEoCiY" />
                {/* END IMAGE PROFILE */}

                {/* TITLE */}
                <h1 className=" mx-auto w-[250px] md:w-[350px] text-center text-3xl md:text-4xl font-bold text-colorFont mb-2 mt-3">
                    Quotes of <span className="text-BaseColor">Ruang Edit</span>
                </h1>
                {/* END TITLE */}
                {/* DESCRIPTION */}
                <div className="text-center md:text-md w-[85%] mx-auto mt-2 md:mt-3 flex flex-col md:flex-row">
                    <p className="mb-5 md:text-left px-2 md:px-4">
                        <TextAbout />
                    </p>
                    <p className="md:text-right md:px-4">
                        <TextAbout2 />
                    </p>
                </div>
                {/* END OF DESCRIPTION */}

                {/* GALLERY RAGIONAL  */}
                <div className="mt-2">
                    {/* TITLE */}
                    <h1 className=" mx-auto w-[280px] md:w-[350px] text-3xl md:text-4xl  text-center font-bold text-colorFont mb-2 mt-2 md:mt-5">
                        Regional of{" "}
                        <span className="text-BaseColor">Ruang Edit</span>
                    </h1>
                    <p className="p-2 text-center md:text-md w-[85%] mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate repellat delectus ratione sapiente sequi,
                        laboriosam veniam est eum quam animi!
                    </p>
                    {/* END TITLE */}
                    <div className="m-10">
                        <GalleryAbout />
                    </div>
                </div>
                {/* END GALLERY RAGIONAL */}
            </div>{" "}
            {/* FOOTER */}
            <Footer />
            {/* END OF FOOTER */}
        </>
    );
};

export default AboutPage;
