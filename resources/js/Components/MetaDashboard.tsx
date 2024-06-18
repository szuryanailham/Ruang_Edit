// resources/js/components/Meta.tsx
import React from "react";
import { Head } from "@inertiajs/react";

const MetaDashboard: React.FC = () => {
    return (
        <Head>
            <title>DashboardPage</title>
            <meta
                name="description"
                content="Selamat datang di dashboard Ruang Edit. Kelola kursus Anda, ikuti webinar, dan tingkatkan keterampilan editing Anda bersama platform kami."
            />
            <link rel="icon" href="./img/favicon.svg" type="image/x-icon" />
        </Head>
    );
};

export default MetaDashboard;
