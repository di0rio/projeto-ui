import style from "./Works.module.css";

import { Button, Typography } from "@mui/material";

import martelo from "../../assets/martelo.png";
import fixa from "../../assets/fixa.png";
import mic from "../../assets/mic.svg";

const Works = () => {
  return (
    <div className={style.main}>
      <div className={style.submain}>
        <div className={style.title}>
          <Typography
            sx={{
              fontFamily: "Roboto Condensed",
              fontSize: "2.25em",
              fontWeight: "700",
              marginRight: "4em",
            }}
          >
            How it works
          </Typography>
        </div>
        <div className={style.works}>
          <div>
            <Typography
              sx={{
                marginLeft: "2em",
                color: "#F36",
                fontFamily: "Work Sans",
                fontSize: "1.5em",
                fontWeight: "700",
              }}
            >
              1.
            </Typography>
            <img src={martelo} alt="" />
            <Typography
              sx={{
                display: "flex",
                fontFamily: "Work Sans",
                fontWeight: "300",
                maxWidth: "12em",
              }}
            >
              Appointment every Wednesday 9am.
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                marginLeft: "2em",
                color: "#F36",
                fontFamily: "Work Sans",
                fontSize: "1.5em",
                fontWeight: "700",
              }}
            >
              2.
            </Typography>
            <img src={fixa} alt="" />
            <Typography
              sx={{
                display: "flex",
                fontFamily: "Work Sans",
                fontWeight: "300",
                maxWidth: "12em",
              }}
            >
              First come, first served. Our offers are in limited quantities, so
              be quick.
            </Typography>
          </div>
          <div>
            <Typography
              sx={{
                marginLeft: "2em",
                color: "#F36",
                fontFamily: "Work Sans",
                fontSize: "1.5em",
                fontWeight: "700",
              }}
            >
              3.
            </Typography>
            <img src={mic} alt="" />
            <Typography
              sx={{
                display: "flex",
                fontFamily: "Work Sans",
                fontWeight: "300",
                maxWidth: "12em",
              }}
            >
              New offers every week. New experiences, new surprises. Your
              Sundays will no longer be alike.
            </Typography>
          </div>
        </div>
        <div>
          <Button
            sx={{
              backgroundColor: "#FF3366",
              "&:hover": { background: "#FF3350" },
              left: "28em",
              marginTop:"4em",
              width: "200px",
              padding: "0.96875rem 2.45313rem 1.03125rem 2.5rem",
              fontFamily: "Roboto Condensed",
              fontWeight: "700",
            }}
            variant="contained"
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Works;
