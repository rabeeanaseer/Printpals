import { Shield } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8f7ff', display: 'flex', flexDirection: 'column' }}>
      <PageHeader />

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '48px 20px', flex: 1, width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ background: '#f3f0ff', borderRadius: 12, padding: 12 }}>
            <Shield style={{ width: 28, height: 28, color: '#7c3aed' }} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#1a1a2e', margin: 0 }}>Privacy Policy</h1>
            <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>

        {[
          {
            title: '1. Information We Collect',
            content: `PrintPals is designed to be a privacy-first service. We collect minimal information:

• Usage data: We may collect anonymous analytics data such as page views, popular printables, and search queries to improve our service. This data is never personally identifiable.
• No account data: We do not require you to create an account or provide any personal information to use PrintPals.
• Newsletter (optional): If you voluntarily subscribe to our newsletter, we collect your email address solely to send you updates.`
          },
          {
            title: '2. How We Use Information',
            content: `We use anonymous usage data to:
• Understand which printables are most popular
• Improve our content library
• Fix technical issues

We do not sell, rent, or share any data with third parties for advertising or marketing purposes.`
          },
          {
            title: '3. Cookies',
            content: `PrintPals may use cookies for basic functionality such as remembering your preferences. We do not use tracking cookies for advertising.

You can disable cookies in your browser settings. This will not prevent you from using PrintPals, though some preferences may not be saved.`
          },
          {
            title: '4. Children\'s Privacy',
            content: `PrintPals is designed for use by children with parental supervision. We do not knowingly collect any personal information from children under 13. Our service does not require children to provide any personal information.

If you believe your child has inadvertently provided personal information, please contact us and we will promptly delete it.`
          },
          {
            title: '5. Third-Party Services',
            content: `PrintPals does not embed third-party advertising. We may use privacy-respecting analytics tools that process data anonymously.

All printable content is generated locally in your browser — your worksheets are never uploaded to our servers.`
          },
          {
            title: '6. Your Rights',
            content: `You have the right to:
• Access any personal information we hold about you
• Request deletion of your data
• Opt out of any communications

To exercise these rights, contact us directly. We aim to respond within 30 days.`
          },
          {
            title: '7. Changes to This Policy',
            content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website. Your continued use of PrintPals after changes constitutes acceptance of the updated policy.`
          }
        ].map((section, i) => (
          <div key={i} style={{ background: 'white', borderRadius: 14, border: '1.5px solid #e5e7eb', padding: '24px 28px', marginBottom: 16 }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1a1a2e', marginBottom: 10 }}>{section.title}</h2>
            {section.content.split('\n\n').map((para, j) => (
              <p key={j} style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.75, marginBottom: 8 }}>
                {para.split('\n').map((line, k) => (
                  <span key={k}>{line}{k < para.split('\n').length - 1 && <br />}</span>
                ))}
              </p>
            ))}
          </div>
        ))}
      </main>
      <PageFooter />
    </div>
  );
}
