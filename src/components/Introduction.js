import styles from "./Introduction.module.css";
import Pulse from 'react-reveal/Pulse';

const Introduction = () => {
  return (
    <Pulse>
      <section className={styles.heading}>
        <p>Neil Gebhard</p>
        <p>Web Developer</p>
        <p>Based in Saipan</p>
        <div className={styles["subtext-small"]}>
          (Open to remote work or relocation!)
        </div>
      </section>
    </Pulse>
  );
};

export default Introduction;
