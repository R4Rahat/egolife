import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/layout/Footer.jsx";

// Temporary placeholder for routes whose pages are still being built.
function PagePlaceholder({ title }) {
  return (
    <div className="bg-grid">
      <div className="max-w-[1220px] mx-auto px-6 py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F58220]">
          eGoLife Governance
        </p>
        <h1 className="mt-3 text-4xl font-extrabold text-[#10182C]">{title}</h1>
        <p className="mt-4 text-[#4B6179]">This page is under construction.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#10182C]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/government"
            element={<PagePlaceholder title="Government Solutions" />}
          />
          <Route
            path="/industries"
            element={<PagePlaceholder title="Industries" />}
          />
          <Route
            path="/case-studies"
            element={<PagePlaceholder title="Case Studies" />}
          />
          <Route
            path="/careers"
            element={<PagePlaceholder title="Careers" />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}
