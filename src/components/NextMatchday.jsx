import styles from "src/styles/nextMatchday.module.css";
import teamHome from "src/assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export function NextMatchday() {
  const [matches, setMatches] = useState([]);
  const [closestMatch, setClosestMatch] = useState(null);
  const [awayImgSrc, setAwayImgSrc] = useState(null);
  const [stadiumName, setStadium] = useState(null);

  const parseDateTime = (dateStr, timeStr) => {
    const [year, month, day] = dateStr.split("-");
    const [hours, minutes] = timeStr.split(":");
    return new Date(year, month - 1, day, hours, minutes);
  };

  const getClosestFutureMatch = (matches) => {
    const now = new Date();

    const futureMatches = matches
      .map((match) => ({
        ...match,
        dateObj: parseDateTime(match.date, match.time),
      }))
      .filter((match) => match.dateObj > now);

    futureMatches.sort((a, b) => a.dateObj - b.dateObj);

    return futureMatches.length > 0 ? futureMatches[0] : null;
  };

  useEffect(() => {
    fetch("/api/komanda/FK-Tera/210/20/32")
      .then((data) => data.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const table = doc.getElementById("rungtynes").querySelector("tbody");

        const rows = table.querySelectorAll("tr");
        const matchEntries = [];
        for (const row of rows) {
          const isHeader = row.querySelectorAll("th").length > 0;
          if (isHeader) continue;
          const cells = row.querySelectorAll("td");
          const entry = {
            date: cells[0].innerText,
            time: cells[1].innerText,
            league: cells[3].innerText,
            team1: cells[4].textContent,
            url: cells[5].querySelector("a").href,
            team2: cells[6].textContent,
          };
          matchEntries.push(entry);
        }

        setMatches(matchEntries);

        const closestMatch = getClosestFutureMatch(matchEntries);
        setClosestMatch(closestMatch);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!closestMatch) return;
    const baseUrl = "http://www.vilniausfutbolas.lt";
    fetch(`/api${closestMatch.url.substring(baseUrl.length)}`)
      .then((data) => data.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const matchContainers = doc
          .getElementById("match-info")
          .querySelectorAll(".span4.center-teams");
        let imageSrc = "";
        for (const container of matchContainers) {
          const [image] = container.getElementsByTagName("img");
          const nameLink = container.querySelector("h3 > a");
          if (!image) continue;
          if (nameLink.innerText.toLowerCase().includes("tera")) continue;
          imageSrc = image.src;
        }
        setAwayImgSrc(`/api${imageSrc.substring(baseUrl.length)}`);
      });
  }, [closestMatch]);

  useEffect(() => {
    if (!closestMatch) return;
    const baseUrl = "http://www.vilniausfutbolas.lt";
    fetch(`/api${closestMatch.url.substring(baseUrl.length)}`)
      .then((data) => data.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const matchContainers = doc
          .getElementById("match-info")
          .querySelectorAll(".span4.no-space.center-teams");
        let stadiumName = "";
        for (const container of matchContainers) {
          const stadiumLink = container.querySelector("a");
          if (stadiumLink) {
            stadiumName = stadiumLink.innerText;
            break;
          }
        }
        setStadium(stadiumName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [closestMatch]);

  return (
    <>
      <div style={{}} id="next-match" className={styles["matchday-wrap"]}>
        <div className={styles["matchday-info-wrap"]}>
          <div className={styles["matchday-content"]}>
            <div className={`${styles["team-container"]} ${styles["left"]}`}>
              <div className={styles["logo-container"]}>
                <img src={teamHome} />
              </div>
            </div>
            {closestMatch && (
              <div className={styles["match-info"]}>
                <span className={styles["league-info"]}>
                  {closestMatch.league}
                </span>
                <span className={styles["date-info"]}>
                  <b>{closestMatch.date}</b>
                </span>
                {closestMatch.time !== "00:00" && (
                  <span className={styles["time-info"]}>
                    <b>{closestMatch.time}</b>
                  </span>
                )}
                <span className={styles["stadium-info"]}>{stadiumName}</span>
              </div>
            )}
            <div className={`${styles["team-container"]} ${styles["right"]}`}>
              <div className={styles["logo-container"]}>
                <img
                  src={awayImgSrc}
                  style={{
                    mixBlendMode: "multiply",
                    backgroundColor: "red",
                  }}
                />
              </div>
              <div className={styles["more-info-container"]}>
                <a href={closestMatch ? closestMatch.url : "#"}>
                  <button className={styles["more-info-button"]}>
                    Apie Rungtynes
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
