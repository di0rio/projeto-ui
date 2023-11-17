import styles from "./Home.module.css";

import mar from "../../assets/mar.png";

const Home = () => {
  return (
    <div>
      <div className={styles.cor}>
        <img className={styles.img} src={mar} alt="" />
      </div>
    </div>
  );
};

export default Home;
