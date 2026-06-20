import styles from "./About.module.css";

export default function About() {
  const values = [
    {
      title: "Flexible Billing Structure",
      desc: "Accommodating billing options tailored to corporate constraints and individual budgets without ever sacrificing quality."
    },
    {
      title: "Strict SOP Adherence",
      desc: "Every shipment complies with rigid Standard Operating Procedures, maintaining continuous temperature validation for cold-chain items."
    },
    {
      title: "Risk-Free Transit Guarantee",
      desc: "Professional fleet managers oversee security protocols and routing, ensuring goods arrive at their destination safely."
    }
  ];

  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Side: About Details */}
          <div className={styles.content}>
            <div>
              <span className={styles.tagline}>Corporate Profile</span>
              <h2 className={styles.title}>Ambitious & Progressive Logistics</h2>
            </div>
            
            <p className={styles.description}>
              We are an indigenous Fleet Management and Logistics company, dedicated to bridging the delivery gap in health commodities and general merchandise.
            </p>

            <div className={styles.aboutBody}>
              Our style centers on deploying deep sector expertise to design services that suit each client&apos;s specific logistics and haulage needs. By combining a customer-friendly disposition with rigorous logistics standards, we promise unmatched reliability.
            </div>

            <div className={styles.featuresList}>
              {values.map((val, idx) => (
                <div key={idx} className={styles.featureItem}>
                  <div className={styles.checkWrapper}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>{val.title}</h4>
                    <p className={styles.featureDesc}>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Quality / Promotion Card */}
          <div className={styles.promoCard}>
            <h3 className={styles.promoTitle}>
              Our Core Motivation: <br />
              Value for Money
            </h3>
            
            <p className={styles.promoText}>
              We believe quality transportation shouldn&apos;t be prohibitively expensive. We leverage fleet optimization, localized route planning, and dedicated staff to lower logistics costs while upholding international safety benchmarks.
            </p>

            <div className={styles.divider}></div>

            <div className={styles.promoStats}>
              <div className={styles.promoStatItem}>
                <span className={styles.promoStatNum}>100%</span>
                <span className={styles.promoStatLabel}>CAC Compliant</span>
              </div>
              <div className={styles.promoStatItem}>
                <span className={styles.promoStatNum}>Verified</span>
                <span className={styles.promoStatLabel}>SOP Logistics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
