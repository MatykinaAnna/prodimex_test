import styles from './link.module.scss'

interface Props {
  img: string
  text: string
}

const Link = (props: Props) => {
  return (
    <div>
      <img src={props.img} width={24} height={24} alt="img" />
      <span className={styles.span}>{props.text}</span>
    </div>
  )
}
export default Link
