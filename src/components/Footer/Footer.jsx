import style from "./Footer.module.css"

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <div className={style.footer}>
    <Box
      component="footer"
      sx={{
        // height: "",
        background: "#fff5f8",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={4.99}></Grid>
          <Grid item xs={20} sm={5.80}>
            <Link href="https://www.facebook.com/" color="inherit" width="100px">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 4.9, pr: 5 }}
              
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography
            variant="h6"
            color="text.primary"
            align="center"
            height="50px"
            gutterBottom
          >
            Feito com ❤️ por{" "}
            <Link
              href="https://github.com/"
              sx={{ textDecoration: "none" }}
              color="inherit"
              
            >
              di0rio
            </Link>
            ,
            <Link
              href="https://github.com/"
              sx={{ textDecoration: "none" }}
              color="inherit"
            >
              {" "}
              B4g4rini
            </Link>
            ,
            <Link
              href="https://github.com/"
              sx={{ textDecoration: "none" }}
              color="inherit"
            >
              {" "}
              Victor-Matoso{" "}
            </Link>
          </Typography>
        </Grid>
        <Box mt={6}>
          <Typography variant="body2" color="text.secondary" align="center" height="50px">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
    </div>
  );
}
