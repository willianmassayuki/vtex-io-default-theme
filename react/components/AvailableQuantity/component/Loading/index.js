import styles from './styles.css';

function Loading() {
  return (
    <div className={`${styles['lds-ellipsis']}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loading