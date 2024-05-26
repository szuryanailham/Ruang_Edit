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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/shadcn/ui/dropdown-menu";
import { Link } from "@inertiajs/react";

const NavBox: React.FC = () => {
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

    const AccordingMenu = () => {
        return (
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <ElemntSidebar url={""} text={"Course"} />
                    </AccordionTrigger>
                    <AccordionContent>
                        <ElemntSidebar url={"/class"} text={"Class"} />
                        <ElemntSidebar url={"/mentor"} text={"Mentor"} />
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        );
    };

    const ElemntSidebar = ({ text, url }: { text: string; url: string }) => {
        return (
            <li>
                <Link
                    href={url}
                    className="flex items-center p-2 text-white rounded-lg hover:bg-gray-100 hover:text-black group"
                >
                    <span className="ms-4 font">{text}</span>
                </Link>
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
                className="bg-white z-10  border-gray-200 sticky top-0 w-full"
            >
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 bg-BaseColor2 md:bg-white shadow-lg">
                    {/* LOGO NAVBAR */}
                    <Link
                        href="/"
                        className="flex items-center rtl:space-x-reverse"
                    >
                        <img
                            src="/img/Logo.svg"
                            className="h-10 w-12 md:h-12 md:w-[50px]"
                            alt="Flowbite Logo"
                        />
                        <span className="text-xs font-semibold whitespace-nowrap text-wrap text-white md:text-black leading-4 w-10 md:text-x md:leading-2">
                            Ruang Edit
                        </span>
                    </Link>
                    {/* LOGO NAVBAR */}

                    {/* BUTTON RESPONSIVE NAVBAR */}
                    <button
                        type="button"
                        onClick={changeActive}
                        className="inline-flex items-center w-12 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border items-center border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            {/* HOME */}
                            <li>
                                <Link
                                    href="/"
                                    className="block  py-2 px-3 text-fontBase rounded md:bg-transparent 0 md:p-0"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            {/* COURSE */}
                            <li>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        Course
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>
                                            <Link
                                                href="/class"
                                                className="block py-2 px-3 text-fontBase rounded md:hover:bg-transparent md:border-0  md:p-0 "
                                            >
                                                Class
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link
                                                href="/mentor"
                                                className="block py-2 px-3 text-fontBase rounded md:hover:bg-transparent md:border-0  md:p-0 "
                                            >
                                                Mentor
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                            {/* EVENTS  */}
                            <li>
                                <a
                                    href="/events"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Events
                                </a>
                            </li>
                            {/* WABINER */}
                            <li>
                                <Link
                                    href="/wabiner"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Wabiner
                                </Link>
                            </li>
                            {/* ABOUT */}
                            <li>
                                <Link
                                    href="/about"
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    About
                                </Link>
                            </li>
                            {/* LOGIN */}
                            <li>
                                <Button className="bg-BaseColor2">
                                    <Link
                                        href="/login"
                                        className="block text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 p-3"
                                    >
                                        Login
                                    </Link>
                                </Button>
                            </li>
                            {/* SIGN UP */}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* ============================  SIDEBAR ============================= */}
            <div
                ref={sidebar}
                id="drawer-navigation"
                className={`fixed -inset-y-1 md:hidden ${
                    active ? "translate-x-0" : "inset-x-0"
                } z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-BaseColor2 rounded-sm`}
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
                        <ElemntSidebar url={"/"} text={"Home"} />
                        {/* Course */}
                        <AccordingMenu />
                        {/* event */}
                        <ElemntSidebar url={"/events"} text={"Event"} />
                        {/* wabiner */}
                        <ElemntSidebar url={"/wabiner"} text={"Wabiner"} />
                        {/* About */}
                        <ElemntSidebar url={"about"} text={"About"} />
                        <li className="ml-3">
                            {/* Sign in */}
                            <Link href="/login">
                                <Button className="bg-transparent text-md font-bold">
                                    Login
                                </Button>
                            </Link>
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
