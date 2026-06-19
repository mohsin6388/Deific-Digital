import { useState } from "react";
import { CTABanner } from "@/components/site/CTABanner";
import { ExternalLink } from "lucide-react";
import vaishnavi from "@/assets/vasihnavi.png"
import green from "@/assets/stadium.png"
import rickshaw from "@/assets/e-rickshaw.png"
import school from "@/assets/school.webp"
import land from "@/assets/green-land.jfif"
import sport from "@/assets/sport.webp"
import darshan from "@/assets/darshan.webp"
import city from "@/assets/city-app.jfif"
import sundra from "../assets/sundra-logo.png"
import vaishnaviHost from "../assets/vaishnavi.webp"
import knn from "../assets/knn.jfif"
import greenPark from "../assets/green-park.jpg"
import celebration from "../assets/celebration.jpg"
import perch from "../assets/perch.jfif"

const projects = [
  {
    title: "Kanpur Green Park",
    category: "Government",
    tech: "React, Node.js, MongoDB",
    desc: "Digital management system for Kanpur's iconic Green Park stadium — ticketing, events, and visitor management.",
    color: "from-green-500 to-emerald-700",
    img: green,
    tag: "Government",
  },
  {
    title: "Kanpur Nagar Nigam Sports",
    category: "Government",
    tech: "React Native, Firebase",
    desc: "Sports facility booking and management platform for Kanpur Nagar Nigam's athletic infrastructure.",
    color: "from-blue-500 to-indigo-700",
    img: sport,
    tag: "Government",
  },
  {
    title: "Kanpur Darshan",
    category: "Tourism",
    tech: "React, Node.js, Google Maps",
    desc: "City tourism portal showcasing Kanpur's heritage, attractions, and events for visitors and residents.",
    color: "from-orange-500 to-red-600",
    img: darshan,
    tag: "Tourism",
  },
  // {
  //   title: "Kanpur Nagar Nigam Property Tax",
  //   category: "Government",
  //   tech: "React, Django, PostgreSQL",
  //   desc: "Online property tax portal enabling Kanpur citizens to calculate, pay, and track property taxes digitally.",
  //   color: "from-purple-500 to-violet-700",
  //   emoji: "🏠",
  //   tag: "Government",
  // },
  {
    title: "E-Rickshaw Management",
    category: "Transport",
    tech: "Flutter, Firebase, Maps API",
    desc: "Comprehensive e-rickshaw fleet management system with driver tracking, route optimization, and billing.",
    color: "from-teal-500 to-cyan-700",
    img: rickshaw,
    tag: "Transport",
  },
  {
    title: "City Customer Facilitation App",
    category: "Civic",
    tech: "React Native, Node.js",
    desc: "One-stop citizen services app for Kanpur — complaints, certificates, utilities, and government services.",
    color: "from-red-500 to-rose-700",
    img: city,
    tag: "Civic",
  },
  {
    title: "School Management System",
    category: "EdTech",
    tech: "React, Node.js, PostgreSQL",
    desc: "Complete school ERP covering admissions, attendance, fees, timetables, exams, and parent communication.",
    color: "from-yellow-500 to-amber-600",
    img: school,
    tag: "EdTech",
  },
  // {
  //   title: "Pothole Complaint Management",
  //   category: "Civic",
  //   tech: "React Native, Node.js, AWS",
  //   desc: "Citizen-facing app to report potholes with GPS tagging, photo upload, and real-time resolution tracking.",
  //   color: "from-stone-500 to-gray-700",
  //   emoji: "🚧",
  //   tag: "Civic",
  // },
  {
    title: "A4 Celebration",
    category: "Events",
    tech: "React, Stripe, Node.js",
    desc: "Event management platform for A4 Celebration — bookings, venue selection, catering, and digital invites.",
    color: "from-pink-500 to-fuchsia-700",
    emoji: "🎉",
    tag: "Events",
  },
  {
    title: "Sundra Group",
    category: "Real Estate",
    tech: "Next.js, CMS, MongoDB",
    desc: "Corporate website and property listing platform for Sundra Group — properties, projects, and inquiries.",
    color: "from-sky-500 to-blue-700",
    img: land,
    tag: "Real Estate",
  },
  {
    title: "Vaishnavi Hospital",
    category: "Healthcare",
    tech: "React, Node.js, Firebase",
    desc: "Hospital management system for Vaishnavi Hospital — OPD booking, patient records, billing, and reports.",
    color: "from-green-400 to-teal-600",
    img: vaishnavi,
    tag: "Healthcare",
  },
  // {
  //   title: "More Coming Soon",
  //   category: "In Progress",
  //   tech: "Various Technologies",
  //   desc: "We're currently building more exciting projects. Stay tuned for more innovations from Deific Digital.",
  //   color: "from-gray-400 to-gray-600",
  //   emoji: "🚀",
  //   tag: "Coming Soon",
  // },
];


const clients = [
  {
    name: "Kanpur Nagar Nigam",
    industry: "Government",
    img: knn,
    initials: "TN",
    color: "bg-red-100 text-red-700",
  },
  {
    name: "Kanpur Green Park",
    industry: "Government",
    img: greenPark,
    initials: "BM",
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "Vaishnavi Hospital",
    industry: "Hospital",
    img: vaishnaviHost,
    initials: "SP",
    color: "bg-rose-100 text-rose-700",
  },
  {
    name: "Sundra Group",
    industry: "Civic",
    img: sundra,
    initials: "GL",
    color: "bg-red-50 text-red-600",
  },
  {
    name: "A4 Celebration",
    industry: "Party",
    img: celebration,
    initials: "MC",
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "The Perch",
    industry: "Restaurant",
    img: perch,
    initials: "NB",
    color: "bg-pink-50 text-pink-600",
  },
];


const styles = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marquee-reverse {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 30s linear infinite;
  }
  .marquee-track-reverse {
    display: flex;
    width: max-content;
    animation: marquee-reverse 28s linear infinite;
  }
  .marquee-track:hover,
  .marquee-track-reverse:hover {
    animation-play-state: paused;
  }
  .client-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: default;
  }
  .client-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(220, 38, 38, 0.12);
  }
`;

const doubled = [...clients, ...clients];


function ClientCard({ client }: any) {
  return (
    <div className="client-card flex-shrink-0 bg-white border border-gray-100 rounded-2xl mx-3 px-5 py-4 flex items-center gap-4 w-52 shadow-sm">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0`}
      >
        <img src={client.img} alt="" />
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-gray-800 text-sm leading-tight truncate">
          {client.name}
        </p>
        <p className="text-xs text-gray-400 mt-0.5 truncate">
          {client.industry}
        </p>
      </div>
    </div>
  );
}




const categories = ["All", "Government", "Civic", "EdTech", "Transport", "Tourism", "Healthcare", "Events", "Real Estate"];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const row1 = doubled;

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.tag === active);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-red-50/30 py-20 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-40" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4">
          <span className="inline-block rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-red-700 mb-4">
            Portfolio
          </span>
          <h1 className="text-4xl font-extrabold sm:text-5xl text-gray-900">
            Our <span className="text-red-600">Work & Clients</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Transforming ideas into impactful digital products across
            industries.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-red-600 text-white shadow-md shadow-red-200"
                  : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image/banner area */}
              <div
                className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}
              >
                <img src={p.img} className="w-full h-full" alt="" />
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/10" />
                {/* Category badge */}
                <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                  {p.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-600 transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {p.desc}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-medium">
                    {p.tech}
                  </span>
                  <button className="flex items-center gap-1 text-sm font-semibold text-red-600 hover:gap-2 transition-all">
                    View <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className={`h-0.5 bg-gradient-to-r ${p.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Our Clients List */}

      <>
        <style>{styles}</style>
        <section className="py-16 bg-gray-50 overflow-hidden">
          <div className="text-center mb-12 px-4">
            <span className="inline-block border border-red-200 text-red-500 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full bg-red-50 mb-4">
              Our Clients
            </span>
            <h2 className="text-4xl font-bold text-gray-900">
              Brands That <span className="text-red-600">Trust Us</span>
            </h2>
            <p className="text-gray-500 mt-3 text-base max-w-md mx-auto">
              550+ happy clients worldwide — from startups to enterprises.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Row 1 — left scroll */}
            <div className="overflow-hidden relative">
              <div
                className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(to right, #f9fafb, transparent)",
                }}
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
                style={{
                  background: "linear-gradient(to left, #f9fafb, transparent)",
                }}
              />
              <div className="marquee-track py-1">
                {row1.map((client, i) => (
                  <ClientCard key={`r1-${i}`} client={client} />
                ))}
              </div>
            </div>

            {/* Row 2 — right scroll */}
            {/* <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #f9fafb, transparent)" }}
            />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, #f9fafb, transparent)" }}
            />
            <div className="marquee-track-reverse py-1">
              {row2.map((client, i) => (
                <ClientCard key={`r2-${i}`} client={client} />
              ))}
            </div>
          </div> */}
          </div>

          {/* Stats strip */}
          <div className="flex justify-center gap-12 mt-14 px-4">
            {[
              { number: "550+", label: "Happy Clients" },
              { number: "1200+", label: "Projects Delivered" },
              { number: "12+", label: "Years Experience" },
              { number: "5★", label: "Avg. Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-red-600">{stat.number}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </>

      <CTABanner />
    </div>
  );
}
