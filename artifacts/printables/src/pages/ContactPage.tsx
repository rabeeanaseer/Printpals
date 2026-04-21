import { useState } from "react";
import { Mail, Send, Lightbulb, CheckCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default function ContactPage() {
  const [contactSent, setContactSent] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [requestForm, setRequestForm] = useState({ name: '', email: '', subject: '', details: '', age: '' });

  function handleContact(e: React.FormEvent) {
    e.preventDefault();
    setContactSent(true);
  }

  function handleRequest(e: React.FormEvent) {
    e.preventDefault();
    setRequestSent(true);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '11px 14px', borderRadius: 10, border: '2px solid #e5e7eb',
    fontSize: '0.9rem', outline: 'none', fontFamily: 'inherit', background: '#fafafa',
    boxSizing: 'border-box', transition: 'border 0.15s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block', fontWeight: 700, fontSize: '0.85rem', color: '#374151', marginBottom: 6,
  };

  const sectionCard: React.CSSProperties = {
    background: 'white', borderRadius: 20, padding: '36px', border: '1.5px solid #ede9fe',
    boxShadow: '0 2px 12px rgba(124,58,237,0.06)',
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f7ff', fontFamily: "'Inter','Segoe UI',sans-serif", display: 'flex', flexDirection: 'column' }}>
      <PageHeader />

      <div style={{ background: 'linear-gradient(135deg,#f3f0ff,#fdf4ff)', borderBottom: '1.5px solid #ede9fe', padding: '40px 20px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: '2.6rem', marginBottom: 10 }}>💬</div>
        <h1 style={{ fontWeight: 900, fontSize: 'clamp(1.6rem,4vw,2.4rem)', color: '#1a1a2e', margin: '0 0 10px' }}>Get in Touch</h1>
        <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
          Have a question, found a bug, or want to suggest a new printable? We'd love to hear from you!
        </p>
      </div>

      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '44px 20px 60px', width: '100%', boxSizing: 'border-box', flex: 1 }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 28 }}>

          {/* Contact Form */}
          <div style={sectionCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <div style={{ width: 40, height: 40, borderRadius: 11, background: 'linear-gradient(135deg,#7c3aed,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail style={{ width: 18, height: 18, color: 'white' }} />
              </div>
              <div>
                <h2 style={{ fontWeight: 900, fontSize: '1.2rem', color: '#1a1a2e', margin: 0 }}>Contact Us</h2>
                <p style={{ color: '#9ca3af', fontSize: '0.8rem', margin: 0 }}>We reply within 24 hours</p>
              </div>
            </div>

            {contactSent ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle style={{ width: 44, height: 44, color: '#22c55e', margin: '0 auto 12px' }} />
                <h3 style={{ fontWeight: 800, color: '#1a1a2e', marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.6 }}>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button onClick={() => { setContactSent(false); setContactForm({ name: '', email: '', message: '' }); }}
                  style={{ marginTop: 16, padding: '8px 20px', background: '#f3f0ff', color: '#7c3aed', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: '0.86rem' }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleContact} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={labelStyle}>Your Name</label>
                  <input required value={contactForm.name} onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Jane Smith" style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.background = 'white'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#fafafa'; }} />
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input required type="email" value={contactForm.email} onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="jane@example.com" style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.background = 'white'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#fafafa'; }} />
                </div>
                <div>
                  <label style={labelStyle}>Message</label>
                  <textarea required rows={5} value={contactForm.message} onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell us how we can help..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.background = 'white'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#fafafa'; }} />
                </div>
                <button type="submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px', background: 'linear-gradient(135deg,#7c3aed,#a855f7)', color: 'white', border: 'none', borderRadius: 11, fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 4px 14px rgba(124,58,237,0.3)' }}>
                  <Send style={{ width: 16, height: 16 }} /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Request a Printable */}
          <div id="request" style={sectionCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <div style={{ width: 40, height: 40, borderRadius: 11, background: 'linear-gradient(135deg,#f59e0b,#fbbf24)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Lightbulb style={{ width: 18, height: 18, color: 'white' }} />
              </div>
              <div>
                <h2 style={{ fontWeight: 900, fontSize: '1.2rem', color: '#1a1a2e', margin: 0 }}>Request a Printable</h2>
                <p style={{ color: '#9ca3af', fontSize: '0.8rem', margin: 0 }}>We add popular requests regularly</p>
              </div>
            </div>

            {requestSent ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <CheckCircle style={{ width: 44, height: 44, color: '#22c55e', margin: '0 auto 12px' }} />
                <h3 style={{ fontWeight: 800, color: '#1a1a2e', marginBottom: 8 }}>Request Submitted!</h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.6 }}>Great idea! We review all requests and add the most popular ones each week.</p>
                <button onClick={() => { setRequestSent(false); setRequestForm({ name: '', email: '', subject: '', details: '', age: '' }); }}
                  style={{ marginTop: 16, padding: '8px 20px', background: '#fef3c7', color: '#92400e', border: 'none', borderRadius: 8, fontWeight: 700, cursor: 'pointer', fontSize: '0.86rem' }}>
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleRequest} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input required value={requestForm.name} onChange={e => setRequestForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Jane" style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = '#f59e0b'; e.currentTarget.style.background = 'white'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#fafafa'; }} />
                  </div>
                  <div>
                    <label style={labelStyle}>Child's Age</label>
                    <select value={requestForm.age} onChange={e => setRequestForm(f => ({ ...f, age: e.target.value }))}
                      style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Select age...</option>
                      {['2-3','4-5','6-7','8-9','10-12','13+','Adult'].map(a => <option key={a} value={a}>{a} years</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Email (optional)</label>
                  <input type="email" value={requestForm.email} onChange={e => setRequestForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="We'll notify you when it's ready"
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = '#f59e0b'; e.currentTarget.style.background = 'white'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#fafafa'; }} />
                </div>
                <div>
                  <label style={labelStyle}>What would you like?</label>
                  <input required value={requestForm.subject} onChange={e => setRequestForm(f => ({ ...f, subject: e.target.value }))}
                    placeholder="e.g. Dinosaur tracing sheets"
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = '#f59e0b'; e.currentTarget.style.background = 'white'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#fafafa'; }} />
                </div>
                <div>
                  <label style={labelStyle}>More details (optional)</label>
                  <textarea rows={4} value={requestForm.details} onChange={e => setRequestForm(f => ({ ...f, details: e.target.value }))}
                    placeholder="Describe what you need — style, difficulty level, topic..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => { e.currentTarget.style.borderColor = '#f59e0b'; e.currentTarget.style.background = 'white'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.background = '#fafafa'; }} />
                </div>
                <button type="submit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px', background: 'linear-gradient(135deg,#f59e0b,#fbbf24)', color: 'white', border: 'none', borderRadius: 11, fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 4px 14px rgba(245,158,11,0.3)' }}>
                  <Lightbulb style={{ width: 16, height: 16 }} /> Submit My Request
                </button>
              </form>
            )}
          </div>
        </div>

        <div style={{ marginTop: 32, background: 'white', borderRadius: 16, padding: '24px 28px', border: '1.5px solid #e5e7eb' }}>
          <h3 style={{ fontWeight: 800, color: '#1a1a2e', fontSize: '1rem', marginBottom: 14 }}>📮 Other Ways to Reach Us</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 16 }}>
            {[
              { icon: '📌', label: 'Pinterest', desc: '@PrintPalsOfficial', color: '#e60023' },
              { icon: '📷', label: 'Instagram', desc: '@printpals_free', color: '#c13584' },
              { icon: '👍', label: 'Facebook', desc: 'PrintPals Community', color: '#1877f2' },
            ].map(s => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: '#f9fafb', borderRadius: 10, border: '1.5px solid #f3f4f6' }}>
                <span style={{ fontSize: '1.4rem' }}>{s.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.86rem', color: s.color }}>{s.label}</div>
                  <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}
