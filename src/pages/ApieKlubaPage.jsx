import styles from "src/styles/ApieKlubaPage.module.css";

export function ApieKlubaPage() {
  return (
    <>
      <div className={styles["page-wrap"]}>
        <div className={styles["content-wrap"]}>
          <div className={styles["article-wrap"]}>
            <h1 className={styles["article-header"]}>Apie Klubą</h1>
            <p className={styles["article-content"]}>
              Sovietmečiu egzistavo komanda, įsteigta prie Vilniaus troleibusų
              parko, komanda įkurta apie 1956 m. 1960 m. komanda pateko į
              aukščiausiąją lygą, tačiau po vieno sezono iš jos iškrito.
            </p>
            <p className={styles["article-content"]}>
              Po Nepriklausomybės atkūrimo, 1996 m. S.Vasiljevo iniciatyva buvo
              sukurta mėgėjų futbolo komanda. Komandą rėmė Vilniaus troleibusų
              parko vadovas, ir ji buvo pavadinta Troleibusas ERA, arba
              sutrumpintai – TERA. Po kelių metų rėmėjas pasitraukė, tačiau
              pavadinimas liko nepakitęs. 2000-2003 m. ir 2012-2014 m. žaidė
              Sekmadienio futbolo lygoje, IV pagal pajėgumą divizione Lietuvoje.
              2004 m. bei 2015-2020 m. buvo pakilusi į II lygą. Nuo 2021m.
              komanda žaidžia VRFS III lygoje.
            </p>
          </div>
          <div className={styles["image-wrap"]}>
            <div className={styles["image"]}></div>
          </div>
        </div>
      </div>
    </>
  );
}
