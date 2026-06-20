import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/components/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Non-Cold Chain Medical Logistics | A&S Logistics",
  description: "Efficient last-mile delivery of medical supplies, surgical materials, tablets, health equipment and general relief items in full compliance with healthcare SOPs.",
};

const features = [
  {
    title: "Medical Supplies Distribution",
    text: "Safe, timely transport of tablets, syringes, surgical instruments, bandages, and consumables to primary health care facilities under strict handling protocols.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Surgical Equipment Handling",
    text: "Careful loading, securing, and delivery of sensitive surgical apparatus and diagnostic equipment with anti-shock padding and tamper-evident packaging.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Humanitarian Relief Item Transport",
    text: "Rapid-response distribution of IDP camp relief items, nutritional supplements, and emergency health commodities for NGO and government humanitarian programs.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Laboratory Reagent Delivery",
    text: "Non-temperature-sensitive laboratory reagents, test kits, and rapid diagnostic materials delivered with intact packaging and within agreed turnaround windows.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9M9 14H5a2 2 0 0 1-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    title: "Multi-Facility Route Optimization",
    text: "Intelligent routing to serve multiple health facilities in a single run, reducing per-delivery cost while maintaining promised delivery windows at each stop.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "SOP Documentation & Reporting",
    text: "Full trip documentation: delivery manifests, proof-of-delivery signatures, discrepancy reports, and post-delivery reconciliation submitted to your program management team.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Shipment Intake & Manifest", desc: "Goods are received, counted, inspected and documented with signed manifests before loading." },
  { num: "02", title: "Safe Vehicle Loading", desc: "Items secured with appropriate dunnage, fragile items padded and segregated per type." },
  { num: "03", title: "Route Execution & Tracking", desc: "Driver follows approved routes; supervisors track location throughout the run." },
  { num: "04", title: "Recipient Acknowledgement", desc: "Delivery officer signs acceptance documents; discrepancies flagged and escalated immediately." },
];

export default function NonColdChainPage() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Banner */}
      <div className={styles.banner} style={{ background: "linear-gradient(135deg, #1e40af 0%, #059669 100%)" }}>
        <div className={styles.bannerInner}>
          <div>
            <Link href="/#services" className={styles.backLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
              Back to Services
            </Link>

            <div className={styles.bannerBadge} style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}>
              Standard Medical Logistics
            </div>
            <h1 className={styles.bannerTitle}>Non-Cold Chain Logistics</h1>
            <p className={styles.bannerDesc}>
              From tablets and surgical kits to humanitarian relief items, our experienced health logistics team ensures every consignment arrives intact, on time, and fully documented—in complete alignment with healthcare SOPs.
            </p>
            <div className={styles.bannerActions}>
              <Link href="/#contact" className={styles.btnPrimary}>Request a Quote</Link>
              <a href="tel:08033616172" className={styles.btnOutline}>Call 08033616172</a>
            </div>
          </div>
          <div className={styles.bannerIcon}>
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
        </div>
      </div>

      <main style={{ flex: 1 }}>
        {/* Stats */}
        <section className={styles.section} style={{ paddingBottom: 0 }}>
          <div className={styles.container}>
            <div className={styles.statsBar}>
              {[
                { num: "Multi-Stop", label: "Route Capability" },
                { num: "100%", label: "SOP Compliance" },
                { num: "48hr", label: "Avg Turnaround" },
                { num: "10+", label: "States Covered" },
              ].map((s) => (
                <div key={s.label} className={styles.statCell}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Service Capabilities</div>
              <h2 className={styles.sectionTitle}>Comprehensive Non-Cold Chain Coverage</h2>
              <p className={styles.sectionDesc}>
                Our non-cold chain division handles the broadest range of healthcare and humanitarian goods with the same professionalism and accountability as our temperature-controlled operations.
              </p>
            </div>
            <div className={styles.featuresGrid}>
              {features.map((f) => (
                <div key={f.title} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureText}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className={styles.altSection}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Delivery Workflow</div>
              <h2 className={styles.sectionTitle}>How We Deliver</h2>
              <p className={styles.sectionDesc}>A consistent 4-stage delivery workflow that keeps every stakeholder informed and every shipment accountable from pickup to signature.</p>
            </div>
            <div className={styles.processGrid}>
              {steps.map((s) => (
                <div key={s.num} className={styles.processStep}>
                  <div className={styles.stepNum}>{s.num}</div>
                  <h4 className={styles.stepTitle}>{s.title}</h4>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaStrip}>
          <div className={styles.container}>
            <h2 className={styles.ctaTitle}>Plan Your Medical Supply Delivery</h2>
            <p className={styles.ctaDesc}>
              Tell us your origin, destinations, and cargo volume. Our team will design a cost-effective, SOP-compliant delivery plan.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/#contact" className={styles.ctaBtnPrimary}>
                Request a Delivery Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
              <a href="tel:08033616172" className={styles.ctaBtnSecondary}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 11.5 19.79 19.79 0 0 1 1.06 2.94 2 2 0 0 1 3.02 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6z" /></svg>
                Call 08033616172
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
