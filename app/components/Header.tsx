'use client';

import Image from "next/image";
import logo from '../../public/Logo.svg'
import  SearchBar  from "./SearchBar";
import styles from '../lib/ui/Header.module.scss'

export default function Header(){
    return(
    <header className={styles.container}>
      <Image src={logo} width={200} height={55} alt="Logo Image" priority={true}/>
      <div className={styles.gnb}>
        <ul className={styles.container}>
            <li className={styles.nav}>주식</li>
            <li className={styles.nav}>뉴스</li>
            <li className={styles.nav}>경제지표</li>
            <li className={styles.nav}>커뮤니티</li>
        </ul>
      </div>
      <div className={styles.login}>
        <SearchBar/>
        <button className={styles.login_btn}>로그인</button>
      </div>
    </header>
    )
}