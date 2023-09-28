import styles from './Frase.module.css';

function Frase() {
  return (
    <div>
      <p className={styles.fraseContent}>frase teste</p>
      <p className={styles.fraseContainer}>frase teste2</p>
    </div>
  );
}

export default Frase;
