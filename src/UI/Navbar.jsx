import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import  './nav.css'
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" sx={{justifyContent:'center'}}  >
      <Toolbar component="nav">
        <Typography variant="h5" color='primary.main' sx={{ fontStyle: "italic", flexGrow: 1, fontWeight:700 }}>
          Alex Daniel
        </Typography>

        <IconButton color="primary"sx={{
          display:{
            sm:'none'
          },
        }} >
          <MenuIcon/>
        </IconButton>

        <Box sx={{display:{
          xs:'none',
          sm:'block'
        }}} >
          <NavLink to='/' >Inicio</NavLink>
          <NavLink to='/about' >Sobre mí</NavLink>
          <NavLink to='/skills' >Habilidades</NavLink>
          <NavLink to='/linux' >Linux</NavLink>
          <NavLink to='/contact' >Contacto</NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
