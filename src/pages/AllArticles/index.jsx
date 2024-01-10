import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Search from '../../components/Search'
import Categories from '../../components/Categories'
import AllArticleBlock from '../../components/AllArticlesBlock'
import GoBack from '../../components/GoBack'
import { useDispatch, useSelector } from 'react-redux'
import {setArticles} from '../../redux/slices/articlesSlice'
import { setTotalPages} from '../../redux/slices/paginationSlice'
import {articleGet} from '../../api'
import Pagination from '../../components/Pagination';
import styles from './AllArticles.module.scss'
import { setSearchResults } from '../../redux/slices/searchSlice';


const AllArticles = () => {
  const [categoryId, setCategoryId] = useState();
  const dispatch = useDispatch();
  
  const searchTerm = useSelector(state => state.search.searchTerm); 
  const searchResults = useSelector((state) => state.search.searchResults);
  const articles = useSelector(state => state.articles.articles)
  const filteredArticles = useSelector(state => state.filter.filteredArticles)
  const selectedCategories =  useSelector(state => state.filter.categories)
  
  const currentPage = useSelector(state => state.pagination.currentPage)

  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);

  const onClickCategory = (id) =>{
    setCategoryId(id)
  }

  const handleSearch = () =>{
    dispatch(setSearchResults(searchTerm));
  }

  useEffect(()=>{
    const getArticles = async () =>{
      const res = await articleGet();
      dispatch(setArticles(res))
      dispatch(setSearchResults(res))
      dispatch(setTotalPages(res.length))
    }
    getArticles()
  }, [dispatch])
  
  return (
    <div className={styles.root}>
        <Header/>
      <div className={styles.headWrapper}>
        <GoBack subtitle={'Все статьи'}/>
        <div className={styles.searchWrapper}>
          <Search onSearch={handleSearch}/>
          <Categories value={categoryId} onChangeCategory={(id) => onClickCategory(id)}/>
        </div>
      </div>
      <div className={styles.wrapper}>
        {searchTerm ? (
          searchResults.map((article, index) => (
            <AllArticleBlock key={index} {...article} />
          ))
        ) : selectedCategories[0] ? (
          filteredArticles.map((article, index) => (
            <AllArticleBlock key={index} {...article} />    
          ))
        ) : (
          currentItems.map((article, index) => (
            <AllArticleBlock key={index} {...article} />    
          ))
        )
        }
      </div>
      <Pagination />
    </div>
  )
}

export default AllArticles