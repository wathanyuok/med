"use client";

import * as React from "react";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CarouselItemProps {
  id: number;
  image_url: string;
  title?: string;
}

interface CardCarouselProps {
  items: CarouselItemProps[];
  doNotShowTitle?: boolean;
}

export function CardCarousel({
  items,
  doNotShowTitle = true,
}: CardCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const [current, setCurrent] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  const normalizedItems =
    items && items.length > 0
      ? items.length >= 3
        ? items
        : Array.from({ length: 3 }, (_, i) => items[i % items.length])
      : [];

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (!api) return;
    if (normalizedItems.length > 0 && current >= normalizedItems.length) {
      setCurrent(0);
      api.scrollTo(0);
    }
    api.reInit();
  }, [normalizedItems, api, current]);

  if (!items || items.length === 0) {
    return (
      <div className="w-full flex justify-center items-center h-[200px] text-gray-500 text-md">
        ไม่พบข้อมูล
      </div>
    );
  }

  return (
    <div className="w-full mx-auto">
      <Carousel
        key={normalizedItems.length}
        plugins={[plugin.current]}
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {normalizedItems.map((item, index) => (
            <CarouselItem
              key={`${item.id}-${index}`}
              className="basis-4/5 sm:basis-2/3 lg:basis-1/2 px-2"
            >
              <Card
                className={cn(
                  "h-[450px] overflow-hidden rounded-2xl shadow-md transition-all duration-300",
                  current === index ? "scale-100 opacity-100" : "scale-100 opacity-50"
                )}
              >
                <CardContent className="relative h-full w-full p-0">
                  <Image
                    src={item.image_url || ""}
                    alt={item.title || "carousel image"}
                    fill
                    className="object-cover"
                  />
                  {!doNotShowTitle && item.title && (
                    <div className="absolute bottom-0 left-0 w-full bg-white/70 text-neutral-800 text-xl font-semibold text-center py-2">
                      {item.title}
                    </div>
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => api && api.scrollTo(i)}
            className={cn(
              "transition-all",
              current % items.length === i
                ? "w-8 h-1 rounded-full bg-bright-blue cursor-pointer"
                : "w-8 h-1 rounded-full bg-neutral-300 cursor-pointer"
            )}
          />
        ))}
      </div>
    </div>
  );
}
