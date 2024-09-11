'use client'

import { useState } from "react";
// import { ReactElement } from "react";
import IndexChart from "./IndexChart";
import type { Indice,IndiceData } from "../types/components/interface";
import styles from './BannerItem.module.scss';

// export default async function BannerItem({indice}:{indice:string}):Promise<ReactElement>{
//     // let data = await fetch(`http://localhost:8000/api/indices/${indice}`,{cache:"no-store"}).then((res) => res.json());
//     let today_indice:Indice = data[data.length - 1];
//     let prev_indice:Indice = data[data.length - 2];
//     let change_amount:number = prev_indice.Close * today_indice.Change;


//     return(
//         <div className={styles.container}>
//             <p className={styles.indice}>{indice.toUpperCase()}</p>
//             <div className={change_amount > 0 ? styles.pricesUp : styles.pricesDown}> 
//                 <p className={styles.close}>{today_indice.Close}</p>
//                 <p className={styles.change}>{change_amount.toFixed(2)}</p>
//                 <p className={styles.change_pct}>{today_indice.Change > 0 ? '+' : '-'}{today_indice.Change * 100}%</p>
//             </div>
//             <IndexChart data={data} indice={indice}/>
//         </div> 
//     )
// }
export default function BannerItem({data}:{data:IndiceData}){
    const [selectedIndice, setSelectedIndice] = useState<'kospi' | 'kosdaq' | 'ks200'>('kospi');
    const [chartData, setChartData] = useState<Indice[]>(data[selectedIndice]);

    const handleMouseEnter = (indice:'kospi'|'kosdaq'|'ks200') => {
        setSelectedIndice(indice);
        setChartData(data[indice])
    }
    let kospiInfo = data['kospi'];
    let kosdaqInfo = data['kosdaq'];
    let kospi200Info = data['ks200'];

    let today_kospi = kospiInfo[kospiInfo.length - 1];
    let today_kosdaq = kosdaqInfo[kosdaqInfo.length - 1];
    let today_kospi200 = kospi200Info[kospi200Info.length - 1];

    let prev_kospi = kospiInfo[kospiInfo.length - 2];
    let prev_kosdaq = kosdaqInfo[kosdaqInfo.length - 2];
    let prev_kospi200 = kospi200Info[kospi200Info.length - 2];

    return(
        <>
            <div className={styles.container}>
                <ul className={styles.prices}>
                <li onMouseEnter={() => handleMouseEnter('kospi')}>
                    <p>코스피</p>
                    <div className={styles.info}>
                        <span className={today_kospi.Change > 0 ? styles.priceUp : styles.priceDown}>{today_kospi.Close}</span>
                        <span className={today_kospi.Change > 0 ? styles.amountUp : styles.amountDown}>{(prev_kospi.Close * today_kospi.Change).toFixed(2)}</span>
                        <span className={today_kospi.Change > 0 ? styles.changeUp : styles.changeDown}>{today_kospi.Change * 100 > 0 ? '+' : ''}{(today_kospi.Change * 100).toFixed(2)}%</span>
                    </div>
                </li>
                <li onMouseEnter={() => handleMouseEnter('kosdaq')}>
                    <p>코스닥</p>
                    <div className={styles.info}>
                        <span className={today_kosdaq.Change > 0 ? styles.priceUp : styles.priceDown}>{today_kosdaq.Close}</span>
                        <span className={today_kosdaq.Change > 0 ? styles.amountUp : styles.amountDown}>{(prev_kosdaq.Close * today_kosdaq.Change).toFixed(2)}</span>
                        <span className={today_kosdaq.Change > 0 ? styles.changeUp : styles.changeDown}>{today_kosdaq.Change * 100 > 0 ? '+' : ''}{(today_kosdaq.Change * 100).toFixed(2)}%</span>
                    </div>
                </li>
                <li onMouseEnter={() => handleMouseEnter('ks200')}>
                    <p>코스피200</p>
                    <div className={styles.info}>
                        <span className={today_kospi200.Change > 0 ? styles.priceUp : styles.priceDown}>{today_kospi200.Close}</span>
                        <span className={today_kospi200.Change > 0 ? styles.amountUp : styles.amountDown}>{(prev_kospi200.Close * today_kospi200.Change).toFixed(2)}</span>
                        <span className={today_kospi200.Change > 0 ? styles.changeUp : styles.changeDown}>{today_kospi200.Change * 100 > 0 ? '+' : ''}{(today_kospi200.Change * 100).toFixed(2)}%</span>
                    </div>
                </li>
                </ul>
                <div className={styles.chart}>
                    <IndexChart data={chartData} indice={selectedIndice}/>
                </div>
            </div>
            
        </>
    )
}