import React from "react";
import { title, secondText, benefitRuangEdit } from "./Text";
import { Button } from "../../shadcn/ui/button";
import { FaCirclePlay, FaRegBookmark } from "react-icons/fa6";
const Header: React.FC = () => {
    interface Benefit {
        img: string;
        title: string;
        deskripsi: string;
    }

    return (
        <section className="w-full h-fit flex items-center flex-col ">
            {/* IMAGE HEADDER  */}
            <div>
                <img
                    className=" mt-7 w-[330px]"
                    src="/img/small-mobile.svg"
                    alt="Header Image"
                />
            </div>
            {/* TITLE  HEADDER  */}
            <div className="mt-3 p-1 w-[95%]">
                <h1 className="text-4xl font-bold text-wrap p-2 text-colorFont leading-10">
                    {title()}
                </h1>
                <p className="p-1 mt-1"> {secondText()}</p>
                <div className="mt-7 flex justify-evenly">
                    {/* enroll button */}
                    <Button className="bg-BaseColor text-md">Enroll Now</Button>
                    {/* Trailer */}
                    <Button variant="outline" className="text-md border-2">
                        <FaCirclePlay className="text-BaseColor w-7 h-5" />
                        What’s etech?
                    </Button>
                </div>
            </div>

            {/* LINE BRAND PROMO */}
            <div className="mt-4 w-full h-16 bg-BaseColor"></div>
            {/* SEARCH COURSE*/}
            <section className="mt-4 p-5">
                <div>
                    <h1 className="text-center text-3xl font-bold text-BaseColor mb-3">
                        Search Course
                    </h1>
                    {/* search course */}
                    <form className="flex items-center max-w-sm mx-auto">
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
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search Course ...."
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="p-2.5 ms-2 text-sm font-medium text-white bg-BaseColor rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
                </div>
                {/* IMAGE HEADER 2  */}
                <div className="flex flex-col items-center">
                    <img
                        className="mt-7 w-[280px]"
                        src="/img/header2-mobile.svg"
                        alt="Header Image"
                    />
                </div>
                {/* text course */}
                <div>
                    <h1 className="text-4xl text-colorFont font-bold text-center mt-5">
                        <span className="text-BaseColor"> Benefit</span> from
                        our online learning
                    </h1>
                    <div className="mt-7 text-colorFont">
                        {benefitRuangEdit().map(
                            (element: Benefit, index: number) => (
                                <div
                                    className="flex flex-row gap-3 mb-5 items-center"
                                    key={index}
                                >
                                    {/* logo */}
                                    <img src={element.img} alt="logo" />
                                    <div>
                                        <h1 className="font-bold text-2xl">
                                            {element.title}
                                        </h1>
                                        <p className="leading-1 text-wrap text-sm">
                                            {element.deskripsi}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Header;
