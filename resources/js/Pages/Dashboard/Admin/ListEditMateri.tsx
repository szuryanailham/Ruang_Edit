import Navbar from "@/Components/Dashboard/Navbar";
import { Link } from "@inertiajs/react";
import React from "react";

interface Month {
    id: number;
    nama_bulan: string;
}

interface Datatype {
    title: string;
    Months: Month[];
}

const ListEditMateri: React.FC<Datatype> = ({ title, Months }) => {
    return (
        <>
            <Navbar />
            <h1 className="text-2xl font-bold mb-4 text-center mt-3">
                {title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 sm:ml-64">
                {Months.map((item) => (
                    <Link
                        key={item.id}
                        href={`/dashboard/list-edit/materi/${item.nama_bulan}`}
                        className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h1>{item.nama_bulan}</h1>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default ListEditMateri;
