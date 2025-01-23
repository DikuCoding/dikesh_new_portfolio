import React from 'react'
import styles from "@/styles/PortfolioSection.module.css";
import Image from 'next/image';
import mainImg from '@/asset/image-nobg-cropped.png'

const PortfolioSection = () => {
  return (
    <div className={styles.section1outer}>
      <div className={styles.subtextdiv}>
        <div className={styles.left}>
          <div className={styles.about}>
            <p>Hi, I am <span>Dikesh Khagi </span></p>
            <p>I build full stack websites, I will solve all your business problems. I am open to freelance work</p>
          </div>
        </div>
        <div className={styles.right}>
        <div className={styles.stat}>
          <h1>30+</h1>
          <p>Happy <br></br>clients</p>
        </div>
        <div className={styles.stat}>
        <h1>2+</h1>
        <p>Years of <br></br>experience</p>
        </div>
        </div>
      </div>
      {/* Image */}
      <Image src={mainImg} className={styles.mainimg} alt='mainimg' quality={100}/>
      <div className={styles.maintextdiv}>
        <p>I am a</p>
        <h1><span>&nbsp;</span>FULL STACK</h1>
        <h2>Developer</h2>
      </div>
      {/* video */}
    </div>
  )
}

export default PortfolioSection
