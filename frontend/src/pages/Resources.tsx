"use client";
import React from 'react';
import { SmoothScrollHero } from '../components/ui/modern-hero';
import { ResourceRow } from '../components/ui/resourceitem';

const resourcesData = [
  { id: 1, titleEn: "Free Learning Resources Collection", titleZh: "免费学习资料大合集", emoji: "📄", url: "https://0xherstory.notion.site/430883589f584072a3b28c5f566d0872" },
  { id: 2, titleEn: "Google Official Prompt Engineering Guide", titleZh: "Google 官方提示工程白皮书", emoji: "🪩", url: "https://0xherstory.notion.site/Google-Prompt-Engineering-1d906421268880509e6fe7706a7c5d34" },
  { id: 3, titleEn: "Community Shared Knowledge Resources", titleZh: "群友分享", emoji: "📗", url: "https://0xherstory.notion.site/3175ad8cf1014000afcfb776adae66ac" },
  { id: 4, titleEn: "2025 Web3 Hackathon Calendar (June-Dec)", titleZh: "2025年web3黑客松列表", emoji: "🪪", url: "https://0xherstory.notion.site/2025-6-12-web3-216064212688800cafc8fc51b4d939f6" },
  { id: 5, titleEn: "Jobs", titleZh: "Jobs", emoji: "📬", url: "https://0xherstory.notion.site/Jobs-21806421268880b28b2ce303624ab13a" },
  { id: 6, titleEn: "Web3 Communities & Co-learning Groups", titleZh: "Web3社区合集", emoji: "⚽", url: "https://0xherstory.notion.site/2750642126888012ac93d77f455fe403" },
  { id: 7, titleEn: "AI Fundamentals Free Learning Materials", titleZh: "AI 免费学习资料", emoji: "🧠", url: "https://0xherstory.notion.site/AI-27506421268880aa9da0e8b24206b4e4" },
  { id: 8, titleEn: "Web3 Beginner Coding Guide (0 Base)", titleZh: "0基础入门代码", emoji: "🪡", url: "https://0xherstory.notion.site/0-28c06421268880348b2df6fd79ffa525" },
  { id: 9, titleEn: "30 Days Solidity Challenge - Start Here", titleZh: "30天Solidity挑战", emoji: "📆", url: "https://0xherstory.notion.site/30-Solidity-28c06421268880d78c1be4b810d12647" }
];

export default function Resources() {
  return (
    <SmoothScrollHero>
      <div className="w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-6 relative z-10">
        
        {/* ✨ 将容器宽度锁定在 max-w-3xl，让胶囊背景长度刚好 */}
        <div className="w-full max-w-3xl flex flex-col gap-3 md:gap-4">
          {resourcesData.map((item, index) => (
            <ResourceRow 
              key={item.id}
              index={index}
              titleEn={item.titleEn}
              titleZh={item.titleZh}
              emoji={item.emoji}
              url={item.url}
            />
          ))}
        </div>
        
      </div>
    </SmoothScrollHero>
  );
}