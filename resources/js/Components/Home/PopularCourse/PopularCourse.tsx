import CardCourse from "./CardCourse";
import { motion } from "framer-motion";

const PopularCourse: React.FC = () => {
    const text = () => {
        return (
            <p className="whitespace-normal max-w-prose">
                Jelajahi kursus paling populer kami yang dirancang untuk
                meningkatkan keterampilan Anda dalam edit video, fotografi, dan
                desain. Baik Anda pemula maupun profesional
            </p>
        );
    };
    return (
        <div className=" p-5 md:p-10 w-full h-fit bg-BaseColor2 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    ease: "linear",
                    duration: 1,
                    y: { duration: 1 },
                }}
            >
                <h1 className="w-[80%] text-white font-bold text-3xl text-center mx-auto mt-3">
                    Kursus Populer Kami
                </h1>
                <p className="p-5 lg:w-[70%] lg:p-5 text-sm md:text-xl text-center mx-auto mb-3 text-white w-full md:w-[90%]">
                    {text()}
                </p>
            </motion.div>
            {/* POPULAR CARD */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    ease: "linear",
                    duration: 1,
                    y: { duration: 1 },
                }}
                className="mt-2 flex flex-col md:flex-row gap-5 lg:gap-10 md:p-3"
            >
                <CardCourse
                    image="/img/course/populer_course.jpg"
                    category="design"
                    title="Class Photografer with Lightroom"
                    rating={4.5}
                    course={7}
                    member={50}
                />
                <CardCourse
                    image="/img/course/populer_course2.jpg"
                    category="design"
                    title="Class Design Grafis with Canva"
                    rating={4.5}
                    course={7}
                    member={50}
                />
                <CardCourse
                    image="/img/course/populer_course3.png"
                    category="design"
                    title="Class Videografer with CapCut"
                    rating={4.5}
                    course={7}
                    member={50}
                />
            </motion.div>
        </div>
    );
};

export default PopularCourse;
