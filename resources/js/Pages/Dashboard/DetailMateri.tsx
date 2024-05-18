import React from "react";

interface Materi {
    id: number;
    judul: string;
    deskripsi: string;
    link_youtube: string;
    author: string;
}

interface Datatype {
    title: string;
    Detail_materi: Materi[];
}

const DetailMateri: React.FC<Datatype> = ({ title, Detail_materi }) => {
    return (
        <>
            {Detail_materi.map((item, index) => {
                return (
                    <div key={index}>
                        {/* Isi elemen div di sini */}
                        <h1>{item.id}</h1>
                        <h1>{item.judul}</h1>
                        <h1>{item.deskripsi}</h1>
                        <h1>{item.link_youtube}</h1>
                    </div>
                );
            })}
            <h1>{title}</h1>
        </>
    );
};

export default DetailMateri;
