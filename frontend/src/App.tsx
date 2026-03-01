import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/layout/Navbar";
import { Home } from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Resources from "./pages/Resources";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      
      {/* ✨ 修复点：已经把这里的 <Footer /> 删掉了！ */}
    </Router>
  );
}

export default App;