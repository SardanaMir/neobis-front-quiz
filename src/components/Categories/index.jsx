import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setFilteredArticles, setCategories} from '../../redux/slices/filterSlice'
import styles from './Categories.module.scss'

const Categories = ({value, onChangeCategory}) => {
    const [open, setOpen] = useState(false)
    const articles = useSelector(state => state.articles.articles)
    const actionRef = useRef()
    const [selectedCategories, setSelectedCategories] = useState([]);
    const dispatch = useDispatch(); 

    const getUniqueSubjects = (articles) => {
        const uniqueSubjects = articles.reduce((subjects, article) => {
          if (!subjects.includes(article.subject)) {
            subjects.push(article.subject);
          }
          return subjects;
        }, []);
        return uniqueSubjects;
    }
    const categories = getUniqueSubjects(articles);

    const toggleFilter = () =>{
        setOpen(!open)
    }

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    }

    useEffect(()=>{
        const handleClickOutside = (event) =>{
            if(!event.composedPath().includes(actionRef.current)){
                setOpen(false);
            }
        }
        document.body.addEventListener('click', handleClickOutside)
        return () => document.body.removeEventListener('click', handleClickOutside)
    },[])

    const requestArticles = async (articles, selectedCategories) =>{
        const filteredArticles = articles.filter(article => selectedCategories.includes(article.subject));
        dispatch(setFilteredArticles(filteredArticles) )
        dispatch(setCategories(selectedCategories))
    }
      
    return (
    <div ref={actionRef}>
        <div onClick={toggleFilter} className={styles.root}> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M13.9999 12V19.88C14.0399 20.18 13.9399 20.5 13.7099 20.71C13.6174 20.8027 13.5075 20.8762 13.3865 20.9264C13.2655 20.9766 13.1359 21.0024 13.0049 21.0024C12.8739 21.0024 12.7442 20.9766 12.6233 20.9264C12.5023 20.8762 12.3924 20.8027 12.2999 20.71L10.2899 18.7C10.1808 18.5934 10.0979 18.463 10.0476 18.319C9.99728 18.175 9.98095 18.0213 9.99989 17.87V12H9.96989L4.20989 4.62C4.0475 4.41153 3.97422 4.14726 4.00607 3.88493C4.03793 3.6226 4.17232 3.38355 4.37989 3.22C4.56989 3.08 4.77989 3 4.99989 3H18.9999C19.2199 3 19.4299 3.08 19.6199 3.22C19.8275 3.38355 19.9618 3.6226 19.9937 3.88493C20.0256 4.14726 19.9523 4.41153 19.7899 4.62L14.0299 12H13.9999Z" fill="white"/>
            </svg>
        </div>
        {
            open && (
            <div className={styles.categories__wrapper}>
                <div className={styles.categories__header}>
                    <p className={styles.categories__subtitle}>Фильтр</p>
                    <button className={styles.categories__btn}>Сбросить все</button>
                </div>
                {categories.map((category, index) => (
                    <label htmlFor={index} className={styles.category} key={index}>
                        <input 
                        type="checkbox" 
                        name={category} 
                        checked={selectedCategories.includes(category)} 
                        onChange={()=> handleCategoryChange(category)} 
                        className={styles.checkbox}/>
                        {category}
                    </label>
                ))}
                <button onClick={()=> requestArticles(articles, selectedCategories)} className={styles.btn}>Применить</button>
            </div>
        )}
    </div>

  )
}

export default Categories