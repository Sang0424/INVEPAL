import BannerItem from "./BannerItem";
import { IndiceData } from "../types/components/interface";


export default async function Banner() {
    let data = await fetch(`http://localhost:8000/api/indices`,{cache:"no-store"}).then((res) => res.json());
    return(
        <BannerItem data={data}/>
    )
}