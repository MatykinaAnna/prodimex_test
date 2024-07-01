import styles from './head.module.scss';
import { logo } from '../../icon/_index';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const Head = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <a href="/#">
          <img src={logo} alt="logo" className={styles.logo_img} />
        </a>
        <button
          onClick={() => {
            cookies.remove('user');
            navigate('../login');
          }}>
          Выйти
        </button>
      </div>
    </div>
  );
};
export default Head;
