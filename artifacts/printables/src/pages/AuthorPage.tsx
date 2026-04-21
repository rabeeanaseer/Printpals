import { ExternalLink, Github, Linkedin, Globe, Code2, Database, Brain, TrendingUp, Layers, Cpu } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

const expertise = [
  { icon: <Brain size={18} />, label: "AI & Machine Learning" },
  { icon: <Code2 size={18} />, label: "Full-Stack Engineering" },
  { icon: <Database size={18} />, label: "Data Analytics Pipelines" },
  { icon: <TrendingUp size={18} />, label: "SEO Architecture" },
  { icon: <Layers size={18} />, label: "Scalable SaaS Systems" },
  { icon: <Cpu size={18} />, label: "Automation Frameworks" },
];

const links = [
  {
    label: "Portfolio",
    url: "https://rabeeanaseer.online",
    icon: <Globe size={18} />,
    display: "rabeeanaseer.online",
    color: "#7c3aed",
  },
  {
    label: "GitHub",
    url: "https://github.com/rabeeanaseer6-lab",
    icon: <Github size={18} />,
    display: "rabeeanaseer6-lab",
    color: "#1a1a2e",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/rabeea-naseer-045b4a337/",
    icon: <Linkedin size={18} />,
    display: "rabeea-naseer-045b4a337",
    color: "#0077b5",
  },
];

const highlights = [
  { number: "25+", label: "Niche Web Assets Built" },
  { number: "SaaS", label: "Products Developed" },
  { number: "AI", label: "Automation Systems" },
  { number: "Data", label: "Analytics Pipelines" },
];

export default function AuthorPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8f7ff", display: "flex", flexDirection: "column" }}>
      <PageHeader />

      <main style={{ flex: 1, width: "100%", boxSizing: "border-box" }}>

        {/* Hero Banner */}
        <div style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #4c1d95 60%, #7c3aed 100%)",
          padding: "72px 24px 80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(124,58,237,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)" }} />

          {/* Avatar */}
          <div style={{
            width: 110, height: 110,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
            border: "4px solid rgba(255,255,255,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 24px",
            fontSize: "2.5rem", fontWeight: 900, color: "white",
            position: "relative", zIndex: 1,
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}>
            RN
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <h1 style={{ fontSize: "2.4rem", fontWeight: 900, color: "white", margin: "0 0 10px", letterSpacing: "-0.5px" }}>
              Rabeea Naseer
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.82)", margin: "0 0 8px", fontWeight: 600 }}>
              AI & Data-Driven Systems Developer
            </p>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", margin: "0 auto 32px", maxWidth: 480 }}>
              Founder @ <span style={{ color: "#c4b5fd", fontWeight: 700 }}>NovatraTech</span> · Building Scalable SaaS, Automation & Data-Intelligent Web Systems
            </p>

            {/* Social links in hero */}
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 7,
                    background: "rgba(255,255,255,0.12)",
                    border: "1.5px solid rgba(255,255,255,0.25)",
                    color: "white", textDecoration: "none",
                    padding: "9px 18px", borderRadius: 10,
                    fontSize: "0.88rem", fontWeight: 600,
                    backdropFilter: "blur(6px)",
                    transition: "background 0.2s",
                  }}
                >
                  {link.icon}
                  {link.label}
                  <ExternalLink size={13} style={{ opacity: 0.7 }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "56px 24px 64px" }}>

          {/* Highlights row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, marginBottom: 48 }}>
            {highlights.map((h, i) => (
              <div key={i} style={{
                background: "white", borderRadius: 16,
                border: "1.5px solid #ede9fe",
                padding: "22px 16px", textAlign: "center",
                boxShadow: "0 2px 12px rgba(124,58,237,0.06)",
              }}>
                <div style={{ fontSize: "1.9rem", fontWeight: 900, color: "#7c3aed", marginBottom: 5 }}>{h.number}</div>
                <div style={{ fontSize: "0.83rem", color: "#6b7280", fontWeight: 600 }}>{h.label}</div>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div style={{ background: "white", borderRadius: 20, border: "1.5px solid #ede9fe", padding: "36px 40px", marginBottom: 28, boxShadow: "0 2px 16px rgba(124,58,237,0.06)" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1a1a2e", marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 4, height: 22, background: "#7c3aed", borderRadius: 2, display: "inline-block" }} />
              About Rabeea
            </h2>

            {[
              "Rabeea Naseer is an AI & data-driven systems developer and the founder of NovatraTech, focused on building scalable SaaS products, automated web infrastructures, and data-intelligent, revenue-generating digital ecosystems.",
              "She has independently developed and managed 25+ niche web assets, combining full-stack engineering with SEO architecture, data analytics, and user behavior modeling to transform websites into automated, performance-driven systems rather than static builds.",
              "Her work sits at the intersection of software engineering, search intelligence, and applied data science — integrating analytics pipelines and AI automation to optimize decision-making, user flows, and scalable growth.",
              "She actively develops and publishes projects on GitHub and Kaggle, focusing on applied analytics, predictive systems, and automation frameworks.",
              "Her long-term focus is on engineering intelligent, self-optimizing digital ecosystems, where AI and data continuously enhance performance, scalability, and real-world impact.",
            ].map((para, i) => (
              <p key={i} style={{ color: "#374151", fontSize: "0.97rem", lineHeight: 1.82, marginBottom: i < 4 ? 16 : 0 }}>
                {para}
              </p>
            ))}
          </div>

          {/* Expertise */}
          <div style={{ background: "white", borderRadius: 20, border: "1.5px solid #ede9fe", padding: "36px 40px", marginBottom: 28, boxShadow: "0 2px 16px rgba(124,58,237,0.06)" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1a1a2e", marginBottom: 22, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 4, height: 22, background: "#7c3aed", borderRadius: 2, display: "inline-block" }} />
              Areas of Expertise
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {expertise.map((item, i) => (
                <div key={i} style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#f5f3ff",
                  border: "1.5px solid #ede9fe",
                  color: "#5b21b6",
                  padding: "9px 18px", borderRadius: 24,
                  fontSize: "0.9rem", fontWeight: 600,
                }}>
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ background: "white", borderRadius: 20, border: "1.5px solid #ede9fe", padding: "36px 40px", boxShadow: "0 2px 16px rgba(124,58,237,0.06)" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1a1a2e", marginBottom: 22, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 4, height: 22, background: "#7c3aed", borderRadius: 2, display: "inline-block" }} />
              Connect & Explore
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "16px 20px", borderRadius: 14,
                    border: "1.5px solid #ede9fe",
                    textDecoration: "none",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    background: "#fdfcff",
                  }}
                >
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: link.color === "#0077b5" ? "#e8f4fd" : link.color === "#1a1a2e" ? "#f0f0f5" : "#f5f3ff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: link.color, flexShrink: 0,
                  }}>
                    {link.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: "#1a1a2e", fontSize: "0.95rem", marginBottom: 2 }}>{link.label}</div>
                    <div style={{ fontSize: "0.83rem", color: "#7c3aed", fontFamily: "monospace" }}>{link.display}</div>
                  </div>
                  <ExternalLink size={16} style={{ color: "#9ca3af", flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </main>

      <PageFooter />
    </div>
  );
}
