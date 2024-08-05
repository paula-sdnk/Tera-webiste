import styles from "src/styles/TeamPage.module.css";
import ExecutiveCard from "src/components/ExecutiveCard";
import players from "src/assets/players.json";
import treneris1 from "src/assets/Vasiljevas.png";
import treneris2 from "src/assets/hamburger.jpg";

export function KomandaPage() {
  // const contactsField1 = [
  //   <>
  //     <h2>{"Sergejus Vasiljevas"}</h2>
  //   </>,
  //   <>
  //     <span>
  //       Gimimo metai: <b>1900-01-01</b>
  //     </span>
  //   </>,
  // ];

  // const contactsField2 = [
  //   <>
  //     <h2>{"Aleksejus Kliosovas"}</h2>
  //   </>,
  //   <>
  //     <span>
  //       Gimimo metai: <b>1900-01-01</b>
  //     </span>
  //   </>,
  // ];

  const renderPlayerCards = (category) => {
    return players[category].map((player, index) => (
      <ExecutiveCard
        key={index}
        size="medium"
        name={player.name}
        dateOfBirth={player.dateOfBirth}
      />
    ));
  };

  return (
    <>
      <div className={styles["page-wrap"]}>
        <div className={styles["team-wrap"]}>
          <section className={styles["team-content"]}>
            <div className={styles["header-wrap"]}>
              <div className={styles["stripe"]}>
                <div className={styles["green"]} />
                <div className={styles["white"]} />
                <div className={styles["red"]} />
                <div className={styles["black"]} />
              </div>
              <h1 className={styles["header"]}>Treneriai</h1>
            </div>
            <div className={styles["team-executives"]}>
              <ExecutiveCard
                size="large"
                name="Sergejus Vasiljevas"
                src={treneris1}
                dateOfBirth="1975-06-07"
              />
              <ExecutiveCard
                size="large"
                name="Aleksejus Kliosovas"
                src={treneris2}
                dateOfBirth="1975-10-27"
              />
            </div>
            <div className={styles["team-table-wrap"]}>
              <div className={styles["header-wrap"]}>
                <div className={styles["stripe"]}>
                  <div className={styles["green"]} />
                  <div className={styles["white"]} />
                  <div className={styles["red"]} />
                  <div className={styles["black"]} />
                </div>
                <h1 className={styles["header"]}>Puolėjai</h1>
              </div>
              <div className={styles["team-table"]}>
                {renderPlayerCards("Puolėjai")}
              </div>
              <div className={styles["header-wrap"]}>
                <div className={styles["stripe"]}>
                  <div className={styles["green"]} />
                  <div className={styles["white"]} />
                  <div className={styles["red"]} />
                  <div className={styles["black"]} />
                </div>
                <h1 className={styles["header"]}>Saugai</h1>
              </div>
              <div className={styles["team-table"]}>
                {renderPlayerCards("Saugai")}
              </div>
              <div className={styles["header-wrap"]}>
                <div className={styles["stripe"]}>
                  <div className={styles["green"]} />
                  <div className={styles["white"]} />
                  <div className={styles["red"]} />
                  <div className={styles["black"]} />
                </div>
                <h1 className={styles["header"]}>Ginėjai</h1>
              </div>
              <div className={styles["team-table"]}>
                {renderPlayerCards("Gynėjai")}
              </div>
              <div className={styles["header-wrap"]}>
                <div className={styles["stripe"]}>
                  <div className={styles["green"]} />
                  <div className={styles["white"]} />
                  <div className={styles["red"]} />
                  <div className={styles["black"]} />
                </div>
                <h1 className={styles["header"]}>Vartininkai</h1>
              </div>
              <div className={styles["team-table"]}>
                {renderPlayerCards("Vartininkai")}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
