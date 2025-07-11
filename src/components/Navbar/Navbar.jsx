import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img className={styles.menuBtn}/>
        <ul
          className={styles.menuItems}
         
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#courses">Certifications</a>
          </li> 
        </ul>
      </div>
    </nav>
  );
}; 

export default Navbar;