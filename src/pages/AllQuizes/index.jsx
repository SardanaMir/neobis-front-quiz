import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header'
import GoBack from '../../components/GoBack'
import AllQuizesBlock from '../../components/AllQuizesBlock'
import StartButton from '../../components/StartButton'
import quizes from '../../quizes.json'
import styles from './AllQuizes.module.scss'
import 'swiper/css';

const AllQuizes = () => {
  const [index, setIndex] = useState('');
  const quiz = quizes.find((quiz, i) => i === index)
  console.log(quiz)
  // const quizId = quiz.id;
  return (
    <div className={styles.root}>
      <Header/>
      <GoBack subtitle={'Все квизы'}/>`
      <Swiper
      spaceBetween={600}
      slidesPerView={1}
      onSlideChange={(swiper) => (setIndex(swiper.activeIndex), console.log('slide change'))}
      onSwiper={(swiper) => console.log(swiper)}
      >
      {
        quizes.map(quiz => (
          <SwiperSlide>
            <AllQuizesBlock {...quiz}/>
          </SwiperSlide>
        ))
      }
      </Swiper>
      <Link to={{pathname: `/quiz/${1}`}}>
        <StartButton/>
      </Link>
    </div>

  )
}

export default AllQuizes