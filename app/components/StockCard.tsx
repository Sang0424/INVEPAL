import { cache } from 'react'
import styles from '../lib/ui/StockCard.module.scss'

export default async function StockCard({code, name, price, changes, volume}:{code:string,name:string,price:string,changes:number,volume:number}){
    // const data = await fetch(`http://localhost:8000/api/stock?code=${code}`, {cache:'no-store'}).then((res) => res.json);
    // console.log(data);
    
    return(
        <div className={styles.container}>
           <div>{name}</div>
           <div>현재가: {price}</div>
           <div>전일대비등락률: {changes}%</div>
           <div>거래량: {volume}</div>
        </div>
    )
}