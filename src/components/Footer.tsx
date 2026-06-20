import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          {/* Brand Col */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoMain}>A&S LOGISTICS</span>
              <span className={styles.logoSub}>& General Merchandise</span>
            </div>
            <p className={styles.tagline}>
              Indigenous third-party logistics (3PL) fleet operations delivering risk-free healthcare logistics, temperature-controlled cold chain, and general merchandise haulage.
            </p>
            <div className={styles.cacBadge}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              CAC Registered Enterprise
            </div>
          </div>

          {/* Links Col */}
          <div className={styles.links}>
            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Company</h4>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}><a href="#about">About Us</a></li>
                <li className={styles.linkItem}><a href="#services">Services</a></li>
                <li className={styles.linkItem}><a href="#coverage">Coverage Map</a></li>
                <li className={styles.linkItem}><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className={styles.linkCol}>
              <h4 className={styles.colTitle}>Fleet operations</h4>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}><a href="#services">Cold Chain last-mile</a></li>
                <li className={styles.linkItem}><a href="#services">Non-cold chain supplies</a></li>
                <li className={styles.linkItem}><a href="#services">Fleet management</a></li>
                <li className={styles.linkItem}><a href="#services">General merchandise</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.copyright}>
            <span>&copy; {currentYear} A&S Logistics and General Merchandise Company. All Rights Reserved.</span>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <span>CAC Registration Compliant</span>
            <span>|</span>
            <span>Quality SOP Audited</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
