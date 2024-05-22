import { Link } from "@inertiajs/react";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { PiCertificateFill } from "react-icons/pi";
import { MdSpaceDashboard } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

function SidebarDashboard() {
    const [isOpen, setIsOpen] = useState(true);
    const sidebarRef = useRef(null);
    const btnActive = () => {
        setIsOpen((current) => !current);
    };
    return (
        <>
            {/* button trigger */}
            <button
                onClick={btnActive}
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>
            {/* sidebar component */}
            <aside
                ref={sidebarRef}
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
                    isOpen ? `-translate-x-full` : ""
                }  sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-BaseColor2">
                    <div>
                        <ul className="space-y-2 font-medium">
                            {/* arrow Back */}
                            <li
                                onClick={btnActive}
                                className="flex justify-end "
                            >
                                {/* ICON BACK */}
                                <FaArrowLeft className="text-white w-10 md:hidden " />
                                {/* END ICON BACK */}
                            </li>
                            {/* logo Ruang Edit */}
                            <li className="flex text-white">
                                <img
                                    src="/img/Logo.svg"
                                    className="h-10 w-12 md:h-12 md:w-[50px]"
                                    alt="Flowbite Logo"
                                />
                                <span className="text-xs font-semibold whitespace-nowrap text-wrap text-dark leading-4 w-10 md:text-x md:leading-2">
                                    Ruang Edit
                                </span>
                            </li>
                            {/* end logo ruang edit */}

                            {/* HOME */}
                            <li>
                                <Link
                                    href="/"
                                    className=" flex  items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black"
                                >
                                    <IoMdHome className="text-2xl" />
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        Home
                                    </span>
                                </Link>
                            </li>
                            {/* DASHBOARD */}
                            <li>
                                <Link
                                    href="/dashboard"
                                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black"
                                >
                                    <MdSpaceDashboard className="text-xl" />
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        Dashboard
                                    </span>
                                </Link>
                            </li>
                            {/* COURSE */}
                            <li>
                                <Link
                                    href="/"
                                    className=" flex  items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black"
                                >
                                    <FaBook className="text-xl" />
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        Course
                                    </span>
                                </Link>
                            </li>
                            {/* Sertifikat */}
                            <li>
                                <Link
                                    href="/"
                                    className=" flex  items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black"
                                >
                                    <PiCertificateFill className="text-2xl" />
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        Sertifikat
                                    </span>
                                </Link>
                            </li>

                            {/* EDIT MATERI */}
                            <li>
                                <Link
                                    href="/admin/list-bulan"
                                    className=" flex  items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black"
                                >
                                    <FaEdit className="text-2xl" />
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        Edit Materi
                                    </span>
                                </Link>
                            </li>

                            {/* LOGOUT */}
                            <li className="mt-[30%]"></li>
                            {/*END LOGOUT */}
                        </ul>
                        <Link
                            href={"/logout"}
                            method="post"
                            className=" flex  items-center p-2 rounded-lg text-red-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black"
                        >
                            <FiLogOut className="text-2xl" />
                            <span className="flex-1 ms-3 whitespace-nowrap font-bold text-red-500">
                                Logout
                            </span>
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default SidebarDashboard;
