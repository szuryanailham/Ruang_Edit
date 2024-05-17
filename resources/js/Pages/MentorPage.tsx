import Footer from "@/Components/Home/Footer/Footer";
import NavBox from "@/Components/Home/Nav/NavBox";
import CardMentor from "@/Components/MentorCompt/CardMentor";
import InputSearch from "@/Components/MentorCompt/InputSearch";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/shadcn/ui/pagination";
import { Head } from "@inertiajs/react";

import React from "react";

const MentorPage: React.FC = () => {
    return (
        <>
            <Head title="Mentor PAge" />
            <NavBox />
            <section className=" h-fit w-full mx-auto p-5">
                <InputSearch />
                {/* CARDS MENTOR */}
                <div className="px-5 py-3 mt-5 mx-auto md:mt-10 flex flex-col md:flex-row gap-10 flex-wrap item-center">
                    <CardMentor />
                    <CardMentor />
                    <CardMentor />
                    <CardMentor />
                </div>
                {/* END  CARDS MENTOR */}

                {/* Pagination */}
                <Pagination className="p-3">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                className="bg-BaseColor text-white hover:bg-white"
                                href="#"
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext
                                className="bg-BaseColor text-white"
                                href="#"
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>

                {/* Pagination */}
            </section>
            <Footer />
        </>
    );
};

export default MentorPage;
