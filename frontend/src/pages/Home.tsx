import { useEffect } from "react";
import { Hero } from "../components/sections/1Hero";
import { PastEvents } from "../components/sections/2ourchapters";
import { Friendlogo } from "../components/sections/4Friendlogo";
import { Upcoming } from "../components/sections/3Upcoming"; 
// ✨ 引入 Footer 组件
import { Footer } from "../components/layout/Footer"; 

export const Home = () => {
  useEffect(() => {
    if ('scrollRestoration' in history) {
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative w-full overflow-hidden bg-white">
      {/* 1. Hero */}
      <div className="relative z-0">
        <Hero />
      </div>

      {/* 2. Past Events */}
      <div className="relative z-10 bg-white -mt-px">
        <PastEvents />
      </div>

      {/* 3. Upcoming */}
      <div className="relative z-10 bg-white -mt-12">
        <Upcoming />
      </div>

      {/* 4. Friendlogo */}
      <div className="relative z-10 bg-white pt-8 pb-12">
        <Friendlogo />
      </div>

      {/* 5. Footer (页脚) ✨ 重新加回这里 */}
      <div className="relative z-10">
        <Footer />
      </div>
    </main>
  );
};

export default Home;