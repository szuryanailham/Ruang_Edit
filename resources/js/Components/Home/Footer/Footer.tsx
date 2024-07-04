import { Link } from "@inertiajs/react";
import React from "react";
import {
    FaFacebookF,
    FaDiscord,
    FaTwitter,
    FaTiktok,
    FaInstagram,
} from "react-icons/fa";
const Footer: React.FC = () => {
    return (
        <footer className="bg-BaseColor2 text-white">
            <div className="mx-auto w-full max-w-screen-xl p-7 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="" className="flex items-center">
                            <img
                                src="/img/favicon.png"
                                className="h-8 me-3"
                                alt="Ruang Edit Logo"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">
                                Ruang Edit
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                                Resources
                            </h2>
                            <ul className="text-gray-300  font-medium">
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline">
                                        Ruang Edit
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:underline">
                                        Course
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                                Follow us
                            </h2>
                            <ul className="text-gray-300 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="/" className="hover:underline ">
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:underline">
                                        Tiktok
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                                Legal
                            </h2>
                            <ul className="text-gray-300dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-300 sm:text-center">
                        © 2024{" "}
                        <Link
                            href="https://flowbite.com/"
                            className="hover:underline"
                        >
                            Ruang Edit ™
                        </Link>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <Link
                            href="#"
                            className="text-gray-300 hover:text-gray-900 mr-2"
                        >
                            <FaFacebookF />
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-300 hover:text-gray-900"
                        >
                            <FaDiscord />
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-300 hover:text-gray-900  ms-5"
                        >
                            <FaTwitter />
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link
                            href="#"
                            className="text-gray-300 hover:text-gray-900 ms-5"
                        >
                            <FaTiktok />
                            <span className="sr-only">Tiktok account</span>
                        </Link>
                        <a
                            href="#"
                            className="text-gray-300 hover:text-gray-900 ms-5"
                        >
                            <FaInstagram />
                            <span className="sr-only">Instagram Account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
