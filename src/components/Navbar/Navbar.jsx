import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <button 
          className={styles.openBtn}
          onClick={openMenu}
          aria-label="Open menu"
        >
          ☰
        </button>
        <ul
          className={`${styles.menuItems} ${isMenuOpen ? styles.menuOpen : ''}`}
        >
          <button 
            className={styles.closeBtn}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>Experience</a>
          </li>
          <li>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>
          <li>
            <a href="#courses" onClick={closeMenu}>Certifications</a>
          </li> 
        </ul>
      </div>
    </nav>
  );
}; 

export default Navbar;