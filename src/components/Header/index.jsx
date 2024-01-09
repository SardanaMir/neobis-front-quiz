import React from 'react'
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.header}>Квизум</h1>
    </div>
  )
}

export default Header