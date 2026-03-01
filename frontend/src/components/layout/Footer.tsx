"use client";
import React from "react";
import { Github, Mail } from "lucide-react";
import { Footer as FooterCore } from "../ui/footercore"; 

// ✨ 新增：专门为展示账号名打造的高级悬浮气泡组件
const TooltipWrapper = ({ children, text }: { children: React.ReactNode; text: string }) => (
  <div className="relative group/tooltip flex items-center justify-center w-full h-full">
    {children}
    {/* 悬浮提示框：带粉色发光阴影和丝滑上浮动画 */}
    <div className="absolute bottom-[130%] left-1/2 -translate-x-1/2 px-3 py-1.5 bg-pink-500 text-white text-xs font-bold rounded-lg opacity-0 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-1 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-[0_0_15px_rgba(236,72,153,0.5)] z-[100]">
      {text}
      {/* 向下的小箭头 */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-pink-500"></div>
    </div>
  </div>
);

// 1. 自定义 X (Twitter) 官方标准 SVG
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

// 2. 自定义 小红书 文字排版图标
const XiaohongshuIcon = ({ className }: { className?: string }) => (
  <span 
    className={`font-black tracking-tighter flex items-center justify-center whitespace-nowrap ${className}`} 
    style={{ fontSize: '10px' }}
  >
    小红书
  </span>
);

// 3. 自定义 微信 (WeChat) 官方标准 SVG
const WeChatIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1024 1024" fill="currentColor" className={className}>
    <path d="M682.667 554.667a42.667 42.667 0 1 0 0-85.334 42.667 42.667 0 0 0 0 85.334zM853.333 554.667a42.667 42.667 0 1 0 0-85.334 42.667 42.667 0 0 0 0 85.334zM341.333 341.333a42.667 42.667 0 1 0 0-85.333 42.667 42.667 0 0 0 0 85.333zM554.667 341.333a42.667 42.667 0 1 0 0-85.333 42.667 42.667 0 0 0 0 85.333zM448 106.667C241.835 106.667 74.667 253.525 74.667 434.133c0 100.267 50.816 189.696 130.432 250.752L160 810.667l126.933-65.408A399.147 399.147 0 0 0 448 761.6c13.739 0 27.221-1.024 40.405-2.773-4.01-19.115-6.272-38.997-6.272-59.435 0-156.416 135.253-283.733 301.867-283.733 24.32 0 47.957 2.603 70.613 7.424C836.31 237.141 657.92 106.667 448 106.667zM768 469.333C614.912 469.333 490.667 573.91 490.667 702.933c0 129.024 124.245 233.6 277.333 233.6 29.568 0 57.941-4.224 84.48-11.904L960 977.067l-30.848-61.952c41.387-31.53 68.181-77.995 68.181-129.582 0-129.024-124.245-233.6-277.333-233.6z"/>
  </svg>
);

// 4. 自定义 Discord 官方标准 SVG
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.445.865-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.618-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.676 4.37a.07.07 0 00-.032.028C.533 9.046-.32 13.58.099 18.058a.082.082 0 00.031.056 19.908 19.908 0 005.993 3.029.078.078 0 00.084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.042-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128l.372-.291a.074.074 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01l.373.291a.077.077 0 01-.007.128 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.106c.36.698.772 1.363 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.031-.055c.5-5.177-.838-9.674-3.548-13.66a.061.061 0 00-.031-.029zM8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.333-.946 2.419-2.157 2.419z"/>
  </svg>
);

// 5. 自定义 Telegram 官方标准 SVG
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
  </svg>
);

// 6. 自定义 以太坊 (Ethereum) 标准 SVG
const EthIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 320 512" fill="currentColor" className={className}>
    <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/>
  </svg>
);

export function Footer() {
  return (
    <div className="w-full">
      <FooterCore
        logo={<img src="/mainlogo.png" alt="Herstory Logo" className="h-10 w-auto object-contain" />}
        brandName="Herstory"
        socialLinks={[
          {
            // ✨ 套用气泡组件，展示微信名
            icon: <TooltipWrapper text="公众号: 0xherstory"><WeChatIcon className="h-5 w-5" /></TooltipWrapper>,
            href: "javascript:void(0)", // ✨ 避免点击微信图标时页面乱跳
            label: "WeChat",
          },
          {
            // ✨ 套用气泡组件，展示小红书名
            icon: <TooltipWrapper text="XHS: HerstoryWeb3"><XiaohongshuIcon className="h-5 w-5" /></TooltipWrapper>,
            href: "https://www.xiaohongshu.com/search_result?keyword=HerstoryWeb3", 
            label: "Xiaohongshu",
          },
          {
            icon: <TooltipWrapper text="@HerstoryWeb3"><XIcon className="h-4 w-4" /></TooltipWrapper>,
            href: "https://twitter.com/HerstoryWeb3", 
            label: "X (Twitter)",
          },
          {
            icon: <TooltipWrapper text="0xherstory"><Github className="h-5 w-5" /></TooltipWrapper>,
            href: "https://github.com/0xherstory", 
            label: "GitHub",
          },
          {
            icon: <TooltipWrapper text="Join Discord"><DiscordIcon className="h-5 w-5" /></TooltipWrapper>,
            href: "https://discord.gg/JanMauFWg8", 
            label: "Discord",
          },
          {
            icon: <TooltipWrapper text="0xherstory@gmail.com"><Mail className="h-5 w-5" /></TooltipWrapper>,
            href: "mailto:0xherstory@gmail.com",
            label: "Email",
          },
          {
            icon: <TooltipWrapper text="Join Telegram"><TelegramIcon className="h-5 w-5" /></TooltipWrapper>,
            href: "https://t.me/+YWGMu8LNS5Y4MzQ9",
            label: "Telegram",
          },
          {
            icon: <TooltipWrapper text="0x0331...7d33"><EthIcon className="h-4 w-4" /></TooltipWrapper>,
            href: "https://etherscan.io/address/0x03310918833ce50B5AEcF3246260cB29f7137d33", 
            label: "ETH Wallet",
          }
        ]}
        mainLinks={[
          { href: "/", label: "HOME" },
          { href: "/resources", label: "RESOURCES" },
          { href: "/aboutus", label: "ABOUT US" },
        ]}
        legalLinks={[
          { href: "#", label: "Privacy Policy" },
          { href: "#", label: "Terms of Service" },
        ]}
        copyright={{
          text: "© 2026 Herstory.",
          license: "Empowering Women in Web3.",
        }}
      />
    </div>
  );
}