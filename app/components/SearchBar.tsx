'use client'

import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchBar.module.scss'

export default function SearchBar(){
    return(
        <div className={styles.search}>
            <input className={styles.searchBar} type="text" placeholder='종목검색'/>
            <button className={styles.searchBar_btn} type='submit'><SearchIcon fontSize='large' /></button>
        </div>
    )
}