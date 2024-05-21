import Navbar from "@/Components/Dashboard/Navbar";
import { Link } from "@inertiajs/react";
import React from "react";

interface Materi {
    id: number;
    KD_bulan: number;
    kode_materi: string;
    judul: string;
    deskripsi: string;
}

interface Datatype {
    title: string;
    materi: Materi[];
}

const ListMateri: React.FC<Datatype> = ({ title, materi }) => {
    return (
        <div className="p-4 sm:ml-64">
            <Navbar />
            <h1 className="text-2xl font-bold mb-4 text-center mt-3">
                {title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {materi.map((item, index) => (
                    <div
                        key={index}
                        className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <Link
                            href={`/dashboard/detail-Materi/${item.kode_materi}`}
                            className="no-underline"
                        >
                            <h2 className="text-xl font-semibold mb-2 text-black">
                                {item.judul}
                            </h2>
                            <p className="text-gray-700">{item.deskripsi}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListMateri;
