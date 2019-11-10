import React from 'react';
import styles from './recipe.module.css';

const Recipe = ({title, calories, image}) => {
    return(
        <div className={styles.recipe}>
            <h1>{title}</h1>
            <p>Calories: {calories}</p>
            <img src = {image} className={styles.image} alt=""/>
        </div>
    );
}

export default Recipe;