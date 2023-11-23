import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import styles from "./Offers.module.css";



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Offers() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
   
      <Container
        className={styles.Offers}
        component="main"
        sx={{ width: "550px" }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginLeft: 28,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#FFC071;",
            padding: "40px 40px",
            width:"32em",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              color: "rgba(0, 0, 0, 0.87)",
              fontFamily: "Roboto Condensed",
              fontWeight: "700",
              fontSize:"2.625rem",
              marginRight:"145px"
              
            }}
          >
            RECEIVE OFFERS
          </Typography>

          <Typography
            component="p"
            variant="p"
            sx={{
              color: "rgba(0, 0, 0, 0.87)",
              fontWeight: "400",
              fontSize:"1.25em",
              
              // textDecoration: "underline",
            }}
          >
              Not a member yet? 
              Taste the holidays of the everyday close to home.
          </Typography>
          
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container sx={{background:"#fff", borderRadius:"0px", }}>
          
           
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  label="Your email"
                  sx={{borderRadius:"0px", border:"none"}}
                />
              </Grid>
             
            </Grid>
            <Button
              variant="contained"
              disableElevation
              size="large"
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
                background: "#28282A",
                "&:hover": { background: "#000" },
                fontFamily: "Roboto Condensed",
                height:"50px",
                borderRadius:"0px"
              
              }}
            >
              KEEP ME UPDATED
            </Button>
            <Link className={styles.pass} sx={{ textDecoration: "underline", color: "inherit" }}>
            </Link>
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}
