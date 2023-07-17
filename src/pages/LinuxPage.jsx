import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const LinuxPage = () => {
  const Image = styled("img")({
    width: "80%",
    objectFit: "contain",
    objectPosition: "center",
  });

  return (
    <Grid
      container
      spacing={3}
      justifyContent="center"
      alignItems="center"
      minHeight="90vh"
      pb={2}
      overflow='hidden'
    >
      <Grid className="animate__animated animate__fadeInLeft"  item xs={12} sm={12} md={6} sx={{
        display:'flex',
        justifyContent:'center'
      }} >
        <Image src="/assets/open_source.svg" alt="open_source" />
      </Grid>
      <Grid  className="animate__animated animate__fadeInRight" item xs={12} sm={12} md={6} >
        <Box>
          <Typography color="primary" variant="h4" component="h2" mb={1} sx={{
            textAlign:{
              xs:'center',
              sx:'left'
            }
          }}>
            ¿Que es el Open Source?
          </Typography>
          <Divider/>
          <Typography variant="body2" textAlign={"justify"} mt={1}>
            El software open source es un código diseñado de manera que sea
            accesible al público: donde todos pueden ver, modificar y distribuir
            el código de la forma que consideren conveniente.
          </Typography>
          <Typography variant="body2" textAlign={"justify"}>
            Es más, actualmente yo también utilizo Fedora Linux - KDE en su
            versión 38 y es genial.
          </Typography>
          <Typography variant="body2" mt={1}></Typography>
          <Grid container mt={2}>
            <Grid item xs={12} sm={4} justifyContent="center" alignItems='center'  >
              <Box component='picture' className="picture" >
              <Image src="/assets/fedora.svg" alt="fedora" className="img1" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} mt={1} sx={{
              display:'flex',
              alignItems:'center'
            }} >
              <Typography variant="body2"  >
              Fedora es una distribución GNU/Linux para propósitos generales. Es
              mantenida por una comunidad internacional de ingenieros,
              diseñadores gráficos y usuarios.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={1} >
            <Grid item xs={12} sm={6} >
              <Button component={Link} to='/contact' fullWidth variant="contained" > siguiente </Button>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Button component={Link} to='/skills' fullWidth color="error" variant="contained" > atrás </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
