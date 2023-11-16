import style from "./Nav.module.css";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Nav = () => {

  return (
    <div className={style.nav}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{background: "#28282A"}} position="static">
        <Toolbar>
          <Typography align="center" variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 700, fontFamily:"Roboto Condensed" }}>
            ONEPIRATE
          </Typography>
          <Button sx={{fontSize:16,fontWeight: 700, fontFamily:"Roboto Condensed"}} color="inherit">Sign In</Button>
          <Button color="error" sx={{fontSize: 16,color: "#FF3366", fontWeight: 700, fontFamily:"Roboto Condensed"}}>Sign Up</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
};

export default Nav;
