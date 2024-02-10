import styles from "./Logo.module.css";
// import image from "../assets/triologo.jpg"
import image from "../../assets/triologo.jpg";

export default function Logo() {
  return (
    <div className={styles.Logo}>
      <div>TRIO</div>
      <div>EVENT CENTER</div>
      <img src={image} className={styles.logo} alt="Logo" />
    </div>
  );
}
