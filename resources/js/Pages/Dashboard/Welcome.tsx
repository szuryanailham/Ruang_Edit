import { Link } from "@inertiajs/react";
import React from "react";
interface Month {
    id: number;
    nama_bulan: string;
}

interface Datatype {
    title: string;
    Months: Month[];
}

const Welcome: React.FC<Datatype> = ({ title, Months }) => {
    return (
        <>
            <h1>{title}</h1>
            <ul>
                {Months.map((month, index) => (
                    <li key={index}>
                        <Link
                            href={`/dashboard/list-Materi/${month.nama_bulan}`}
                        >
                            {month.nama_bulan}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Welcome;
