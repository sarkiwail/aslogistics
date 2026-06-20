import Link from "next/link";
import styles from "./Services.module.css";

export default function Services() {
  const servicesList = [
    {
      title: "Cold Chain Last-Mile Delivery",
      description: "Strict temperature-monitored transportation of vaccines, diagnostic samples, pharmaceuticals, and temperature-sensitive health commodities using advanced cooling and verification protocols.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
        </svg>
      ),
      badge: "2°C to 8°C & Ultra-Cold",
      href: "/services/cold-chain-delivery",
    },
    {
      title: "Non-Cold Chain Logistics",
      description: "Efficient last-mile delivery of medical supplies, surgical materials, tablets, health equipment, and general relief items, handled in full compliance with healthcare SOPs.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      badge: "Standard Medical Logistics",
      href: "/services/non-cold-chain-logistics",
    },
    {
      title: "Fleet & Route Management",
      description: "Comprehensive transport planning led by experienced fleet managers. We optimize routing, execute strict vehicle maintenance, and implement real-time tracking to ensure risk-free delivery.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
      badge: "Professional Fleet Control",
      href: "/services/fleet-route-management",
    },
    {
      title: "General Merchandise Haulage",
      description: "End-to-end supply chain management for diverse merchandise, delivering wholesale and consumer goods with flexible billing schedules and complete transit insurance.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      badge: "Commercial Logistics",
      href: "/services/general-merchandise-haulage",
    }
  ];

  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.tagline}>Core Competencies</span>
          <h2 className={styles.title}>Tailored Transportation Services</h2>
          <p className={styles.description}>
            We deploy advanced skills and expertise to customize logistics solutions, offering
            uncompromising service reliability and absolute Value for Money.
          </p>
        </div>

        <div className={styles.grid}>
          {servicesList.map((service, index) => (
            <Link key={index} href={service.href} className={styles.card} style={{ textDecoration: "none", cursor: "pointer" }}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--fg-light)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {service.badge}
                </span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
              </div>
              <p className={styles.cardText}>{service.description}</p>

              <div className={styles.cardFooter}>
                View Full Details
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
