import React, { useRef, useEffect } from "react";
import CardTestimony from "./CardTestimony";
import Autoplay from "embla-carousel-autoplay";
export function Example() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            // ...
        </Carousel>
    );
}

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/shadcn/ui/carousel";
export default function Slider() {
    const carouselRef = useRef(null);
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
                    {/* TESTIMONY */}
                    <CarouselItem className="basis-[80%] md:basis-[75%] lg:basis-[35%]  ">
                        <div className="p-1 mx-auto">
                            <CardTestimony
                                name="@szuryanailham"
                                comment="cocok bnget buat belajar skill editing plus circle yang mendukung , buat Ruang edit tetap solid dan maju terus"
                            />
                        </div>
                    </CarouselItem>
                    {/* END TESTIMONT  */}
                    {/* TESTIMONY */}
                    <CarouselItem className="basis-[80%] md:basis-[75%] lg:basis-[35%]  ">
                        <div className="p-1 mx-auto">
                            <CardTestimony
                                name="Zaki pras"
                                comment="komunitas yang aku butuhkan banget gitu lohhh,ehh pas udah gabung lama kelamaan super amazing ga bisa ber kata kata lagi kalo kata gen-z mah,bukan sekedar kata solid "
                            />
                        </div>
                    </CarouselItem>
                    {/* END TESTIMONT  */}

                    {/* TESTIMONY */}
                    <CarouselItem className="basis-[80%] md:basis-[75%] lg:basis-[35%]  ">
                        <div className="p-1 mx-auto">
                            <CardTestimony
                                name="@olanotramlan"
                                comment="Paket lengkap belajar banget! Ilmu, kekeluargaan, pengalaman, semuanya bisa di dapetin disini. Belum lagi klo ada kelas premium dan challenge langsung dari bapak founder"
                            />
                        </div>
                    </CarouselItem>
                    {/* END TESTIMONT  */}

                    {/* TESTIMONY */}
                    <CarouselItem className="basis-[80%] md:basis-[75%] lg:basis-[35%]  ">
                        <div className="p-1 mx-auto">
                            <CardTestimony
                                name="Ayninn"
                                comment=" selain dikasih materi ternyata dapat bonus nemuin lingkungan pertemanan baru. Dan yang paling penting, di RE lah skill desain aku mulai berkembang. Terima kasih RE. Tetep solid 🦋"
                            />
                        </div>
                    </CarouselItem>
                    {/* END TESTIMONT  */}

                    {/* TESTIMONY */}
                    <CarouselItem className="basis-[80%] md:basis-[75%] lg:basis-[35%]  ">
                        <div className="p-1 mx-auto">
                            <CardTestimony
                                name="Rrae_ha"
                                comment="
                            MaasyaAllah sangat amat membantu dalam dunia pereditan terutama buat yg cuman pake samrtphone .. ga repot2 buka pc, simpel praktis dan hasilnya kaya pro !!
                            "
                            />
                        </div>
                    </CarouselItem>
                    {/* END TESTIMONT  */}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
