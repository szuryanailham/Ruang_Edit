import GalleryAbout from "@/Components/About/GalleryAbout";
import { TextAbout, TextAbout2 } from "@/Components/About/TextAbout";
import YouTubeEmbed from "@/Components/About/YouTubeEmbed";
import Footer from "@/Components/Home/Footer/Footer";
import NavBox from "@/Components/Home/Nav/NavBox";
import React from "react";
import { User } from "@/types";
import Meta from "@/Components/Meta";

interface AboutPageProps {
    user: User;
}
const AboutPage: React.FC<AboutPageProps> = ({ user }) => {
    return (
        <>
            <Meta
                title="AboutPage"
                description="Ruang Edit adalah platform pembelajaran editing online yang didedikasikan untuk membantu desainer grafis, fotografer, dan videografer meningkatkan keterampilan mereka. Pelajari lebih lanjut tentang misi kami, tim kami, dan bagaimana kami dapat membantu Anda menjadi ahli dalam bidang editing."
            />
            <NavBox />
            <div className=" mt-[20%] md:mt-[10%] h-fit flex flex-col w-full item-center p-3">
                {/* IMAGE PROFILE */}
                <YouTubeEmbed videoId="65bXrcEoCiY" />
                {/* END IMAGE PROFILE */}

                {/* TITLE */}
                <h1 className=" mx-auto w-[250px] md:w-[350px] text-center text-3xl md:text-4xl font-bold text-colorFont mb-2 mt-3">
                    Quotes of <span className="text-BaseColor">Ruang Edit</span>
                </h1>
                {/* END TITLE */}
                {/* DESCRIPTION */}
                <div className="text-center md:text-md w-[85%] mx-auto mt-4 md:mt-7 flex flex-col md:flex-row">
                    <p className="mb-5 md:text-center px-2 md:px-5 max-w-prose">
                        <TextAbout />
                    </p>
                    <p className="mb-5 md:text-center px-2 md:px-5 max-w-prose">
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
                        Temukan Komunitas Ruang Edit di berbagai wilayah sekitar
                        Anda. Setiap komunitas regional kami menyelenggarakan
                        beragam kegiatan, workshop, dan acara yang disesuaikan
                        dengan kebutuhan dan minat lokal. Bergabunglah dengan
                        komunitas terdekat Anda dan temukan teman-teman baru
                        yang memiliki semangat kreatif yang sama
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
