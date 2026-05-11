"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselApi,
} from "@/components/ui/carousel"

interface ImageCarouselProps {
    images: string[]
    autoplayDelay?: number
}

export function ImageCarousel({ images, autoplayDelay = 3000 }: ImageCarouselProps) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    const plugin = React.useRef(
        Autoplay({ delay: autoplayDelay, stopOnInteraction: true })
    )

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <div className="w-full">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                setApi={setApi}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                                <Image
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${current === index
                                ? "bg-black w-8"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
