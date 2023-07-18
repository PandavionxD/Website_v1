import { Button, Divider, Grid, IconButton, Typography } from "@mui/material"
import { styled } from "@mui/system";
import { useContext } from "react";
import { ModoTHeme } from "../context/ModoTheme";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

export const ContactPage = () => {

  const Image = styled("img")({
    width: "90%",
    objectFit: "contain",
    objectPosition: "center",
  });

  const {modoApp}= useContext(ModoTHeme)

  let color = 'primary'

  if(modoApp==='dark'){
    color='white'
  }

  return (
      <Grid container spacing={3} mt={2} minHeight='85vh' justifyContent='center' alignItems='center' maxHeight="100%"
      overflow="hidden" >
        <Grid item xs={12} sm={12} md={6} className="animate__animated animate__fadeInLeft">
          <Image src="/assets/contact.svg" alt="contact" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{
          position:'relative'
        }} className="animate__animated animate__fadeInRight" >
          <Typography variant="h4" component='h2' mb={1} color={color} sx={{
            textAlign:{
              xs:'center',
              sm:'center',
              md:'left'
            }
          }}  >
            Contacto
          </Typography>
          <Divider/>
          <Typography variant="body2" component='p' my={1} >
          Aquí puedes volver al inicio, tambien te dejo mis redes sociales si te quieres poner en contaco conmigo.
          </Typography>
          <Grid  >

          </Grid>
          <Divider/>
          <Grid container>
          <Grid item xs={12} sm={6}  mt={1} >
            <IconButton color={color} sx={{width:'100%'}}  size="small" component={Link} to="https://www.linkedin.com/in/alex-daniel-a-r-9751b915b/" target="_blank"  >
            <LinkedInIcon sx={{fontSize:35}} />
            <Typography variant="body1" ml={1} > LinkedIn  </Typography>
            </IconButton>
          </Grid>

          <Grid item xs={12} sm={6}  mt={1} sx={{width:'100%'}} >
            <IconButton color={color} size="small" sx={{width:'100%'}}component={Link} to="https://api.whatsapp.com/send?phone=051921770857" target="_blank" >
            <WhatsAppIcon sx={{fontSize:35}} />
            <Typography variant="body1" ml={1} > WhatsApp  </Typography>
            </IconButton>
          </Grid>

          <Grid item xs={12} sm={6}  mt={1} sx={{width:'100%'}} >
            <IconButton color={color} size="small" sx={{width:'100%'}} component={Link} to="https://t.me/Pandavion" target="_blank" >
            <TelegramIcon sx={{fontSize:35}} />
            <Typography variant="body1" ml={1} > Telegram  </Typography>
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={6}  mt={1} sx={{width:'100%'}} >
            <IconButton color={color} size="small" sx={{width:'100%'}} component={Link} to="https://github.com/PandavionxD" target="_blank" >
            <GitHubIcon sx={{fontSize:35}} />
            <Typography variant="body1" ml={1} > Github  </Typography>
            </IconButton>
          </Grid>
          <Grid item xs={12}  mt={1} sx={{width:'100%'}} >
            <IconButton color={color} size="small" sx={{width:'100%'}} >
            <EmailIcon sx={{fontSize:35}} />
            <Typography variant="body1" color={color} component={'p'} ml={1}   > 1151372@senati.pe   </Typography>
            </IconButton>
          </Grid>

          </Grid>

        </Grid>
        <IconButton size="large" component={Link} to='/' color={color} sx={{
            position:'fixed',
            bottom:0,
            right:10
          }} >
              <HomeIcon sx={{fontSize:60}} />
            </IconButton>
      </Grid>
    )
}
