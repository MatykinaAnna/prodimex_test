import styles from './secondHead.module.scss';
import Link from '../../link/link';
import Dropdown from '../../dropdown/dropdown';

const SecondHead = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <Link img={''} text={'ПОГОДА'} />
        <Link img={''} text={'КУЛЬТУРЫ'} />
        <Link img={''} text={'ОТЧЕТЫ'} />
        <Link img={''} text={'ТЕМАТИЧЕСКИЕ КАРТЫ'} />
      </div>
      <div>
        <Dropdown />
      </div>
    </div>
  );
};
export default SecondHead;
