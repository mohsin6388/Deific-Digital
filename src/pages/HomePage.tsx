import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
    ArrowRight, Star, Shield, Zap, Users, Globe, Award,
    ChevronRight, CheckCircle, Code2, Smartphone,
    Bot, Cloud, BarChart3,
} from "lucide-react";
import { Briefcase, Timer, BadgeCheck } from "lucide-react";
import { Counter } from "@/components/site/Counter";
import { CTABanner } from "@/components/site/CTABanner";
import officeImg from "@/assets/my_office.png";
import sundra from "../assets/sundra-logo.png";
import vaishnavi from "../assets/vaishnavi.webp";
import knn from "../assets/knn.jfif";
import green from "../assets/green-park.jpg";
import celebration from "../assets/celebration.jpg";
import perch from "../assets/perch.jfif";
import build from "../assets/build.png";
import client from "../assets/client.png";
import country from "../assets/country.png";
import project from "../assets/project.png";
import experience from "../assets/experience.png";
import team from "../assets/team.png";

// ──────────────────────────────────────────────────────────────
// DATA
// ──────────────────────────────────────────────────────────────

const features = [
    { icon: Briefcase, title: "Streamlined Project Management", desc: "End-to-end tracking with full transparency — you always know where your project stands." },
    { icon: Users, title: "Dedicated Expert Team", desc: "A hand-picked team of developers, designers, and strategists assigned exclusively to your project." },
    { icon: Timer, title: "On-Time, Every Time", desc: "Agile methodology ensures your project ships on schedule — no delays, no excuses." },
    { icon: Zap, title: "Fast Delivery", desc: "Rapid sprints and lean workflows mean you go live sooner without sacrificing quality." },
    { icon: BadgeCheck, title: "Quality Assured", desc: "Every project undergoes rigorous QA testing before delivery — zero compromise on standards." },
    { icon: Star, title: "5-Star Rated", desc: "Consistently rated 5 stars by 550+ happy clients worldwide.", stars: true },
];

const services = [
    { icon: Code2, title: "Startup Validation", desc: "Design and develop a creative website with our microscopic detailing and scrupulous strategies.", link: "/services" },
    { icon: Code2, title: "Fast MVP Development", desc: "Minimum Viable Product (MVP) development services designed to cater to a diverse range of businesses.", link: "/services" },
    { icon: BarChart3, title: "Digital Marketing", desc: "Data-driven strategies to grow your online presence and generate leads.", link: "/services" },
    { icon: Smartphone, title: "Mobile Apps", desc: "Native & cross-platform iOS/Android apps that deliver seamless user experiences.", link: "/services" },
    { icon: Bot, title: "AI Solutions", desc: "Smart automation and AI-driven business solutions to streamline operations.", link: "/services" },
    { icon: Cloud, title: "Cloud & DevOps", desc: "Scalable cloud infrastructure and CI/CD pipelines for enterprise reliability.", link: "/services" },
];

const testimonials = [
    { name: "Rajesh Kumar", role: "CEO, TechStartup India", text: "Deific Digital transformed our vision into reality. Outstanding quality and on-time delivery every time.", rating: 5 },
    { name: "Priya Sharma", role: "CTO, FinanceApp", text: "Their expertise in React and Node.js helped us scale from 1K to 100K users seamlessly.", rating: 5 },
    { name: "Amit Singh", role: "Founder, EduTech Platform", text: "Best IT partner we've ever worked with. Professional, responsive, and truly talented team.", rating: 5 },
];

const clients = [
    { name: "Kanpur Nagar Nigam", industry: "Government", img: knn },
    { name: "Kanpur Green Park", industry: "Government", img: green },
    { name: "Vaishnavi Hospital", industry: "Hospital", img: vaishnavi },
    { name: "Sundra Group", industry: "Civic", img: sundra },
    { name: "A4 Celebration", industry: "Party", img: celebration },
    { name: "The Perch", industry: "Restaurant", img: perch },
];

const certTags = [
    { label: "ISO 9001 Certified", color: "#EF4444" },
    { label: "Google Partner", color: "#4285F4" },
    { label: "AWS Partner", color: "#FF9900" },
    { label: "Meta Business Partner", color: "#1877F2" },
    { label: "NASSCOM Member", color: "#EF4444" },
    { label: "Microsoft Partner", color: "#00A4EF" },
    { label: "Clutch Top Company", color: "#EF4444" },
    { label: "GoodFirms Certified", color: "#2ECC71" },
];

// ──────────────────────────────────────────────────────────────
// PHONE SCREEN COMPONENTS
// ──────────────────────────────────────────────────────────────

function MobileAppScreen() {
    return (
        <div style={{ fontFamily: "system-ui,sans-serif", height: "100%", display: "flex", flexDirection: "column", background: "#fff" }}>
            <div style={{ background: "#EF4444", color: "#fff", padding: "8px 14px 6px", fontSize: 10, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 700 }}>9:41</span>
                <span>●●● WiFi</span>
            </div>
            <div style={{ background: "#EF4444", color: "#fff", padding: "10px 14px 14px" }}>
                <div style={{ fontSize: 11, opacity: 0.8 }}>Good Morning 👋</div>
                <div style={{ fontSize: 15, fontWeight: 800, marginTop: 2 }}>Dashboard</div>
                <div style={{ marginTop: 10, background: "rgba(255,255,255,0.2)", borderRadius: 8, padding: "6px 10px", fontSize: 10 }}>🔍 Search...</div>
            </div>
            <div style={{ flex: 1, padding: "12px 12px 36px", overflow: "hidden" }}>
                <div style={{ background: "linear-gradient(135deg,#1a1a2e,#16213e)", borderRadius: 14, padding: "12px 14px", color: "#fff", marginBottom: 10 }}>
                    <div style={{ fontSize: 9, opacity: 0.7 }}>Total Revenue</div>
                    <div style={{ fontSize: 20, fontWeight: 900, marginTop: 2 }}>₹4,82,000</div>
                    <div style={{ fontSize: 9, color: "#4ade80", marginTop: 4 }}>↑ 24% this month</div>
                </div>
                {[{ label: "Mobile Apps", pct: 85, color: "#EF4444" }, { label: "Web Projects", pct: 70, color: "#8B5CF6" }, { label: "AI Solutions", pct: 60, color: "#10B981" }].map((b) => (
                    <div key={b.label} style={{ marginBottom: 9 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "#555", marginBottom: 3 }}>
                            <span>{b.label}</span><span style={{ fontWeight: 700 }}>{b.pct}%</span>
                        </div>
                        <div style={{ background: "#f0f0f0", borderRadius: 99, height: 5 }}>
                            <div style={{ width: `${b.pct}%`, background: b.color, borderRadius: 99, height: 5 }} />
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ position: "absolute", bottom: 6, left: 0, right: 0, background: "#fff", borderTop: "1px solid #f0f0f0", display: "flex", justifyContent: "space-around", padding: "8px 0", fontSize: 8 }}>
                {["🏠 Home", "📊 Stats", "🔔 Alerts", "👤 Profile"].map((n) => (
                    <div key={n} style={{ textAlign: "center", color: n.startsWith("🏠") ? "#EF4444" : "#aaa", fontWeight: n.startsWith("🏠") ? 700 : 400 }}>{n}</div>
                ))}
            </div>
        </div>
    );
}

function MobileGameScreen() {
    const [score, setScore] = useState(1240);
    useEffect(() => {
        const t = setInterval(() => setScore((s) => s + Math.floor(Math.random() * 50)), 800);
        return () => clearInterval(t);
    }, []);
    return (
        <div style={{ fontFamily: "monospace", height: "100%", background: "#0d0d1a", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
            {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} style={{ position: "absolute", width: 2, height: 2, background: "#fff", borderRadius: "50%", top: `${(i * 37) % 70}%`, left: `${(i * 53) % 100}%`, opacity: 0.5 }} />
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px 6px", zIndex: 10 }}>
                <div style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>SCORE: <span style={{ color: "#facc15" }}>{score}</span></div>
                <div style={{ color: "#f87171", fontSize: 10 }}>❤️❤️❤️</div>
                <div style={{ color: "#fff", fontSize: 10 }}>LV 3</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 4, padding: "6px 12px", zIndex: 10 }}>
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} style={{ textAlign: "center", fontSize: 14 }}>{i % 3 === 0 ? "👾" : i % 3 === 1 ? "🛸" : "🔵"}</div>
                ))}
            </div>
            <div style={{ flex: 1, position: "relative", zIndex: 10 }}>
                <div style={{ position: "absolute", left: "50%", top: "20%", transform: "translateX(-50%)", width: 3, height: 16, background: "#ef4444", borderRadius: 99, boxShadow: "0 0 6px #ef4444" }} />
            </div>
            <div style={{ textAlign: "center", fontSize: 22, marginBottom: 6, zIndex: 10 }}>🚀</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 16px 10px", zIndex: 10 }}>
                <div style={{ display: "flex", gap: 6 }}>
                    <div style={{ width: 28, height: 28, background: "rgba(255,255,255,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#fff" }}>◀</div>
                    <div style={{ width: 28, height: 28, background: "rgba(255,255,255,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "#fff" }}>▶</div>
                </div>
                <div style={{ width: 36, height: 36, background: "#ef4444", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", fontWeight: 700, boxShadow: "0 0 10px #ef4444" }}>FIRE</div>
            </div>
        </div>
    );
}

function WebScreen() {
    return (
        <div style={{ fontFamily: "system-ui,sans-serif", height: "100%", display: "flex", flexDirection: "column", background: "#fff", fontSize: 10 }}>
            <div style={{ background: "#f1f5f9", borderBottom: "1px solid #e2e8f0", padding: "6px 10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 5 }}>
                    <div style={{ display: "flex", gap: 4 }}>
                        {["#ef4444", "#facc15", "#4ade80"].map(c => <div key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />)}
                    </div>
                </div>
                <div style={{ background: "#fff", borderRadius: 6, padding: "4px 8px", fontSize: 9, color: "#94a3b8", border: "1px solid #e2e8f0" }}>🔒 deificdigital.com</div>
            </div>
            <div style={{ background: "#fff", borderBottom: "1px solid #f1f5f9", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#EF4444", fontWeight: 900, fontSize: 11 }}>Deific<span style={{ color: "#111" }}>Digital</span></span>
                <div style={{ display: "flex", gap: 8, fontSize: 8, color: "#666" }}><span>Home</span><span>Services</span><span>Portfolio</span></div>
            </div>
            <div style={{ background: "linear-gradient(135deg,#fff5f5,#fff)", padding: "12px 12px 10px" }}>
                <div style={{ fontSize: 8, color: "#EF4444", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Web Solutions</div>
                <div style={{ fontSize: 14, fontWeight: 900, color: "#111", marginTop: 2, lineHeight: 1.2 }}>We Build Digital<br /><span style={{ color: "#EF4444" }}>Engines That Scale</span></div>
                <div style={{ marginTop: 8, display: "flex", gap: 6 }}>
                    <div style={{ background: "#EF4444", color: "#fff", borderRadius: 99, padding: "4px 10px", fontSize: 8, fontWeight: 700 }}>Get Started</div>
                    <div style={{ border: "1px solid #ddd", borderRadius: 99, padding: "4px 10px", fontSize: 8, color: "#555" }}>View Work</div>
                </div>
            </div>
            <div style={{ padding: "8px 10px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, flex: 1 }}>
                {[{ icon: "💻", title: "Web Apps", color: "#EF4444" }, { icon: "🛒", title: "E-Commerce", color: "#8B5CF6" }, { icon: "📊", title: "Dashboards", color: "#0EA5E9" }, { icon: "🔗", title: "APIs & CMS", color: "#10B981" }].map((s) => (
                    <div key={s.title} style={{ background: "#f8fafc", borderRadius: 10, padding: "8px", border: "1px solid #f1f5f9" }}>
                        <div style={{ fontSize: 14 }}>{s.icon}</div>
                        <div style={{ fontSize: 9, fontWeight: 700, color: s.color, marginTop: 3 }}>{s.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function AIScreen() {
    const [msgs, setMsgs] = useState([
        { from: "ai", text: "Hello! I'm your AI assistant. How can I help?" },
        { from: "user", text: "Analyze our Q3 sales data" },
    ]);
    const responses = ["📊 Q3 revenue up 34% — mobile segment leads!", "🤖 Detected 3 growth opportunities.", "⚡ Automating report generation now..."];
    const idxRef = useRef(0);
    useEffect(() => {
        const t = setInterval(() => {
            setMsgs((m) => [...m.slice(-4), { from: "ai", text: responses[idxRef.current % responses.length] }]);
            idxRef.current++;
        }, 2500);
        return () => clearInterval(t);
    }, []);
    return (
        <div style={{ fontFamily: "system-ui,sans-serif", height: "100%", display: "flex", flexDirection: "column", background: "#f0fdf4" }}>
            <div style={{ background: "#10B981", padding: "10px 14px", color: "#fff" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, marginBottom: 4, opacity: 0.8 }}><span>9:41</span><span>●●● WiFi</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🤖</div>
                    <div>
                        <div style={{ fontWeight: 800, fontSize: 12 }}>Deific AI Agent</div>
                        <div style={{ fontSize: 9, opacity: 0.8 }}>● Online — 24/7 Active</div>
                    </div>
                </div>
            </div>
            <div style={{ background: "#ecfdf5", borderBottom: "1px solid #d1fae5", display: "flex", justifyContent: "space-around", padding: "6px 0", fontSize: 9 }}>
                {[["99.9%", "Uptime"], ["<1s", "Response"], ["10K+", "Queries/day"]].map(([v, l]) => (
                    <div key={l} style={{ textAlign: "center" }}>
                        <div style={{ color: "#10B981", fontWeight: 800, fontSize: 10 }}>{v}</div>
                        <div style={{ color: "#6b7280" }}>{l}</div>
                    </div>
                ))}
            </div>
            <div style={{ flex: 1, padding: "10px 10px 0", display: "flex", flexDirection: "column", gap: 7, overflow: "hidden" }}>
                {msgs.slice(-4).map((m, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: m.from === "ai" ? "flex-start" : "flex-end" }}>
                        <div style={{ background: m.from === "ai" ? "#fff" : "#10B981", color: m.from === "ai" ? "#111" : "#fff", borderRadius: m.from === "ai" ? "4px 12px 12px 12px" : "12px 4px 12px 12px", padding: "6px 10px", fontSize: 9, maxWidth: "78%", boxShadow: "0 1px 4px rgba(0,0,0,0.08)", border: m.from === "ai" ? "1px solid #d1fae5" : "none" }}>{m.text}</div>
                    </div>
                ))}
            </div>
            <div style={{ padding: "8px 10px 10px", display: "flex", gap: 6, alignItems: "center" }}>
                <div style={{ flex: 1, background: "#fff", borderRadius: 20, padding: "6px 12px", fontSize: 9, color: "#aaa", border: "1px solid #d1fae5" }}>Ask AI anything...</div>
                <div style={{ width: 26, height: 26, background: "#10B981", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11 }}>➤</div>
            </div>
        </div>
    );
}

// ──────────────────────────────────────────────────────────────
// IPHONE FRAME
// ──────────────────────────────────────────────────────────────

function IPhoneFrame({ children }: any) {
    return (
        <div style={{ position: "relative", width: 230, height: 460, flexShrink: 0 }}>
            <div style={{ position: "absolute", left: -4, top: 80, width: 4, height: 28, background: "#b0b0b0", borderRadius: "4px 0 0 4px" }} />
            <div style={{ position: "absolute", left: -4, top: 116, width: 4, height: 28, background: "#b0b0b0", borderRadius: "4px 0 0 4px" }} />
            <div style={{ position: "absolute", left: -4, top: 152, width: 4, height: 50, background: "#b0b0b0", borderRadius: "4px 0 0 4px" }} />
            <div style={{ position: "absolute", right: -4, top: 100, width: 4, height: 60, background: "#b0b0b0", borderRadius: "0 4px 4px 0" }} />
            <div style={{ width: "100%", height: "100%", background: "#1a1a1a", borderRadius: 38, padding: 4, boxShadow: "0 0 0 1px #333, 0 28px 80px rgba(0,0,0,0.5), inset 0 0 0 1px #555" }}>
                <div style={{ width: "100%", height: "100%", background: "#111", borderRadius: 35, overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 76, height: 22, background: "#000", borderRadius: 14, zIndex: 100 }} />
                    <div style={{ width: "100%", height: "100%", borderRadius: 35, overflow: "hidden", background: "#fff" }}>
                        <div style={{ paddingTop: 32, height: "100%", position: "relative" }}>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ──────────────────────────────────────────────────────────────
// SLIDES CONFIG
// ──────────────────────────────────────────────────────────────

const slides = [
    {
        id: "mobile-apps", badge: "App Development", accent: "#EF4444",
        highlight: "Mobile Apps",
        chips: ["React Native", "Flutter", "Swift", "Kotlin"],
        stats: [{ val: "550+", lbl: "Apps Built" }, { val: "5★", lbl: "Avg Rating" }, { val: "48h", lbl: "Fast Delivery" }],
        screen: <MobileAppScreen />,
    },
    {
        id: "mobile-games", badge: "Game Development", accent: "#8B5CF6",
        highlight: "Games",
        chips: ["Unity", "Unreal", "Cocos2d", "Godot"],
        stats: [{ val: "80+", lbl: "Games Built" }, { val: "4.9★", lbl: "Store Rating" }, { val: "10M+", lbl: "Downloads" }],
        screen: <MobileGameScreen />,
    },
    {
        id: "web-dev", badge: "Web Solutions", accent: "#0EA5E9",
        highlight: "Web",
        chips: ["React", "Next.js", "Node.js", "Laravel"],
        stats: [{ val: "100+", lbl: "Web Apps" }, { val: "99%", lbl: "Uptime" }, { val: "3×", lbl: "Faster" }],
        screen: <WebScreen />,
    },
    {
        id: "ai-agent", badge: "AI & Automation", accent: "#10B981",
        highlight: "AI",
        chips: ["GPT-4", "LangChain", "Python", "TensorFlow"],
        stats: [{ val: "24/7", lbl: "AI Uptime" }, { val: "90%", lbl: "Automation" }, { val: "10×", lbl: "ROI Boost" }],
        screen: <AIScreen />,
    },
];

// ──────────────────────────────────────────────────────────────
// HERO SLIDER (FULL WIDTH – COMPACT)
// ──────────────────────────────────────────────────────────────

function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [animKey, setAnimKey] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const doubled = [...certTags, ...certTags];

    const go = (idx: number) => {
        const next = (idx + slides.length) % slides.length;
        setCurrent(next);
        setAnimKey((k) => k + 1);
    };

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCurrent((c) => {
                const next = (c + 1) % slides.length;
                setAnimKey((k) => k + 1);
                return next;
            });
        }, 4000);
        return () => {
            if (timerRef.current !== null) clearInterval(timerRef.current);
        };
    }, []);

    const slide = slides[current];

    return (
        <>
            {/* ── CERTIFICATION TAG STRIP ── */}
            <div style={{ background: "#fff", borderBottom: "1px solid #fee2e2", borderTop: "1px solid #fee2e2", overflow: "hidden", padding: "11px 0", position: "relative" }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 60, background: "linear-gradient(to right,#fff,transparent)", zIndex: 10, pointerEvents: "none" }} />
                <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 60, background: "linear-gradient(to left,#fff,transparent)", zIndex: 10, pointerEvents: "none" }} />
                <div className="cert-strip" style={{ gap: 12, display: "flex", width: "max-content", animation: "certScroll 28s linear infinite" }}>
                    {doubled.map((tag, i) => (
                        <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#fff", border: `1.5px solid ${tag.color}22`, borderRadius: 99, padding: "5px 16px", boxShadow: `0 2px 8px ${tag.color}12`, whiteSpace: "nowrap", flexShrink: 0, marginRight: 12 }}>
                            <div style={{ width: 7, height: 7, borderRadius: "50%", background: tag.color }} />
                            <span style={{ fontSize: 12, fontWeight: 700, color: "#333" }}>{tag.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── SLIDER – COMPACT & FULL WIDTH ── */}
            <section style={{
                background: "linear-gradient(135deg,#fff 0%,#fef2f2 60%,#fff 100%)",
                padding: "32px 0 40px",
                position: "relative",
                overflow: "hidden",
                width: "100%"
            }}>
                {/* dot grid */}
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.03, backgroundImage: "radial-gradient(#b91c1c 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
                {/* accent glow */}
                <div style={{ position: "absolute", right: -80, top: -80, width: 420, height: 420, background: `radial-gradient(circle,${slide.accent}18 0%,transparent 70%)`, pointerEvents: "none", transition: "background 0.6s ease", borderRadius: "50%" }} />

                {/* ─── INNER ─── */}
                <div style={{
                    
                    maxWidth: "100%",
                    margin: "0 0",
                    display: "flex",
                    alignItems: "center",
                    gap: 280,
                    flexWrap: "wrap",
                    justifyContent: "center",
                    padding: "0 40px"
                }}>
                    {/* LEFT – Text Content (compact) */}
                    <div key={`txt-${animKey}`} className="slide-anim" style={{ flex: "1 1 380px", maxWidth: 540 }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${slide.accent}15`, border: `1.5px solid ${slide.accent}30`, borderRadius: 99, padding: "4px 14px", marginBottom: 14 }}>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: slide.accent }} />
                            <span style={{ fontSize: 10, fontWeight: 800, color: slide.accent, textTransform: "uppercase", letterSpacing: 1 }}>{slide.badge}</span>
                        </div>

                        {/* ── NEW HEADLINE: stable + dynamic ── */}
                        <h2 style={{
                            fontSize: "clamp(32px,4.6vw,56px)",
                            fontWeight: 900,
                            lineHeight: 1.1,
                            color: "#111",
                            margin: "0 0 6px",
                            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
                            letterSpacing: "-0.02em"
                        }}>
                            Building Digital<br />
                            <span style={{ color: slide.accent, display: "inline-block", borderBottom: `4px solid ${slide.accent}40`, paddingBottom: 4 }}>
                                Excellence in {slide.highlight}
                            </span>
                        </h2>

                        {/* ── DESCRIPTION REMOVED ── */}

                        {/* Chips */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16, marginTop: 12 }}>
                            {slide.chips.map((chip) => (
                                <div key={chip} style={{ background: "#fff", border: "1.5px solid #e5e7eb", borderRadius: 99, padding: "3px 13px", fontSize: 11, fontWeight: 700, color: "#555", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>{chip}</div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div style={{ display: "flex", gap: 24, marginBottom: 16 }}>
                            {slide.stats.map((s) => (
                                <div key={s.lbl}>
                                    <div style={{ fontSize: 24, fontWeight: 900, color: slide.accent }}>{s.val}</div>
                                    <div style={{ fontSize: 11, color: "#888", marginTop: 1 }}>{s.lbl}</div>
                                </div>
                            ))}
                        </div>

                        {/* Checklist (compact) */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 18 }}>
                            {["End-to-end development & deployment", "Dedicated project manager assigned", "100% source code ownership"].map((f) => (
                                <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: `${slide.accent}15`, border: `1.5px solid ${slide.accent}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <CheckCircle size={10} color={slide.accent} />
                                    </div>
                                    <span style={{ fontSize: 12, color: "#555" }}>{f}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                            <Link to="/contact" style={{ background: slide.accent, color: "#fff", border: "none", borderRadius: 99, padding: "10px 24px", fontSize: 13, fontWeight: 800, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: `0 6px 20px ${slide.accent}40`, textDecoration: "none", transition: "transform 0.2s" }}>
                                Get a Free Quote <ArrowRight size={14} />
                            </Link>
                            <Link to="/portfolio" style={{ background: "#fff", border: "2px solid #e5e7eb", color: "#555", borderRadius: 99, padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer", textDecoration: "none" }}>
                                View Portfolio
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT – iPhone (same size) */}
                    <div key={`ph-${animKey}`} className="slide-anim" style={{ position: "relative", flexShrink: 0, display: "flex", justifyContent: "center" }}>
                        <div style={{ position: "absolute", inset: -30, background: `radial-gradient(ellipse,${slide.accent}22 0%,transparent 70%)`, pointerEvents: "none", borderRadius: "50%" }} />
                        <IPhoneFrame>{slide.screen}</IPhoneFrame>
                        {/* Floating badges – slightly smaller */}
                        <div style={{ position: "absolute", top: 24, right: -90, background: "#fff", borderRadius: 14, padding: "7px 14px", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", border: "1px solid #f0f0f0", fontSize: 11, fontWeight: 700, color: "#111", whiteSpace: "nowrap" }}>⚡ Fast Delivery</div>
                        <div style={{ position: "absolute", bottom: 80, left: -100, background: "#fff", borderRadius: 14, padding: "7px 14px", boxShadow: "0 4px 20px rgba(0,0,0,0.12)", border: "1px solid #f0f0f0", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap" }}>
                            <span style={{ color: "#facc15" }}>★★★★★</span><span style={{ color: "#111", marginLeft: 4 }}>5-Star Rated</span>
                        </div>
                        <div style={{ position: "absolute", bottom: 140, right: -100, background: slide.accent, borderRadius: 14, padding: "7px 14px", boxShadow: `0 4px 20px ${slide.accent}40`, fontSize: 11, fontWeight: 800, color: "#fff", whiteSpace: "nowrap" }}>🏆 Top Rated Agency</div>
                    </div>
                </div>

                {/* Controls – slightly smaller */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 32 }}>
                    <button onClick={() => go(current - 1)} style={{ width: 36, height: 36, borderRadius: "50%", background: "#fff", border: "2px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                        <ChevronRight size={16} color="#555" style={{ transform: "rotate(180deg)" }} />
                    </button>
                    <div style={{ display: "flex", gap: 6 }}>
                        {slides.map((_, i) => (
                            <button key={i} onClick={() => go(i)} style={{ height: 7, border: "none", cursor: "pointer", borderRadius: 99, background: i === current ? slide.accent : "#e5e7eb", width: i === current ? 28 : 7, transition: "all 0.3s ease", padding: 0 }} />
                        ))}
                    </div>
                    <button onClick={() => go(current + 1)} style={{ width: 36, height: 36, borderRadius: "50%", background: slide.accent, border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: `0 4px 14px ${slide.accent}50` }}>
                        <ChevronRight size={16} color="#fff" />
                    </button>
                </div>

                {/* Progress bar */}
                <div style={{ maxWidth: 260, margin: "14px auto 0", height: 3, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                    <div key={`pb-${animKey}`} className="progress-fill" style={{ height: "100%", background: slide.accent, borderRadius: 99, animation: "progressFill 4s linear forwards" }} />
                </div>
                <div style={{ textAlign: "center", marginTop: 8, fontSize: 10, color: "#aaa", fontWeight: 700 }}>
                    {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </div>
            </section>
        </>
    );
}

// ─── UPDATED ClientCard (larger logos) ────────────────────────────────────
function ClientCard({ cl }: any) {
    return (
        <div
            className="client-card flex-shrink-0 bg-white border border-gray-200 rounded-2xl mx-4 px-6 py-5 flex items-center gap-5 shadow-sm hover:shadow-lg transition-all duration-300"
            style={{ width: 280 }}
        >
            <div className="w-24 h-24 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-gray-50 border border-gray-100 p-2">
                <img
                    src={cl.img}
                    alt={cl.name}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="min-w-0">
                <p className="font-bold text-gray-800 text-base leading-tight truncate">
                    {cl.name}
                </p>
                <p className="text-xs text-gray-400 mt-1 truncate">{cl.industry}</p>
            </div>
        </div>
    );
}

// ──────────────────────────────────────────────────────────────
// GLOBAL STYLES
// ──────────────────────────────────────────────────────────────

const globalStyles = `
  @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  @keyframes marqueeRev { 0%{transform:translateX(-50%)} 100%{transform:translateX(0)} }
  @keyframes certScroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
  @keyframes fadeSlideUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
  @keyframes progressFill { from{width:0%} to{width:100%} }

  .marquee-track { display:flex; width:max-content; animation:marquee 30s linear infinite; }
  .marquee-track:hover { animation-play-state:paused; }
  .marquee-track-reverse { display:flex; width:max-content; animation:marqueeRev 28s linear infinite; }
  .marquee-track-reverse:hover { animation-play-state:paused; }
  .cert-strip { display:flex; width:max-content; animation:certScroll 28s linear infinite; }
  .cert-strip:hover { animation-play-state:paused; }
  .slide-anim { animation:fadeSlideUp 0.5s ease forwards; }
  .progress-fill { animation:progressFill 4s linear forwards; }

  .client-card { transition:transform 0.2s ease,box-shadow 0.2s ease; cursor:default; }
  .client-card:hover { transform:translateY(-5px); box-shadow:0 10px 30px rgba(220,38,38,0.14); }
`;

// ──────────────────────────────────────────────────────────────
// MAIN HomePage
// ──────────────────────────────────────────────────────────────

export default function HomePage() {
    const doubledClients = [...clients, ...clients];

    return (
        <div className="min-h-screen">
            <style>{globalStyles}</style>

            {/* ── HERO SLIDER (FULL WIDTH) ── */}
            <HeroSlider />

            {/* ── STATS BAR ── */}
            <section className="bg-gray-50 border-y border-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                        {[
                            { to: 550, suffix: "+", label: "Clients Worldwide" },
                            { to: 98, suffix: "%", label: "Client Satisfaction" },
                            { to: 120, suffix: "+", label: "Projects Delivered" },
                            { to: 8, suffix: "+", label: "Years Experience" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-4xl font-extrabold text-red-600">
                                    <Counter to={stat.to} suffix={stat.suffix} />
                                </p>
                                <p className="mt-1 text-sm text-gray-500 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHO WE ARE ── */}
            <section className="py-20 px-14 lg:px-6 bg-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="text-left mb-6">
                            <span className="inline-block rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-red-600 mb-3">Who We Are</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.2] text-gray-900 mb-5">
                            Building the Digital <span className="text-red-600">Future</span>,<br />
                            One <span className="text-red-600">Solution</span> at a Time.
                        </h2>
                        <p className="text-gray-500 text-[15px] leading-[1.8] mb-4">
                            Deific Digital is a full-service IT solutions company founded in 2014, headquartered in Noida, India. Over the past decade, we have grown into a trusted technology partner for{" "}
                            <span className="text-gray-800 font-semibold">550+ businesses across the globe</span>{" "}
                            — delivering high-impact web, mobile, AI, and digital marketing services.
                        </p>
                        <p className="text-gray-500 text-[15px] leading-[1.8] mb-7">
                            Our teams are proactive, detail-oriented, and obsessed with client success. With{" "}
                            <span className="text-gray-800 font-semibold">12+ years of experience</span>{" "}
                            and a 98% satisfaction rate, we don't follow digital trends — we help our clients lead them.
                        </p>
                        <button className="inline-flex items-center gap-2 border-2 border-red-600 text-red-600 font-bold text-sm px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-red-600 hover:text-white transition-all duration-200">
                            Request A Quote &rsaquo;
                        </button>
                    </div>

                    {/* Stat cards */}
                    <div className="grid grid-cols-3 gap-3">
                        {[
                            { icon: experience, val: "12+", lbl: ["Years", "Experience"], card: "bg-red-50", glow: "rgba(239,68,68,0.15)" },
                            { icon: team, val: "50+", lbl: ["Talented", "Squad"], card: "bg-rose-50", glow: "rgba(244,63,94,0.15)" },
                            { icon: project, val: "550+", lbl: ["Projects", "Delivered"], card: "bg-orange-50", glow: "rgba(249,115,22,0.15)" },
                            { icon: build, val: "100+", lbl: ["Web Apps", "Built"], card: "bg-pink-50", glow: "rgba(232,121,249,0.15)" },
                            { icon: country, val: "20+", lbl: ["Countries", "Served"], card: "bg-red-50", glow: "rgba(252,165,165,0.2)" },
                            { icon: client, val: "98%", lbl: ["Client", "Satisfaction"], card: "bg-orange-50", glow: "rgba(251,146,60,0.15)" },
                        ].map((s, i) => (
                            <div key={i} className={`relative overflow-hidden rounded-2xl ${s.card} border border-white/60 p-4 flex flex-col items-center justify-center text-center`}>
                                <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: `radial-gradient(circle at 60% 30%, ${s.glow} 0%, transparent 70%)` }} />
                                <div className="w-8 md:w-10 mb-4 relative z-10"><img src={s.icon} alt="" /></div>
                                <div className="text-xl md:text-2xl font-black text-gray-900 leading-none relative z-10">{s.val}</div>
                                <div className="text-[9px] md:text-[11px] font-semibold text-gray-500 mt-1 leading-[1.4] relative z-10">{s.lbl[0]}<br />{s.lbl[1]}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="flex justify-center py-2"><div className="w-3/4 h-px bg-gray-200" /></div>

            {/* ── SERVICES ── */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-14">
                    <span className="inline-block rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-red-600 mb-3">What We Do</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Our <span className="text-red-600">Core Services</span></h2>
                    <p className="mt-3 text-gray-500 max-w-xl mx-auto">End-to-end digital solutions tailored for your business needs.</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    {services.map((s) => (
                        <div key={s.title} className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-100 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-100/40 transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-[3px] bg-red-600 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            <div className="absolute inset-0 bg-gradient-to-br from-red-50/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            <div className="relative z-10">
                                <div className="h-11 w-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110 transition-all duration-300">
                                    <s.icon className="h-5 w-5 text-red-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="font-black text-[20px] text-gray-900 leading-tight">{s.title}</h3>
                                <div className="mt-3 mb-3 w-8 h-[2px] bg-red-200 rounded-full group-hover:w-14 group-hover:bg-red-500 transition-all duration-300" />
                                <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
                                <Link to={s.link} className="mt-5 inline-flex items-center gap-1 text-[13px] font-bold text-red-600 group/link">
                                    <span className="border-b border-dashed border-red-300 group-hover/link:border-red-600 transition-colors">Learn more</span>
                                    <ChevronRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="flex justify-center py-2"><div className="w-3/4 h-px bg-gray-200" /></div>

            {/* ── WHY CHOOSE US ── */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-3 md:mb-5">
                        <span className="inline-block rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-red-600 mb-6">Why Choose US</span>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">Businesses <span className="text-red-600">Trust</span> Deific Digital</h2>
                    </div>
                    <div className="flex justify-center mb-20">
                        <div className="w-[55%] h-[2px] bg-[#EF0F0F]" />
                    </div>
                    <h2 className="text-xl sm:text-4xl font-black tracking-tight leading-[1.2] text-gray-900 mb-3">
                        More Than an Agency —<br />We're Your <span className="text-red-600">Growth Engine.</span>
                    </h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed max-w-2xl mb-10">
                        From AI-powered tools to round-the-clock delivery, every part of Deific Digital is built to move your business forward — faster, smarter, better.
                    </p>

                    {/* AI Review Ninja Pro */}
                    <div className="relative overflow-hidden bg-red-50 border border-red-200 rounded-2xl p-4 sm:p-5 mb-8">
                        <div className="absolute right-0 top-0 w-32 h-32 rounded-full bg-red-100 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center shrink-0 shadow-lg shadow-red-200">
                                <Star className="h-7 w-7 text-white fill-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="inline-block bg-red-600 text-white text-[12px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-4">Our Own Product</span>
                                <h3 className="text-lg sm:text-xl font-black text-gray-900 leading-tight">AI Review Ninja Pro</h3>
                                <p className="text-sm text-gray-500 mt-2 leading-relaxed max-w-2xl">
                                    We don't just build for clients — we create products that solve real business challenges.{" "}
                                    <span className="text-gray-700 font-semibold">AI Review Ninja Pro</span>{" "}
                                    helps businesses generate high-quality customer reviews, strengthen their online reputation, and improve local search visibility, making it easier to rank higher on Google Business Profile and attract more customers.
                                </p>
                            </div>
                            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full lg:w-auto lg:min-w-[320px]">
                                {[{ v: "+320%", l: "Review Growth" }, { v: "4.9★", l: "Avg Rating Boost" }, { v: "24/7", l: "AI Automation" }].map((st) => (
                                    <div key={st.l} className="bg-white rounded-xl border border-red-100 p-3 text-center">
                                        <p className="text-lg sm:text-xl font-black text-red-600">{st.v}</p>
                                        <p className="text-[11px] sm:text-xs text-gray-500">{st.l}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {features.map((s) => (
                            <div key={s.title} className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-100 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-100/40 transition-all duration-300 overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-[3px] bg-red-600 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                <div className="absolute inset-0 bg-gradient-to-br from-red-50/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="h-11 w-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110 transition-all duration-300">
                                        <s.icon className="h-5 w-5 text-red-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-black text-[20px] text-gray-900 leading-tight">{s.title}</h3>
                                    <div className="mt-3 mb-3 w-8 h-[2px] bg-red-200 rounded-full group-hover:w-14 group-hover:bg-red-500 transition-all duration-300" />
                                    <p className="text-[13px] text-gray-500 leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── OUR CLIENTS (marquee) ── */}
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

                <div className="overflow-hidden relative">
                    <div
                        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                        style={{ background: "linear-gradient(to right, #f9fafb, transparent)" }}
                    />
                    <div
                        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                        style={{ background: "linear-gradient(to left, #f9fafb, transparent)" }}
                    />
                    <div className="marquee-track py-4">
                        {doubledClients.map((cl, i) => (
                            <ClientCard key={`r1-${i}`} cl={cl} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-10 sm:gap-14 mt-14 px-4">
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

            {/* ── TESTIMONIALS ── */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-14">
                    <span className="inline-block rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-red-600 mb-3">Client Love</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What Our <span className="text-red-600">Clients Say</span></h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t) => (
                        <div key={t.name} className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md transition-all relative">
                            <div className="absolute top-5 right-6 text-6xl text-red-100 font-serif leading-none select-none">"</div>
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: t.rating }).map((i: any) => (
                                    <Star key={i} className="h-4 w-4 fill-red-500 text-red-500" />
                                ))}
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed relative z-10">"{t.text}"</p>
                            <div className="mt-5 flex items-center gap-3">
                                <div className="h-11 w-11 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-sm">{t.name[0]}</div>
                                <div>
                                    <p className="font-bold text-sm text-gray-900">{t.name}</p>
                                    <p className="text-xs text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTABanner />
        </div>
    );
}