import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/components/ServicePage.module.css";

export const metadata: Metadata = {
  title: "General Merchandise Haulage | A&S Logistics",
  description: "End-to-end supply chain management for diverse merchandise. Delivering wholesale and consumer goods with flexible billing and complete transit insurance across Northern Nigeria.",
};

const features = [
  {
    title: "Wholesale & Bulk Commodity Haulage",
    text: "Large-volume transport of grains, FMCG products, building materials, and wholesale goods across our Northern Nigeria network with full cargo security.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Corporate & Business Logistics",
    text: "Reliable scheduled delivery contracts for manufacturers, traders, and distributors who need consistent, cost-effective transport to their market channels.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Last-Mile Fulfillment",
    text: "Partner with us for last-mile delivery of online retail orders across Jigawa and neighbouring states, reaching markets underserved by national courier networks.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    title: "Fragile & High-Value Cargo",
    text: "Specialist loading protocols, shock-absorbing packing, and experienced handlers for electronics, ceramics, and high-value goods requiring extra care in transit.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Flexible Billing & Payment Plans",
    text: "We offer post-delivery invoicing, scheduled billing cycles, and volume-discount contracts—making premium logistics accessible without upfront financial strain.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Transit Insurance Coverage",
    text: "Every general merchandise consignment is covered by transit insurance, giving clients complete peace of mind against loss, theft, or damage during transport.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Client Brief & Cargo Assessment", desc: "We understand your product type, quantity, origin, destination, and timeline before committing." },
  { num: "02", title: "Vehicle & Logistics Match", desc: "The right vehicle class, weight capacity, and driver skill set are matched to your consignment." },
  { num: "03", title: "Loading, Sealing & Departure", desc: "Goods loaded under supervision, sealed, and manifest signed before vehicle is released." },
  { num: "04", title: "Delivery & Invoice", desc: "Proof of delivery collected, damage assessment completed, and invoice issued within agreed timelines." },
];

export default function GeneralMerchandisePage() {
  return (
    <div className={styles.page}>
      <Header />

      {/* Banner */}
      <div className={styles.banner} style={{ background: "linear-gradient(135deg, #92400e 0%, #059669 100%)" }}>
        <div className={styles.bannerInner}>
          <div>
            <Link href="/#services" className={styles.backLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
              Back to Services
            </Link>

            <div className={styles.bannerBadge} style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}>
              Commercial Logistics
            </div>
            <h1 className={styles.bannerTitle}>General Merchandise Haulage</h1>
            <p className={styles.bannerDesc}>
              From FMCG bulk orders to high-value fragile cargo, we manage end-to-end supply chain logistics for individuals and corporate clients—with flexible billing, transit insurance, and a network reaching every corner of Northern Nigeria.
            </p>
            <div className={styles.bannerActions}>
              <Link href="/#contact" className={styles.btnPrimary}>Get a Haulage Quote</Link>
              <a href="tel:08033616172" className={styles.btnOutline}>Call 08033616172</a>
            </div>
          </div>
          <div className={styles.bannerIcon}>
            <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
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
                { num: "Insured", label: "Transit Coverage" },
                { num: "Flexible", label: "Billing Options" },
                { num: "10+", label: "States Reached" },
                { num: "All Sizes", label: "Consignment Types" },
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
              <div className={styles.eyebrow}>Haulage Capabilities</div>
              <h2 className={styles.sectionTitle}>A Complete Commercial Transport Solution</h2>
              <p className={styles.sectionDesc}>
                Whatever your cargo—bulk, fragile, high-volume, or time-sensitive—our general merchandise haulage service is designed to move it safely, affordably, and on schedule.
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
              <div className={styles.eyebrow}>Haulage Process</div>
              <h2 className={styles.sectionTitle}>Simple. Transparent. Reliable.</h2>
              <p className={styles.sectionDesc}>From your first call to final delivery, our 4-step process keeps everything straightforward and fully accountable.</p>
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
            <h2 className={styles.ctaTitle}>Move Your Goods With Confidence</h2>
            <p className={styles.ctaDesc}>
              Tell us what you need to move, where it&apos;s going, and when. We&apos;ll give you a transparent quote with no hidden charges.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/#contact" className={styles.ctaBtnPrimary}>
                Get a Haulage Quote
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
