import styles from "./outerContainer.module.css";

export default function OuterContainer({ children }) {
  return <div className={styles.outerContainer}>{children}</div>;
}
