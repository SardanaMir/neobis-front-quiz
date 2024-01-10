import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import img from '../../assets/img/img-1.png'
import styles from './AllArticlesBlock.module.scss'

const AllArticleBlock = ({topic, id, subject, readTime}) => {
    const colors = ['#FFE0A3', '#CCFFF6', '#FFCCFD', '#ADD3FF'];
    const [color, setColor] = useState('');

    useEffect(() => {
        randomizeColor();
    }, []);
    
    const randomizeColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        setColor(randomColor);
    }

  return (
    <Link to={{ pathname: `/${id}`}}>
        <div className={styles.root} style={{backgroundColor: color}} key={id}>
            <div className={styles.wrapper}>
                <div className={styles.title__wrapper}>
                    <p className={styles.title}>{topic}</p>
                    <p className={styles.topic}>#{subject}<span> * </span>{readTime}</p>
                </div>
                <img src={img} alt="" />
            </div>
        </div> 
    </Link>
    )
}

export default AllArticleBlock