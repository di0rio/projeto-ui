import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import style from "./Nav.module.css";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className={style.main}>
        <AppBar
          sx={{
            background: "#28282A",
            height: "4.375rem",
          }}
          position="fixed"
        >
          <Toolbar>
            <Typography
              align="center"
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: "700",
                fontFamily: "Roboto Condensed",
                fontSize: "1.5em",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Link className={style.link} to="/">ONEPIRATE</Link>{" "}
            </Typography>
            <Button>
              <Link className={style.link}
                to="signin"
                sx={{
                  fontWeight: 700,
                  color: "inherit",
                }}
              >
                sign in
              </Link>
            </Button>

            <Button>
              <Link className={style.link2}
                to="/signup"
                sx={{
                  fontWeight: 700,
                  color: "#FF3366",
                }}
              >
                sign up
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
         
    </Box>
  );
}

// import style from "./Nav.module.css";

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Link } from "react-router-dom";

// const Nav = () => {

//   return (
//     <div className={style.nav}>
//     <Box>
//       <AppBar sx={{background: "#28282A"}} position="static">
//         <Toolbar>
//           <Typography> <Link className={style.title} sx={{ flexGrow: 1, fontWeight: 700, fontFamily:"Roboto Condensed", marginLeft:"7.8em" }}>
//             ONEPIRATE
//           </Link> </Typography>
//           <div className={style.buttons}>
//           <Button><Link className={style.in} to="/signin" sx={{fontSize:1,fontWeight: 600, fontFamily:"Roboto Condensed", color:"inherit"}} >Sign In</Link></Button>
//          <Button> <Link className={style.up} to="/signup" sx={{fontSize: 16,color: "#FF3366", fontWeight: 700, fontFamily:"Roboto Condensed"}}>Sign Up</Link></Button>
//          </div>
//         </Toolbar>
//       </AppBar>
//     </Box>
//     </div>
//   );
// };

// export default Nav;
