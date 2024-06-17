import React from "react";
import { Card, CardContent } from "@/Components/shadcn/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/shadcn/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ImageRegional } from "./ImageRegional";
interface dataType {
    id: number;
    name: string;
    image: string;
}
const GalleryAbout: React.FC = () => {
    console.log(ImageRegional());
    return (
        <div className="mt-5">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="w-full mx-auto"
            >
                <CarouselContent>
                    {ImageRegional().map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="p-1">
                                <Card>
                                    <CardContent
                                        className="flex aspect-square items-center justify-center p-6 bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url(${item.img})`,
                                        }}
                                    ></CardContent>
                                </Card>
                            </div>
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
