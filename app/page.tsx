import styles from './global.module.scss'
import BannerItem from './components/BannerItem';
import Banner from './components/Banner';

export default function Home() {
  const indices = ['kospi','kosdaq','kospi200']
  return (
    <>
      <div className={styles.banner}>
        {/* <BannerItem indice="kospi" />
        <BannerItem indice="kosdaq" />
        <BannerItem indice="kospi200" /> */}
        <Banner />
      </div>
      <main className={styles.main}>
          <p>main</p>
      </main>
    </>
  );
}
