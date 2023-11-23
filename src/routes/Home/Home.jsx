import styles from "./Home.module.css";

import { Button, Typography, styled } from "@mui/material";
import Link from "@mui/material/Link";
import Tasters from "../../components/Tasters/Tasters";
import Works from "../../components/Works/Works";
import Help from "../../components/Helpbtn/Help";
import Offers from "../../components/Offers/Offers";

import mar from "../../assets/mar.png";
import leme from "../../assets/leme.svg";
import casao from "../../assets/casao.svg"
import carteira from "../../assets/carteira.svg";
import sol from "../../assets/sol.svg";

const Home = () => {
  const BtnStyled = styled(Button)({
    color: "#fff",
    fontSize: "25px",
    background: "linear-gradient(45deg, #000)",
  });
  return (
    <div>
      <div className={styles.cor}>
        <img className={styles.img} src={mar} alt="" />
        <div className={styles.text}>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed",
              fontSize: "3rem",
              fontWeight: "700",
            }}
          >
            UPGRADE YOUR SUNDAYS
          </Typography>
        </div>
        <Typography
          sx={{
            position: "absolute",
            top: "340px",
            left: "620px",
            padding: "15.5px 67.203px 16.5px 67.797px",
            fontFamily: "Work Sans",
            fontWeight: "300",
            color: "white",
          }}
        >
          Enjoy secret offers up to -70% off the best luxury hotels every
          Sunday.
        </Typography>

        <div className={styled.botton}>
          <Link href="/signin">
            <Button
              sx={{
                backgroundColor: "#FF3366",
                "&:hover": { background: "#FF3350" },
                position: "absolute",
                top: "400px",
                left: "840px",
                width: "200px",
                padding: "15.5px 67.203px 16.5px 67.797px",
                fontFamily: "Roboto Condensed",
                fontWeight: "700",
              }}
              variant="contained"
              color="error"
            >
              Register
            </Button>
          </Link>
        </div>

        <div>
          <Typography
            sx={{
              position: "absolute",
              top: "460px",
              left: "775px",
              padding: "15.5px 67.203px 16.5px 67.797px",
              fontFamily: "Work Sans",
              fontWeight: "400",
              color: "white",
            }}
          >
            Discover the experience
          </Typography>
        </div>
      </div>
      <div className={styles.ofertas}>
        <div>
          <img className={styles.sol} src={sol} alt="" />
          <Typography
            sx={{
              fontFamily: "Roboto Condensed",
              fontSize: "16px",
              fontWeight: "700",
              padding: "32px",
              maxWidth: "20em",
              position: "absolute",
              right: "75.5em",
              marginTop:"1em"
            }}
            >
            THE BEST LUXURY HOTELS
          </Typography>
            <div>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              padding: "40px",
              maxWidth: "25em",
              fontWeight: "300",
              marginTop: "54px",
            }}
          >
            From the latest trendy boutique hotel to the iconic palace with XXL
            pool, go for a mini-vacation just a few subway stops away from your
            home.
          </Typography>
          </div>
        </div>
        <div>
          <img src={leme} alt="" />
          <Typography
            sx={{
              fontFamily: "Roboto Condensed",
              fontSize: "16px",
              fontWeight: "700",
              padding: "32px",
              maxWidth: "20em",
              position: "absolute",
              right: "52em",
            }}
          >
            NEW EXPERIENCIES
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              padding: "40px",
              maxWidth: "25em",
              fontWeight: "300",
              marginTop: "55px",
            }}
          >
            Privatize a pool, take a Japanese bath or wake up in 900m2 of
            garden… your Sundays will not be alike.
          </Typography>
        </div>
        <div>
          <img src={carteira} alt="" />
          <Typography
            sx={{
              fontFamily: "Roboto Condensed",
              fontSize: "16px",
              fontWeight: "700",
              padding: "32px",
              maxWidth: "20em",
              position: "absolute",
              right: "28em",
            }}
          >
            EXCLUSIVE RATES
          </Typography>
          <Typography
            sx={{
              fontFamily: "Work Sans",
              padding: "40px",
              maxWidth: "25em",
              fontWeight: "300",
              marginTop: "55px",
            }}
          >
            By registering, you will access specially negotiated rates that you
            will not find anywhere else.
          </Typography>
        </div>
      </div>
      <div className={styles.taters}>
        <Tasters></Tasters>
      </div>
      <div>
        <Works></Works>
      </div>
      <div className={styles.casa}>
        <div>
        <Offers></Offers>
        </div>
        <img src={casao} alt="" />
      </div>
      <div>
        <Help></Help>
      </div>
    </div>
  );
};

export default Home;
