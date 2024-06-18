import React from "react";
import image from "@/image/temporary.jpg";
import NavBox from "@/Components/Home/Nav/NavBox";
import Meta from "@/Components/Meta";

const Temporary: React.FC = () => {
    return (
        <>
            <Meta
                title="TemporaryPage"
                description="Halaman ini sedang dalam pengembangan. Kunjungi kembali nanti untuk menemukan konten baru dan menarik dari Ruang Edit. Kami sedang mempersiapkan sesuatu yang hebat untuk Anda!"
            />
            <NavBox />
            <section className="bg-white dark:bg-gray-900 flex items-center justify-center min-h-screen">
                <div className="py-8 px-6 flex flex-col mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <img
                            src={image}
                            alt="Not Found"
                            className="mx-auto w-[80%]"
                        />
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                            404
                        </h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                            Website Under Development
                        </p>
                        <p className="mb-4 text-md md:text-lg font-light text-gray-500 dark:text-gray-400 p-5">
                            Thank you for your patience and understanding as we
                            work diligently behind the scenes. Stay tuned for
                            exciting updates coming your way soon
                        </p>
                        <a
                            href="/"
                            className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
                        >
                            Back to Homepage
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Temporary;
