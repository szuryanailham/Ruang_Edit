import React from "react";

const YouTubeEmbed: React.FC<{ videoId: string }> = ({ videoId }) => {
    return (
        <div className="aspect-w-16 aspect-h-9">
            <iframe
                className="w-full h-[300px] md:h-[450px] rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubeEmbed;
