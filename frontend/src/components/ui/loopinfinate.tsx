"use client"

import * as React from "react";

interface ProjectData {
  title: string;
  image: string;
  category: string;
  year: string;
  description: string;
}

const PROJECT_DATA: ProjectData[] = [
  {
    title: "WWW1 Guangzhou",
    image: "/Chapterpicture/01.jpg", 
    category: "Web3 Bootcamp",
    year: "2023",
    description: "From the unknown to creation. 6 days of entry-level co-learning.",
  },
  {
    title: "Femitopia Bangkok",
    image: "/Chapterpicture/02.jpeg", 
    category: "Devcon Residency",
    year: "2024",
    description: "A vibrant sanctuary uniting global women builders.",
  },
  {
    title: "HerSolidity Challenge",
    image: "/Chapterpicture/03.JPG", 
    category: "Developer Training",
    year: "2024",
    description: "30 days, 1159 PRs, closing the gender gap in tech.",
  },
  {
    title: "NüShu & Crypto",
    image: "/Chapterpicture/04.jpeg", 
    category: "Cultural Co-learning",
    year: "2024",
    description: "Reintroducing Nüshu through blockchain and AI.",
  },
  {
    title: "Consumer Crypto",
    image: "/Chapterpicture/05.jpeg", 
    category: "WWW5 Residency",
    year: "2024",
    description: "Demystifying crypto, blooming through sisterhood.",
  },
  {
    title: "Mini Female Hackathon",
    image: "/Chapterpicture/06.JPG", 
    category: "Hackathon",
    year: "2024",
    description: "Empowering female developers to build and innovate.",
  },
];

const CONFIG = {
  SCROLL_SPEED: 0.75,
  LERP_FACTOR: 0.05,
  MAX_VELOCITY: 150,
  SNAP_DURATION: 500,
};

const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

export const InfiniteSlider = () => {
  const state = React.useRef({
    currentY: 0,
    targetY: 0,
    isDragging: false,
    isSnapping: false,
    snapStart: { time: 0, y: 0, target: 0 },
    lastScrollTime: Date.now(),
    dragStart: { y: 0, scrollY: 0 },
    projectHeight: 0,
  });

  const projectsRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const imgsRef = React.useRef<Map<number, HTMLImageElement>>(new Map());
  const parallaxState = React.useRef<Map<number, number>>(new Map());
  const requestRef = React.useRef<number>(0);

  const updateParallax = (img: HTMLImageElement | null, scroll: number, index: number, height: number) => {
    if (!img) return;
    let current = parallaxState.current.get(index) || 0;
    const target = (-scroll - index * height) * 0.2;
    current = lerp(current, target, 0.1);
    
    if (Math.abs(current - target) > 0.01) {
        img.style.transform = `translateY(${current}px) scale(1.3)`;
        parallaxState.current.set(index, current);
    }
  };

  const updateSnap = () => {
    const s = state.current;
    const progress = Math.min((Date.now() - s.snapStart.time) / CONFIG.SNAP_DURATION, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    s.targetY = s.snapStart.y + (s.snapStart.target - s.snapStart.y) * eased;
    if (progress >= 1) s.isSnapping = false;
  };

  const snapToProject = () => {
    const s = state.current;
    const current = Math.round(-s.targetY / s.projectHeight);
    const target = -current * s.projectHeight;
    s.isSnapping = true;
    s.snapStart = { time: Date.now(), y: s.targetY, target: target };
  };

  const updatePositions = () => {
    const s = state.current;
    projectsRef.current.forEach((el, index) => {
      const y = index * s.projectHeight + s.currentY;
      el.style.transform = `translateY(${y}px)`;
      const img = imgsRef.current.get(index) || null;
      updateParallax(img, s.currentY, index, s.projectHeight);
    });
  };

  const animate = () => {
    const s = state.current;
    const now = Date.now();

    if (!s.isSnapping && !s.isDragging && now - s.lastScrollTime > 100) {
      const snapPoint = -Math.round(-s.targetY / s.projectHeight) * s.projectHeight;
      if (Math.abs(s.targetY - snapPoint) > 1) snapToProject();
    }

    if (s.isSnapping) updateSnap();
    if (!s.isDragging) {
      s.currentY += (s.targetY - s.currentY) * CONFIG.LERP_FACTOR;
    }

    updatePositions();
  };
  
  const animationLoop = () => {
     if (window.scrollY < window.innerHeight) {
         animate();
     }
     requestRef.current = requestAnimationFrame(animationLoop);
  };

  React.useEffect(() => {
    state.current.projectHeight = window.innerHeight;
    
    const onWheel = (e: WheelEvent) => {
      if (window.scrollY > 5) return;

      const s = state.current;
      const maxScroll = -(PROJECT_DATA.length - 1) * s.projectHeight;
      
      if (s.targetY >= 0 && e.deltaY < 0) return; 
      if (s.targetY <= maxScroll && e.deltaY > 0) return;

      e.preventDefault();
      
      s.isSnapping = false;
      s.lastScrollTime = Date.now();
      const delta = Math.max(
        Math.min(e.deltaY * CONFIG.SCROLL_SPEED, CONFIG.MAX_VELOCITY),
        -CONFIG.MAX_VELOCITY
      );
      
      s.targetY = Math.max(maxScroll, Math.min(0, s.targetY - delta));
    };

    const onTouchStart = (e: TouchEvent) => {
        if (window.scrollY > 5) return;
        const s = state.current;
        s.isDragging = true;
        s.isSnapping = false;
        s.dragStart = { y: e.touches[0].clientY, scrollY: s.targetY };
        s.lastScrollTime = Date.now();
    }

    const onTouchMove = (e: TouchEvent) => {
        if (window.scrollY > 5) return;
        const s = state.current;
        if (!s.isDragging) return;

        const maxScroll = -(PROJECT_DATA.length - 1) * s.projectHeight;
        const deltaY = e.touches[0].clientY - s.dragStart.y;

        if (s.targetY >= 0 && deltaY > 0) return;
        if (s.targetY <= maxScroll && deltaY < 0) return;

        e.preventDefault();
        const newTargetY = s.dragStart.scrollY + deltaY * 1.5;
        s.targetY = Math.max(maxScroll, Math.min(0, newTargetY));
        s.lastScrollTime = Date.now();
    }

    const onTouchEnd = () => {
        state.current.isDragging = false;
    }

    const onResize = () => {
        state.current.projectHeight = window.innerHeight;
    }

    const container = document.querySelector('.parallax-container') as HTMLElement;
    if (container) {
      container.addEventListener("wheel", onWheel, { passive: false });
      container.addEventListener("touchstart", onTouchStart, { passive: false });
      container.addEventListener("touchmove", onTouchMove, { passive: false });
      container.addEventListener("touchend", onTouchEnd);
    }
    window.addEventListener("resize", onResize);
    
    onResize();
    requestRef.current = requestAnimationFrame(animationLoop);

    return () => {
      if (container) {
        container.removeEventListener("wheel", onWheel);
        container.removeEventListener("touchstart", onTouchStart);
        container.removeEventListener("touchmove", onTouchMove);
        container.removeEventListener("touchend", onTouchEnd);
      }
      window.removeEventListener("resize", onResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <style>{`
        .parallax-container { position: relative; width: 100vw; height: 100vh; overflow: hidden; background: #FFF9FA; }
        .project-list { position: absolute; inset: 0; list-style: none; padding: 0; margin: 0; }
        .project { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; display: flex; align-items: center; justify-content: center; will-change: transform; }
        .project img { width: 100%; height: 100%; object-fit: cover; will-change: transform; filter: brightness(0.85); }
        /* 删除了冗余的 hero-overlay 样式 */
      `}</style>

      <div className="parallax-container">
        {/* 删除了内部自带的文字和包裹它的 hero-overlay div */}
        <div className="project-list">
          {PROJECT_DATA.map((data, i) => (
            <div
              key={i}
              className="project"
              ref={(el) => {
                if (el) projectsRef.current.set(i, el);
                else projectsRef.current.delete(i);
              }}
            >
              <img 
                src={data.image} 
                alt={data.title} 
                ref={(el) => {
                  if (el) imgsRef.current.set(i, el);
                  else imgsRef.current.delete(i);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default InfiniteSlider;