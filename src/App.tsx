import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import PortfolioPage from "@/pages/PortfolioPage";
import TechnologiesPage from "@/pages/TechnologiesPage";
import IndustriesPage from "@/pages/IndustriesPage";
import TeamPage from "@/pages/TeamPage";
import CareersPage from "@/pages/CareersPage";
import BlogPage from "@/pages/BlogPage";
import ContactPage from "@/pages/ContactPage";
import { ScrollToTop } from "./hooks/ScrollToTop";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/services/:slug" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/portfolio" element={<Layout><PortfolioPage /></Layout>} />
        <Route path="/technologies" element={<Layout><TechnologiesPage /></Layout>} />
        <Route path="/industries" element={<Layout><IndustriesPage /></Layout>} />
        <Route path="/team" element={<Layout><TeamPage /></Layout>} />
        <Route path="/careers" element={<Layout><CareersPage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        <Route path="*" element={<Layout><div className="flex items-center justify-center min-h-[50vh] text-center"><div><h1 className="text-4xl font-bold mb-4">404</h1><p className="text-muted-foreground">Page not found</p></div></div></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
