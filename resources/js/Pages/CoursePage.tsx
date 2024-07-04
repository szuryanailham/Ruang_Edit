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
            <section className=" h-fit w-full p-3 mb-[10%] md:mb-[10%]  mt-[5%] lg:mt-[10%]">
                <InputCourse />
                <div className="mx-auto w-full mt-7 lg:mx-auto flex justify-center flex-col gap-5 lg:gap-7 md:flex-row flex-wrap items-center lg:px-10">
                    {/* card 1 */}
                    <CardCourse
                        image="/img/course/ilustrasi1.jpg"
                        category="design"
                        title="Class Videografer with CapCut"
                        rating={4.5}
                        course={7}
                        member={50}
                    />
                    {/* end card 1 */}

                    {/* card 2 */}
                    <CardCourse
                        image="/img/course/ilustrasi2.jpg"
                        category="design"
                        title="Class Grading with Lightroom"
                        rating={4.5}
                        course={7}
                        member={50}
                    />
                    {/* end card 2 */}

                    {/* card 3 */}
                    <CardCourse
                        image="/img/course/ilustrasi3.jpg"
                        category="design"
                        title="Class Grading with Lightroom"
                        rating={4.5}
                        course={7}
                        member={50}
                    />

                    {/* end card 3 */}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default CoursePage;
