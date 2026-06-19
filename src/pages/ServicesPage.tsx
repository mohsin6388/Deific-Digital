// import { useParams, Link } from "react-router-dom";
// import { Handshake, Monitor, Users2 } from "lucide-react";
// import { servicesContent } from "../static/servicesContent";
// import officeImg from "@/assets/my_office.png";
 
// // Ye stats company-wide hain, har service page pe same dikhte hain
// const stats = [
//   { icon: Handshake, value: "10+", label: "Industries" },
//   { icon: Monitor, value: "450", label: "Products Built" },
//   { icon: Users2, value: "70+", label: "Strong Team" },
// ];
 
// function ServicePage() {
//   const { slug } = useParams<{ slug: string }>();
//   const content = slug ? servicesContent[slug] : undefined;
 
//   if (!content) {
//     return (
//       <div className="mx-auto max-w-3xl px-4 py-24 text-center">
//         <h1 className="text-2xl font-bold text-[#0b1f4d]">Service not found</h1>
//         <p className="mt-2 text-gray-500">
//           Ye service abhi available nahi hai. Sahi link check karo ya humse contact karo.
//         </p>
//         <Link to="/services" className="mt-6 inline-block text-red-700 font-medium">
//           ← Back to all services
//         </Link>
//       </div>
//     );
//   }
 
//   return (
//     <div>
//       {/* ---------------- HERO SECTION ---------------- */}
//       <section
//         className="relative flex min-h-[420px] items-center justify-center bg-cover bg-center px-4 text-center"
//         style={{ backgroundImage: `url(${officeImg})` }}
//       >
//         {/* Dark overlay so text stays readable on any photo */}
//         <div className="absolute inset-0 bg-black/60" />
 
//         <div className="relative z-10 mx-auto max-w-3xl py-20">
//           <h1 className="text-4xl font-bold text-[#2fb6c4] sm:text-5xl">
//             {content.title}
//           </h1>
//           <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
//             {content.description}
//           </p>
//           <Link
//             to="/contact"
//             className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
//             style={{
//               background: "var(--gradient-primary)",
//               boxShadow: "var(--shadow-glow)",
//             }}
//           >
//             Get Quote
//             <span aria-hidden="true">›</span>
//           </Link>
//         </div>
//       </section>
 
//       {/* ---------------- STATS BAR ---------------- */}
//       <section className="bg-[#fdf1ef] py-12">
//         <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:grid-cols-3">
//           {stats.map((stat) => {
//             const Icon = stat.icon;
//             return (
//               <div key={stat.label} className="flex items-center gap-4">
//                 <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white shadow-sm">
//                   <Icon className="h-7 w-7 text-[#0b1f4d]" />
//                 </span>
//                 <div>
//                   <p className="text-3xl font-extrabold text-[#0b1f4d]">{stat.value}</p>
//                   <p className="text-gray-500">{stat.label}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>
 
//       {/* ---------------- OVERVIEW SECTION ---------------- */}
//       {/* <section className="bg-[#fdf1ef] pb-20 pt-4">
//         <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
//           <img
//             src={content.overviewImage}
//             alt={content.overviewTitle}
//             className="w-full max-w-md justify-self-center"
//           />
//           <div>
//             <p className="text-sm font-semibold uppercase tracking-wide text-[#2fb6c4]">
//               {content.overviewLabel}
//             </p>
//             <h2 className="mt-2 text-3xl font-extrabold text-[#0b1f4d] sm:text-4xl">
//               {content.overviewTitle}
//             </h2>
//             <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600">
//               {content.overviewText}
//             </p>
//           </div>
//         </div>
//       </section> */}
//     </div>
//   );
// }

// export default ServicePage


import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Smartphone,
  Users,
  Sparkles,
  Trophy,
  Layers,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { servicesContent } from "../static/servicesContent";

// ─── Animation helper ──────────────────────────────────────────────

const useStaggeredAnimation = (key: string) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset animation whenever the underlying content (slug) changes
    setVisible(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return { ref, visible };
};

// ─── Main Page ──────────────────────────────────────────────────────

function ServicesPage() {
  const { slug } = useParams<{ slug: string }>();
  const content = slug ? servicesContent[slug] : undefined;

  const { ref: processRef, visible: processVisible } = useStaggeredAnimation(
    `${slug}-process`
  );
  const { ref: servicesRef, visible: servicesVisible } = useStaggeredAnimation(
    `${slug}-services`
  );
  const { ref: projectsRef, visible: projectsVisible } = useStaggeredAnimation(
    `${slug}-projects`
  );

  if (!content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Service not found</h1>
        <p className="mt-2 text-gray-500">
          We couldn&apos;t find the service you&apos;re looking for.
        </p>
        <Link
          to="/services"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-200 transition-all hover:scale-105"
        >
          Browse Services
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-red-500/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
          <div className="absolute top-20 left-10 animate-float">
            <div className="h-3 w-3 rounded-full bg-red-400/60" />
          </div>
          <div className="absolute top-40 right-20 animate-float-delay">
            <div className="h-4 w-4 rounded-full bg-blue-400/50" />
          </div>
          <div className="absolute bottom-32 left-1/4 animate-float">
            <div className="h-5 w-5 rounded-full bg-purple-400/40" />
          </div>
          <div className="absolute bottom-20 right-1/3 animate-float-delay">
            <div className="h-3 w-3 rounded-full bg-orange-400/50" />
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm border border-white/10 mb-6">
                <Smartphone className="h-4 w-4 text-yellow-400" />
                <span>{content.badge}</span>
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
                {content.title}
                <span className="block mt-2 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  {content.highlight}
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl md:mx-0">
                {content.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-500/25 transition-all hover:scale-105 hover:shadow-red-500/40"
                >
                  Get Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src={content.heroImage}
                alt={content.highlight}
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-2xl object-cover border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      {/* <section className="border-b border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {content.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-200">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-extrabold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      

      {/* ===== OVERVIEW ===== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-700 mb-4">
                Overview
              </span>
              <h2 className="text-3xl font-bold text-gray-900">
                {content.overviewTitle}
              </h2>
              {content.overviewParagraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="mt-4 text-sm text-gray-500 leading-relaxed"
                >
                  {para}
                </p>
              ))}
              <div className="mt-6 flex flex-wrap gap-2">
                {content.overviewBadges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700"
                  >
                    <Sparkles className="h-3 w-3" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-red-200">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-red-600" />
                  {content.whyChooseTitle}
                </h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {content.whyChooseDesc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {content.whyChooseTags.map((item) => (
                    <span
                      key={item}
                      className="inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700 border border-red-100"
                    >
                      # {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-200 transition-all hover:scale-105 hover:shadow-red-300"
                  >
                    Request A Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center py-2"><div className="w-3/4 h-px bg-gray-200" /></div>

      {/* ===== HOW WE DEVELOP ===== */}
      <section className="bg-gray-50/50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-700 mb-3">
              Process
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              How We <span className="text-red-600">{content.processHeading}</span>
            </h2>
            <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
              We, being a pioneering company in this space, chart our
              operations stepwise:
            </p>
          </div>

          <div
            ref={processRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {content.processSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 hover:-translate-y-1 ${
                  processVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-orange-50 text-2xl shadow-sm">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HIRE DEDICATED DEVELOPER ===== */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div
            className="rounded-3xl border border-red-200 p-8 md:p-12 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.01] relative overflow-hidden"
            style={{
              backgroundImage:
                "url('https://picsum.photos/seed/developer/800/300')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-orange-900/80" />
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-white/20 backdrop-blur-sm p-3">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Hire a Dedicated Developer
              </h3>
              <p className="mt-2 text-white/80 max-w-md mx-auto">
                Get a skilled developer for your project, working exclusively
                for you.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition-all hover:scale-105 hover:shadow-red-500/50"
              >
                Hire Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES WE PROVIDE ===== */}
      <section className="bg-gray-50/50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-red-700 mb-3">
              Services
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Services We <span className="text-red-600">Provide</span>
            </h2>
            <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
              Our design process follows a proven approach. We begin with a
              deep understanding of your needs and create a planning
              template.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div ref={servicesRef} className="space-y-3">
              <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-red-600" />
                {content.servicesHeading}
              </h3>
              <p className="text-sm text-gray-500">{content.servicesIntro}</p>
              <ul className="space-y-2 mt-4">
                {content.servicesList.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-2 text-sm text-gray-600 ${
                      servicesVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 60}ms` }}
                  >
                    <CheckCircle className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5 text-red-600" />
                Our Process Phases
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {content.processPhases.map((phase, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 rounded-lg bg-white border border-gray-100 px-3 py-2 text-xs font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-red-200 hover:shadow-md hover:-translate-y-0.5 ${
                      servicesVisible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${
                        (index + content.servicesList.length) * 60
                      }ms`,
                    }}
                  >
                    <CheckCircle className="h-3 w-3 text-red-500" />
                    <span>{phase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="bg-gray-50/50 py-16 border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-red-100 p-3">
              <Mail className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            Get New Insights Weekly
          </h3>
          <p className="mt-2 text-gray-500">
            Welcome to Deific Digital. If you would like more information,
            please subscribe.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 rounded-full border border-gray-200 px-5 py-3 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
            />
            <button className="rounded-full bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-red-200 transition-all hover:scale-105 hover:shadow-red-300">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-xl font-bold">
                <span className="text-red-500">Deific</span>Digital
              </h3>
              <p className="mt-3 text-sm text-gray-400">
                Delivering Excellent Products, Thorough Training, and
                Optimal Execution
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="rounded-full bg-gray-800 p-2 text-gray-400 transition-all hover:bg-red-600 hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.129 22 16.99 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="rounded-full bg-gray-800 p-2 text-gray-400 transition-all hover:bg-red-600 hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.683-11.705c0-.213-.005-.426-.015-.637A9.936 9.936 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="rounded-full bg-gray-800 p-2 text-gray-400 transition-all hover:bg-red-600 hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-400" />
                Contact Us
              </h4>
              <ul className="mt-3 space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-red-400" />
                  <span>deific.solution@hotmail.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-red-400" />
                  <span>+91 87502 00899</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-red-400" />
                  <span>
                    8th Floor A1/4, Lakhanpur, Khyora, Kanpur, UP 208024
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-red-400 transition flex items-center gap-1"
                  >
                    <ChevronRight className="h-3 w-3" /> Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-red-400 transition flex items-center gap-1"
                  >
                    <ChevronRight className="h-3 w-3" /> Award & Recognitions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-red-400 transition flex items-center gap-1"
                  >
                    <ChevronRight className="h-3 w-3" /> Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Services</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    to="/services"
                    className="hover:text-red-400 transition flex items-center gap-1"
                  >
                    <ChevronRight className="h-3 w-3" /> Mobile App Designing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-red-400 transition flex items-center gap-1"
                  >
                    <ChevronRight className="h-3 w-3" /> Startup Idea
                    Validation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-red-400 transition flex items-center gap-1"
                  >
                    <ChevronRight className="h-3 w-3" /> MVP Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-red-400 transition flex items-center gap-1"
                  >
                    <ChevronRight className="h-3 w-3" /> Top Mobile App Design
                    Companies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            © 2016-2024. @ Deific Digital. All Rights Reserved.
          </div>
        </div>
      </footer> */}

      {/* ===== ANIMATION STYLES ===== */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(-8deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 7s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-on-scroll.animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

export default ServicesPage;