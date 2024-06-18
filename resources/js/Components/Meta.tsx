// resources/js/components/Meta.tsx
import React from "react";
import { Head } from "@inertiajs/react";

interface MetaProps {
    title: string;
    description: string;
}

const Meta: React.FC<MetaProps> = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="./img/favicon.svg" type="image/x-icon" />
        </Head>
    );
};

export default Meta;
