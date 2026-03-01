// src/components/sections/Friendlogo.tsx
"use client"
import { motion } from "framer-motion"

export const Friendlogo = () => {
  // 图片列表
  const logos = [
    "/logos/1.jpeg", "/logos/2.jpeg", "/logos/3.jpeg", "/logos/4.jpeg",
    "/logos/5.jpeg", "/logos/6.jpeg", "/logos/7.jpeg", "/logos/8.jpeg",
    "/logos/9.jpeg", "/logos/10.jpeg", "/logos/11.jpeg", "/logos/12.jpeg",
    "/logos/13.jpg", "/logos/14.jpeg", "/logos/15.jpeg", "/logos/16.jpeg",
    "/logos/17.png", "/logos/18.png", "/logos/19.png", "/logos/20.png",
    "/logos/21.jpeg", "/logos/22.png", "/logos/23.jpeg", "/logos/24.png",
    "/logos/25.jpeg",
  ]

  // 动画配置：duration 50s 适合 26 张图的密度
  const scrollingTransition = {
    duration: 50, 
    ease: "linear",
    repeat: Infinity,
  } as const; // 加上 as const 解决你的 TypeScript 报错

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        
        {/* 标题 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-[#E28769] tracking-tight">
            Support us to continue the wave!
          </h3>
        </motion.div>

        {/* 滚动容器 */}
        <div className="relative flex overflow-hidden whitespace-nowrap">
          
          {/* 轨道 1 */}
          <motion.div 
            className="flex items-center gap-10 pr-10 flex-shrink-0" 
            animate={{ x: ["0%", "-100%"] }} 
            transition={scrollingTransition}
          >
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="flex-shrink-0">
                <img 
                  src={logo} 
                  alt="Partner Logo" 
                  className="h-10 md:h-14 w-auto object-contain block"
                />
              </div>
            ))}
          </motion.div>

          {/* 轨道 2 (镜像副本实现无缝衔接) */}
          <motion.div 
            className="flex items-center gap-10 pr-10 flex-shrink-0"
            animate={{ x: ["0%", "-100%"] }}
            transition={scrollingTransition}
            aria-hidden="true"
          >
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="flex-shrink-0">
                <img 
                  src={logo} 
                  alt="" 
                  className="h-10 md:h-14 w-auto object-contain block"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
