import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import styles from './StartButton.module.scss'

const StartButton = () => {
  const id = useSelector(state => state.quiz.id)
  return (
    <Link to={{pathname: `/quiz/${id}`}}>
      <button className={styles.btn}>Начать квиз</button>
    </Link>
    )
}

export default StartButton