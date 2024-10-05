import styles from '../lib/ui/Main.module.scss'
import MainContents from "./MainContents";
import Pagination from "./Pagination";

export default async function Main({query, currentPage, limit}:{query:string, currentPage:number, limit:number}){
    const data = await fetch(`http://localhost:8000/api/stocks?page=${currentPage}&limit=${limit}`,{cache:"no-store"}).then((res) => res.json());
    const todayStocks = data.today_stocks;
    const stocksLen = data.stocksLen;
    return(
        <>
            <div className={styles.container}>
                <div>인기 종목군</div>
                <div>StockList</div>
                <MainContents data={todayStocks}/>
            </div>
            <Pagination items={stocksLen} currentPage={currentPage} limit={limit}/> 
        </>
    )

}