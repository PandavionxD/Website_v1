import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from '@mui/system';
import { useContext } from "react";
import { ModoTHeme } from "../context/ModoTheme";


export const AboutPage = () => {
  
  const { modoApp } = useContext(ModoTHeme);
  
  let color = "primary";

  if (modoApp === "dark") {
    color = "white";
  }
  
  let color2 = "#3f50b5"
  if (modoApp === "dark") {
    color2 = "white";
  }

  const Span = styled("span")({
    color: {color2},
    fontWeight: 700,
  });

  const Image = styled("img")({
    width: "70%",
    objectFit: "contain",
    objectPosition: "center",
    filter: "drop-shadow(30px 20px 10px rgba(0, 0, 0, .7))",
    borderRadius: 12,
  });

  return (
    <Grid
      container
      spacing={4}
      minHeight="89vh"
      justifyContent="center"
      alignItems="center"
      maxHeight="100%"
      overflow="hidden"
      paddingBottom={1}
    >
      <Grid
        item
        xs={12}
        sm={7}
        className="animate__animated animate__fadeInLeft"
      >
        <Card elevation={12} sx={{ padding: 2 }}>
          <CardActionArea>
            <CardContent>
              <Typography
                mb={2}
                textAlign="center"
                component="h2"
                variant="h4"
                color={color}
                fontWeight="500"
              >
                Acerca de mí
              </Typography>
              <Divider />
              <Typography variant="body1" mt={1}>
                Hola me llamo Alex Daniel Artica Rivera, vivo en Huancayo, Junín
                - Perú; egresado de la escuela de Tecnologías de la información
                en SENATI, me encanta la Tecnología,{" "}
                <Span> Programación Web, Soporte Técnico, </Span> son mis
                pasiones, esta Website esta desarrollada en{" "}
                <Span> React y Material User Interface - MUI .</Span>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Grid container padding={2} spacing={1}>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                component={Link}
                to="/skills"
              >
                Siguiente
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                component={Link}
                to="/"
                fullWidth
                variant="contained"
                color="error"
                xs={12}
                sm={6}
              >
                Atrás
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid
        item
        sx={{
          width: {
            sm: "60%",
            md: "80%",
          },
        }}
        sm={5}
        className="animate__animated animate__fadeInRight"
      >
        <Box
          component="picture"
          sx={{
            borderRadius: 12,
            display: "flex",
            justifyContent: "center",
            paddingBottom: 2,
          }}
        >
          <Image
            src="/assets/315356095_610255430606295_1271877310177832689_n-removebg-preview.webp"
            alt="yo"
          />
        </Box>
      </Grid>
    </Grid>
  );
};
