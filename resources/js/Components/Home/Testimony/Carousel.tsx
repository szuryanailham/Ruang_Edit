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
    return (
        <div>
            <Carousel
                opts={{
                    align: "start",
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="w-full max-w-sm px-2"
            >
                <CarouselContent className="mt-3  ">
                    {/* card satu */}
                    <CarouselItem className="basis-[75%]">
                        <div className="flex justify-center">
                            <CardTestimony />
                        </div>
                    </CarouselItem>
                    {/* card dua */}
                    <CarouselItem className="basis-[75%]">
                        <div className=" flex justify-center">
                            <CardTestimony />
                        </div>
                    </CarouselItem>
                    {/* card ketiga */}
                    <CarouselItem className="basis-[75%]">
                        <div className="flex justify-center">
                            <CardTestimony />
                        </div>
                    </CarouselItem>
                    {/* card kempat*/}
                    <CarouselItem className="basis-[75%]">
                        <div className="flex justify-center">
                            <CardTestimony />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
