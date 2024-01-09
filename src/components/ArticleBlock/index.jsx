import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import img from '../../assets/img/img-1.png'
import styles from './ArticleBlock.module.scss'

const ArcticleBlock = ({article}) => {
    const colors = ['#FFE0A3', '#CCFFF6', '#FFCCFD', '#ADD3FF'];
    // const backgroundColor = '#FFE0A3';
    const [color, setColor] = useState('');

    useEffect(() => {
        randomizeColor();
    }, []);
    
    const randomizeColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        setColor(randomColor);
    }
    // to={{ pathname: `/Статьи/${article.id}`}}
  return (
    <div className={styles.root} style={{backgroundColor: color}} key={article.id}>
      <p className={styles.title}>{article.topic}</p>
      <p className={styles.topic}>#{article.subject}</p>
      <img className={styles.img} src={img} alt="" />
    </div>
  )
}

export default ArcticleBlock