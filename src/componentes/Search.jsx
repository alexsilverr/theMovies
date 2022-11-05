import styles from './Search.module.css';
import { TiZoomOutline} from "react-icons/ti";
import {useState } from 'react';
import {useHistory} from 'react-router';



export function Search() {
   const [searchText, setsearchText] = useState("");
   const history = useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();
        history.push("/?search=" + searchText)
        setsearchText(" ");
    };
    
  
    return (
        <form className={ styles.searchContainer} onSubmit={handleSubmit}>
            <div  className={ styles.searchBox}>
                <input  className={ styles.serchInput} type="text" value={searchText} onChange={(e)=>setsearchText(e.target.value)}  />
                <button  className={ styles.searchButton} type="submit"> <TiZoomOutline size={20} /></button>
            </div>
        </form>
    )
}
