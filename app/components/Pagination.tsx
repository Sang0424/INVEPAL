'use client';

import styles from '../lib/ui/Pagination.module.scss';
import { useState } from 'react';

export default function Pagination({items, currentPage, limit}:{items:number, currentPage:number, limit:number}){
    const initialState = Math.floor((currentPage - 1) / 10)
    const [pageIdx, setPageIdx] = useState(initialState);
    const pagesCount = Math.ceil(items / limit);
    const pageSize = 10;
    if(pagesCount === 1) return null;
    const allPages = Array.from({length: pagesCount}, (_, i) => i + 1);
    const pageSlice = (arr:number[], size:number) => {
        const result = [];
        for (let i = 0; i < arr.length; i+= size){
            result.push(arr.slice(i, i+size));
        }
        return result;
    }
    const slicePages = pageSlice(allPages,pageSize);
    const slicePage = slicePages[pageIdx];
    const prevPages = () => {
        setPageIdx((p) => p - 1);
    }
    const nextPages = () => {
        setPageIdx((p) => p + 1);
    }
    return(
        <div>
            <ul className={styles.pagination}>
                {pageIdx > 0 ? <button onClick={() => {prevPages()}} className={[styles.prev, styles.btnArrow].join(" ")}>Prev</button> : <button disabled className={[styles.prev, styles.btnArrow].join(" ")}>Prev</button>}
                {slicePage.map((page) => (
                    <li key={page} className={page === currentPage ? styles.pageItemActive : styles.pageItem}>
                        <a className={styles.pageLink} href={`http://localhost:3000?page=${page}`} >{page}</a>
                    </li>
                ))}
                {pageIdx < slicePages.length - 1 ? <button onClick={() => {nextPages()}} className={[styles.next, styles.btnArrow].join(" ")}>Next</button> : <button disabled className={[styles.next, styles.btnArrow].join(" ")}>Next</button>}
            </ul>
        </div>
    )
}