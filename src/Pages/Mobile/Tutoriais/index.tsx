import { Typography, Grid, TextField, InputAdornment } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Container, Header } from './styles';
import TutoriaisCards from '../../../Components/Tutoriais';
const Tutoriais: React.FC = () => {
  return (
    <Container>
      <Grid container direction="column" justify="flex-start" alignItems="baseline">
        <Header>
          <Grid item>
            <Typography align="justify">
              <h1 style={{ color: '#1351B4', fontSize: 38, marginBottom: '-40px' }}>Nossos</h1>
              <h1 style={{ color: '#1351B4', fontSize: 38, marginBottom: '-20px' }}>Tutoriais</h1>
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

      <Grid container direction="row" justify="flex-start" alignItems="baseline">
        <TutoriaisCards />
      </Grid>
    </Container>
  );
};

export default Tutoriais;
