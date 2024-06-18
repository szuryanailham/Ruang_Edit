import { Head, usePage } from "@inertiajs/react";
import Navbar from "@/Components/Home/Nav/NavBox";
import Header from "@/Components/Home/Header/Header";
import PopularCourse from "@/Components/Home/PopularCourse/PopularCourse";
import About from "@/Components/Home/About/About";
import Testimony from "@/Components/Home/Testimony/Testimony";
import Subscribe from "@/Components/Home/Subscribe/Subscribe";
import Footer from "@/Components/Home/Footer/Footer";
import Meta from "@/Components/Meta";

interface Auth {
    user: {
        name: string;
        email: string;
    };
}

interface WelcomeProps {
    auth: Auth;
}

export default function Welcome({ auth }: WelcomeProps) {
    const { user } = auth;
    const username = user ? user.name : "Guest";

    return (
        <>
            <Meta
                title="HomePage"
                description="Selamat datang di Ruang Edit, tempat terbaik untuk mempelajari seni dan teknik editing secara online! Kami menawarkan kursus dan tutorial komprehensif untuk desainer grafis, fotografer, dan videografer dari berbagai tingkat keahlian."
            />
            <div className="overflow-x-hidden">
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
                {/* Subscribe */}
                <Subscribe />
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}
