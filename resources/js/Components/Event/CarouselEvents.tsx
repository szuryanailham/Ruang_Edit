import { Card, CardContent } from "@/Components/shadcn/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/shadcn/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const CarouselEvents = () => {
    interface ImageItem {
        url: string;
    }
    const UrlImage: Array<ImageItem> = [
        { url: "/img/events/image-event1.svg" },
        { url: "/img/events/image-event2.svg" },
        { url: "/img/events/image-event3.svg" },
    ];
    return (
        <div>
            <Carousel
                className="w-full max-w-xs m-auto"
                opts={{
                    align: "start",
                }}
                plugins={[
                    Autoplay({
                        delay: 2500,
                    }),
                ]}
            >
                <CarouselContent className="">
                    {UrlImage.map((events, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card
                                    style={{
                                        backgroundImage: `url('${events.url}')`,
                                    }}
                                    className=" bg-cover bg-center"
                                >
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <p className="text-4xl font-semibold">
                                            {index + 1}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="hidden">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselEvents;
