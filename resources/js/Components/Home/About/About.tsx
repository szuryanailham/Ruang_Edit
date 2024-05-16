import React from "react";
import { text_about } from "./Text";
import { Link } from "@inertiajs/react";
import { Button } from "@/Components/shadcn/ui/button";
const About: React.FC = () => {
    const paragraphs = text_about();
    return (
        <div className=" mt-3 h-fit w-full p-3 flex flex-col items-center">
            {/* Image */}
            <div className="w-[85%] md:w-[60%] bg-[url('/img/image_about.svg')] h-[221px] md:h-[350px] rounded-lg bg-cover bg-center"></div>
            {/* text */}
            <h1 className="text-5xl text-colorFont font-bold text-center mt-5 w-[80%] mb-3">
                What is <span className="text-BaseColor">Ruang Edit ?</span>
            </h1>
            <div className="md:text-xl md:w-[85%]">
                <p className="p-3 text-center">{paragraphs[0]}</p>
                <p className="p-3 text-center">{paragraphs[1]}</p>
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
    );
};

export default About;
