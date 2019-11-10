import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
  
  const APP_ID = '933ac463';
  const APP_KEY = '3fdf7a9039a185c3bf2516b19c58d15a';
  
  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');

  useEffect(
    () => {
      getRecipe();
    }
  , [query]);

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    //console.log(data.hits);
    setRecipe(data.hits);
  }


  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }


  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value = {search} onChange = {updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      
      <div className="recipes">

      {recipes.map(recipe => (
        <Recipe 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image = {recipe.recipe.image}
        key = {recipe.recipe.label} />
      ))}
      </div>
      
    </div>
  );
}

export default App;
