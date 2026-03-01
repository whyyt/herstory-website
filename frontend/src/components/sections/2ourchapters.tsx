// src/components/sections/PastEvents.tsx
"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Quote } from "lucide-react"

const cohorts = [
  {
    season: "Chapter 06",
    title: "#6 Women Web3 Wave",
    tag: "WINTER 2026/1/1 ～ 2026/1/7",
    description: "Embracing with heart, creating with code—a nurturing space for beginners to build AI agents through collective growth.",
    image: "/Chapterpicture/06.JPG", 
    color: "from-pink-500/10 to-orange-500/10",
    // ✨ 新增 url
    url: "https://paragraph.com/@herstory/%E3%80%90www6%E5%9B%9E%E9%A1%BE%E3%80%91-%E4%B8%80%E5%8F%AA%E6%89%8B%E6%8B%A5%E6%8A%B1%EF%BC%8C%E4%B8%80%E5%8F%AA%E6%89%8B%E5%88%9B%E9%80%A0?referrer=0xC923e0230E4f3AE1Cb03bb162073A9C11b02b3c7"
  },
  {
    season: "Chapter 05",
    title: "#5 Women Web3 Wave",
    tag: "FALL 2025/09/22 ～ 2025/09/28",
    description: "A cozy, supportive space where curious beginners demystify consumer crypto together, blooming through collective growth and sisterhood.",
    image: "/Chapterpicture/05.jpeg",
    color: "from-purple-500/10 to-pink-500/10",
    // ✨ 新增 url
    url: "https://paragraph.com/@herstory/%E3%80%90www5%E3%80%91%E7%AC%AC5%E6%9C%9F%E5%85%A8%E5%A5%B3web3%E5%AD%A6%E4%B9%A0%E8%90%A5%E5%9B%9E%E9%A1%BE%E6%8A%A5%E5%91%8A"
  },
  {
    season: "Chapter 04",
    title: "#4 Women Web3 Wave",
    tag: "SPRING 2025/05/01 ～ 2025/05/07",
    description: "A transformative six-day female utopia, empowering builders to co-create a visionary future through immersive Web3 co-learning.",
    image: "/Chapterpicture/04.jpeg",
    color: "from-blue-500/10 to-cyan-500/10",
    // ✨ 新增 url
    url: "https://paragraph.com/@herstory/www4%E5%85%B1%E5%AD%A6%E5%9B%9E%E9%A1%BE%EF%BD%9C-%E7%94%A86%E5%A4%A9%E5%85%B1%E5%BB%BA%E7%9A%84%E5%A5%B3%E6%80%A7%E4%B9%8C%E6%89%98%E9%82%A6%EF%BC%8C%E4%BB%8E%E6%9C%AA%E6%9C%89%E8%BF%87%E7%9A%84%E5%B9%B8%E7%A6%8F%E5%AD%A6%E4%B9%A0%E6%97%B6%E5%85%89"
  },
  {
    season: "Chapter 03",
    title: "#3 Women Web3 Wave",
    tag: "WINTER 2024/11/01 ～ 2024/11/18",
    description: "A vibrant Web3 sanctuary in Bangkok's 'Blue House,' uniting global women builders through community and sisterhood",
    image: "/Chapterpicture/03.JPG",
    color: "from-yellow-500/10 to-orange-500/10",
    // ✨ 新增 url
    url: "https://paragraph.xyz/@herstory/曼谷femitopia：蓝房子里的她世界（中）"
  },
  {
    season: "Chapter 02",
    title: "#2 Women Web3 Wave",
    tag: "WINTER 2023/12/31 ～ 2024/01/02",
    description: "A collaborative journey in Guangzhou where 20 women builders shipped their first functional Web3 prototypes together.",
    image: "/Chapterpicture/02.jpeg",
    color: "from-green-500/10 to-teal-500/10",
    // ✨ 新增 url
    url: "https://paragraph.xyz/@herstory/全女web3新手村-第二期-结营啦！"
  },
  {
    season: "Chapter 01",
    title: "#1 Women Web3 Wave",
    tag: "FALL 2023/10/01 ～ 2023/10/07",
    description: "An immersive all-female Web3 bootcamp in Guangzhou empowering novice builders to evolve from zero to one.",
    image: "/Chapterpicture/01.jpg",
    color: "from-rose-500/10 to-pink-500/10",
    // ✨ 新增 url
    url: "https://paragraph.xyz/@herstory/广州全女web3新手村，结营啦！"
  }
]

export const PastEvents = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* 氛围背景保持不变 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-pink-50/50 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-orange-50/50 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* 标题部分 - 稍微收紧间距 */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-4"
          >
            Our Chapters
          </motion.h2>
          <p className="text-lg text-black/50 max-w-2xl font-medium leading-relaxed">
            Witness the evolution of our builder community through every shipped project.
          </p>
        </div>

        {/* 列表容器 - 减小卡片间的间距 (gap-12 -> gap-8) */}
        <div className="flex flex-col gap-8 md:gap-10">
          {cohorts.map((item, index) => {
            const isReversed = index % 2 !== 0;

            return (
              // ✨ 这里把 motion.div 换成了 motion.a，并加上了 href、target 和 rel 属性
              // ✨ 并且在 className 里加上了 cursor-pointer 让鼠标放上去变成小手
              <motion.a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`group cursor-pointer relative flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch bg-gradient-to-br ${item.color} rounded-[2.5rem] border border-black/5 overflow-hidden hover:shadow-xl transition-all duration-500`}
              >
                {/* 文字叙事区 */}
                <div className="py-8 px-8 md:py-10 md:px-14 md:w-[60%] flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-black tracking-[0.2em] text-pink-600 uppercase">
                      {item.season}
                    </span>
                    <span className="h-3 w-[1px] bg-black/10" />
                    <span className="text-[10px] font-bold tracking-widest text-black/40 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  {/* 引用图标缩小 */}
                  <Quote className="w-8 h-8 text-pink-500/10 mb-3 -ml-1" />
                  
                  {/* 标题字号稍微缩小，增加紧凑感 */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4 tracking-tight leading-none group-hover:text-pink-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* 描述文字限制字数或行数 */}
                  <p className="text-sm md:text-base text-black/70 leading-relaxed font-medium mb-6 max-w-md line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] font-black text-black uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                    <span>Explore Cohort</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                  </div>
                </div>

                {/* 视觉形象区 */}
                <div className="relative h-56 md:h-auto md:w-[40%] overflow-hidden">
                  <div className="absolute inset-0 bg-black/5 mix-blend-overlay z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000";
                    }}
                  />
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}