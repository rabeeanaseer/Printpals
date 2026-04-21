import { AlertCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default function DisclaimerPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8f7ff', display: 'flex', flexDirection: 'column' }}>
      <PageHeader />

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '48px 20px', flex: 1, width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ background: '#fffbeb', borderRadius: 12, padding: 12 }}>
            <AlertCircle style={{ width: 28, height: 28, color: '#d97706' }} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#1a1a2e', margin: 0 }}>Disclaimer</h1>
            <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>

        {[
          {
            title: 'General Disclaimer',
            content: `The information and printable content provided on PrintPals is for general educational and entertainment purposes only. While we strive for accuracy and quality, PrintPals makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of any worksheet or information on this site.`
          },
          {
            title: 'Educational Content',
            content: `Our worksheets are designed as supplemental educational tools. PrintPals does not claim that our content meets any specific curriculum standards, educational guidelines, or requirements of any educational institution, school board, or governing body.

Parents and educators are solely responsible for determining the appropriateness of any content for their specific students or children, and for supervising children's use of printed materials.`
          },
          {
            title: 'Anatomical Content',
            content: `Anatomy worksheets on PrintPals are basic educational diagrams intended for general educational purposes only. They are not medical references. Consult qualified medical professionals for any medical information or guidance.`
          },
          {
            title: 'Printing & Colors',
            content: `PrintPals generates SVG worksheets optimized for black-and-white printing. Colors may vary depending on your device display and printer settings. We recommend printing on standard A4 or Letter-size paper.

We are not responsible for any costs associated with printing, including paper and ink costs.`
          },
          {
            title: 'External Links',
            content: `PrintPals may contain references to external websites or resources. We have no control over the content or nature of those sites and are not responsible for their content, privacy practices, or availability. Links do not imply endorsement.`
          },
          {
            title: 'Fair Use & Copyright',
            content: `All SVG content on PrintPals is original work created specifically for this platform. Any resemblance to copyrighted characters, brand assets, or proprietary imagery is entirely coincidental. Our worksheets depict generic animals, fruits, shapes, letters, and educational concepts in an original artistic style.`
          },
          {
            title: 'Changes',
            content: `This disclaimer is subject to change without notice. By using PrintPals, you agree to be bound by the current version of this disclaimer. Please check this page periodically for updates.`
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
