import { Link } from "react-router-dom";
import styles from "./Hero.module.css";
import AuthStatus from "./AuthStatus";

const Hero = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.titel}>
          <h1>Kaasbaas</h1>
        </Link>

        <AuthStatus />
      </div>
    </div>
  );
};

export default Hero;
