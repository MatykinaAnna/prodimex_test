import { useEffect, useState } from 'react';
import styles from './dropdown.module.scss';
import row_down from '../../icon/row_down.svg';
import classnames from 'classnames';

export interface item {
  name: string;
  id: number;
  parent: boolean;
  checked: boolean;
}

interface Props {
  header: string;
  array: item[];
  setActiveOption: Function;
}

const Dropdown = (props: Props) => {
  const [selected, setSelected] = useState<number[]>([1]);

  const [selectedName, setSelectedName] = useState<string | undefined>('');

  const [openContent, setOpenContent] = useState(false);

  function onChangeCheckbox(id: number) {}

  useEffect(() => {
    let name = props.array.find((item) => {
      return item.checked;
    })?.name;
    setSelectedName(name);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{props.header}</div>
      <div className={styles.dropdown}>
        <div
          className={styles.selectedName}
          onClick={() => setOpenContent(!openContent)}>
          {selectedName}
          <img src={row_down} alt="icon" width={24} height={24} />
        </div>
        {openContent && (
          <div className={styles.component}>
            <div
              className={classnames(styles.component_row)}
              style={{ fontWeight: 'bold' }}>
              <input type="checkbox" id={'all'} />
              <label htmlFor={'all'}>{'Выбрать все'}</label>;
            </div>
            {props.array.map((item, index) => {
              return (
                <div
                  key={index}
                  className={classnames(
                    styles.component_row,
                    !item.parent && styles.child
                  )}>
                  <input
                    type="checkbox"
                    id={String(item.id)}
                    checked={item.checked}
                    onChange={() => {
                      item.checked = !item.checked;
                    }}
                  />
                  <label htmlFor={String(item.id)}>{item.name}</label>;
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Dropdown;
