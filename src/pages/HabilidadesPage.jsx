import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Cards } from "../helpers/helpers";

export const HabilidadesPage = () => {
  return (
    <Grid
      container
      spacing={2}
      mt={2}
      alignItems="center"
      justifyContent="center"
    >
      {Cards.map(({ img, description, link, title }, id) => (
        <Grid item xs={12} sm={6} md={4} lg={3} maxWidth={320} key={id}>
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
  );
};
