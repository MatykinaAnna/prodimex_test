import styles from './head.module.scss'
import { logo } from '../../icon/_index'

const Head = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <a href="/#">
          <img src={logo} alt="logo" className={styles.logo_img} />
        </a>
      </div>
    </div>
  )
}
export default Head
