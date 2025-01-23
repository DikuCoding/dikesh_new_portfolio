import React from 'react'
import styles from "@/styles/AboutSection.module.css"
import Image from 'next/image'

const AboutSection = () => {
  return (
    <div className={styles.about}>
        <div className={styles.textdiv}>
            <h1>About me</h1>
            <p>I am a full stack developer, I build full stack websites, I will solve all your business problems.</p>
            <p>I am a specialized full stack developer, your go-to solution for crafting full-stack websites</p>
            <p>My commitment to clean, efficient code ensures easy maintainance and scalability, while my understanding of business challenges enables me to develop custom solutions that address your specific needs</p>
        </div>
      
    </div>
  )
}

export default AboutSection
