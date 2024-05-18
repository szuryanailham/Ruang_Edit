import { Link } from "@inertiajs/react";
import React from "react";

interface Materi {
    id: number;
    KD_bulan: number;
    kode_materi: string;
    judul: string;
    deskripsi: string;
    link_youtube: string;
    author: string;
}

interface Datatype {
    title: string;
    materi: Materi[];
}

const ListMateri: React.FC<Datatype> = ({ title, materi }) => {
    console.log(materi);
    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {materi.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={`/dashboard/detail-Materi/${item.kode_materi}`}
                        >
                            <h2>{item.judul}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListMateri;
