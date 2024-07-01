import styles from './head.module.scss';
import { logo, logout } from '../../icon/_index';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import userPic from '../../icon/userPic.svg';
import classNames from 'classnames';

const Head = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <a href="/#">
          <img src={logo} alt="logo" className={styles.logo_img} />
        </a>
        {cookies.get('user') && (
          <div className={styles.rigthGroup_btn}>
            <div className={styles.userName}>
              <img width={24} height={24} src={userPic} alt="" />
              <span>{cookies.get('user')}</span>
            </div>
            <div className={styles.btnLogout}>
              <img
                width={32}
                height={34}
                alt="icon"
                src={logout}
                onClick={() => {
                  cookies.remove('user');
                  navigate('../login');
                }}></img>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Head;
