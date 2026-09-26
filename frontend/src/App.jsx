import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Notifications from "./pages/Notifications.jsx";
import NotificationDetail from "./pages/NotificationDetail.jsx";
import Apps from "./pages/Apps.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/layout/Footer.jsx";

// Temporary placeholder for routes whose pages are still being built.
function PagePlaceholder({ title }) {
  return (
    <div className="bg-grid">
      <div className="max-w-[1220px] mx-auto px-6 py-32 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F58220]">
          Egolife Egovernance Private Limited
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
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/notifications/:id" element={<NotificationDetail />} />
          <Route path="/apps" element={<Apps />} />
          <Route
            path="/partner"
            element={<PagePlaceholder title="Become a Partner" />}
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
        <a href="/contact" className="fixed bottom-6 right-6 bg-[#00AEEF] hover:bg-[#0092c8] text-white font-bold py-3 px-6 rounded-full shadow-lg z-50 transition-transform transform hover:scale-105 flex items-center gap-2">
          <span>Enquiry</span>
        </a>
      </BrowserRouter>
    </div>
  );
}
