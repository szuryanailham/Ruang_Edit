import React from "react";
import { text_about } from "./Text";
import { Link } from "@inertiajs/react";
import { Button } from "@/Components/shadcn/ui/button";
const About: React.FC = () => {
    const paragraphs = text_about();
    return (
        <div className=" mt-3 h-fit w-full p-5 lg:p-10 flex flex-col lg:flex-row items-center mx-auto">
            {/* Image */}
            <div className="w-[85%] md:w-[75%] lg:w-[45%] bg-[url('/img/image_about.svg')] h-[221px] md:h-[350px] rounded-lg bg-cover bg-center"></div>
            {/* text */}
            <div className="flex flex-col item-center lg:w-[60%]">
                <h1 className="text-4xl text-colorFont font-bold text-center mt-5 w-[85%] mb-3 mx-auto">
                    What is <span className="text-BaseColor">Ruang Edit ?</span>
                </h1>
                <div className="text-sm md:text-xl md:w-[85%] mx-auto">
                    <p className="p-3 lg:px-5 text-sm text-center">
                        {paragraphs[0]}
                    </p>
                    <p className="p-3 lg:px-5 text-sm text-center">
                        {paragraphs[1]}
                    </p>
                </div>

                <div className="m-3 mx-auto">
                    <Link href="/about">
                        <Button
                            className="bg-BaseColor2 hover:bg-BaseColor text-white"
                            variant="outline"
                            size="lg"
                        >
                            See More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
