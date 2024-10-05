import styles from './global.module.scss';
import Banner from './components/Banner';
import Main from './components/Main';

export default function Home({searchParams}:{searchParams?: {
  query?: string;
  page?: string;
  limit?:string;
};})
 {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 30;
  return (
    <>
      <div className={styles.banner}>
        <Banner />
      </div>
      <Main query={query} currentPage={currentPage} limit={limit}/>
    </>
  );
}
