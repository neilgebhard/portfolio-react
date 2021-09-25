import styles from "./Education.module.css";

const Education = () => {
  return (
    <section className={styles.section}>
      <div>
        <h1 className={styles.heading}>Education</h1>
        <p>Bachelor Degree in Computer Science (2014)</p>
        <p className={styles["text-secondary"]}>Portland State University</p>
        <p className={styles["text-secondary"]}>Portland, Oregon</p>
      </div>
    </section>
  );
};

export default Education;
