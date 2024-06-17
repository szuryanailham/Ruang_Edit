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
import { User } from "@/types";
import React from "react";

interface AboutPageProps {
    user: User;
}

const MentorPage: React.FC<AboutPageProps> = ({ user }) => {
    return (
        <>
            <Head title="Mentor Page" />
            <NavBox />
            <section className=" h-fit w-full mx-auto p-5">
                <InputSearch />
                {/* CARDS MENTOR */}
                <div className="px-5 mx-auto py-3 mt-5  md:mt-10 flex flex-col md:flex-row gap-10 flex-wrap item-center">
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
