import React from "react";
import { Card, CardContent } from "@/Components/shadcn/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/Components/shadcn/ui/carousel";
import { ImageRegional } from "./ImageRegional";
import Autoplay from "embla-carousel-autoplay";
const GalleryAbout: React.FC = () => {
    return (
        <div className="mt-5">
            <Carousel
                className="w-full max-w-xs mx-auto rounded-lg"
                opts={{
                    align: "start",
                }}
                plugins={[
                    Autoplay({
                        delay: 2500,
                    }),
                ]}
            >
                <CarouselContent>
                    {ImageRegional().map((item) => (
                        <CarouselItem key={item.id}>
                            <Card>
                                <CardContent
                                    className="flex aspect-square items-center justify-center bg-cover bg-center relative"
                                    style={{
                                        backgroundImage: `url(${item.img})`,
                                    }}
                                >
                                    <span className="absolute bottom-0 left-0 right-0 px-2 py-1 bg-black bg-opacity-50 text-white text-center text-sm">
                                        {item.name}
                                    </span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default GalleryAbout;
