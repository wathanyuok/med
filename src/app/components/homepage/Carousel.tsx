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

const items = [
  { id: 1, text: "Card 1" },
  { id: 2, text: "Card 2" },
  { id: 3, text: "Card 3" },
  { id: 4, text: "Card 4" },
  { id: 5, text: "Card 5" },
];

export function CardCarousel() {
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
                basis-full      /*  Mobile: 1 ใบ */
                sm:basis-full    /*  Tablet: 2 ใบ */
                lg:basis-1/3    /*  Desktop: 3 ใบ */
              "
            >
              <Card className="h-120 flex items-center justify-center bg-gray-200">
                <CardContent>{item.text}</CardContent>
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
