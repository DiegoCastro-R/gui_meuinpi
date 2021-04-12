import React from 'react';
import { Container, Header } from './styles';
import { Typography, Grid, TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ChecklistItems from '../../../Components/ChecklistItems';

const Checklist: React.FC = () => {
  return (
    <Container>
      <Grid container direction="column" justify="flex-start" alignItems="baseline">
        <Header>
          <Grid item>
            <Typography align="justify">
              <h1 style={{ color: '#1351B4', fontSize: 38, marginBottom: '-40px' }}>Conheça o</h1>
              <h1 style={{ color: '#1351B4', fontSize: 38, marginBottom: '-20px' }}>Checklist</h1>
              <h2 style={{ color: '#1351B4', fontSize: 12, marginBottom: '-25px' }}>
                Submeter pode parecer complicado <br /> mas queremos te ajudar! <br />
                Selecione qual o tipo de patente você quer,
                <br /> e iremos te auxiliar nos dados necessários
                <br />
                para submeter corretamente!
                <br />
                Vamos lá?
              </h2>
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
        <ChecklistItems />
      </Grid>
    </Container>
  );
};

export default Checklist;
