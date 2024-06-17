import React from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
const InputWabiner: React.FC = () => {
    return (
        <>
            <h1 className="text-center text-3xl font-bold text-BaseColor mb-3">
                Search Wabiner
            </h1>
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
        </>
    );
};

export default InputWabiner;
