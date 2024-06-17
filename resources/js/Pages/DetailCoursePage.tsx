import CardFasilitas from "@/Components/Course/CardFasilitas";
import NavBox from "@/Components/Home/Nav/NavBox";
import React from "react";
import Footer from "@/Components/Home/Footer/Footer";
import { Link } from "@inertiajs/react";
import { Button } from "@/Components/shadcn/ui/button";
import { User } from "@/types";

interface Props {
    user: User;
}

const DetailCoursePage: React.FC<Props> = ({ user }) => {
    return (
        <>
            <NavBox />
            <div className="mt-2 h-fit flex flex-col w-full item-center p-3">
                {/* IMAGE */}
                <div
                    style={{
                        backgroundImage: `url('/img/card_course_img.svg')`,
                    }}
                    className="w-[95%] h-[280px] mx-auto rounded-lg bg-cover bg-center mt-3"
                ></div>
                {/* END IMAGE */}

                {/* TITLE */}
                <h1 className="text-4xl text-colorFont font-bold text-center mt-5 w-[90%] mx-auto">
                    Class Videografer{" "}
                    <span className="text-BaseColor mb-5">with CapCut</span>
                </h1>
                <p className="text-center italic mb-3 mt-2">
                    By mentor : <Link href="#">Ilham Suryana</Link>
                </p>
                {/* END TITLE */}

                {/* Deskription */}
                <p className="p-3 text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium cum nemo quas obcaecati numquam aliquid quis
                    eveniet, asperiores quos tempore accusamus neque soluta sunt
                    nam.
                </p>

                {/* detail Quisioner */}

                {/* BUTTON JOIN CLASS */}
                <div className="m-3 mx-auto">
                    <Link href="#">
                        <Button
                            className="bg-BaseColor text-white"
                            variant="outline"
                            size="lg"
                        >
                            Join Class
                        </Button>
                    </Link>
                </div>
                {/* FASILITAS */}
                <h1 className=" mx-auto w-[250px] text-center text-3xl font-bold text-colorFont mb-2 mt-2">
                    Fasilitas
                </h1>
                <span className="text-center p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid, molestias!
                </span>
                <div className="mt-5">
                    {/* course */}
                    <CardFasilitas text=" " icon="" />
                    {/* mentor */}
                    <CardFasilitas text=" " icon="" />
                    {/* frind */}
                    <CardFasilitas text=" " icon="" />
                </div>
                {/* END OF FASILITAS */}
            </div>
            <Footer />
        </>
    );
};

export default DetailCoursePage;
