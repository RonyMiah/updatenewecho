"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { EmblaOptionsType } from "embla-carousel";

type PropType = {
  options?: EmblaOptionsType;
};

export function Slider(props: PropType) {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);
  const [, setIsPlaying] = useState(true);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  //   const toggleAutoplay = useCallback(() => {
  //     const autoplay = emblaApi?.plugins()?.autoplay;
  //     if (!autoplay) return;

  //     const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
  //     playOrStop();
  //   }, [emblaApi]);

  useEffect(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
    autoplay.play();
    setIsPlaying(autoplay.isPlaying());
    emblaApi
      .on("autoplay:play", () => setIsPlaying(true))
      .on("autoplay:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoplay.isPlaying()));
  }, [emblaApi]);

  const data = [
    {
      link: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "COMMERCIAL CLEANING SERVICES",
    },
    {
      link: "https://plus.unsplash.com/premium_photo-1683141112334-d7d404f6e716?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "OFFICE CLEANING SERVICES",
    },
    {
      link: "https://plus.unsplash.com/premium_photo-1663045721481-d31e9c549e8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "CARPET CLEANING SERVICES",
    },
    {
      link: "https://plus.unsplash.com/premium_photo-1663045721481-d31e9c549e8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "CARPET CLEANING SERVICES",
    },
    {
      link: "https://plus.unsplash.com/premium_photo-1661662917928-b1a42a08d094?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "JANITORIAL CLEANING SERVICES",
    },
    {
      link: "https://plus.unsplash.com/premium_photo-1661662860714-7ea91a565bf9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "WASHROOM CLEANING SERVICES",
    },
    {
      link: "https://plus.unsplash.com/premium_photo-1664910289500-22a90f2527bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "PROPERTY MAINTENANCE SERVICES",
    },
    {
      link: "https://plus.unsplash.com/premium_photo-1726761637367-afdcd05c2da6?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "HARD FLOOR MAINTENANCE SERVICES",
    },
    {
      link: "https://images.unsplash.com/photo-1690068023694-053da714f95f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "GRASS CUTTING SERVCES",
    },
    {
      link: "https://images.unsplash.com/photo-1438109382753-8368e7e1e7cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "TREE & GARDEN MAINTENANCE SERVICES",
    },
    
  ];

  return (
    <div className="max-w-3xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom rounded-2xl">
          {data.map((item, index) => (
            <div className="flex-[0_0_70%] transform-gpu pl-4" key={index}>
              <div className="">
                <Image
                  src={item.link}
                  height={400}
                  width={500}
                  alt="sd"
                  className="rounded-2xl border-0 object-cover h-[350px] w-[600px]"
                />
                <div className="absolute top-0 left-[15px] w-[calc(100%-15px)] h-full  flex items-end justify-center bg-black bg-opacity-40 text-white rounded-2xl font-bold lg:text-xl md:text-base sm:text-base sx:text-xs py-4">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" items-center justify-end py-2 hidden sm:flex">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        {/* <button
          className="border rounded-md w-20 h-10"
          onClick={toggleAutoplay}
          type="button"
        >
          {isPlaying ? "Stop" : "Start"}
        </button> */}
      </div>
    </div>
  );
}
