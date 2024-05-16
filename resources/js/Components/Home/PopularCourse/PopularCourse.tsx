import CardCourse from "./CardCourse";

const PopularCourse: React.FC = () => {
    const text = () => {
        return (
            <p className="whitespace-normal">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
                nemo vitae officia eum, alias commodi cum veniam doloribus
                incidunt, minus reprehenderit qui voluptate corrupti. Veniam
            </p>
        );
    };
    return (
        <div className=" p-5 md:p-10 w-full h-fit bg-BaseColor2 flex flex-col items-center">
            <h1 className="w-[80%] text-white font-bold text-3xl text-center mt-3">
                Our Popular Course
            </h1>
            <p className="p-5 text-sm md:text-xl text-center mb-3 text-white w-full md:w-[90%]">
                {text()}
            </p>
            {/* POPULAR CARD */}
            <div className="mt-2 flex flex-col md:flex-row gap-5 md:p-3">
                <CardCourse
                    image="/img/card_course_img.svg"
                    category="design"
                    title="Class Videografer with CapCut"
                    rating={4.5}
                    course={7}
                    member={50}
                />
                <CardCourse
                    image="/img/card_course_img.svg"
                    category="design"
                    title="Class Videografer with CapCut"
                    rating={4.5}
                    course={7}
                    member={50}
                />
                <CardCourse
                    image="/img/card_course_img.svg"
                    category="design"
                    title="Class Videografer with CapCut"
                    rating={4.5}
                    course={7}
                    member={50}
                />
            </div>
        </div>
    );
};

export default PopularCourse;
