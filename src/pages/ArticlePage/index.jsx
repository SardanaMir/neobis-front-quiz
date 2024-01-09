import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header'
import styles from './ArticlePage.module.scss'
import articles from '../../articles.json'

const ArticlePage = () => {
    const {id} = useParams();
    console.log("айдишка", id)
    const article = articles.find(post => post.id === id)
    console.log(article)
  return (
    <div className={styles.root}>
        <Header/>
        <Link to="/Статьи">
          <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M10.7312 20.3313C10.4312 20.6313 10.0243 20.7998 9.60001 20.7998C9.17575 20.7998 8.76886 20.6313 8.46881 20.3313L1.26881 13.1313C0.968859 12.8313 0.800354 12.4244 0.800354 12.0001C0.800354 11.5759 0.968859 11.169 1.26881 10.8689L8.46881 3.66895C8.77058 3.37749 9.17474 3.21622 9.59425 3.21987C10.0138 3.22351 10.4151 3.39178 10.7117 3.68844C11.0084 3.98509 11.1766 4.38639 11.1803 4.80591C11.1839 5.22542 11.0227 5.62958 10.7312 5.93135L6.40001 10.4001L21.6 10.4001C22.0244 10.4001 22.4313 10.5687 22.7314 10.8688C23.0314 11.1688 23.2 11.5758 23.2 12.0001C23.2 12.4245 23.0314 12.8315 22.7314 13.1315C22.4313 13.4316 22.0244 13.6001 21.6 13.6001L6.40001 13.6001L10.7312 18.0689C11.0312 18.369 11.1997 18.7759 11.1997 19.2001C11.1997 19.6244 11.0312 20.0313 10.7312 20.3313Z" fill="black"/>
          </svg>
        </Link>
        <h2 className={styles.subtitle}>{article.topic}</h2>
        <h3 className={styles.info}>#{article.subject}<span> * </span>{article.readTime}</h3>
        <p className={styles.text}>{article.article}</p>
    </div>
  )
}

export default ArticlePage