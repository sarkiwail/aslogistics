"use client";

import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <a href="#" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoMain}>A&S LOGISTICS</span>
            <span className={styles.logoSub}>& General Merchandise</span>
          </a>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#coverage" className={styles.navLink}>Coverage</a>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </nav>

          <div className={styles.actions}>
            <a href="tel:08033616172" className={styles.contactBtn}>
              Call 08033616172
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className={`${styles.menuToggle} ${isMenuOpen ? styles.menuOpen : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.overlayVisible : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Navigation Drawer */}
      <div className={`${styles.drawer} ${isMenuOpen ? styles.drawerOpen : ""}`}>
        <a href="#services" className={styles.drawerLink} onClick={closeMenu}>
          Services
        </a>
        <a href="#coverage" className={styles.drawerLink} onClick={closeMenu}>
          Coverage
        </a>
        <a href="#about" className={styles.drawerLink} onClick={closeMenu}>
          About
        </a>
        <a href="#contact" className={styles.drawerLink} onClick={closeMenu}>
          Contact
        </a>
        <a
          href="tel:08033616172"
          className={styles.contactBtn}
          style={{ marginTop: "16px", width: "100%" }}
          onClick={closeMenu}
        >
          Call 08033616172
        </a>
      </div>
    </>
  );
}
