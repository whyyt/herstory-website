// src/components/ui/hero-section.tsx
"use client"
import { useRef } from "react"
import { MeshGradient } from "@paper-design/shaders-react"
import { motion, type Variants } from "framer-motion"
import { cn } from '../../lib/utils'

// --- 接口定义 ---
interface HeroSectionProps {
  titlePrefix?: string;
  titleHighlight?: string;
  subtitle: string | React.ReactNode;
  images: string[]; // 确保传入至少 6 张图片
  className?: string;
}

// --- 动画变体 ---
const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const floatingVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    rotate: [0, 1, -1, 0],
    transition: {
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const HeroSection = ({
  titlePrefix = "In Herstory,",
  titleHighlight = "we build Femitopia",
  subtitle,
  images,
  className
}: HeroSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  // HerStory 品牌色
  const brandColors = {
    pink: "#ec4899",
    yellow: "#facc15",
    orange: "#fb923c",
    white: "#ffffff",
  };

  return (
    <div ref={containerRef} className={cn("relative w-full overflow-hidden bg-white min-h-screen", className)}>
      
      {/* 1. SVG 滤镜定义 */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.95 0" result="tint" />
          </filter>
        </defs>
      </svg>

      {/* 2. 背景层：Mesh Gradient */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={[brandColors.white, brandColors.pink, brandColors.yellow, brandColors.orange, brandColors.white]}
        speed={0.3}
      />
      
      {/* 3. 主要内容区域 */}
      <div className="relative z-20 container mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 pt-32 pb-20 min-h-screen">
        
        {/* --- 左侧：文字内容 --- */}
        <div className="flex flex-col justify-center text-left order-2 lg:order-1">
          {/* 标题 */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-black mb-8 leading-none tracking-tight drop-shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block mb-2">{titlePrefix}</span>
            <motion.span className="block font-black tracking-tighter">
              {titleHighlight}.
            </motion.span>
          </motion.h1>
          {/* 副标题 */}
          <motion.div
            className="text-lg md:text-xl font-medium text-black/70 mb-10 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle}
          </motion.div>
        </div>

        {/* --- 右侧：图片拼贴 (大图置顶版) --- */}
        <div className="relative h-[500px] w-full sm:h-[650px] order-1 lg:order-2 flex items-center justify-center pointer-events-none">
           <motion.div
            className="relative w-full h-full max-w-[650px] transform scale-100 lg:translate-x-15 origin-right"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
          >
            {/* 漂浮光斑 */}
            <motion.div
              className="absolute top-0 left-0 h-40 w-40 rounded-full bg-pink-400/20 blur-3xl"
              variants={floatingVariants}
              animate="animate"
            />
            <motion.div
              className="absolute bottom-10 right-0 h-32 w-32 rounded-full bg-yellow-400/20 blur-3xl"
              variants={floatingVariants}
              animate="animate"
              style={{ transitionDelay: '0.5s' }}
            />
            
            {/* === 六图布局 (层级重构) === */}

            {/* 图1 (Server): 核心大图 (z-40) - 【关键修改】提到最上层，绝对主角 */}
            <motion.div
              className="absolute left-[15%] top-[20%] h-56 w-56 rounded-[2.5rem] shadow-2xl sm:h-80 sm:w-80 z-40"
              style={{ transformOrigin: 'center center' }}
              variants={imageVariants}
            >
              <img src={images[0]} alt="HerStory 1" className="h-full w-full rounded-[2.5rem] object-cover" />
            </motion.div>

            {/* 图2 (Laptop): 左翼 (z-10) - 沉到底层 */}
            <motion.div
              className="absolute left-[-5%] top-[10%] h-40 w-40 rounded-[2rem] shadow-xl sm:h-56 sm:w-56 z-45"
              style={{ transformOrigin: 'right center' }}
              variants={imageVariants}
            >
              <img src={images[1]} alt="HerStory 2" className="h-full w-full rounded-[2rem] object-cover opacity-90" />
            </motion.div>

            {/* 图4 (High Five): 右上角 (z-20) - 沉到中层，被大图遮挡左下角 */}
            <motion.div
              className="absolute right-0 top-0 h-36 w-36 rounded-[2rem] shadow-xl sm:h-52 sm:w-52 z-20"
              style={{ transformOrigin: 'bottom left' }}
              variants={imageVariants}
            >
              <img src={images[3]} alt="HerStory 4" className="h-full w-full rounded-[2rem] object-cover" />
            </motion.div>

            {/* 图5 (Notebooks): 左下前景 (z-30) - 次高层，稍微被大图压一点 */}
            <motion.div
              className="absolute left-[5%] bottom-[5%] h-32 w-32 rounded-[1.5rem] shadow-xl sm:h-44 sm:w-44 z-30"
              style={{ transformOrigin: 'top right' }}
              variants={imageVariants}
            >
              <img src={images[4]} alt="HerStory 5" className="h-full w-full rounded-[1.5rem] object-cover" />
            </motion.div>

             {/* 图3 (Cafe): 右下平衡 (z-10) - 沉到底层 */}
            <motion.div
              className="absolute right-[10%] bottom-[10%] h-36 w-36 rounded-[2rem] shadow-lg sm:h-48 sm:w-48 z-10"
              style={{ transformOrigin: 'top left' }}
              variants={imageVariants}
            >
              <img src={images[2]} alt="HerStory 3" className="h-full w-full rounded-[2rem] object-cover opacity-90" />
            </motion.div>

            {/* 图6 (Edge): 右侧边缘补充 (z-50) - 【唯一例外】小装饰依然飘在最上面 */}
            <motion.div
              className="absolute right-[-5%] top-[45%] h-24 w-24 rounded-[1.2rem] shadow-xl sm:h-32 sm:w-32 z-50"
              style={{ transformOrigin: 'left center' }}
              variants={imageVariants}
            >
              <img src={images[5]} alt="HerStory 6" className="h-full w-full rounded-[1.2rem] object-cover" />
            </motion.div>

          </motion.div>
        </div>

      </div>
    </div>
  )
}