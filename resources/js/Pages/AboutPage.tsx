import GalleryAbout from "@/Components/About/GalleryAbout";
import { TextAbout } from "@/Components/About/TextAbout";
import YouTubeEmbed from "@/Components/About/YouTubeEmbed";
import Footer from "@/Components/Home/Footer/Footer";
import NavBox from "@/Components/Home/Nav/NavBox";
import React from "react";
const AboutPage: React.FC = () => {
    return (
        <>
            <NavBox />
            <div className="mt-2 h-fit flex flex-col w-full item-center p-3">
                {/* IMAGE PROFILE */}
                <YouTubeEmbed videoId="lJXaNYTVjrQ" />
                {/* END IMAGE PROFILE */}

                {/* TITLE */}
                <h1 className=" mx-auto w-[250px] text-center text-3xl font-bold text-colorFont mb-2 mt-2">
                    Quotes of <span className="text-BaseColor">Ruang Edit</span>
                </h1>
                {/* END TITLE */}
                {/* DESCRIPTION */}
                <div className="text-center w-[90%] mx-auto mt-2">
                    <p>
                        <TextAbout />
                    </p>

                    <p className="mt-3">
                        <TextAbout />
                    </p>
                </div>
                {/* END OF DESCRIPTION */}

                {/* GALLERY RAGIONAL  */}
                <div className="mt-2">
                    {/* TITLE */}
                    <h1 className=" mx-auto w-[280px] text-center text-3xl font-bold text-colorFont mb-2 mt-2">
                        Regional of{" "}
                        <span className="text-BaseColor">Ruang Edit</span>
                    </h1>
                    <p className="p-2 text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate repellat delectus ratione sapiente sequi,
                        laboriosam veniam est eum quam animi!
                    </p>
                    {/* END TITLE */}
                    <GalleryAbout />
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
