import styles from "./Coverage.module.css";

export default function Coverage() {
  const regions = [
    {
      name: "Jigawa State",
      description: "Primary Area of Operation & Dispatch",
      badge: "Hub Center",
      isPrimary: true
    },
    {
      name: "North-western States",
      description: "Kano, Kaduna, Katsina, Sokoto, Kebbi, Zamfara",
      badge: "Full Transit",
      isPrimary: false
    },
    {
      name: "Abuja (FCT)",
      description: "Federal Capital & Strategic Link",
      badge: "Direct Route",
      isPrimary: false
    },
    {
      name: "North-eastern States",
      description: "Bauchi, Yobe, Gombe, Maiduguri",
      badge: "Specialized Routes",
      isPrimary: false
    }
  ];

  return (
    <section id="coverage" className={`section ${styles.coverageSection}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Text & Info */}
          <div className={styles.content}>
            <span className={styles.tagline}>Operational Reach</span>
            <h2 className={styles.title}>Connecting Key Northern Networks</h2>
            <p className={styles.description}>
              We cover extensive routes across Jigawa State, Abuja, and key North-western and North-eastern corridors, ensuring timely transport of vital goods and health commodities.
            </p>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNum}>10+</div>
                <div className={styles.statLabel}>States Covered</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNum}>100%</div>
                <div className={styles.statLabel}>Cold-Chain Safety</div>
              </div>
            </div>
          </div>

          {/* Right: Simulated Interactive Map / List */}
          <div className={styles.mapWrapper}>
            <h3 className={styles.mapTitle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Operational Territories
            </h3>

            <div className={styles.regionsList}>
              {regions.map((region, index) => (
                <div key={index} className={styles.regionItem}>
                  <div className={styles.regionInfo}>
                    <span className={styles.regionName}>{region.name}</span>
                    <span className={styles.regionCoverage}>{region.description}</span>
                  </div>
                  <span className={`${styles.badge} ${!region.isPrimary ? styles.badgeAccent : ""}`}>
                    {region.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
