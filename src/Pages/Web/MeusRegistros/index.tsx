import React from 'react';
import { Container, Header } from './styles';
import { Typography, Grid, TextField, InputAdornment } from '@material-ui/core';
import MeusRegistrosCards from '../../../Components/MeusRegistrosWeb';
import SearchIcon from '@material-ui/icons/Search';

const MeusRegistros: React.FC = () => {
  return (
    <Container>
      <Grid container direction="column" justify="flex-start" alignItems="baseline">
        <Header>
          <Grid item>
            <Typography align="justify">
              <h1 style={{ color: '#1351B4', fontSize: 38, marginBottom: '3px' }}>
                Meus Registros
              </h1>
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
        </Header>
      </Grid>
      <Grid
        container
        direction="row"
        style={{ marginRight: 20, marginLeft: 20, width: '60vw' }}
        justify="space-evenly"
        alignItems="center">
        <MeusRegistrosCards />
      </Grid>
    </Container>
  );
};

export default MeusRegistros;
