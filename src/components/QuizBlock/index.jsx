import React from 'react'
import Cleopatra from '../../assets/img/cleopatra.png'
import styles from './QuizBlock.module.scss'

const QuizBlock = ({quiz}) => {
    const backgroundColor = quiz.color;
  return (
    <div className={styles.root} style={{backgroundColor}} key={quiz.id}>
        <img className={styles.img} src={Cleopatra} alt="" />
        <p className={styles.title}>{quiz.subject}</p>
        <p className={styles.text}>{quiz.questionCount}</p>
    </div>
  )
}

export default QuizBlock