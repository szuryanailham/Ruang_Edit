import Navbar from "@/Components/Dashboard/Navbar";
import { Link, usePage } from "@inertiajs/react";
import React from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/shadcn/ui/pagination";

interface Materi {
    id: number;
    KD_bulan: number;
    kode_materi: string;
    judul: string;
    deskripsi: string;
}

interface PaginationData {
    data: Materi[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: [url: string | null, label: string, active: boolean];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
    current_page: number;
}

interface Datatype {
    current_page: string;
    title: string;
    materi: Materi[];
    Links: PaginationData;
    paginator: PaginationData[];
}

const ListMateri: React.FC<Datatype> = ({
    title,
    materi,
    Links,
    paginator,
}) => {
    const page = Links.links;
    const activeLink = page.find((link: any) => link.active === true);
    const linksArray = Object.values(paginator[0]);
    const url = activeLink ? activeLink.url : "";
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
            <Pagination>
                <PaginationContent>
                    {/* previous */}
                    <PaginationItem>
                        <PaginationPrevious href={Links.prev_page_url || ""} />
                    </PaginationItem>
                    {/* numbrt */}
                    <Pagination>
                        <PaginationContent>
                            {linksArray.map((item: string, index: number) => (
                                <PaginationItem key={index}>
                                    <PaginationLink
                                        href={item}
                                        className={`px-3 py-1 hover:bg-black hover:text-white text-white-700 rounded-md ${
                                            item === url
                                                ? "bg-black text-white"
                                                : "bg-transparent"
                                        }`}
                                    >
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}
                        </PaginationContent>
                    </Pagination>

                    {/* end numvber */}
                    <PaginationItem>
                        {/* next  */}
                        <PaginationNext href={Links.next_page_url || ""} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default ListMateri;
