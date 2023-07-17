import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Cards } from "../helpers/helpers";
import { Link } from "react-router-dom";

export const HabilidadesPage = () => {
  return (
    <>
      <Grid  sm={12} md={12} container direction="column" 
      className="animate__animated animate__fadeInLeft"
      >
        <Paper sx={{ padding: 2 }} elevation={12} >
          <Grid item sm={12}>
            <CardActionArea>
              <Typography variant="h4" color="primary" sx={{
                textAlign:{
                  xs:'center',
                  sm:'left'
                }
              }}  >
                Habilidades:
              </Typography>
              <Divider/>
              <Typography variant="body2" mt={1}>
                En lo que respecta estoy muy agradecido en las empresas que
                estuve trabajando y donde pude aprender muchas cosas, EPS Sedam
                Huancayo, Grupo Romero Caja, etc. Actualmente, tengo experiencia en
                Soporte Técnico de equipos informáticos y también en desarrollo
                web. Así mismo quiero seguir profundizando en React y también en
                procesos de automatización con Python.
              </Typography>
            </CardActionArea>
          </Grid>
          <Grid container spacing={1} mt={1}>
            <Grid sm={4} xs={12} md={2} item mt={1}>
              <Button component={Link} to='/linux' fullWidth variant="contained" color="primary" >siguiente</Button>
            </Grid>
            <Grid sm={4} xs={12} md={2} item mt={1}>
              <Button component={Link} to='/about' fullWidth variant="contained" color="error" >atrás</Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid
        container
        paddingBottom={2}
        spacing={2}
        mt={2}
        alignItems="center"
        justifyContent="center"
        className="animate__animated animate__fadeInUpBig"
      >
        {Cards.map(({ img, description, link, title }, id) => (
          <Grid item xs={12} sm={6} md={4} lg={3} maxWidth={350} key={id}>
            <Card
              elevation={12}
              sx={{
                padding: 1,
                height: 460,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{
                    objectFit: "contain",
                    objectPosition: "center",
                    height: 180,
                    width: "100%",
                  }}
                  image={img}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h1"
                    mb={1}
                    color="primary"
                    textAlign="center"
                  >
                    {title}
                  </Typography>
                  <Divider />
                  <Typography variant="body2" my={1}>
                    {description}
                  </Typography>
                  <Divider />
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Grid container mt={1}>
                  <Grid item xs={12}>
                    <Button
                      sx={{ width: "100%" }}
                      variant="contained"
                      component="a"
                      href={link}
                      target="_blank"
                    >
                      Ver más
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
