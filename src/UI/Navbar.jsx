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
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";

// ICONS
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import LanguageIcon from "@mui/icons-material/Language";
import TerminalIcon from "@mui/icons-material/Terminal";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Navbar = () => {
  const [openNav, setopenNav] = useState(false);

  const OpenNav = () => {
    setopenNav(true);
  };

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
            color="primary.main"
            sx={{ fontStyle: "italic", flexGrow: 1, fontWeight: 700 }}
          >
            Alex Daniel
          </Typography>

          <IconButton
            color="primary"
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
            <NavLink className='nav__navbar' to="/">Inicio</NavLink>
            <NavLink className='nav__navbar' to="/about">Sobre mí</NavLink>
            <NavLink className='nav__navbar' to="/skills">Habilidades</NavLink>
            <NavLink className='nav__navbar' to="/linux">Linux</NavLink>
            <NavLink className='nav__navbar' to="/contact">Contacto</NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={openNav} anchor="right" onClose={() => setopenNav(false)}>
        <List
          disablePadding
          sx={{
            display:{
              xs:'flex',
              sm:'none'
            },
            width: "100%",
            minWidth: 300,
            height: '60vh',
            flexDirection: "column",
            justifyContent: "center",
            fontSize: 20,
            fontWeight:700,
            color:'primary.main'
          }}
        >
          <ListItemButton  component ={Link} to='/' onClick={()=>setopenNav(false)} >
            <ListItemIcon>
              <HomeIcon  color="primary"  />
            </ListItemIcon>
            <ListItemText primary="Inicio" />
          </ListItemButton>
          <Divider />
          <ListItemButton component ={Link} to='/about' onClick={()=>setopenNav(false)} >
            <ListItemIcon>
              <AccountCircleIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Sobre mí" />
          </ListItemButton>
          <Divider />
          <ListItemButton component ={Link} to='/skills' onClick={()=>setopenNav(false)} >
            <ListItemIcon>
              <LanguageIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Habilidades" />
          </ListItemButton>
          <Divider />
          <ListItemButton component ={Link} to='/linux' onClick={()=>setopenNav(false)}>
            <ListItemIcon>
              <TerminalIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Linux" />
          </ListItemButton>
          <Divider />
          <ListItemButton component ={Link} to='/contact'  onClick={()=>setopenNav(false)} >
            <ListItemIcon>
              <CallIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Contacto" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};
