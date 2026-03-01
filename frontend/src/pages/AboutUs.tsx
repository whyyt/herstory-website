"use client"
import { motion } from 'framer-motion'
import { Navbar } from '../components/layout/Navbar'
import { InfiniteSlider } from '../components/ui/loopinfinate'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-transparent">
      
      {/* Navbar 悬浮在最上方 */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <main className="relative w-full h-screen overflow-hidden">
        {/* 底层：全屏视差滚动相册 */}
        <div className="absolute inset-0 z-0">
          <InfiniteSlider />
        </div>

        {/* 顶层：悬浮的文字与黑色半透明遮罩 */}
        <div className="absolute inset-0 z-10 bg-black/70 flex items-center justify-center pt-20 pointer-events-none">
          {/* 👇 注意这里的容器类名 */}
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-white">
              
              {/* 左侧：OUR VISION */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-black text-pink-500 tracking-tighter drop-shadow-lg">
                  OUR VISION
                </h2>
                <div className="space-y-4 text-base md:text-lg text-gray-200 leading-relaxed font-medium">
                  <p>
                    Herstory is building a woman-focused, decentralized narrative space. We are dedicated to creating a safe and supportive sanctuary within the realms of technology, education, and culture.
                  </p>
                  <p>
                    Here, women can naturally narrate their own stories, reclaiming the confidence and power of their own narratives. We empower women to freely use technology as a medium for self-expression, creating sustainable economic and social value for themselves and the communities they support.
                  </p>
                  <p className="italic font-bold text-white mt-4 drop-shadow-md">
                    Ensuring women are no longer a footnote in history; together, we co-create Herstory.
                  </p>
                </div>
              </motion.div>

              {/* 右侧：OUR MISSION */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-4xl md:text-5xl font-black text-pink-500 tracking-tighter drop-shadow-lg">
                  OUR MISSION
                </h2>
                <div className="space-y-4 text-base md:text-lg text-gray-200 leading-relaxed font-medium">
                  <p className="font-bold text-white text-xl drop-shadow-md">
                    As a co-learning and co-creation organization, Herstory is committed to accompanying women as they express themselves boldly, build deep connections, and create history in both physical and virtual spaces.
                  </p>
                  
                  <p className="uppercase tracking-widest text-sm text-pink-400 font-bold pt-2">
                    Currently, we achieve this through:
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-pink-500 flex-shrink-0 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
                      <p>
                        <strong className="text-white drop-shadow-md">All-Women Web3 Bootcamp:</strong> Breaking down the walls of stereotypes and information barriers to co-create and share new career opportunities.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-pink-500 flex-shrink-0 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
                      <p>
                        <strong className="text-white drop-shadow-md">Herstory Platform:</strong> Exploring innovative ways for women to express themselves and co-create within the Web3 ecosystem.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-pink-500 flex-shrink-0 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
                      <p>
                        <strong className="text-white drop-shadow-md">Gender Research & Translation:</strong> Bridging the knowledge gap in the Chinese-speaking world by translating pivotal gender studies.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-pink-500 flex-shrink-0 shadow-[0_0_8px_rgba(236,72,153,0.8)]" />
                      <p>
                        <strong className="text-white drop-shadow-md">Local Activities:</strong> Activating women's voices in the public sphere and building a decentralized support network.
                      </p>
                    </li>
                  </ul>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

      </main>

      {/* ✨ 修复点：添加了与上方完全一致的包裹层（container），让按钮物理左对齐 */}
      <div className="fixed bottom-10 left-0 w-full z-50 flex justify-center pointer-events-none">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            onClick={() => navigate("/")}
            // 将 flex 改成了 inline-flex，让按钮自己包裹内容，不占满全宽
            className="inline-flex items-center gap-3 px-6 py-3 bg-pink-500/20 hover:bg-pink-500 backdrop-blur-xl border border-pink-500/50 text-white rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)] group cursor-pointer pointer-events-auto"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </motion.button>
        </div>
      </div>
      
    </div>
  )
}