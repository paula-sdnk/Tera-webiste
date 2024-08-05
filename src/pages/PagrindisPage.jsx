import styles from "src/styles/pagrindinisPage.module.css";
import { NextMatchday } from "src/components/NextMatchday";
import { LeagueTable } from "src/components/LeagueTable";
export function PagrindinisPage() {
  return (
    <div className={styles["page"]}>
      <div className={styles["page-wrap"]}>
        <section className={styles["section-1"]}>
          <NextMatchday isMainPage={true} />
          <LeagueTable />
        </section>
        <section className={styles["section-2"]}>
          <Sponsors />
        </section>
      </div>
    </div>
  );
}

function Sponsors() {
  return (
    <div className={styles["sponsors-wrap"]}>
      <div className={styles["sponsors-content-wrap"]}>
        <div className={styles["sponsors-logo-wrap"]}>
          <a
            className={styles["motis-logo"]}
            href="https://www.motis.com"
            target="_blank"
          ></a>
        </div>
        <div className={styles["sponsors-logo-wrap"]}>
          <a
            className={styles["neonita-logo"]}
            href="https://www.facebook.com/profile.php?id=100054548135238"
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  );
}
