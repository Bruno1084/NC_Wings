import React from "react";
import { CustomCanvas } from '../../CustomCanvas';
import { Box, Grid, Typography } from "@mui/material";

const About =()=>{

  return(
    <section id="section-container">
        <Grid container minHeight={'400px'}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='grid-col'>
            <CustomCanvas />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} xl={6} paddingY={'1.2rem'} className='grid-col'>
            <div className='col-2-tittle-container'>
              <Typography variant='h3' component='h3' align='center'>A donde quieras ir <br /> nosotros te llevamos</Typography>
            </div>

            <Box component='div' display="flex" justifyContent="center" padding={'1rem'} className='col-2-description-container'>
            <Box component='div' borderRadius={'12px'} maxWidth={'400px'} padding={'12px'} sx={{backgroundColor: 'white'}}>
              <Typography variant='h5' component='p' align='center' color={'black'}>
                Somos los que no dejan que las distancias nos separen de los que más queremos. Somos los que hoy estamos acá y mañana podemos estar allá. Somos un equipo trabajando para que todos podamos volar.
              </Typography>
            </Box>
            </Box>
          </Grid>
        </Grid>
    </section>
  );
}

export default About