"use client";
import React, { useRef } from "react";
import { ReactLenis } from "lenis/react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

const SECTION_HEIGHT = 1500;

export const SmoothScrollHero = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-white -z-20" />
      <ReactLenis root>
        <Hero />
        <section className="relative z-10">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] -z-10" />
          {children}
        </section>
      </ReactLenis>
    </div>
  );
};

const Hero = () => {
  return (
    <div style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} className="relative w-full">
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  const backgroundSize = useTransform(scrollY, [0, SECTION_HEIGHT + 500], ["170%", "100%"]);
  return (
    <motion.div
      className="fixed top-0 left-0 h-screen w-full -z-10"
      style={{
        clipPath,
        backgroundSize,
        backgroundImage: "url('/resourcepicture/11.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  const { scrollY } = useScroll();
  const imagesOpacity = useTransform(scrollY, [0, 400], [0, 1]);
  return (
    <motion.div style={{ opacity: imagesOpacity }} className="mx-auto max-w-5xl px-4 pt-[200px] relative z-0">
      <ParallaxImg src="/resourcepicture/22.jpg" alt="P1" start={-200} end={200} className="w-1/3 rounded-xl shadow-2xl" />
      <ParallaxImg src="/resourcepicture/33.jpg" alt="P2" start={200} end={-250} className="mx-auto w-2/3 rounded-xl shadow-2xl" />
      <ParallaxImg src="/resourcepicture/44.jpg" alt="P3" start={-200} end={200} className="ml-auto w-1/3 rounded-xl shadow-2xl" />
      <ParallaxImg src="/resourcepicture/55.jpg" alt="P4" start={0} end={-500} className="ml-24 w-5/12 rounded-xl shadow-2xl" />
    </motion.div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: [`${start}px end`, `end ${end * -1}px`] });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
  return <motion.img src={src} alt={alt} className={className} ref={ref} style={{ transform, opacity }} />;
};