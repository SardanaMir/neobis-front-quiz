import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header'
import salut from '../../assets/img/salut.gif'
import styles from './Completed.module.scss'

const CompletedPage = () => {
    const navigate = useNavigate()
    const clickHandle = () =>{

    }
  return (
    <div className={styles.root}>
        <Header/>
        <div className={styles.wrapper}>
            <h2 className={styles.subtitle}>Поздравляем!</h2>
            <img className={styles.img} src={salut} alt="" />
            <p className={styles.msg}>Вы ответили правильно на</p>
            <p className={styles.result}>9 вопросов из 10</p>
            <p className={styles.text}>У вас всегда есть возможность пройти квиз заново, чтобы еще раз проверить свои знания!</p>
            <button className={styles.btn}>Вернуться</button>
        </div>
    </div>
  )
}

export default CompletedPage