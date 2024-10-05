import type { Stock } from "../types/components/interface"
import StockCard from "./StockCard"

export default function MainContents({data}:{data:Stock[]}){

    return(
        <>
            <div>{
                data.map((item:Stock) => {
                return( <StockCard key={item.Code} code={item.Code} name={item.Name} price={item.Close} changes={item.ChagesRatio} volume={item.Volume}/>)
                })
            }</div>
            
        </>
    )
}