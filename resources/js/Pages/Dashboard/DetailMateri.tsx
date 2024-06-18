import YouTubeEmbed from "@/Components/About/YouTubeEmbed";
import Navbar from "@/Components/Dashboard/Navbar";
import MetaDashboard from "@/Components/MetaDashboard";

import React from "react";
interface Materi {
    id: number;
    judul: string;
    deskripsi: string;
    kode_youtube: string;
    author: string;
}

interface Datatype {
    title: string;
    Detail_materi: Materi[];
}

const DetailMateri: React.FC<Datatype> = ({ title, Detail_materi }) => {
    return (
        <>
            <MetaDashboard />
            <div className="p-4 sm:ml-64">
                <Navbar />
                <h1 className="text-center font-bold text-2xl mt-5">
                    Detail Materi
                </h1>
                <div className="p-2 mt-3">
                    {Detail_materi.map((item, index) => {
                        return (
                            <div key={index}>
                                {/* Youtube video */}
                                <YouTubeEmbed videoId={item.kode_youtube} />
                                {/* Judul Materi */}
                                <h1 className="text-xl text-wrap text-center mt-3 font-bold">
                                    {item.judul}
                                </h1>

                                {/* Deskripsi video */}
                                <p className="p-2 text-center">
                                    {item.deskripsi}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default DetailMateri;
