import { Button, Typography, styled } from "@mui/material";

import style from "./Help.module.css";

function Help() {
  const BtnStyled = styled(Button)({
    fontSize: "25px",
    background: "linear-gradient(45deg, #000)",
  });

  return (
    <>
      <div className={style.main}>
        <BtnStyled
          style={{
            textDecoration: "#000",
            backgroundColor: "transparent",
            border: "none",
            color: "#fff",
            color: "#000",
            boxShadow: "none",
            fontfamily: "Roboto Condensed",
            fontWeight: "700",
            border: "4px solid black",
            "&:hover": {
              background: "#b1b1b1",
            },
          }}
        >
          Got any questions? Need help?
        </BtnStyled>
      </div>
      <Typography
        sx={{
          fontFamily: "Work Sans",
          fontSize: "1.125em",
          fontWeight: "400",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginTop:"2.22em"
        }}
      >
        We are here to help. Get in touch!
      </Typography>
    </>
  );
}

export default Help;
