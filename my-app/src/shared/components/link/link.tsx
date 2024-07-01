import styles from './link.module.scss';

interface Props {
  img: string;
  text: string;
}

const Link = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <img src={props.img} alt="icon" width={24} height={24} />
      <span className={styles.span}>{props.text}</span>
    </div>
  );
};
export default Link;
