import React from 'react'
import Cleopatra from '../../assets/img/cleopatra.png'
import styles from './AllQuizesBlock.module.scss'
const AllQuizesBlock = ({id, subject, questionCount, color}) => {
  const backgroundColor = color;
    
  return (
    <div className={styles.wrapper}>
      <div className={styles.root} style={{backgroundColor}} key={id}>
          <img className={styles.img} src={Cleopatra} alt="" />
          <p className={styles.title}>{subject}</p>
          <p className={styles.text}>{questionCount}</p>
      </div>  
    </div>

    )
}

export default AllQuizesBlock