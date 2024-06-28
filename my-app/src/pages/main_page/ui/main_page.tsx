import Head from '../../../shared/components/head/head'
import SecondHead from '../../../shared/components/secondHead/ui/secondHead'
import styles from './main_page.module.scss'
import MyMapComponent from '../../../shared/components/mapComponent/map'

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head />
      <SecondHead />
      <MyMapComponent />
    </div>
  )
}
export default MainPage
