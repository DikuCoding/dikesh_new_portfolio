"use client";
import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Image from "next/image";
import dikeshlogo from "@/asset/dikeshlogo.png";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const handleButtonClick = (section: any) => {
    console.log(section);
  };

  const handleNavbarClick = () => {
    setNavActive(!navActive);
  };

  return (
    <div className={styles.navouter}>
      {/* Left Section */}
      <div className={styles.left}>
        <Image
          alt="Dikesh Logo"
          quality={100}
          src={dikeshlogo}
          width={500}
          height={500}
          className={styles.sign}
        />
      </div>

      {/* Navbar Toggler */}
      <div
        className={navActive ? `${styles.nav_toggler} ${styles.navactive}` : `${styles.nav_toggler}`}
        onClick={handleNavbarClick}
      >
        <span></span>
      </div>

      {/* Navigation Buttons */}
      <div className={`${styles.right} ${navActive ? styles.show : ""}`}>
        <button onClick={() => handleButtonClick("home")}>Home</button>
        <button onClick={() => handleButtonClick("about")}>About</button>
        <button onClick={() => handleButtonClick("projects")}>Projects</button>
        <button onClick={() => handleButtonClick("skills")}>Skills</button>
        <button onClick={() => handleButtonClick("contact")}>Contact</button>
      </div>

      {navActive && <div className={`${styles.right1} ${navActive ? styles.show : ""}`}>
        <button onClick={() => handleButtonClick("home")}>Home</button>
        <button onClick={() => handleButtonClick("about")}>About</button>
        <button onClick={() => handleButtonClick("projects")}>Projects</button>
        <button onClick={() => handleButtonClick("skills")}>Skills</button>
        <button onClick={() => handleButtonClick("contact")}>Contact</button>
      </div>}
    </div>
  );
};

export default Navbar;
 