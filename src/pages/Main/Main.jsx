import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPaginate from 'react-paginate';
import Header from '../../components/Header'
import Subheader from '../../components/Subheader'
import ArcticleBlock from '../../components/ArticleBlock'
import QuizBlock from '../../components/QuizBlock'
import quizes from '../../quizes.json'
import {setArticles} from '../../redux/slices/articlesSlice'
import { setSearchResults } from '../../redux/slices/searchSlice';
import {articleGet} from '../../api'
import styles from './Main.module.scss'
import 'swiper/css';

const Main = () => {
  const [index, setIndex] = useState('');
  const dispatch = useDispatch()
  const articles = useSelector(state => state.articles.articles)

  useEffect(()=>{
    const getArticles = async () =>{
      const res = await articleGet()
      dispatch(setArticles(res))
      dispatch(setSearchResults(res))
    }
  getArticles()
  }, [dispatch])

  return (
    <div className={styles.root}>
      <Header/>
      <Subheader subtitle={'Статьи'}/>
      <div className={styles.articleBlock__wrapper}>  
        <Swiper
          spaceBetween={220}
          slidesPerView={4}
          onSlideChange={(swiper) => (setIndex(swiper.activeIndex), console.log('slide change'))}
          onSwiper={(swiper) => console.log(swiper)}
          >
          {
            articles.map(article => (
              <SwiperSlide>
                <ArcticleBlock article={article}/>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
      <Subheader subtitle={'Квизы'}/>
      <div className={styles.articleBlock__wrapper}>
        {
          quizes.map(quiz =>(
            <QuizBlock quiz={quiz}/>
          ))
        }
      </div>
    </div>
    )
}

export default Main