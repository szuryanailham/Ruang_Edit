import NavBox from "@/Components/Home/Nav/NavBox";
import { Button } from "@/Components/shadcn/ui/button";
import React from "react";
import { FaCirclePlay, FaRegBookmark } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
const InputSearch: React.FC = () => {
    return (
        <>
            <h1 className="text-center text-3xl font-bold text-BaseColor mb-3">
                Search Mentor
            </h1>
            {/* INPUT SEARCH */}
            <form className="flex items-center max-w-sm mx-auto p-2">
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
                        className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-9 p-3"
                        placeholder="Search Course ...."
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="p-3 ms-2 text-sm font-medium text-white bg-BaseColor rounded-lg border border-blue-700 hover:bg-dark focus:ring-4 focus:outline-none focus:ring-blue-300 "
                >
                    <IoSearch className="text-xl" />
                    <span className="sr-only">Search</span>
                </button>
            </form>
            {/* END INPUT SEARCH */}

            {/* CATEGORY COURSE */}
            <div className="w-full h-fit mt-7 flex md:w-[90%] mx-auto justify-around gap-3">
                <Button className="bg-BaseColor">Design grafis</Button>
                <Button className="bg-BaseColor">Photografer</Button>
                <Button className="bg-BaseColor">VideoGrafer</Button>
            </div>
        </>
    );
};

export default InputSearch;
