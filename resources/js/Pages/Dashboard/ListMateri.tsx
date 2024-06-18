import Navbar from "@/Components/Dashboard/Navbar";
import MetaDashboard from "@/Components/MetaDashboard";
import { Link, usePage } from "@inertiajs/react";
import React from "react";
interface Materi {
    id: number;
    KD_bulan: number;
    kode_materi: string;
    judul: string;
    deskripsi: string;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginationData {
    data: Materi[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
    current_page: number;
}

interface Datatype {
    title: string;
    materi: Materi[];
    pagination: PaginationData;
}

const ListMateri: React.FC<Datatype> = ({ title, materi, pagination }) => {
    return (
        <>
            <MetaDashboard />
            <div className="p-4 sm:ml-64">
                <Navbar />
                <h1 className="text-2xl font-bold mb-4 text-center mt-10">
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
                                <p className="text-gray-700">
                                    {item.deskripsi}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
                {materi.length !== 0 ? (
                    <div className="w-full flex items-center mt-10">
                        <div className="pagination mx-auto">
                            {pagination.links.map((data, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={data.url || ""}
                                        className={`px-3 py-1 hover:bg-BaseColor text-white-700 rounded-md ${
                                            data.active ? "bg-BaseColor" : ""
                                        }`}
                                    >
                                        {data.label === "&laquo; Previous"
                                            ? "«"
                                            : data.label === "Next &raquo;"
                                            ? "»"
                                            : data.label}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div>
                        <img
                            className="md:w-1/2 mx-auto"
                            src="/img/empty.jpg"
                            alt="Error animation"
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default ListMateri;
