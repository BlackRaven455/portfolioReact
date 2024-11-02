import styles from "./description.module.css";

export default function Description({ year, university, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.yearContainer}>
        <span>{year && <p>{year}</p>}</span>
      </div>
      <div className={styles.descriptionContainer}>
        {university && <p>{university}</p>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
