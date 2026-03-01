"use client";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isResourcesPage = location.pathname === "/resources";
  const isAboutPage = location.pathname === "/aboutus"; 

  // About Us 页面彻底隐藏导航栏
  if (isAboutPage) return null;

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "RESOURCES", path: "/resources" },
    { name: "ABOUT US", path: "/aboutus" }, 
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isResourcesPage 
          // ✨ 核心修改：如果是资源页
          ? isScrolled 
            ? "translate-y-0 opacity-100 bg-transparent py-6" // 滚动后：滑入并显示
            : "-translate-y-full opacity-0 pointer-events-none py-6" // 初始状态：向上藏起并变为透明
          // 首页的逻辑保持不变
          : isScrolled 
            ? "translate-y-0 opacity-100 bg-white/80 backdrop-blur-md shadow-sm py-4" 
            : "translate-y-0 opacity-100 bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
           <img 
             src="/mainlogo.png" 
             alt="Herstory Logo" 
             className="h-12 w-auto object-contain" 
           />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold tracking-widest transition-colors duration-200 relative group ${
                location.pathname === link.path 
                  ? "text-pink-600" 
                  // 资源页下文字设为白色
                  : isResourcesPage ? "text-white/90 hover:text-white" : "text-black/70 hover:text-black"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isResourcesPage ? "text-white" : "text-black"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t overflow-hidden absolute top-full left-0 w-full shadow-lg ${
              isResourcesPage ? "bg-black/90 border-white/10" : "bg-white border-gray-100"
            }`}
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-bold py-2 border-b ${
                    isResourcesPage 
                      ? "text-white/80 hover:text-pink-400 border-white/10" 
                      : "text-black/80 hover:text-pink-600 border-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};