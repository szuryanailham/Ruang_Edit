import React, { useEffect } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import Navbar from "@/Components/Dashboard/Navbar";
import { Button } from "@/Components/shadcn/ui/button";
import { IoTrash } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import MetaDashboard from "@/Components/MetaDashboard";

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

const ListEditMateri: React.FC<Datatype> = ({ title, materi, pagination }) => {
    const { delete: destroy } = useForm();
    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this item?")) {
            destroy(route("admin.edit-materi.destroy", { edit_materi: id }), {
                onSuccess: () => {
                    alert("materi has been deleted");
                },
                onError: () => {
                    alert("materi failed to delete");
                },
            });
        }
    };

    return (
        <>
            <MetaDashboard />
            <Navbar />

            <div className="w-full flex justify-end px-5 py-3">
                <Link href="/admin/edit-materi/create">
                    <Button className="w-20 h-10 bg-BaseColor">Tambah</Button>
                </Link>
            </div>
            <div className="md:ml-[250px]">
                <h1 className="text-2xl font-bold text-center m-5">{title}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 px-4">
                    {materi.map((item) => (
                        <div
                            key={item.id}
                            className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full"
                        >
                            <h2 className="text-xl font-semibold">
                                {item.judul}
                            </h2>
                            <Link
                                href={`/dashboard/detail-Materi/${item.kode_materi}`}
                            >
                                <h3> see Detail</h3>
                            </Link>
                            <div className="gap-5 flex justify-between mt-10">
                                <Link
                                    href={`/admin/edit-materi/${item.id}/edit`}
                                >
                                    <FaEdit className="text-2xl text-yellow-400" />
                                </Link>
                                <Button
                                    onClick={() => handleDelete(item.id)}
                                    className="bg-transparent hover:bg-transparent"
                                >
                                    <IoTrash className="text-2xl text-red-600" />
                                </Button>
                            </div>
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

export default ListEditMateri;
