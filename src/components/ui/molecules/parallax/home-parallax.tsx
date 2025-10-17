import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/atoms/button/button";
import { Recycle } from "lucide-react";
import Image from "next/image";
import { ParallaxProps } from "./parallax.types";

interface ParallaxComponentProps {
  parallaxContent: ParallaxProps;
}


const MultiLayerParallax = ({ parallaxContent }: ParallaxComponentProps) => {
  const images = parallaxContent.imagesCollection.items;

  const backgroundUrl = images[0].media.url;
  const handsUrl = images[2].media.url;

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

      {/* Hero Hands - at bottom, hide on scroll down */}
      <div
        className="absolute bottom-0 md:bottom-10  left-1/2 w-[100vw]  md:w-[50vw] max-w-4xl md:max-w-xl  z-0"
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

      {/* Content Layer - positioned above hands */}
      <div className="absolute inset-0 flex items-start justify-center pt-24 md:pt-28 3xl:pt-32 z-20">
        <div
          className="container mx-auto px-4 text-center"
          style={{
            opacity: 1 - scrollY * 0.003,
            transform: `translateY(${scrollY * 0.4}px)`,
            willChange: "transform, opacity",
          }}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl animate-fade-in">
            SERVIECOLÓGICOS
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-white/90 drop-shadow-lg animate-fade-in [animation-delay:200ms]">
            Transformamos residuos en oportunidades para un futuro más sostenible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
            <Button size="lg" className="text-lg shadow-2xl hover:scale-105 transition-transform">
              Solicitar Cotización
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary shadow-2xl hover:scale-105 transition-transform"
            >
              Conocer Servicios
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10"
        style={{
          opacity: 1 - scrollY * 0.01,
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div> */}
    </section>
  );
}

export default MultiLayerParallax;


// const MultiLayerParallax = ({ parallaxContent }: ParallaxComponentProps) => {
//   const images = parallaxContent.imagesCollection.items;

//   const backgroundUrl = images[0].media.url;
//   const middlegroundUrl = images[1].media.url;
//   const handsUrl = images[2].media.url;

//   const ref = useRef<HTMLDivElement>(null);
//   const lenisRef = useRef<LenisRef>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   });

//   const backgroundY = useTransform(scrollYProgress, [0, 1], ["-45%", "30%"]);
//   const middlegroundY = useTransform(scrollYProgress, [0, 1], ["-45%", "30%"]);
//   const handsY = useTransform(scrollYProgress, [0, 1.05], ["-60%", "30%"]);

//   useEffect(() => {
//     function update(data: { timestamp: number }) {
//       const time = data.timestamp;
//       lenisRef.current?.lenis?.raf(time);
//     }

//     frame.update(update, true);

//     return () => cancelFrame(update);
//   }, []);

//   return (
//     <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
//       <figure
//         ref={ref}
//         className="relative h-[40vh] md:h-[54vh] overflow-hidden"
//       >
//         <motion.div
//           className="absolute w-full h-[55vh] inset-0 z-0 top-[-20%] md:top-[-10%]"
//           style={{ y: backgroundY, filter: "blur(2px)" }}
//         >
//           <Image
//             src={backgroundUrl}
//             alt="background"
//             className="w-full h-full object-cover"
//             fill
//           />
//         </motion.div>
//         <motion.div
//           className="absolute w-full h-[55vh] inset-0 z-10 top-[-20%] left-[0%] md:top-1 md:left-[0%]"
//           style={{ y: middlegroundY, filter: "blur(0.3px)" }}
//         >
//           <Image
//             src={middlegroundUrl}
//             alt="middleground"
//             className="w-full h-full object-fill object-center"
//             fill
//           />
//         </motion.div>
//         <motion.div
//           className="absolute w-[90vw] h-[60vw] md:w-[90vh] md:h-[80vh] inset-0 z-20 left-1/2 top-[65%] md:top-9/20 -translate-x-1/2 -translate-y-1/2"
//           style={{ y: handsY }}
//         >
//           <Image
//             src={handsUrl}
//             alt="manos"
//             className="w-full h-full object-cover"
//             fill
//           />
//         </motion.div>
//       </figure>
//     </ReactLenis>
//   );
// };

// export default MultiLayerParallax;
