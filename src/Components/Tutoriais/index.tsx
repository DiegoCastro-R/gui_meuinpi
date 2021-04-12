import React from 'react';
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Grid,
} from '@material-ui/core';
import { useStyles, Container } from './styles';
import Card1 from '../../assets/ContratosDeTecnologiaEFranquia.jpg';
import Card2 from '../../assets/DesenhoIndustrial.jpg';
import Card3 from '../../assets/IndicaçõesGeograficas.jpg';
import Card4 from '../../assets/Marcas.jpg';
import Card5 from '../../assets/ModeloDeUtilidade.jpg';
import Card6 from '../../assets/Patentes.jpg';
import Card7 from '../../assets/ProgramasDeComputador.jpg';
import Card8 from '../../assets/TopografiasDeCircuitoIntegrados.jpg';

const TutoriasCards: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container direction="row" justify="space-between" alignItems="center">
        <Card className={classes.root}>
          <CardContent>
            <CardMedia className={classes.media} image={Card1}></CardMedia>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              Contratos de Tecnologia e Franquia
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Video Tutorial
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Duração 3 minutos
            </Typography>
            <Typography variant="body2" className={classes.infoText} component="p">
              Aprenda passo a passo de como registrar seus contratos de tecnlogia e franquia aqui!
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" size="small">
              Assistir
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <CardMedia className={classes.media} image={Card2}></CardMedia>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              Desenho Industrial
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Video Tutorial
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Duração 3 minutos
            </Typography>
            <Typography variant="body2" className={classes.infoText} component="p">
              Descubra detalhadamente o processo de depósito de Desenho Industrial
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" size="small">
              Assistir
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <CardMedia className={classes.media} image={Card3}></CardMedia>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              Indicações geográficas
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Video Tutorial
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Duração 3 minutos
            </Typography>
            <Typography variant="body2" className={classes.infoText} component="p">
              Aprenda passo a passo de como registrar indicações Geográficas
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" size="small">
              Assistir
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <CardMedia className={classes.media} image={Card4}></CardMedia>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              Marcas
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Video Tutorial
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Duração 3 minutos
            </Typography>
            <Typography variant="body2" className={classes.infoText} component="p">
              Aprenda passo a passo de como registrar sua
              <br /> marca
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" size="small">
              Assistir
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <CardMedia className={classes.media} image={Card5}></CardMedia>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              Modelo de Utilidade
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Video Tutorial
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Duração 3 minutos
            </Typography>
            <Typography variant="body2" className={classes.infoText} component="p">
              Veja detalhadamente o processo de depósito de Desenho Industrial
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" size="small">
              Assistir
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <CardMedia className={classes.media} image={Card6}></CardMedia>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              Patentes
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Video Tutorial
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Duração 3 minutos
            </Typography>
            <Typography variant="body2" className={classes.infoText} component="p">
              Aprenda como registrar suas Patentes
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" size="small">
              Assistir
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <CardMedia className={classes.media} image={Card7}></CardMedia>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              Programas de computador
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Video Tutorial
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Duração 3 minutos
            </Typography>
            <Typography variant="body2" className={classes.infoText} component="p">
              Aprenda passo a passo como registrar Programas de Computador
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" size="small">
              Assistir
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <CardMedia className={classes.media} image={Card8}></CardMedia>
            <Typography className={classes.title} align="left" variant="h6" component="h4">
              Topografia de Circuitos Integrados
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Video Tutorial
            </Typography>
            <Typography className={classes.pos} align="left" color="textSecondary">
              Duração 3 minutos
            </Typography>
            <Typography variant="body2" className={classes.infoText} component="p">
              Aprenda passo a passo como registrar Topografias de circuitos integrados
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={classes.button} variant="contained" size="small">
              Assistir
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default TutoriasCards;
