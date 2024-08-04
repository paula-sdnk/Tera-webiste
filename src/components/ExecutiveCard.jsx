import styles from "src/styles/ExecutiveCard.module.css";
function ExecutiveCard({ size, name, src, dateOfBirth }) {
  return (
    <>
      <div className={`${styles["card-wrap"]} ${styles[`${size}`]}`}>
        <div className={styles["card-content-wrap"]}>
          <div
            style={{ backgroundImage: `url(${src})` }}
            className={`${styles["person-photo"]} ${styles[`${size}`]}`}
          />
          <div className={`${styles["card-content"]} ${styles[`${size}`]}`}>
            <div className={`${styles["details"]} ${styles[`${size}`]}`}>
              <span className={`${styles["card-name"]} ${styles[`${size}`]}`}>
                {name}
              </span>
              <br />
              <span
                className={`${styles["card-date-of-birth"]} ${
                  styles[`${size}`]
                }`}
              >
                {dateOfBirth}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExecutiveCard;
