import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";

// ICONS
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import LanguageIcon from "@mui/icons-material/Language";
import TerminalIcon from "@mui/icons-material/Terminal";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ModoTHeme } from "../context/ModoTheme";

export const Navbar = () => {
  const [openNav, setopenNav] = useState(false);

  const { modoApp } = useContext(ModoTHeme);


  const OpenNav = () => {
    setopenNav(true);
  };

let color ="#3f50b5"

if(modoApp==='dark'){
  color = 'white'
}

let color2 = 'primary'
if(modoApp==='dark'){
  color2 = 'white'
}

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{ justifyContent: "center" }}
      >
        <Toolbar component="nav">
          <Typography
            variant="h5"
            color={color}
            sx={{ fontStyle: "italic", flexGrow: 1, fontWeight: 700 }}
          >
            Alex Daniel
          </Typography>

          <IconButton
            color={color2}
            sx={{
              display: {
                sm: "none",
              },
            }}
            onClick={OpenNav}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <NavLink style={{color:`${color}`}} className="nav__navbar" to="/">
              Inicio
            </NavLink>
            <NavLink style={{color:`${color}`}} className="nav__navbar" to="/about">
              Sobre mí
            </NavLink>
            <NavLink style={{color:`${color}`}} className="nav__navbar" to="/skills">
              Habilidades
            </NavLink>
            <NavLink style={{color:`${color}`}} className="nav__navbar" to="/linux">
              Linux
            </NavLink>
            <NavLink style={{color:`${color}`}} className="nav__navbar" to="/contact">
              Contacto
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={openNav} anchor="right" onClose={() => setopenNav(false)}>
        <List
          disablePadding
          sx={{
            display: {
              xs: "flex",
              sm: "none",
            },
            width: "100%",
            minWidth: 300,
            height: "60vh",
            flexDirection: "column",
            justifyContent: "center",
            fontSize: 20,
            fontWeight: 700,
            color: {color},
          }}
        >
          <ListItemButton
            component={Link}
            to="/"
            onClick={() => setopenNav(false)}
          >
            <ListItemIcon>
              <HomeIcon color={color2} />
            </ListItemIcon>
            <ListItemText   primary="Inicio" />
          </ListItemButton>
          <Divider />
          <ListItemButton
            component={Link}
            to="/about"
            onClick={() => setopenNav(false)}
          >
            <ListItemIcon>
              <AccountCircleIcon color={color2}  />
            </ListItemIcon>
            <ListItemText primary="Sobre mí" />
          </ListItemButton>
          <Divider />
          <ListItemButton
            component={Link}
            to="/skills"
            onClick={() => setopenNav(false)}
          >
            <ListItemIcon>
              <LanguageIcon color={color2} />
            </ListItemIcon>
            <ListItemText primary="Habilidades" />
          </ListItemButton>
          <Divider />
          <ListItemButton
            component={Link}
            to="/linux"
            onClick={() => setopenNav(false)}
          >
            <ListItemIcon>
              <TerminalIcon color={color2} />
            </ListItemIcon>
            <ListItemText primary="Linux" />
          </ListItemButton>
          <Divider />
          <ListItemButton
            component={Link}
            to="/contact"
            onClick={() => setopenNav(false)}
          >
            <ListItemIcon>
              <CallIcon color={color2} />
            </ListItemIcon>
            <ListItemText primary="Contacto" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};
