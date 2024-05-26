import InputCourse from "@/Components/Course/InputCourse";
import NavBox from "@/Components/Home/Nav/NavBox";
import CardCourse from "@/Components/Home/PopularCourse/CardCourse";
import React from "react";
import { User } from "@/types";

interface AboutPageProps {
    user: User;
}

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/shadcn/ui/pagination";
import Footer from "@/Components/Home/Footer/Footer";

const CoursePage: React.FC<AboutPageProps> = ({ user }) => {
    return (
        <>
            <NavBox />
            <section className=" h-fit w-full p-3 mb-[5%]">
                <InputCourse />
                <div className="mt-7 flex flex-col gap-5 md:flex-row flex-wrap  items-center">
                    {/* card 1 */}
                    <CardCourse
                        image="/img/card_course_img.svg"
                        category="design"
                        title="Class Videografer with CapCut"
                        rating={4.5}
                        course={7}
                        member={50}
                    />
                    {/* end card 1 */}

                    {/* card 2 */}
                    <CardCourse
                        image="/img/card_course_img2.svg"
                        category="design"
                        title="Class Grading with Lightroom"
                        rating={4.5}
                        course={7}
                        member={50}
                    />
                    {/* end card 2 */}

                    {/* card 3 */}
                    <CardCourse
                        image="/img/card_course_img2.svg"
                        category="design"
                        title="Class Grading with Lightroom"
                        rating={4.5}
                        course={7}
                        member={50}
                    />
                    {/* end card 3 */}

                    {/* card 3 */}
                    <CardCourse
                        image="/img/card_course_img2.svg"
                        category="design"
                        title="Class Grading with Lightroom"
                        rating={4.5}
                        course={7}
                        member={50}
                    />
                    {/* end card 3 */}
                </div>
                {/* pagination */}
                <Pagination className="mx-auto mt-5 md:mt-10 ">
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
            </section>
            <Footer />
        </>
    );
};

export default CoursePage;
