import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch } from 'react-redux'
import Header from '../../components/Header'
import GoBack from '../../components/GoBack'
import AllQuizesBlock from '../../components/AllQuizesBlock'
import StartButton from '../../components/StartButton'
import quizes from '../../quizes.json'
import {setId} from '../../redux/slices/quizSlice'
import styles from './AllQuizes.module.scss'
import 'swiper/css';

const AllQuizes = () => {
  const [index, setIndex] = useState();
  const dispatch = useDispatch()
  
  const onChange = (swiper) =>{
    setIndex(swiper.activeIndex)
    console.log('slide change', swiper.activeIndex )
    let quiz = quizes.filter((quiz, i) => i === index)
    console.log(quiz)
    const id = quiz[0].id
    dispatch(setId(id))
  }

  return (
    <div className={styles.root}>
      <Header/>
      <GoBack subtitle={'Все квизы'}/>`
      <Swiper
      spaceBetween={600}
      slidesPerView={1}
      onSlideChange={(swiper) => (onChange(swiper))}
      onSwiper={(swiper) => (console.log('swiper', swiper))}
      >
      {
        quizes.map(quiz => (
          <SwiperSlide>
            <AllQuizesBlock {...quiz} />
          </SwiperSlide>
        ))
      }
      </Swiper>
      <StartButton/>
    </div>

  )
}

export default AllQuizes