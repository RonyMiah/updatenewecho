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
  const [isPlaying, setIsPlaying] = useState(true);

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
    "https://plus.unsplash.com/premium_photo-1729688320703-acff8e51b661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1729710877242-6305c22c18b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1729552048052-24a21a7821ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="max-w-3xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom rounded-2xl">
          {data.map((item, index) => (
            <div className="flex-[0_0_70%] transform-gpu pl-4" key={index}>
              <div className="">
                <Image
                  src={item}
                  height={400}
                  width={500}
                  alt="sd"
                  className="rounded-2xl border-0 object-cover h-full w-full"
                />
                <div className="absolute top-0 left-[15px] w-[calc(100%-15px)] h-full  flex items-center justify-center bg-black bg-opacity-20 text-white rounded-2xl">
                  Text
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
