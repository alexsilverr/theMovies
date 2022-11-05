import React, { useEffect, useState } from 'react';
import { useLocation} from 'react-router';
import {get} from '../utils/httpClient';
import {MoviesCard} from './MovieCard';
import styles from './Movie.module.css';
import Spinner from './Spinner.jsx';

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

export default function Movies() {
    
    const [movies,setMovies]=useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const query=useQuery();
    const search=query.get("search");
    
    useEffect(() => {
      setIsLoading(true);
      const searchUrl=search ? "/search/movie?query=" + search : "/discover/movie";
      console.log(searchUrl)
        get(searchUrl).then((data) => {
          setMovies(data.results);
          setIsLoading(false);
          
        });
      }, [search]);
    if (isLoading){
      return <Spinner />;
    }
    return(
        <ul className={styles.movieGrid}>
            {
                movies.map( (movie)=>{
                return <MoviesCard  key={movie.id} movie={movie}   />   
               

                })
                
              
            }
       
        
      </ul>
    );
};