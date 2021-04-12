import React from 'react';
import { Typography, Card, CardContent, CardActions, Button, Grid } from '@material-ui/core';
import { useStyles, Container } from './style';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const MeusRegistrosCards: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Card className={classes.root}>
          <CardContent style={{ background: '#1351B4' }}>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              MagAnalayzer
            </Typography>

            <Typography variant="body2" className={classes.infoText}>
              Data de Depósito: 19/08/2020
            </Typography>
          </CardContent>
          <CardActions style={{ background: '#1351B4' }}>
            <FiberManualRecordIcon style={{ color: '#BFA940' }}></FiberManualRecordIcon>
            <h6 className={classes.statusText}>Aguardando Exame de mérito</h6>

            <Button className={classes.button} variant="contained" size="small">
              Marca
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent style={{ background: '#1351B4' }}>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              E-CONOMIZA
            </Typography>

            <Typography variant="body2" className={classes.infoText}>
              Data de Depósito: 17/02/2021
            </Typography>
          </CardContent>
          <CardActions style={{ background: '#1351B4' }}>
            <FiberManualRecordIcon style={{ color: '#268744' }}></FiberManualRecordIcon>
            <h6 className={classes.statusText} style={{ marginRight: 100 }}>
              Registro de Marca em Vigor
            </h6>

            <Button className={classes.button} variant="contained" size="small">
              Marca
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent style={{ background: '#1351B4' }}>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              TRACTABEL ENERGIA PARA VIDA
            </Typography>

            <Typography variant="body2" className={classes.infoText}>
              Data de Depósito: 24/04/2015
            </Typography>
          </CardContent>
          <CardActions style={{ background: '#1351B4' }}>
            <FiberManualRecordIcon style={{ color: 'red' }}></FiberManualRecordIcon>
            <h6 className={classes.statusText} style={{ marginRight: 140 }}>
              Registro Indeferido
            </h6>

            <Button className={classes.button} variant="contained" size="small">
              Marca
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default MeusRegistrosCards;
