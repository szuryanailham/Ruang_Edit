import React, { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { Button } from "@/Components/shadcn/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/shadcn/ui/accordion";
const NavBox = () => {
    const [active, setActive] = useState<boolean>(false);
    const navbar = useRef<HTMLDivElement>(null);
    const sidebar = useRef<HTMLDivElement>(null);
    const closeButton = useRef<HTMLButtonElement>(null);
    const changeActive = () => {
        setActive((current) => !current);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            active &&
            sidebar.current &&
            !sidebar.current.contains(event.target as Node) &&
            navbar.current &&
            !navbar.current.contains(event.target as Node)
        ) {
            setActive(false);
        }
    };

    const ElemntSidebar = ({ text }: { text: String }) => {
        return (
            <li>
                <a
                    href="#"
                    className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-black group"
                >
                    <span className="ms-4 font">{text}</span>
                </a>
            </li>
        );
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [active]);

    return (
        <>
            <nav
                ref={navbar}
                className="bg-white w-full border-gray-200 dark:bg-gray-900 sticky"
            >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-BaseColor">
                    {/* LOGO NAVBAR */}
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center rtl:space-x-reverse"
                    >
                        <img
                            src="/img/Logo.svg"
                            className="h-10 w-12"
                            alt="Flowbite Logo"
                        />
                        <span className="text-xs font-semibold whitespace-nowrap text-wrap text-white leading-4 w-10">
                            Ruang Edit
                        </span>
                    </a>
                    {/* LOGO NAVBAR */}

                    {/* BUTTON RESPONSIVE NAVBAR */}
                    <button
                        type="button"
                        onClick={changeActive}
                        className="inline-flex items-center w-12 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {/* ICON HUMBERGER MENU */}
                        <IoMenu className="text-3xl" />
                        {/* END ICON HUMBERGER MENU */}
                    </button>
                    {/* END BUTTON RESPONSIVE NAVBAR */}

                    <div
                        className="hidden w-full md:block md:w-auto p-2"
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-white  rounded md:bg-transparent 0 md:p-0"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* SIDEBAR .... */}
            {/* <!-- drawer component --> */}
            <div
                ref={sidebar}
                id="drawer-navigation"
                className={`fixed inset-y-0 ${
                    active ? "translate-x-0" : "inset-x-0"
                } z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-BaseColor rounded-sm`}
                aria-labelledby="drawer-navigation-label"
            >
                <button
                    type="button"
                    onClick={() => setActive(false)}
                    data-drawer-hide="drawer-navigation"
                    aria-controls="drawer-navigation"
                    ref={closeButton}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center"
                >
                    <IoIosClose className="text-2xl" />
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto mt-5">
                    <ul className="space-y-4 font-medium mt-5">
                        {/* home */}
                        <ElemntSidebar text={"Home"} />
                        {/* Course */}
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <ElemntSidebar text={"Course"} />
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ElemntSidebar text={"Class"} />
                                    <ElemntSidebar text={"Mentor"} />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        {/* event */}
                        <ElemntSidebar text={"Event"} />
                        {/* wabiner */}
                        <ElemntSidebar text={"Wabiner"} />
                        {/* About */}
                        <ElemntSidebar text={"About"} />
                        <li className="ml-3">
                            {/* Sign in */}
                            <Button className="bg-transparent text-xl font-bold">
                                Login
                            </Button>
                        </li>
                        <li className="ml-3">
                            {/* Sign Up */}
                            <Button variant="outline">Sign Up</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBox;
