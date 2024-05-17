import React, { useRef, useEffect } from "react";
import CardTestimony from "./CardTestimony";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/shadcn/ui/carousel";

export default function Slider() {
    const carouselRef = useRef(null);

    useEffect(() => {
        if (carouselRef.current) {
            const autoplay = Autoplay(carouselRef.current);
            return autoplay.stop;
        }
    }, []);

    return (
        <div>
            <Carousel
                ref={carouselRef}
                opts={{
                    align: "start",
                }}
                plugins={[
                    Autoplay({
                        delay: 2500,
                    }),
                ]}
                className="w-full max-w-sm md:max-w-2xl lg:max-w-5xl"
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-[80%] md:basis-[75%] lg:basis-[35%]  "
                        >
                            <div className="p-1 mx-auto">
                                <CardTestimony />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
