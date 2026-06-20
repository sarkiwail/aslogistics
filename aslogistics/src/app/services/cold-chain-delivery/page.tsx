import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/components/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Cold Chain Last-Mile Delivery | A&S Logistics",
  description: "Strict temperature-monitored transportation of vaccines, diagnostic samples, pharmaceuticals and cold chain health commodities across Northern Nigeria.",
};

const features = [
  {
    title: "2°C – 8°C Refrigerated Transit",
    text: "Purpose-built cold chain vehicles with calibrated refrigeration units and continuous data-logging guarantee unbroken temperature compliance from dispatch to delivery.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    ),
  },
  {
    title: "Vaccine & Immunisation Logistics",
    text: "Certified handling of EPI vaccines, COVID-19 products, and immunisation supplies in compliance with WHO and NAFDAC cold chain requirements.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Diagnostic Sample Transport",
    text: "Safe, time-critical transport of laboratory specimens with full chain-of-custody documentation and temperature-breach alerts throughout the journey.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11m0 0a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9M9 14H5a2 2 0 0 1-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    title: "Real-Time Temperature Monitoring",
    text: "IoT-enabled sensors transmit live temperature readings, triggering immediate corrective action if any deviation is detected, long before goods are compromised.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Pharmaceutical Distribution",
    text: "End-to-end pharma distribution for public and private health programs, covering NPI, PEPFAR, GF, and state ministry supply chains with SOP-compliant procedures.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "NAFDAC & WHO Compliance",
    text: "All cold chain operations align with NAFDAC Good Distribution Practice (GDP) guidelines and WHO pre-qualification requirements for cold chain integrity.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Pre-Dispatch Verification", desc: "Vehicle refrigeration audit, temperature baseline check, and driver SOP briefing." },
  { num: "02", title: "Cold Commodity Loading", desc: "Systematic loading under cold conditions with manifest sign-off and seal application." },
  { num: "03", title: "Monitored Transit", desc: "Live temperature telemetry and route tracking throughout the delivery journey." },
  { num: "04", title: "Facility Handover", desc: "Recipient confirmation, temperature log handover, and documentation sign-off at destination." },
];

export default function ColdChainPage() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Banner */}
      <div className={styles.banner} style={{ background: "linear-gradient(135deg, #047857 0%, #0284c7 100%)" }}>
        <div className={styles.bannerInner}>
          <div>
            <Link href="/#services" className={styles.backLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
              Back to Services
            </Link>

            <div className={styles.bannerBadge} style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}>
              2°C to 8°C &amp; Ultra-Cold Transport
            </div>
            <h1 className={styles.bannerTitle}>Cold Chain Last-Mile Delivery</h1>
            <p className={styles.bannerDesc}>
              We guarantee unbroken temperature integrity from our dispatch hub to your health facility door—with real-time monitoring, certified handling, and full audit trails for every shipment.
            </p>
            <div className={styles.bannerActions}>
              <Link href="/#contact" className={styles.btnPrimary}>Request a Quote</Link>
              <a href="tel:08033616172" className={styles.btnOutline}>Call 08033616172</a>
            </div>
          </div>
          <div className={styles.bannerIcon}>
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
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
                { num: "2°C – 8°C", label: "Maintained Range" },
                { num: "100%", label: "Chain of Custody" },
                { num: "10+", label: "States Covered" },
                { num: "24/7", label: "Fleet Monitoring" },
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
              <div className={styles.eyebrow}>Capabilities</div>
              <h2 className={styles.sectionTitle}>Full-Spectrum Cold Chain Solutions</h2>
              <p className={styles.sectionDesc}>
                From vaccine vials to fragile biological samples, our cold chain team manages every aspect of temperature-controlled transport with precision and accountability.
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
              <div className={styles.eyebrow}>Delivery Protocol</div>
              <h2 className={styles.sectionTitle}>Our Cold Chain Delivery Process</h2>
              <p className={styles.sectionDesc}>Every shipment follows a strict, repeatable 4-step protocol designed to eliminate temperature excursions and human error.</p>
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
            <h2 className={styles.ctaTitle}>Ready to Secure Your Cold Chain?</h2>
            <p className={styles.ctaDesc}>
              Speak directly with our Dispatch Manager, Sulaiman Madaki, to plan your cold chain delivery route and schedule.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/#contact" className={styles.ctaBtnPrimary}>
                Request Cold Chain Quote
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
