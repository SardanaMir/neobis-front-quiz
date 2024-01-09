import React from 'react'
import styles from './Search.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm, setSearchResults } from '../../redux/slices/searchSlice';

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const articles = useSelector(state => state.articles.articles)

  const onChangeInput = async (event) => {
    const value = event.target.value;
    dispatch(setSearchTerm(value));
    const results = articles.filter(item => item.topic.toLowerCase().includes(value.toLowerCase()))
    dispatch(setSearchResults(results))
  }

  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <div className={styles.search__wrapper}>
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M14.5677 5.01624C15.637 6.08688 16.3063 7.49225 16.4636 8.99726C16.6209 10.5023 16.2566 12.0156 15.4317 13.2842C15.5757 13.4042 15.6957 13.5362 15.8637 13.6562C16.1037 13.8482 16.4277 14.0882 16.8357 14.3642C17.2437 14.6522 17.5077 14.8322 17.6277 14.9282C18.1317 15.3002 18.5037 15.6122 18.7557 15.8642C19.1397 16.2482 19.4757 16.6442 19.7637 17.0642C20.0637 17.4842 20.2917 17.8922 20.4717 18.3122C20.6397 18.7322 20.7237 19.1282 20.6877 19.5122C20.6637 19.8962 20.5197 20.2202 20.2557 20.4842C19.9917 20.7482 19.6677 20.8922 19.2837 20.9162C18.9117 20.9402 18.5037 20.8682 18.0957 20.6882C17.6757 20.5202 17.2557 20.2802 16.8477 19.9802C16.4277 19.6922 16.0317 19.3562 15.6477 18.9722C15.3957 18.7202 15.0837 18.3482 14.7237 17.8562C14.6037 17.7002 14.4237 17.4362 14.1597 17.0642C13.8957 16.6802 13.6797 16.3802 13.4877 16.1282C13.2957 15.8882 13.1397 15.7082 12.9597 15.5282C11.7141 16.1804 10.2929 16.4181 8.90297 16.2065C7.513 15.995 6.22683 15.3454 5.23166 14.3522C2.66366 11.7722 2.66366 7.58424 5.23166 5.01624C5.84441 4.40276 6.57207 3.91608 7.37305 3.58402C8.17402 3.25197 9.03259 3.08105 9.89966 3.08105C10.7667 3.08105 11.6253 3.25197 12.4263 3.58402C13.2273 3.91608 13.9549 4.40276 14.5677 5.01624ZM12.8757 12.6482C13.6596 11.8586 14.0995 10.791 14.0995 9.67824C14.0995 8.56551 13.6596 7.49792 12.8757 6.70824C12.4861 6.31747 12.0232 6.00743 11.5135 5.79589C11.0039 5.58434 10.4575 5.47545 9.90566 5.47545C9.35385 5.47545 8.80747 5.58434 8.29782 5.79589C7.78817 6.00743 7.32527 6.31747 6.93566 6.70824C6.5449 7.09785 6.23486 7.56074 6.02331 8.07039C5.81176 8.58004 5.70287 9.12643 5.70287 9.67824C5.70287 10.2301 5.81176 10.7764 6.02331 11.2861C6.23486 11.7957 6.5449 12.2586 6.93566 12.6482C7.32527 13.039 7.78817 13.349 8.29782 13.5606C8.80747 13.7721 9.35385 13.881 9.90566 13.881C10.4575 13.881 11.0039 13.7721 11.5135 13.5606C12.0232 13.349 12.4861 13.039 12.8757 12.6482Z" fill="black"/>
          </svg>
          <input 
          className={styles.search__input} 
          value={searchTerm} 
          onChange={onChangeInput}
          type="text" 
          placeholder='Поиск статей' 
          />
        </div>
      </div>
    </div>
  )
}

export default Search