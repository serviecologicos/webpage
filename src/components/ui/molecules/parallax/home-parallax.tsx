import React, { useState, useEffect } from "react";

import { Recycle } from "lucide-react";
import Image from "next/image";
import { ParallaxProps } from "./parallax.types";
import { Button } from "@/components/ui/atoms/button/button";
import Link from "next/link";


interface ParallaxComponentProps {
  parallaxContent: ParallaxProps;
}


const MultiLayerParallax = ({ parallaxContent }: ParallaxComponentProps) => {
  
  const { title, slogan } = parallaxContent;
  const images = parallaxContent.imagesCollection.items;
  const dataButtons = parallaxContent.buttonsCollection.items;

  const backgroundUrl = images[0].media.url;
  const handsUrl = images[1].media.url;

  const quoteButton = dataButtons[0];
  const serviceButton = dataButtons[1];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: "transform",
        }}
      >
        <Image
          src={backgroundUrl}
          alt="Natural landscape background"
          className="w-full h-full object-cover"
          fill
        />
        <div 
          className="w-2/3 relative left-1/2 top-[40%] min-[740px]:top-[53%] min-[844px]:top-[55%] lg:top-[35%] xl:top-[35%] z-10"
          style={{
            opacity: 1 - scrollY * 0.003,
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.4}px)`,
            willChange: "transform, opacity",
          }}
        >
          <h1 className="text-center text-2xl sm:text-3xl md:text-5xl max-[900px]:landscape:text-3xl font-bold mb-6 max-[900px]:landscape:mb-3 text-white drop-shadow-2xl animate-fade-in">
            { title }
          </h1>
          <p className="text-center text-2xl md:text-3xl max-[900px]:landscape:text-xl mb-8 max-[900px]:landscape:mb-4 text-white/90 drop-shadow-lg animate-fade-in [animation-delay:200ms]">
            { slogan }
          </p>
          <div className="flex flex-col sm:flex-row gap-4  justify-center animate-fade-in [animation-delay:400ms]">
            <Button
              asChild
              size="lg"
              className="text-lg shadow-2xl hover:scale-105 transition-transform"
            >
              <Link href={quoteButton.link}>
                {quoteButton.text}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary shadow-2xl hover:scale-105 transition-transform"
            >
              <Link href={serviceButton.link}>
                {serviceButton.text}
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating recycling icons */}
        <div
          className="absolute top-1/4 left-1/4 animate-float"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <Recycle className="h-12 w-12 text-primary/30" />
        </div>
        <div
          className="absolute top-1/3 right-1/4 animate-float"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            animation: "float 8s ease-in-out infinite 2s",
          }}
        >
          <Recycle className="h-16 w-16 text-primary/20" />
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 animate-float"
          style={{
            transform: `translateY(${scrollY * 0.25}px)`,
            animation: "float 7s ease-in-out infinite 1s",
          }}
        >
          <Recycle className="h-10 w-10 text-primary/25" />
        </div>
      </div>

      {/* Hero Hands - at bottom, hide on scroll downs */}
      <div
        className="absolute bottom-0 md:bottom-4 xl:bottom-12 left-1/2 w-[100vw] md:w-[80vw] 2xl:w-[100vw] max-w-4xl md:max-w-xl 2xl:max-w-5xl z-0 pointer-events-none max-[900px]:landscape:hidden"
        style={{
          transform: `translateX(-50%) translateY(${scrollY * 0.8}px)`,
          opacity: Math.max(0, 1 - scrollY * 0.002),
          willChange: "transform, opacity",
        }}
      >
        <Image
          src={handsUrl}
          alt="Hands holding recycling symbol"
          className="w-full h-auto drop-shadow-2xl animate-scale-in"
          width={800}
          height={600}
        />
      </div>
    </section>
  );
}

export default MultiLayerParallax;
