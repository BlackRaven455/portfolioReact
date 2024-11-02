import styles from "./homepage.module.css";

export default function Homepage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.introduction}>Hello! I am</h2>
      <h2 className={styles.name}>Shakirov Nikita</h2>
      <p>Beginner Java and Javascript developer</p>
      <div className={styles.img_container}>
        <img src={""} alt={"my photo"}></img>
      </div>
    </div>
  );
}
