// src/components/sections/Hero.tsx
"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// 保持 UI 组件引用
import { HeroSection } from "../ui/heropicture—6"; 

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // 监听滚动，只为了控制那个“全屏背景变白”的效果
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // 当滑动到 30% -> 80% 时，背景层慢慢变成纯白
  const maskOpacity = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);

  const heroData = {
    titlePrefix: "In Herstory,",
    titleHighlight: "we build Femitopia",
    subtitle: (
      <>
        <span className="block mb-3">
          <strong className="text-black/90">Our Mission:</strong> Onboarding 2,000+ women into the Web3 and AI sectors annually.
        </span>
        <span className="block">
          <strong className="text-black/90">Our Vision:</strong> Empowering every woman with the technical skills to co-create a matriarchal society.
        </span>
      </>
    ),
    images: [
      "/heropicture/11.jpg",   
      "/heropicture/22.jpg",      
      "/heropicture/33.jpg",        
      "/heropicture/44.jpg",          
      "/heropicture/55.jpg",         
      "/heropicture/66.jpg",       
    ],
  };

  return (
    <section 
      ref={ref}
      // 这里保留你觉得自然的那个粉橙色渐变
      className="relative w-full bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-50 overflow-hidden"
    >
      
      {/* 1. 动态白膜：负责滑动时把背景慢慢“洗白” */}
      <motion.div 
        className="absolute inset-0 bg-white z-0 pointer-events-none"
        style={{ opacity: maskOpacity }}
      />

      {/* 2. 内容区域 */}
      <div className="relative z-10">
        <HeroSection
          titlePrefix={heroData.titlePrefix}
          titleHighlight={heroData.titleHighlight}
          subtitle={heroData.subtitle}
          images={heroData.images}
        />
      </div>

      {/* ✨✨✨ 回归自然的静态渐变 ✨✨✨ 
         1. h-40 (160px): 足够高，保证渐变非常柔和，看不出明显的白线。
         2. 不加 opacity 动画: 让它一直都在，这样底部边缘永远是柔和消失的，没有硬切边。
      */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
      
    </section>
  );
}