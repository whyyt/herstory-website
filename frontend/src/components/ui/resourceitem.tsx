"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface ResourceRowProps {
  index: number;
  titleEn: string;
  titleZh: string;
  emoji: string;
  url: string;
}

export const ResourceRow: React.FC<ResourceRowProps> = ({ index, titleEn, titleZh, emoji, url }) => {
  const isStatic = titleEn === titleZh;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      // ✨ 1. 图1背景：圆角胶囊 (rounded-full) + 玻璃质感 (bg-white/5)
      // ✨ 2. 外部居中：justify-center 让整个胶囊内容对齐中心
      className="group w-full flex items-center justify-center py-3 md:py-3.5 px-6 bg-white/5 hover:bg-white/10 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300 cursor-pointer overflow-hidden shadow-lg"
    >
      {/* ✨ 3. 盒中盒：把 emoji 和文字锁在这个固定宽度的框里，并向右偏移 (ml-16) */}
      <div className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[460px] flex items-center justify-start gap-4 md:gap-6 ml-10 md:ml-16">
        
        {/* Emoji：不再脱队，紧紧贴着文字 */}
        <div className="flex items-center justify-center flex-shrink-0 z-10 w-8">
          <span className="text-[20px] md:text-[22px] group-hover:scale-110 transition-transform duration-300">{emoji}</span>
        </div>
        
        {/* 文字区域：稍微缩小一点点，强制单行 */}
        <div className="relative flex-1 flex items-center overflow-hidden h-7">
          {isStatic ? (
            // ✨ 字体调小为 16/17px，显得更精致
            <span className="w-full text-left text-[16px] md:text-[17px] font-bold text-white tracking-wide group-hover:text-pink-400 transition-colors duration-300 whitespace-nowrap truncate px-1">
              {titleEn}
            </span>
          ) : (
            <div className="grid grid-cols-1 grid-rows-1 items-center justify-items-start w-full">
              <span className="col-start-1 row-start-1 w-full text-left text-[16px] md:text-[17px] font-bold text-white/95 tracking-wide transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-100 translate-y-0 group-hover:opacity-0 group-hover:-translate-y-full whitespace-nowrap truncate px-1">
                {titleEn}
              </span>
              <span className="col-start-1 row-start-1 w-full text-left text-[16px] md:text-[17px] font-black text-pink-400 tracking-widest transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 drop-shadow-[0_0_10px_rgba(236,72,153,0.4)] whitespace-nowrap truncate px-1">
                {titleZh}
              </span>
            </div>
          )}
        </div>

      </div>
    </motion.a>
  );
};