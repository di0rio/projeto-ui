import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./Signup.module.css";



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Signup() {
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
        className={styles.signup}
        component="main"
        sx={{ width: "550px" }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#fff5f8",
            padding: "34px 40px",
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              color: "rgba(0, 0, 0, 0.87)",
              fontFamily: "Roboto Condensed",
              fontWeight: "700",
              fontSize:"2.625rem"
            }}
          >
            SIGN UP
          </Typography>

          <Typography
            component="p"
            variant="p"
            sx={{
              color: "rgba(0, 0, 0, 0.87)",
              fontWeight: "400",
              textDecoration: "underline",
            }}
          >
            <Link href="/signin" sx={{ textDecoration: "none", color: "inherit" }}>
              Already have an account?
            </Link>
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                First Name*
                <TextField 
                
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                Last Name*
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                Email*
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                Password*
                <TextField
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
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
                background: "#FF3366",
                "&:hover": { background: "#FF3350" },
              fontFamily: "Roboto Condensed",
              }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}
