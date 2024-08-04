import { ContactInfoCard } from "src/components/ContactInfoCard";
import { CONTACTS } from "src/assets/data";
import styles from "src/styles/kontaktaiPage.module.css";
import additionalStyles from "src/styles/ContactCard.module.css";

import contactImg from "src/assets/sergej.vasiljev.png";
import phoneIcon from "src/assets/phone.svg";
import emailIcon from "src/assets/email.svg";
import pinIcon from "src/assets/location.svg";
import tipIcon from "src/assets/tipIcon.svg";

const iconStyles = {
  width: "20px",
  marginRight: "10px",
};
const ContactCardFields = [
  <>
    <h2>
      <b>{CONTACTS.name}</b>
    </h2>
  </>,
  <>
    <img
      className={additionalStyles["icon"]}
      style={iconStyles}
      src={phoneIcon}
      alt="Phone icon"
    />
    <h3>
      <b>{CONTACTS.phoneNumber}</b>
    </h3>
  </>,
  <>
    <img
      className={additionalStyles["icon"]}
      style={iconStyles}
      src={emailIcon}
      alt="Email icon"
    />
    <h3>
      <b>{CONTACTS.email} </b>
    </h3>
  </>,
];

export function KontaktaiPage() {
  const defaultProps = {
    center: {
      lat: 54.709186,
      lng: 25.325053,
    },
    zoom: 14,
  };
  const AnyReactComponent = () => (
    <img src={pinIcon} style={{ filter: "invert(100%)", height: "40px" }} />
  );
  return (
    <>
      <div className={styles["page-wrap"]}>
        <div className={styles["content-wrap"]}>
          <div className={styles["contact-cards-wrap"]}>
            <div className={styles["tip-wrap"]}>
              <img
                className={styles["tip-icon"]}
                src={tipIcon}
                alt="tip icon"
              />
              <span className={styles["tip-text"]}>
                Jei turite klausimų ar problemų - skambinkite, mes mielai juos
                išspręsime.
              </span>
            </div>
            <ContactInfoCard
              personImage={contactImg}
              headerValue={"Direktorius"}
              propertiesFields={ContactCardFields}
            />
          </div>
          <div className={styles["map-wrap"]}>
            <a
              className={styles["map"]}
              href="https://www.google.com/maps/place/P.+Vilei%C5%A1io+g.+18,+Vilnius,+10306+Vilniaus+m.+sav./@54.7028826,25.3062126,17z/data=!4m6!3m5!1s0x46dd96a308671455:0xb176ef63eb0ec2bf!8m2!3d54.7027834!4d25.3077468!16s%2Fg%2F11c5jky_t9?hl=en&entry=ttu"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
    </>
  );
}
