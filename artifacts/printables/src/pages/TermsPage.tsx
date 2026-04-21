import { FileText } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8f7ff', display: 'flex', flexDirection: 'column' }}>
      <PageHeader />

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '48px 20px', flex: 1, width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ background: '#f3f0ff', borderRadius: 12, padding: 12 }}>
            <FileText style={{ width: 28, height: 28, color: '#7c3aed' }} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#1a1a2e', margin: 0 }}>Terms of Service</h1>
            <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>

        {[
          {
            title: '1. Acceptance of Terms',
            content: `By accessing or using PrintPals, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not use our services.`
          },
          {
            title: '2. License to Use Printables',
            content: `PrintPals grants you a free, non-exclusive, non-transferable, limited license to:

✅ Download and print worksheets for personal use
✅ Use worksheets in your home, classroom, or educational setting
✅ Make unlimited physical copies for educational purposes
✅ Share physical printed copies with students, children, or family members

❌ You may NOT:
• Resell or monetize PrintPals worksheets in any form
• Redistribute digital files (SVG, PDF, images) commercially
• Claim PrintPals worksheets as your own creation
• Use our content in other products or services without written permission`
          },
          {
            title: '3. Intellectual Property',
            content: `All worksheet content, SVG graphics, designs, and text on PrintPals are owned by PrintPals and protected by copyright law. The "PrintPals" name and logo are trademarks of PrintPals.

Our zero-asset SVG generation technology is proprietary. You may not copy, reverse-engineer, or reproduce our generation system.`
          },
          {
            title: '4. Free Service',
            content: `PrintPals is provided free of charge for personal and educational use. We reserve the right to introduce premium features in the future, which will be clearly labeled. Core worksheet access will remain free.`
          },
          {
            title: '5. Disclaimer of Warranties',
            content: `PrintPals is provided "as is" without any warranties, express or implied. We do not warrant that:
• The service will be uninterrupted or error-free
• All printables will be suitable for every age group or curriculum
• The service will meet all educational requirements

Users are responsible for determining the appropriateness of content for their specific needs.`
          },
          {
            title: '6. Limitation of Liability',
            content: `To the maximum extent permitted by law, PrintPals shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our service.`
          },
          {
            title: '7. Changes to Terms',
            content: `We reserve the right to modify these terms at any time. Continued use of PrintPals after changes constitutes acceptance of the new terms. We recommend reviewing this page periodically.`
          },
          {
            title: '8. Contact Us',
            content: `If you have questions about these Terms of Service, please reach out through our website. We aim to respond to all inquiries within 5 business days.`
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
