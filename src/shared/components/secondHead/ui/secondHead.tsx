import styles from './secondHead.module.scss';
import Link from '../../link/link';
import Dropdown from '../../dropdown/dropdown';

import weather from '../../../icon/icon-weather24.svg';
import beet from '../../../icon/icon-beet24.svg';
import docs from '../../../icon/icon-docs24.svg';
import thematicMap from '../../../icon/icon-thematicMap24.svg';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';

import { setCheck, setAllOprionCheck, setCenter } from '../index';

const SecondHead = () => {
  const dispatch = useAppDispatch();
  const arrayBranch = useAppSelector(
    (state) => state.filtersReducer.arrayBranch
  );

  function getCenter() {
    let sumX = 0;
    let sumY = 0;
    let counter = 0;
    arrayBranch.forEach((item) => {
      if (!item.parent && item.checked && item.center.length !== 0) {
        counter++;
        //@ts-ignore
        sumX = sumX + item.center[0];
        //@ts-ignore
        sumY = sumY + item.center[1];
      }
    });
    return [sumX / counter, sumY / counter];
  }

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
          setActiveOption={(item: {
            name: string;
            id: number;
            parent: boolean;
            checked: boolean;
          }) => {
            dispatch(setCheck(item.id));
          }}
          setActiveAllOption={(result: boolean) => {
            dispatch(setAllOprionCheck(result));
          }}
        />
      </div>
      <div className={styles.btn}>
        <button
          onClick={() => {
            dispatch(setCenter(getCenter()));
          }}>
          Перейти
        </button>
      </div>
    </div>
  );
};
export default SecondHead;
