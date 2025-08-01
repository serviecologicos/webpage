import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { ParallaxProps } from "./parallax.types";

interface ParallaxComponentProps {
  parallaxContent?: ParallaxProps;
}

const MultiLayerParallax = ({ parallaxContent }: ParallaxComponentProps) => {

  const images = parallaxContent?.imagesCollection.items || [];
  
  // Extract image URLs with fallbacks
  const backgroundUrl = images[0]?.media?.url || "/background.webp";
  const middlegroundUrl = images[1]?.media?.url || "/middleground.webp";
  const handsUrl = images[2]?.media?.url || "/manos.webp";

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-39%", "30%"]);
  const middlegroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);
  const handsY = useTransform(scrollYProgress, [1.8, 0], ["-60%", "30%"]);

  return (
    <>
      <div ref={ref} className="relative h-[40vh] md:h-[54vh] overflow-hidden">
        <motion.div
          className="absolute w-full h-[55vh] inset-0 z-0 top-[-20%] md:top-[0%]"
          style={{ y: backgroundY, filter: "blur(2px)" }}
        >
          <Image
            src={backgroundUrl}
            alt="background"
            className="w-full h-full object-cover"
            fill
          />
        </motion.div>
        <motion.div
          className="absolute w-full h-[55vh] inset-0 z-10 top-[-20%] left-[0%] md:top-1 md:left-[10%]"
          style={{ y: middlegroundY, filter: "blur(1px)" }}
        >
          <Image
            src={middlegroundUrl}
            alt="middleground"
            className="w-full h-full object-cover object-botoom"
            fill
          />
        </motion.div>
        <motion.div
          className="absolute w-[90vw] h-[60vw] md:w-[90vh] md:h-[80vh] inset-0 z-20 left-1/2 top-[70%] md:top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ y: handsY }}
        >
          <Image
            src={handsUrl}
            alt="manos"
            className="w-full h-full object-cover"
            fill
          />
        </motion.div>
      </div>

      <div className="w-full text-center p-8 bg-white">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Servicios Ecológicos Sostenibles
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Comprometidos con el medio ambiente y la preservación de nuestros
          recursos naturales. Ofrecemos soluciones innovadoras para un futuro
          más verde y sostenible. lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Consectetur in, iusto ratione voluptatum odit voluptate amet
          cupiditate. Reiciendis sapiente optio deserunt, sequi necessitatibus
          totam dicta inventore neque animi quasi ipsam.
        </p>
      </div>
    </>
  );
};

export default MultiLayerParallax;
