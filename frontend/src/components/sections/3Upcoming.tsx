"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    type: "FEATURED",
    title: "Herstory 30 DAYS ONLINE SOLIDITY BOOTCAMP",
    date: "March 01 - 31, 2026",
    format: "Online",
    description: "Herstory's 30-day Women's Solidity Bootcamp kicks off March 1st—let's code our future together!",
    tags: ["solidity", "Prizes", "online"],
    image: "/upcomingpicture/1.jpg", 
  },
];

export const Upcoming = () => {
  const featuredEvent = events.find((e) => e.type === "FEATURED");

  return (
    <div className="relative">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* ✨ 标题区域：代码、格式、颜色已完全对齐 Our Chapters */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-black tracking-tighter mb-4"
          >
            Upcoming Events.
          </motion.h2>
        </div>

        {/* 1. 主打活动卡片 (保持与上一版相同) */}
        {featuredEvent && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full rounded-[2.5rem] overflow-hidden bg-black text-white shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-stretch">
              
              <div 
                className="relative h-56 md:h-auto md:w-[50%] bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url(${featuredEvent.image})` }}
              />
              
              <div className="py-8 px-8 md:py-10 md:px-14 md:w-[50%] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/30 blur-[100px] rounded-full" />
                <div className="relative z-10">
                   <div className="flex gap-3 mb-6">
                     {featuredEvent.tags.map(tag => (
                       <span key={tag} className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold tracking-widest uppercase border border-white/20">
                         {tag}
                       </span>
                     ))}
                   </div>
                   <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">{featuredEvent.title}</h3>
                   <div className="space-y-4 mb-10 text-gray-300">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-pink-500" />
                        <span className="font-medium text-lg text-white">{featuredEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-orange-500" />
                        <span>{featuredEvent.format}</span>
                      </div>
                   </div>
                   <button className="w-full md:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-pink-500 hover:text-white transition-all flex items-center justify-center gap-2 group">
                     Register Now
                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};