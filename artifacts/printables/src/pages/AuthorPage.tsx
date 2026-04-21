import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Linkedin, Globe, Code2, Database, Brain, TrendingUp, Layers, Cpu, Zap, BarChart2, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

// ─── Count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, started = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    const s = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - s) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(tick);
      else setValue(target);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);
  return value;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const TITLES = [
  "AI & Data-Driven Systems Developer",
  "Founder @ NovatraTech",
  "Full-Stack Engineer & SaaS Builder",
  "Search Intelligence & Automation Expert",
];

const SKILLS_ROW1 = ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL", "Node.js", "FastAPI", "Pandas", "Next.js", "Tailwind CSS", "Vite", "scikit-learn", "AWS", "Git", "Kaggle", "Supabase"];
const SKILLS_ROW2 = ["Data Analytics", "SEO Architecture", "Machine Learning", "Automation Pipelines", "SaaS Development", "Web Scraping", "API Design", "User Behavior Modeling", "Predictive Systems", "NLP", "Analytics Dashboards", "RAG Systems"];

const EXPERTISE = [
  { icon: <Brain size={17} />, label: "AI & Machine Learning", color: "#7c3aed" },
  { icon: <Code2 size={17} />, label: "Full-Stack Engineering", color: "#2563eb" },
  { icon: <Database size={17} />, label: "Data Analytics Pipelines", color: "#0891b2" },
  { icon: <TrendingUp size={17} />, label: "SEO Architecture", color: "#059669" },
  { icon: <Layers size={17} />, label: "Scalable SaaS Systems", color: "#d97706" },
  { icon: <Cpu size={17} />, label: "Automation Frameworks", color: "#dc2626" },
  { icon: <Zap size={17} />, label: "Performance Optimization", color: "#7c3aed" },
  { icon: <BarChart2 size={17} />, label: "Predictive Analytics", color: "#0891b2" },
];

const TIMELINE = [
  { year: "2020", title: "Started Full-Stack Development", desc: "Built first production web applications combining frontend engineering with backend data systems.", side: "left" },
  { year: "2021", title: "First SaaS Product Launched", desc: "Shipped a data-driven SaaS tool integrating analytics, automation, and user behavior modeling.", side: "right" },
  { year: "2022", title: "Founded NovatraTech", desc: "Established NovatraTech to build scalable, AI-powered web infrastructures and digital ecosystems.", side: "left" },
  { year: "2023", title: "25+ Niche Web Assets", desc: "Independently developed and managed 25+ niche web assets with full SEO architecture and analytics pipelines.", side: "right" },
  { year: "2024", title: "AI & Data Systems Focus", desc: "Deep focus on integrating LLMs, RAG systems, and predictive models into revenue-generating products.", side: "left" },
  { year: "2025+", title: "Self-Optimizing Ecosystems", desc: "Engineering intelligent digital ecosystems where AI and data continuously enhance performance and real-world impact.", side: "right" },
];

const LINKS = [
  { label: "Portfolio", url: "https://rabeeanaseer.online", icon: <Globe size={20} />, display: "rabeeanaseer.online", accent: "#7c3aed", bg: "#f5f3ff" },
  { label: "GitHub", url: "https://github.com/rabeeanaseer6-lab", icon: <Github size={20} />, display: "rabeeanaseer6-lab", accent: "#1a1a2e", bg: "#f0f0f5" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/rabeea-naseer-045b4a337/", icon: <Linkedin size={20} />, display: "rabeea-naseer-045b4a337", accent: "#0077b5", bg: "#e8f4fd" },
];

const BIO = [
  "Rabeea Naseer is an AI & data-driven systems developer and the founder of NovatraTech, focused on building scalable SaaS products, automated web infrastructures, and data-intelligent, revenue-generating digital ecosystems.",
  "She has independently developed and managed 25+ niche web assets, combining full-stack engineering with SEO architecture, data analytics, and user behavior modeling to transform websites into automated, performance-driven systems rather than static builds.",
  "Her work sits at the intersection of software engineering, search intelligence, and applied data science — integrating analytics pipelines and AI automation to optimize decision-making, user flows, and scalable growth.",
  "She actively develops and publishes projects on GitHub and Kaggle, focusing on applied analytics, predictive systems, and automation frameworks.",
  "Her long-term focus is on engineering intelligent, self-optimizing digital ecosystems, where AI and data continuously enhance performance, scalability, and real-world impact.",
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function AuthorPage() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  // Typewriter
  const [titleIdx, setTitleIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = TITLES[titleIdx];
    const delay = deleting ? 28 : 58;
    const t = setTimeout(() => {
      if (!deleting) {
        if (typed.length < full.length) setTyped(full.slice(0, typed.length + 1));
        else setTimeout(() => setDeleting(true), 2200);
      } else {
        if (typed.length > 0) setTyped(typed.slice(0, -1));
        else { setDeleting(false); setTitleIdx(i => (i + 1) % TITLES.length); }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [typed, deleting, titleIdx]);

  // Stats count-up
  const statsReveal = useReveal(0.2);
  const assets = useCountUp(25, 1800, statsReveal.visible);
  const projects = useCountUp(40, 2000, statsReveal.visible);
  const years = useCountUp(5, 1400, statsReveal.visible);
  const platforms = useCountUp(3, 1200, statsReveal.visible);

  // Section reveals
  const bioReveal = useReveal();
  const expertiseReveal = useReveal();
  const timelineReveal = useReveal();
  const linksReveal = useReveal();
  const quoteReveal = useReveal();

  // Link hover state
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <div style={{ minHeight: "100vh", background: "#f8f7ff", display: "flex", flexDirection: "column" }}>
      <style>{`
        @keyframes gradientShift {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes floatA {
          0%,100% { transform: translate(0,0) scale(1); }
          33%  { transform: translate(12px,-22px) scale(1.06); }
          66%  { transform: translate(-8px,10px) scale(0.95); }
        }
        @keyframes floatB {
          0%,100% { transform: translate(0,0) scale(1); }
          40%  { transform: translate(-14px,18px) scale(1.08); }
          70%  { transform: translate(10px,-12px) scale(0.94); }
        }
        @keyframes floatC {
          0%,100% { transform: translate(0,0); }
          50%  { transform: translate(6px,-18px); }
        }
        @keyframes avatarPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(167,139,250,0.55), 0 8px 40px rgba(0,0,0,0.35); }
          50%  { box-shadow: 0 0 0 18px rgba(167,139,250,0), 0 8px 40px rgba(0,0,0,0.35); }
        }
        @keyframes blinkCursor {
          0%,100% { opacity: 1; } 50% { opacity: 0; }
        }
        @keyframes tickerL {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes tickerR {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes timelineDot {
          0%,100% { box-shadow: 0 0 0 0 rgba(124,58,237,0.5); }
          50%     { box-shadow: 0 0 0 10px rgba(124,58,237,0); }
        }
        @keyframes shimmerGrad {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes tagSlide {
          from { opacity: 0; transform: translateY(12px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .author-skill-tag { transition: transform 0.2s, box-shadow 0.2s, background 0.2s; }
        .author-skill-tag:hover { transform: translateY(-2px) scale(1.04); box-shadow: 0 4px 16px rgba(124,58,237,0.18); }
        .author-link-card { transition: transform 0.22s, box-shadow 0.22s, border-color 0.22s; }
        .author-link-card:hover { transform: translateY(-4px); }
      `}</style>

      <PageHeader />

      <main style={{ flex: 1, width: "100%", boxSizing: "border-box" }}>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section style={{
          position: "relative", overflow: "hidden", textAlign: "center",
          padding: "80px 24px 96px",
          background: "linear-gradient(-45deg,#0f0c29,#1a1a2e,#302b63,#4c1d95,#7c3aed,#4c1d95,#1a1a2e)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 10s ease infinite",
        }}>
          {/* Floating blobs */}
          {[
            { w:320, h:320, top:-80, left:-60,  bg:"rgba(124,58,237,0.28)", anim:"floatA 7s ease-in-out infinite" },
            { w:260, h:260, top:40,  right:-50, bg:"rgba(167,139,250,0.2)", anim:"floatB 9s ease-in-out infinite 1s" },
            { w:180, h:180, bottom:-40, left:"35%", bg:"rgba(216,180,254,0.15)", anim:"floatC 6s ease-in-out infinite 2s" },
          ].map((b, i) => (
            <div key={i} style={{
              position: "absolute", borderRadius: "50%", filter: "blur(48px)",
              width: b.w, height: b.h, top: (b as any).top, left: (b as any).left,
              right: (b as any).right, bottom: (b as any).bottom,
              background: b.bg, animation: b.anim, pointerEvents: "none",
            }} />
          ))}

          {/* Grid overlay */}
          <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize:"44px 44px", pointerEvents:"none" }} />

          {/* Avatar */}
          <div style={{ position:"relative", zIndex:1, display:"inline-block", marginBottom:28 }}>
            <div style={{
              width:120, height:120, borderRadius:"50%",
              background:"linear-gradient(135deg,#c4b5fd,#7c3aed,#4c1d95)",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:"2.8rem", fontWeight:900, color:"white",
              margin:"0 auto",
              animation:"avatarPulse 3s ease-in-out infinite",
              border:"3px solid rgba(255,255,255,0.2)",
            }}>RN</div>
            {/* Orbiting dot */}
            <div style={{
              position:"absolute", inset:-8,
              borderRadius:"50%",
              border:"2px dashed rgba(196,181,253,0.35)",
              animation:"floatC 12s linear infinite",
            }} />
          </div>

          <div style={{ position:"relative", zIndex:1 }}>
            <h1 style={{ fontSize:"2.8rem", fontWeight:900, color:"white", margin:"0 0 14px", letterSpacing:"-0.5px", animation:"fadeUp 0.7s ease both" }}>
              Rabeea Naseer
            </h1>
            {/* Typewriter */}
            <div style={{ minHeight:36, marginBottom:12 }}>
              <span style={{
                fontSize:"1.08rem", fontWeight:700,
                background:"linear-gradient(90deg,#c4b5fd,#f0abfc,#93c5fd)",
                backgroundSize:"200% auto",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                animation:"shimmerGrad 4s linear infinite",
              }}>
                {typed}
              </span>
              <span style={{ display:"inline-block", width:2, height:"1.1em", background:"#c4b5fd", marginLeft:2, verticalAlign:"middle", animation:"blinkCursor 1s step-end infinite" }} />
            </div>
            <p style={{ fontSize:"0.95rem", color:"rgba(255,255,255,0.6)", margin:"0 auto 36px", maxWidth:500, lineHeight:1.6, animation:"fadeUp 0.9s ease 0.2s both" }}>
              Founder @ <span style={{ color:"#c4b5fd", fontWeight:700 }}>NovatraTech</span> · Building Scalable SaaS, Automation & Data-Intelligent Web Systems
            </p>

            {/* Social buttons */}
            <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", animation:"fadeUp 1s ease 0.4s both" }}>
              {LINKS.map(link => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:8,
                    background:"rgba(255,255,255,0.1)", backdropFilter:"blur(8px)",
                    border:"1.5px solid rgba(255,255,255,0.22)", color:"white",
                    textDecoration:"none", padding:"10px 20px", borderRadius:12,
                    fontSize:"0.88rem", fontWeight:700,
                    transition:"background 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background="rgba(255,255,255,0.2)"; e.currentTarget.style.transform="translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.1)"; e.currentTarget.style.transform="translateY(0)"; }}
                >
                  {link.icon} {link.label} <ExternalLink size={12} style={{ opacity:0.7 }} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS TICKER ─────────────────────────────────────────────────── */}
        <div style={{ background:"#1a1a2e", padding:"22px 0", overflow:"hidden" }}>
          {[{ skills: SKILLS_ROW1, dir: "tickerL", speed: "28s" }, { skills: SKILLS_ROW2, dir: "tickerR", speed: "22s" }].map((row, ri) => (
            <div key={ri} style={{ overflow:"hidden", marginBottom: ri === 0 ? 10 : 0 }}>
              <div style={{ display:"flex", gap:20, animation:`${row.dir} ${row.speed} linear infinite`, width:"max-content" }}>
                {[...row.skills, ...row.skills].map((s, i) => (
                  <span key={i} style={{
                    whiteSpace:"nowrap", padding:"6px 18px", borderRadius:999,
                    border:"1px solid rgba(124,58,237,0.4)",
                    color: ri === 0 ? "#c4b5fd" : "#93c5fd",
                    fontSize:"0.82rem", fontWeight:600,
                    background:"rgba(124,58,237,0.12)",
                  }}>
                    {ri === 0 ? "⚡" : "◆"} {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── STATS ─────────────────────────────────────────────────────────── */}
        <div ref={statsReveal.ref} style={{ background:"white", borderBottom:"1.5px solid #ede9fe" }}>
          <div style={{ maxWidth:920, margin:"0 auto", padding:"52px 24px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:24 }}>
            {[
              { val: assets, suffix:"+", label:"Niche Web Assets Built", desc:"Independently managed" },
              { val: projects, suffix:"+", label:"Projects Shipped", desc:"Across SaaS & data products" },
              { val: years,   suffix:"+", label:"Years Building", desc:"Full-stack & AI systems" },
              { val: platforms, suffix:"", label:"Major Platforms", desc:"GitHub • Kaggle • NovatraTech" },
            ].map((s, i) => (
              <div key={i} style={{
                textAlign:"center", padding:"28px 16px",
                borderRadius:20,
                background: statsReveal.visible ? "linear-gradient(135deg,#faf5ff,#f5f3ff)" : "#f9fafb",
                border:"1.5px solid #ede9fe",
                boxShadow:"0 4px 24px rgba(124,58,237,0.07)",
                animation: statsReveal.visible ? `scaleIn 0.5s ease ${i * 0.12}s both` : "none",
              }}>
                <div style={{ fontSize:"2.6rem", fontWeight:900, color:"#7c3aed", lineHeight:1, marginBottom:8 }}>
                  {s.val}{s.suffix}
                </div>
                <div style={{ fontWeight:800, color:"#1a1a2e", fontSize:"0.92rem", marginBottom:5 }}>{s.label}</div>
                <div style={{ fontSize:"0.78rem", color:"#9ca3af" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth:900, margin:"0 auto", padding:"56px 24px 72px" }}>

          {/* ── BIO ─────────────────────────────────────────────────────────── */}
          <div ref={bioReveal.ref} style={{
            background:"white", borderRadius:24, border:"1.5px solid #ede9fe",
            padding:"40px 44px", marginBottom:32,
            boxShadow:"0 4px 28px rgba(124,58,237,0.08)",
            animation: bioReveal.visible ? "fadeUp 0.65s ease both" : "none",
            opacity: bioReveal.visible ? 1 : 0,
          }}>
            <h2 style={{ fontSize:"1.3rem", fontWeight:800, color:"#1a1a2e", marginBottom:22, display:"flex", alignItems:"center", gap:12 }}>
              <span style={{ width:4, height:24, background:"linear-gradient(#7c3aed,#a855f7)", borderRadius:2, display:"inline-block" }} />
              About Rabeea
            </h2>
            {BIO.map((para, i) => (
              <p key={i} style={{
                color:"#374151", fontSize:"0.98rem", lineHeight:1.85,
                marginBottom: i < BIO.length - 1 ? 18 : 0,
                animation: bioReveal.visible ? `fadeUp 0.5s ease ${0.1 + i * 0.08}s both` : "none",
                opacity: bioReveal.visible ? 1 : 0,
              }}>
                {para}
              </p>
            ))}
          </div>

          {/* ── EXPERTISE TAGS ──────────────────────────────────────────────── */}
          <div ref={expertiseReveal.ref} style={{
            background:"white", borderRadius:24, border:"1.5px solid #ede9fe",
            padding:"40px 44px", marginBottom:32,
            boxShadow:"0 4px 28px rgba(124,58,237,0.08)",
            animation: expertiseReveal.visible ? "fadeUp 0.65s ease 0.1s both" : "none",
            opacity: expertiseReveal.visible ? 1 : 0,
          }}>
            <h2 style={{ fontSize:"1.3rem", fontWeight:800, color:"#1a1a2e", marginBottom:24, display:"flex", alignItems:"center", gap:12 }}>
              <span style={{ width:4, height:24, background:"linear-gradient(#7c3aed,#a855f7)", borderRadius:2, display:"inline-block" }} />
              Areas of Expertise
            </h2>
            <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
              {EXPERTISE.map((item, i) => (
                <div key={i} className="author-skill-tag" style={{
                  display:"inline-flex", alignItems:"center", gap:8,
                  background:`${item.color}14`, border:`1.5px solid ${item.color}30`,
                  color: item.color, padding:"10px 20px", borderRadius:999,
                  fontSize:"0.88rem", fontWeight:700, cursor:"default",
                  animation: expertiseReveal.visible ? `tagSlide 0.4s ease ${i * 0.07}s both` : "none",
                  opacity: expertiseReveal.visible ? 1 : 0,
                }}>
                  {item.icon} {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── TIMELINE ────────────────────────────────────────────────────── */}
          <div ref={timelineReveal.ref} style={{
            background:"white", borderRadius:24, border:"1.5px solid #ede9fe",
            padding:"40px 44px", marginBottom:32,
            boxShadow:"0 4px 28px rgba(124,58,237,0.08)",
            animation: timelineReveal.visible ? "fadeUp 0.65s ease 0.15s both" : "none",
            opacity: timelineReveal.visible ? 1 : 0,
          }}>
            <h2 style={{ fontSize:"1.3rem", fontWeight:800, color:"#1a1a2e", marginBottom:36, display:"flex", alignItems:"center", gap:12 }}>
              <span style={{ width:4, height:24, background:"linear-gradient(#7c3aed,#a855f7)", borderRadius:2, display:"inline-block" }} />
              The Journey
            </h2>
            <div style={{ position:"relative" }}>
              {/* Center line */}
              <div style={{ position:"absolute", left:"50%", top:0, bottom:0, width:2, background:"linear-gradient(#7c3aed,#a855f7,#7c3aed)", transform:"translateX(-50%)", opacity:0.3 }} />

              <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
                {TIMELINE.map((item, i) => {
                  const isLeft = item.side === "left";
                  return (
                    <div key={i} style={{
                      display:"flex", alignItems:"center", gap:0,
                      marginBottom: i < TIMELINE.length - 1 ? 8 : 0,
                      flexDirection: isLeft ? "row" : "row-reverse",
                      animation: timelineReveal.visible ? `${isLeft ? "fadeLeft" : "fadeRight"} 0.55s ease ${0.1 + i * 0.1}s both` : "none",
                      opacity: timelineReveal.visible ? 1 : 0,
                    }}>
                      {/* Card */}
                      <div style={{
                        flex:1, padding:"18px 22px", borderRadius:16,
                        background: i % 2 === 0 ? "#faf5ff" : "#f5f3ff",
                        border:"1.5px solid #ede9fe",
                        margin: isLeft ? "8px 24px 8px 0" : "8px 0 8px 24px",
                      }}>
                        <div style={{ fontSize:"0.75rem", fontWeight:700, color:"#7c3aed", marginBottom:4, letterSpacing:"0.05em", textTransform:"uppercase" }}>{item.year}</div>
                        <div style={{ fontWeight:800, color:"#1a1a2e", fontSize:"0.95rem", marginBottom:6 }}>{item.title}</div>
                        <div style={{ fontSize:"0.84rem", color:"#6b7280", lineHeight:1.6 }}>{item.desc}</div>
                      </div>
                      {/* Dot */}
                      <div style={{
                        width:16, height:16, borderRadius:"50%", flexShrink:0,
                        background:"linear-gradient(135deg,#7c3aed,#a855f7)",
                        border:"3px solid white",
                        boxShadow:"0 0 0 3px #ede9fe",
                        animation: timelineReveal.visible ? `timelineDot 2.5s ease-in-out ${i * 0.4}s infinite` : "none",
                        zIndex:1,
                      }} />
                      {/* Spacer for other side */}
                      <div style={{ flex:1 }} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── CONNECT LINKS ───────────────────────────────────────────────── */}
          <div ref={linksReveal.ref} style={{
            background:"white", borderRadius:24, border:"1.5px solid #ede9fe",
            padding:"40px 44px", marginBottom:32,
            boxShadow:"0 4px 28px rgba(124,58,237,0.08)",
            animation: linksReveal.visible ? "fadeUp 0.65s ease 0.2s both" : "none",
            opacity: linksReveal.visible ? 1 : 0,
          }}>
            <h2 style={{ fontSize:"1.3rem", fontWeight:800, color:"#1a1a2e", marginBottom:24, display:"flex", alignItems:"center", gap:12 }}>
              <span style={{ width:4, height:24, background:"linear-gradient(#7c3aed,#a855f7)", borderRadius:2, display:"inline-block" }} />
              Connect & Explore
            </h2>
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {LINKS.map((link, i) => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                  className="author-link-card"
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    display:"flex", alignItems:"center", gap:16,
                    padding:"18px 22px", borderRadius:16, textDecoration:"none",
                    border:`2px solid ${hoveredLink === link.label ? link.accent : "#ede9fe"}`,
                    background: hoveredLink === link.label ? link.bg : "#fdfcff",
                    boxShadow: hoveredLink === link.label ? `0 8px 28px ${link.accent}22` : "0 2px 8px rgba(0,0,0,0.04)",
                    animation: linksReveal.visible ? `scaleIn 0.45s ease ${i * 0.12}s both` : "none",
                    opacity: linksReveal.visible ? 1 : 0,
                  }}
                >
                  <div style={{
                    width:48, height:48, borderRadius:14, flexShrink:0,
                    background: link.bg, display:"flex", alignItems:"center", justifyContent:"center",
                    color: link.accent, border:`1.5px solid ${link.accent}25`,
                  }}>
                    {link.icon}
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontWeight:800, color:"#1a1a2e", fontSize:"0.97rem", marginBottom:3 }}>{link.label}</div>
                    <div style={{ fontSize:"0.83rem", color: link.accent, fontFamily:"monospace", fontWeight:600 }}>{link.display}</div>
                  </div>
                  <ChevronRight size={18} style={{ color: hoveredLink === link.label ? link.accent : "#d1d5db", transition:"color 0.2s" }} />
                </a>
              ))}
            </div>
          </div>

          {/* ── QUOTE BANNER ────────────────────────────────────────────────── */}
          <div ref={quoteReveal.ref} style={{
            borderRadius:24, overflow:"hidden",
            background:"linear-gradient(-45deg,#1a1a2e,#2e1065,#4c1d95,#7c3aed)",
            backgroundSize:"300% 300%",
            animation: quoteReveal.visible ? "gradientShift 8s ease infinite, fadeUp 0.7s ease both" : "none",
            opacity: quoteReveal.visible ? 1 : 0,
            padding:"44px 40px", textAlign:"center",
            boxShadow:"0 8px 40px rgba(124,58,237,0.3)",
          }}>
            <div style={{ fontSize:"3rem", marginBottom:16, opacity:0.6 }}>"</div>
            <p style={{ fontSize:"1.12rem", color:"rgba(255,255,255,0.92)", lineHeight:1.75, fontStyle:"italic", maxWidth:680, margin:"0 auto 20px", fontWeight:500 }}>
              Engineering intelligent, self-optimizing digital ecosystems where AI and data continuously enhance performance, scalability, and real-world impact.
            </p>
            <div style={{ fontSize:"0.9rem", color:"#c4b5fd", fontWeight:700 }}>— Rabeea Naseer, Founder @ NovatraTech</div>
            <div style={{ marginTop:28 }}>
              <Link href={base + "/"} style={{
                display:"inline-flex", alignItems:"center", gap:8,
                background:"white", color:"#7c3aed",
                textDecoration:"none", padding:"12px 28px", borderRadius:14,
                fontWeight:800, fontSize:"0.95rem",
                boxShadow:"0 4px 20px rgba(0,0,0,0.2)",
                transition:"transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 28px rgba(0,0,0,0.3)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 20px rgba(0,0,0,0.2)"; }}
              >
                Explore PrintPals <ChevronRight size={16} />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <PageFooter />
    </div>
  );
}
