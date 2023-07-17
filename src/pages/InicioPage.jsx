import {
  Button,
  CardActionArea,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { useContext } from "react";
import { ModoTHeme } from "../context/ModoTheme";

export const InicioPage = () => {
  const navigate = useNavigate();
  const { modoApp } = useContext(ModoTHeme);

  const Image = styled("img")({
    width: "90%",
    objectFit: "contain",
    objectPosition: "center",
  });

  const NavNext = () => {
    navigate("/about", {
      replace: false,
    });
  };

  let color = "primary";

  if (modoApp === "dark") {
    color = "white";
  }

  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
      alignItems="center"
      maxHeight="100%"
      overflow="hidden"
      minHeight="89vh"
    >
      <Grid
        className="animate__animated animate__fadeInLeft"
        item
        xs={12}
        sm={7}
      >
        <Image src="/assets/Desarrollo.svg" alt="Desarrollo-web" />
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        className="animate__animated animate__fadeInRight"
      >
        <CardActionArea>
          <Typography
            variant="h3"
            component="h1"
            mb={2}
            color={color}
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.4rem",
                md: "3rem",
              },
              textAlign: {
                xs: "center",
                sm: "left",
              },
            }}
          >
            Bienvenido a mi Pagina Web!
          </Typography>
          <Divider />
          <Typography
            variant="body2"
            mb={2}
            mt={1}
            sx={{
              textAlign: "justify",
              fontSize: {
                sx: 12,
                sm: 14,
              },
            }}
          >
            Aquí dare un breve descripción acerca de mí, sobre mis hobbies y
            sobre cosas que me gustan y me apasionan, Me considero una persona
            autodidacta, me encanta aprender por mí mismo y claro esta me
            encanta la informática.
          </Typography>
        </CardActionArea>

        <Grid item xs={12} md={4}>
          <Button
            sx={{
              width: "100%",
            }}
            size="large"
            type="button"
            variant="contained"
            onClick={NavNext}
          >
            Ver más
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
