import React from "react";

type CardFasilitasProps = {
    icon: string;
    text: string;
};

const CardFasilitas: React.FC<CardFasilitasProps> = ({ icon, text }) => {
    return (
        <div className="rounded-xl w-full h-[200px] bg-BaseColor flex items-center justify-center mb-3">
            <div className="text-white">{icon}</div>
            <p className="text-white">{text}</p>
        </div>
    );
};

export default CardFasilitas;
