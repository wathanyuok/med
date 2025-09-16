"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CarouselItemProps {
  id: number;
  image_url: string;
  title?: string;
}

interface CardCarouselProps {
  items: CarouselItemProps[];
}

export function CardCarousel({ items }: CardCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const [current, setCurrent] = React.useState(0);

  return (
    <div className="w-full mx-auto">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className="
                basis-full      /* Mobile: 1 ใบ */
                sm:basis-1/2    /* Tablet: 2 ใบ */
                lg:basis-1/3    /* Desktop: 3 ใบ */
              "
            >
              <Card className="h-80 overflow-hidden rounded-xl">
                <CardContent className="relative h-full w-full p-0">
                  <Image
                    src={item.image_url}
                    alt={item.title || "carousel image"}
                    fill
                    className="object-cover"
                  />
                  {item.title && (
                    <div className="absolute bottom-0 left-0 w-full bg-white/70 text-neutral-800 text-xl font-semibold text-center py-2">
                      {item.title}
                    </div>
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(items.length / 3) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-colors",
              current === i
                ? "bg-blue-500"
                : "bg-gray-300 hover:bg-gray-400"
            )}
          />
        ))}
      </div>
    </div>
  );
}