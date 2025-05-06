import styles from "src/styles/leagueTable.module.css";
import arrowDownIcon from "src/assets/Arrow-down.svg";
import { useEffect, useState, useRef, useMemo } from "react";

export function LeagueTable() {
  const [standings, setStandings] = useState([]);
  const [isScrolledToEnd, setIsScrolledToEnd] = useState(false);
  const tableRef = useRef(null);

  useEffect(() => {
    fetch("/api/komanda/FK-Tera/210/20/34")
      .then((data) => data.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const table = doc
          .getElementById("team_standings")
          .querySelector("tbody");

        const rows = table.querySelectorAll("tr");
        const standings = [];
        for (const row of rows) {
          const isHeader = row.querySelectorAll("th").length > 0;
          if (isHeader) continue;
          const cells = row.querySelectorAll("td");
          const entry = {
            standing: cells[0].innerText,
            team: cells[1].textContent,
            matchCount: cells[2].innerText,
            goalDifference: cells[6].innerText,
            points: cells[7].innerText,
          };
          standings.push(entry);
        }

        console.log(standings);
        setStandings(standings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const standingsList = standings.map((standing) => (
    <tr
      className={`
        ${styles["table-row"]}
        ${standing.standing % 2 === 0 ? "" : styles["grey-background"]}
        ${standing.team.includes("Tera") ? styles["selected"] : ""}
      `}
      key={standing.team}
    >
      <td className={styles["center"]}>
        <div>{standing.standing}</div>
      </td>
      <td className={styles["team-name"]}>{standing.team}</td>
      <td>{standing.matchCount}</td>
      <td>{standing.goalDifference}</td>
      <td>{standing.points}</td>
    </tr>
  ));

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = tableRef.current;

    if (scrollTop + clientHeight >= scrollHeight) {
      if (isScrolledToEnd) return;
      setIsScrolledToEnd(true);
      return;
    }

    if (!isScrolledToEnd) return;
    setIsScrolledToEnd(false);
  };
  console.log("rerendered");
  return (
    <>
      <div className={styles["wrap"]}>
        {!isScrolledToEnd && (
          <img
            className={styles["arrow-down-icon"]}
            src={arrowDownIcon}
            alt="Arrow Down"
          />
        )}
        <div
          className={styles["league-table-wrap"]}
          onScroll={handleScroll}
          ref={tableRef}
        >
          <div className={styles["table-header"]}>
            <h1>Turnyrinė Lentelė</h1>
          </div>
          <table className={styles["league-table"]}>
            <thead>
              <tr>
                <th></th>
                <th>Klubas</th>
                <th>Rungt.</th>
                <th>Skirt.</th>
                <th>Tšk.</th>
              </tr>
            </thead>
            <tbody>{standingsList}</tbody>
          </table>
          <div className={styles["table-footer"]}></div>
        </div>
      </div>
    </>
  );
}
