import Navbar from "@/Components/Dashboard/Navbar";
import { Link } from "@inertiajs/react";
import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";

interface Month {
    id: number;
    nama_bulan: string;
}

interface Datatype {
    title: string;
    Months: Month[];
}

const Welcome: React.FC<Datatype> = ({ title, Months }) => {
    return (
        <div className="p-4 sm:ml-64">
            <Navbar />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
                {Months.map((month, index) => (
                    <Link
                        key={index}
                        href={`/dashboard/list-Materi/${month.nama_bulan}`}
                        className="max-w-sm md:max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                        <FaRegCalendarCheck className="text-3xl mb-3" />
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                {month.nama_bulan}
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                            Go to this step by step guideline
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Welcome;
