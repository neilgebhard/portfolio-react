import styles from "./Education.module.css";

const Education = () => {
  return (
    <section className={styles.section}>
      <div>
        <h1 className="heading">Education</h1>
        <p>Bachelor Degree in Computer Science (2014)</p>
        <p className="text-secondary">Portland State University</p>
        <p className="text-secondary">Portland, Oregon</p>
      </div>
    </section>
  );
};

export default Education;
