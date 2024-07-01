import styles from './secondHead.module.scss';
import Link from '../../link/link';
import Dropdown from '../../dropdown/dropdown';

import weather from '../../../icon/icon-weather24.svg';
import beet from '../../../icon/icon-beet24.svg';
import docs from '../../../icon/icon-docs24.svg';
import thematicMap from '../../../icon/icon-thematicMap24.svg';
import { useAppSelector } from '../../../../app/hooks';

import { setCheck } from '../index';

const SecondHead = () => {
  const arrayBranch = useAppSelector(
    (state) => state.filtersReducer.arrayBranch
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <Link img={weather} text={'ПОГОДА'} />
        <Link img={beet} text={'КУЛЬТУРЫ'} />
        <Link img={docs} text={'ОТЧЕТЫ'} />
        <Link img={thematicMap} text={'ТЕМАТИЧЕСКИЕ КАРТЫ'} />
      </div>
      <div className={styles.filters}>
        <Dropdown
          header="ФИЛИАЛ"
          array={arrayBranch}
          setActiveOption={() => {}}
        />
      </div>
    </div>
  );
};
export default SecondHead;
