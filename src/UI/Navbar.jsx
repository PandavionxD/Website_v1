import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar component='nav'  >
      <Typography variant="h5" sx={{fontStyle:'italic'}}>
        Alex Daniel
      </Typography>
      <Box>

      </Box>
      </Toolbar>
    </AppBar>
  );
};
