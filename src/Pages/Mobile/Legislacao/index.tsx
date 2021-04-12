import {
  Typography,
  Grid,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Container, useStyles } from './styles';
const Legislacao: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container direction="column" justify="flex-start" alignItems="baseline">
        <Grid item>
          <Typography align="justify">
            <h1 style={{ color: '#1351B4', fontSize: 38, marginBottom: '3px' }}>Legislação</h1>
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: '40px' }}>
          <TextField
            style={{ width: '300px' }}
            label="Experimente buscar por alguma coisa"
            fullWidth
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="flex-start" alignItems="baseline">
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} variant="h6" component="h4">
              RECURSO ESPECIAL No 1.038.032 - RJ
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              STJ
            </Typography>
            <Typography variant="body2" className={classes.infoText} component="p">
              A marca de alto renome (art. 125 daLei de Propriedade Industrial LPI) é exceção ao
              principio da especifidade e tem proteção especial em todos os ramos de atividade,
              desde que previamente registrada no Brasil e assim declarada pelo INPI - Instituto
              Nacional de Propriedade Insdustrial
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              style={{ background: '#1351B4', color: '#fff' }}
              variant="contained"
              size="small">
              Ver Mais
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} variant="h6" component="h4">
              RECURSO ESPECIAL No 1.038.032 - RJ
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              STJ
            </Typography>
            <Typography variant="body2" className={classes.infoText} component="p">
              A marca de alto renome (art. 125 daLei de Propriedade Industrial LPI) é exceção ao
              principio da especifidade e tem proteção especial em todos os ramos de atividade,
              desde que previamente registrada no Brasil e assim declarada pelo INPI - Instituto
              Nacional de Propriedade Insdustrial
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              style={{ background: '#1351B4', color: '#fff' }}
              variant="contained"
              size="small">
              Ver Mais
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default Legislacao;
