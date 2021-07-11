import React from 'react'
import Image from 'next/image'
import styles from '../../styles/components/navbar.module.scss'

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Image src='/home.svg' alt='Home Logo' width={40} height={40} />
      <p className={styles.text}>Let's get quizzing!</p>
    </nav>
  )
}

export default Navbar
