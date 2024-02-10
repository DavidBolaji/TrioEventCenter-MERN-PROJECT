// import logo from "../assets/triologo.jpg";
import logo from "../../assets/triologo.jpg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.text}>
        <h4>You can add footer text here</h4>
      </div>
    </div>
  );
};

export default Footer;
