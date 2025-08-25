import React, { useRef, useEffect } from "react";

import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import {
  motion,
  useScroll,
  useTransform,
  frame,
  cancelFrame,
} from "motion/react";
import Image from "next/image";
import { ParallaxProps } from "./parallax.types";

interface ParallaxComponentProps {
  parallaxContent: ParallaxProps;
}

const MultiLayerParallax = ({ parallaxContent }: ParallaxComponentProps) => {
  const images = parallaxContent.imagesCollection.items;

  const backgroundUrl = images[0].media.url;
  const middlegroundUrl = images[1].media.url;
  const handsUrl = images[2].media.url;

  const ref = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<LenisRef>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-45%", "30%"]);
  const middlegroundY = useTransform(scrollYProgress, [0, 1], ["-45%", "30%"]);
  const handsY = useTransform(scrollYProgress, [0, 1.05], ["-60%", "30%"]);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <figure
        ref={ref}
        className="relative h-[40vh] md:h-[54vh] overflow-hidden"
      >
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
          className="absolute w-full h-[55vh] inset-0 z-10 top-[-20%] left-[0%] md:top-1 md:left-[0%]"
          style={{ y: middlegroundY, filter: "blur(0.3px)" }}
        >
          <Image
            src={middlegroundUrl}
            alt="middleground"
            className="w-full h-full object-fill object-center"
            fill
          />
        </motion.div>
        <motion.div
          className="absolute w-[90vw] h-[60vw] md:w-[90vh] md:h-[80vh] inset-0 z-20 left-1/2 top-[62%] md:top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ y: handsY }}
        >
          <Image
            src={handsUrl}
            alt="manos"
            className="w-full h-full object-cover"
            fill
          />
        </motion.div>
      </figure>
    </ReactLenis>
  );
};

export default MultiLayerParallax;
