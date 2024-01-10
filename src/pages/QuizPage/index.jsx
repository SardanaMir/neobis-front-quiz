import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import {setScore} from '../../redux/slices/quizSlice'
import questions from '../../questions.json'
import styles from './QuizPage.module.scss'
import { useDispatch, useSelector } from 'react-redux'

const QuizPage = () => {
    let [index, setIndex] = useState(0);
    // let [score, setScore] = useState(0)
    let [question, setQuestion] = useState(questions[index]);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [isCompleted, setIsCompleted] = useState(false)
    const dispatch = useDispatch()
    const score = useSelector(state => state.quiz.score)
    const [answerStatus, setAnswerStatus] = useState()

    const handleAnswers = (option) => {
        const newAnswers = [...answers];
        newAnswers[index] = option;
        setAnswers(newAnswers);
        console.log(answers)
    };

    const checkAnswer = (index) => {
        console.log(index)
        if (answers[index] === questions[index].correctAnswer){
            dispatch(setScore(1))
            return true;
        }else{
            console.log('некорректно', answerStatus)
            return false;
        }
    };

    const countScore = () => {
        score++
        console.log(score)
    }

    const nextQuestion = () =>{
        if (index + 1 === questions.length){
            setIsCompleted(true)
        }else{
            setIndex(++index)
            setQuestion(questions[index])
        }
    }

    // useEffect(() => {
    //     if (isCompleted) {
      
    //     }
    // }, [isCompleted]);

  return (
    <>
        {
        isCompleted ? (
            <div>
            <p>Поздравляем! Вы ответили на все вопросы. Ваш итоговый счет: {score} из {questions.length}</p>
            </div>
        ):(
            <div className={styles.root}>
            <Header/>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10.7312 20.3313C10.4311 20.6313 10.0242 20.7998 9.59995 20.7998C9.17569 20.7998 8.7688 20.6313 8.46875 20.3313L1.26875 13.1313C0.968798 12.8313 0.800293 12.4244 0.800293 12.0001C0.800293 11.5759 0.968798 11.169 1.26875 10.8689L8.46875 3.66895C8.77051 3.37749 9.17468 3.21622 9.59419 3.21987C10.0137 3.22351 10.415 3.39178 10.7117 3.68844C11.0083 3.98509 11.1766 4.38639 11.1802 4.80591C11.1839 5.22542 11.0226 5.62958 10.7312 5.93135L6.39995 10.4001L21.6 10.4001C22.0243 10.4001 22.4313 10.5687 22.7313 10.8688C23.0314 11.1688 23.2 11.5758 23.2 12.0001C23.2 12.4245 23.0314 12.8315 22.7313 13.1315C22.4313 13.4316 22.0243 13.6001 21.6 13.6001L6.39995 13.6001L10.7312 18.0689C11.0311 18.369 11.1996 18.7759 11.1996 19.2001C11.1996 19.6244 11.0311 20.0313 10.7312 20.3313Z" fill="black"/>
                </svg>
                <p>Вопрос {index+1} из {questions.length}</p>
                <div className={styles.bar}></div>
            </div>
            <div className={styles.wrapper}>
                <h2 className={styles.subtitle}>Вопрос {index+1}. {question.question}</h2>
                <>
                {
                    questions[index].options.map((option, i) => (
                        <div 
                        onClick={() => handleAnswers(option)}
                        className={
                            (answers[index] === option && checkAnswer(index)) ? styles.correct
                            : (answers[index] === option && !checkAnswer(index)) ? styles.wrong
                            : styles.answer} key={`id-i1${i}`}>
                                {option}
                        </div>
                    ))
                }
                </>
                <button onClick={nextQuestion} className={styles.btn}>Следующий вопрос</button>
            </div>
        </div>
        )
    }
    </>



  )
}

export default QuizPage