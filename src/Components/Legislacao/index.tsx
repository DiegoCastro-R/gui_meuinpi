import React from 'react';
import { Typography, Card, CardContent, CardActions, Button, Grid } from '@material-ui/core';
import { useStyles, Container } from './styles';

const LesgilacaoCards: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              Lei nº 9.279/96
            </Typography>

            <Typography variant="body2" className={classes.infoText} component="p">
              Lei regulatoria de direitos e obrigações relativos a propriedade intelectual
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" size="small">
              Ver na Integra
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              Constituição Federa, sobre Aspectos dos Direitos de propriedade intelectual
              Relacionados ao
            </Typography>

            <Typography variant="body2" className={classes.infoText} component="p">
              Asseguridade dos direitos sociais. individuais, a liberdade, a segurança, o bem estar,
              o desenvolvimento, a igualdade e a justiça como valores para uma sociedade fraterna,
              pluralista e sem preconceitos
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" size="small">
              Ver na Integra
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              Convenção de Paris
            </Typography>

            <Typography variant="body2" className={classes.infoText} component="p">
              Primeiro acorodo internacional relativo à Propriedade Intelectual.
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" size="small">
              Ver na Integra
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              TRIPS
            </Typography>

            <Typography variant="body2" className={classes.infoText} component="p">
              Tratado internacional, integrante do conjuto de acordos assinados em 1994, sobre
              Aspectos dos Direitos de propriedade intelectual Relacionados ao Comercio
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" size="small">
              Ver na Integra
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              Decreto Nº 9.289
            </Typography>

            <Typography variant="body2" className={classes.infoText} component="p">
              Promulga o Protocolo de Emenda ao Acordo sobre Aspectos de Direitos de Propriedade
              Intelectual Relacionados ao Comércio
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" size="small">
              Ver na Integra
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default LesgilacaoCards;
