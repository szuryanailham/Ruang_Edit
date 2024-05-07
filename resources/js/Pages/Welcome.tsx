import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Navbar from "@/Components/Nav/NavBox";
export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Welcome Ruang Edit" />
            <Navbar />
            {/* Navbar Component */}
        </>
    );
}
