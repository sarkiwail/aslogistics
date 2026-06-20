import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background glow effects */}
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Hero Content */}
          <div className={`${styles.content} animate-fade-in`}>
            <div className={styles.badge}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "4px" }}>
                <circle cx="6" cy="6" r="4" fill="currentColor" />
              </svg>
              CAC Registered 3PL Firm
            </div>
            
            <h1 className={styles.title}>
              Precision Logistics. <br />
              <span className={styles.titleHighlight}>Zero Compromise.</span>
            </h1>

            <p className={styles.description}>
              A&S Logistics and General Merchandise is a premier third-party logistics (3PL) provider. 
              Our team of professional fleet managers guarantees safe, risk-free last-mile delivery 
              of health commodities—including temperature-controlled cold chain and non-cold chain items—across Northern Nigeria.
            </p>

            <div className={`${styles.buttonGroup} animate-fade-in delay-1`}>
              <a href="#contact" className={styles.primaryBtn}>
                Request Transport Quote
              </a>
              <a href="#services" className={styles.secondaryBtn}>
                Explore Services
              </a>
            </div>
          </div>

          {/* Hero Graphic Simulator */}
          <div className={`${styles.visual} animate-fade-in delay-2`}>
            <div className={styles.graphicWrapper}>
              <div className={styles.deliveryCard}>
                <div className={styles.cardHeader}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--fg-base)" }}>HEALTH LOGISTICS</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div className={styles.tempIndicator}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
                      </svg>
                      2°C - 8°C
                    </div>
                    <div className={styles.statusDot}></div>
                  </div>
                </div>

                <div className={styles.routeVisual}>
                  <div className={styles.routeStep}>
                    <div className={`${styles.iconCircle} ${styles.iconCircleActive}`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <div className={styles.stepLabelActive} style={{ fontSize: "0.85rem" }}>A&S Dispatch Hub</div>
                      <div style={{ fontSize: "0.7rem", color: "var(--fg-light)" }}>Transit check cleared</div>
                    </div>
                  </div>

                  <div className={styles.connector} style={{ backgroundColor: "var(--primary)" }}></div>

                  <div className={styles.routeStep}>
                    <div className={`${styles.iconCircle} ${styles.iconCircleActive}`} style={{ backgroundColor: "var(--accent)", borderColor: "var(--accent)" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="1" y="3" width="15" height="13" />
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                        <circle cx="5.5" cy="18.5" r="2.5" />
                        <circle cx="18.5" cy="18.5" r="2.5" />
                      </svg>
                    </div>
                    <div>
                      <div className={styles.stepLabelActive} style={{ fontSize: "0.85rem" }}>In Transit</div>
                      <div style={{ fontSize: "0.7rem", color: "var(--fg-light)" }}>North-western Route</div>
                    </div>
                  </div>

                  <div className={styles.connector} style={{ backgroundColor: "var(--border)" }}></div>

                  <div className={styles.routeStep}>
                    <div className={styles.iconCircle}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <div>
                      <div className={styles.stepLabel} style={{ fontSize: "0.85rem" }}>Health Facility</div>
                      <div style={{ fontSize: "0.7rem", color: "var(--fg-light)" }}>Jigawa State Clinic</div>
                    </div>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <span>Fleet Unit: <strong>AS-049</strong></span>
                  <span>SOP Status: <strong>Verified</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
