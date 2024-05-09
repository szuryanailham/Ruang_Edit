import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Navbar from "@/Components/Home/Nav/NavBox";
import Header from "@/Components/Home/Header/Header";
import PopularCourse from "@/Components/Home/PopularCourse/PopularCourse";
import About from "@/Components/Home/About/About";
import Testimony from "@/Components/Home/Testimony/Testimony";
import Subscribe from "@/Components/Home/Subscribe/Subscribe";
import Footer from "@/Components/Home/Footer/Footer";
export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome Ruang Edit" />
            {/* Navbar Component */}
            <Navbar />
            {/* Header Home page */}
            <Header />
            {/* Popular course  */}
            <PopularCourse />
            {/* About Ruang Edit */}
            <About />
            {/* Testimony */}
            <Testimony />
            {/* Subsrive */}
            <Subscribe />
            {/* Footer */}
            <Footer />
        </>
    );
}
