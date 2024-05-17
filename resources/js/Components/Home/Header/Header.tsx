import React from "react";
import { title, secondText, benefitRuangEdit } from "./Text";
import { Button } from "../../shadcn/ui/button";
import { FaCirclePlay, FaRegBookmark } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
const Header: React.FC = () => {
    interface Benefit {
        img: string;
        title: string;
        deskripsi: string;
    }

    return (
        <>
            {/* ========= HEADER =========== */}
            <section className="flex items-center flex-col lg:flex-row p-3 lg:p-5">
                {/* IMAGE HEADDER  */}
                <div className="lg:order-last">
                    <img
                        className="mt-7 w-[330px] md:w-[550px] lg:w-[650px] lg:p-3 "
                        src="/img/header/header-mobile.svg"
                        alt="Header Image"
                    />
                </div>

                {/* TITLE  HEADDER  */}
                <div className="mt-3 w-full mx-auto lg:w-[70%] lg:p-3">
                    {/* judul */}
                    <div className=" w-full md:w-[80%] mx-auto md:mb-10">
                        <h1 className="text-4xl md:text-6xl font-bold px-2 text-colorFont leading-10 md:leading-[4rem]">
                            {title()}
                        </h1>
                        <p className=" p-3 md:p-4 lg:p-5 text-md md:text-lg">
                            {secondText()}
                        </p>
                    </div>

                    {/* end judul */}
                    <div className=" mt-7 mx-auto lg:ml-5 lg:mx-0 flex justify-around w-[80%] md:w-[60%] lg:w-[80%] item-center gap-3">
                        {/* enroll button */}
                        <Button className="bg-BaseColor2 text-md h-10 rounded-md px-5 md:px-12 md:h-12 ">
                            Enroll Now
                        </Button>
                        {/* Trailer */}
                        <Button
                            variant="outline"
                            className="text-md border-2 h-10 rounded-md px-5 md:px-12 md:h-12 "
                        >
                            <FaCirclePlay className="text-BaseColor w-7 h-5  " />
                            What’s etech?
                        </Button>
                    </div>
                </div>
            </section>
            {/* ========= LINE =========== */}
            <div className="mt-4 w-full h-16 md:h-20 bg-BaseColor"></div>

            {/* ========= BENEFIT ========== */}
            <section className="mt-4 p-5 flex flex-col">
                <h1 className="text-center text-3xl md:text-4xl font-bold text-BaseColor mb-3 md:mb-5">
                    Search Course
                </h1>
                {/* search course */}
                <form className="flex items-center w-[80%] lg:w-[50%] mx-auto">
                    <label htmlFor="simple-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <FaRegBookmark />
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 md:ps-12 md:p-5"
                            placeholder="Search Course ...."
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="p-2.5 md:p-4 ms-2  text-sm font-medium text-white bg-BaseColor2 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                        <CiSearch className="text-md md:text-xl" />
                        <span className="sr-only">Search</span>
                    </button>
                </form>
                <div className="flex flex-col lg:flex-row mt-10 item-center gap-5 ">
                    {/* IMAGE HEADER 2  */}
                    <div className="flex flex-col items-center md:mb-5 lg:w-[55%]">
                        <img
                            className="m-auto w-[330px] md:w-[450px] lg:w-[500px]"
                            src="/img/header/header_image.svg"
                            alt="Header Image"
                        />
                    </div>
                    {/* text course */}
                    <div className="flex flex-col items-center lg:items-start lg:w-[70%] lg:p-3">
                        <h1 className="text-4xl md:text-6xl lg:px-5 text-colorFont font-bold text-center lg:text-start mt-5 md:w-[90%]">
                            <span className="text-BaseColor"> Benefit</span>{" "}
                            from our online learning
                        </h1>
                        <div className="mt-7 text-colorFont mb-3 md:px-20 lg:px-5 lg:py-5 md:py-3 mx-auto">
                            {benefitRuangEdit().map(
                                (element: Benefit, index: number) => (
                                    <div
                                        className="flex flex-row gap-3 m mb-5 items-center md:gap-5"
                                        key={index}
                                    >
                                        {/* logo */}
                                        <img
                                            className="w-[45px] lg:w-[55px] lg:h-[55px]"
                                            src={element.img}
                                            alt="logo"
                                        />
                                        <div>
                                            <h1 className="font-bold text-2xl md:text-3xl md:mb-2">
                                                {element.title}
                                            </h1>
                                            <p className="leading-1 text-wrap text-sm md:text-xl md:w-[90%]">
                                                {element.deskripsi}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
