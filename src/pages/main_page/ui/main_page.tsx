import Head from '../../../shared/components/head/head';
import SecondHead from '../../../shared/components/secondHead/ui/secondHead';
import styles from './main_page.module.scss';
import MyMapComponent from '../../../shared/components/mapComponent/map';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  useEffect(() => {
    if (cookies.get('user') === undefined) {
      navigate('../login');
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Head />
      <SecondHead />
      <MyMapComponent />
    </div>
  );
};
export default MainPage;
