import React from 'react'
import Cleopatra from '../../assets/img/cleopatra.png'
import styles from './QuizWelcomePage.module.scss'
import Header from '../../components/Header'
import GoBack from '../../components/GoBack'
import StartButton from '../../components/StartButton'
import quizes from '../../quizes.json'
import { useParams } from 'react-router-dom'

const QuizWelcomePage = () => {
  const {id} = useParams()
  const quiz = quizes.find(quiz => quiz.id === id)
  return (
    <div className={styles.root}>
        <Header/>
        <GoBack/>
        <div className={styles.wrapper}>
            <h2 className={styles.subtitle}>Квиз "{quiz.subject}"</h2>
            <img className={styles.img} src={Cleopatra} alt="" />
            <p className={styles.text}>
            Добро пожаловать на квиз по {quiz.subject}.
            Это увлекательное путешествие через века и эпохи, которые сформировали наш мир таким, каким мы его знаем сегодня. В этом квизе вы окунетесь в важнейшие события, великих личностей и ключевые моменты, которые оказали огромное влияние
            на развитие человечества.
            </p>
            <StartButton/>
        </div>
    </div>

  )
}

export default QuizWelcomePage