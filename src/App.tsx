import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ScrollToTop } from "./hooks/ScrollToTop";
import { lazy, Suspense } from "react";
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import '@fontsource/outfit/800.css';
import USA from "@/pages/USA";
import UAE from "@/pages/UAE";
import DigitalAgencyBlog from "@/Posts/DigitalAgency";
import TopItCompaniesBlog from "@/Posts/TopItCompanies";

// 👇 Sab pages ab lazy — direct import hata diya
const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const PortfolioPage = lazy(() => import("@/pages/PortfolioPage"));
const TechnologiesPage = lazy(() => import("@/pages/TechnologiesPage"));
const IndustriesPage = lazy(() => import("@/pages/IndustriesPage"));
const TeamPage = lazy(() => import("@/pages/TeamPage"));
const CareersPage = lazy(() => import("@/pages/CareersPage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const ChatWidget = lazy(() => import("@/components/site/ChatWidget"));
const TermsAndCondition = lazy(() => import("@/pages/TermsAndCondition"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const USALandingPage = lazy(() => import("@/pages/USA"));
const UAELandingPage = lazy(() => import("@/pages/UAE"));

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <Suspense fallback={null}>
        <ChatWidget />
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen" />}>
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
          <Route path="/blog/how-to-choose-the-right-digital-agency" element={<Layout><DigitalAgencyBlog /></Layout>} />
          <Route path="/blog/top-10-it-companies-in-india" element={<Layout><TopItCompaniesBlog /></Layout>} />
          <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
          <Route path="/terms-and-condition" element={<Layout><TermsAndCondition /></Layout>} />
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/usa" element={<Layout><USA /></Layout>} />
          <Route path="/uae" element={<Layout><UAE /></Layout>} />
          <Route
            path="*"
            element={
              <Layout>
                <div className="flex items-center justify-center min-h-[50vh] text-center">
                  <div>
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="text-muted-foreground">Page not found</p>
                  </div>
                </div>
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}