import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/components/ServicePage.module.css";

export const metadata: Metadata = {
  title: "Fleet & Route Management | A&S Logistics",
  description: "Comprehensive transport planning by professional fleet managers. Optimised routing, vehicle maintenance, real-time tracking and risk-free delivery across Northern Nigeria.",
};

const features = [
  {
    title: "Professional Fleet Management",
    text: "Seasoned fleet managers oversee scheduling, driver assignment, vehicle allocation, and daily briefings—ensuring every run begins and ends safely within protocol.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Intelligent Route Planning",
    text: "We use data-driven route optimisation to cut fuel consumption, reduce transit times, and maximise the number of delivery points served per run.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Preventive Vehicle Maintenance",
    text: "Scheduled inspections, oil changes, tyre rotations, and cold-chain unit servicing keep our fleet at peak performance and prevent delivery disruptions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Vehicle Tracking",
    text: "GPS-enabled tracking provides live location updates for every vehicle on the road, with instant notifications on delays, diversions, or incidents.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Driver Training & SOP Compliance",
    text: "All drivers undergo SOP orientation covering safe driving, cargo handling, emergency response, and chain-of-custody procedures before any deployment.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Contingency & Risk Management",
    text: "Breakdown protocols, alternate driver rosters, and emergency escalation procedures ensure that no single failure can compromise your delivery timelines.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Transport Needs Analysis", desc: "We assess your cargo types, volumes, routes, and frequency to size the right fleet mix." },
  { num: "02", title: "Fleet Allocation & Scheduling", desc: "Vehicles and drivers are assigned, routes mapped, and departure windows agreed with your team." },
  { num: "03", title: "Live Operations Control", desc: "Fleet managers monitor all active vehicles in real time, managing exceptions and diversions as they arise." },
  { num: "04", title: "Performance Reporting", desc: "Weekly fleet utilisation, on-time delivery, and incident reports are shared with your programme management." },
];

export default function FleetManagementPage() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Banner */}
      <div className={styles.banner} style={{ background: "linear-gradient(135deg, #374151 0%, #059669 100%)" }}>
        <div className={styles.bannerInner}>
          <div>
            <Link href="/#services" className={styles.backLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
              Back to Services
            </Link>

            <div className={styles.bannerBadge} style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}>
              Professional Fleet Control
            </div>
            <h1 className={styles.bannerTitle}>Fleet & Route Management</h1>
            <p className={styles.bannerDesc}>
              Our experienced fleet managers plan, execute, and optimise every transport operation—from intelligent route scheduling to real-time tracking—so your cargo arrives safely and on schedule, every time.
            </p>
            <div className={styles.bannerActions}>
              <Link href="/#contact" className={styles.btnPrimary}>Request a Consultation</Link>
              <a href="tel:08033616172" className={styles.btnOutline}>Call 08033616172</a>
            </div>
          </div>
          <div className={styles.bannerIcon}>
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
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
                { num: "GPS", label: "Live Fleet Tracking" },
                { num: "SOP", label: "Certified Drivers" },
                { num: "10+", label: "States on Network" },
                { num: "24/7", label: "Fleet Supervision" },
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
              <div className={styles.eyebrow}>Fleet Capabilities</div>
              <h2 className={styles.sectionTitle}>End-to-End Transport Command</h2>
              <p className={styles.sectionDesc}>
                We take full responsibility for your transport operation—from the first vehicle dispatched to the final delivery receipt—so you can focus entirely on your core mission.
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
              <div className={styles.eyebrow}>Our Fleet Process</div>
              <h2 className={styles.sectionTitle}>From Analysis to Delivery</h2>
              <p className={styles.sectionDesc}>A disciplined 4-phase approach that turns your transport requirements into reliable, measurable fleet performance.</p>
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
            <h2 className={styles.ctaTitle}>Take Control of Your Transport</h2>
            <p className={styles.ctaDesc}>
              Whether you need a single vehicle or a managed fleet solution, our team will build a plan that maximises efficiency and minimises risk.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/#contact" className={styles.ctaBtnPrimary}>
                Start a Fleet Consultation
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
