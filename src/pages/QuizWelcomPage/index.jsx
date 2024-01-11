import React from 'react'
import { Link } from 'react-router-dom';
import Cleopatra from '../../assets/img/cleopatra.png'
import Header from '../../components/Header'
import GoBack from '../../components/GoBack'
import quizes from '../../quizes.json'
import { useDispatch, useSelector } from 'react-redux';
import {isUserPlay} from '../../redux/slices/quizSlice'
import styles from './QuizWelcomePage.module.scss'

const QuizWelcomePage = () => {
  const id = useSelector(state => state.quiz.id)
  const quiz = quizes.find(quiz => quiz.id === id)
  const dispatch = useDispatch()
  
  const handleStart = () =>{
    dispatch(isUserPlay(true))
  }

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
            <Link to={{pathname: `/quizgame/${id}`}}>
              <button className={styles.btn} onClick={handleStart}>Начать квиз</button>
            </Link>
        </div>
    </div>

  )
}

export default QuizWelcomePage