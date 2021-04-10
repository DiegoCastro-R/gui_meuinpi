import React from 'react';
import { Grid, Typography, Button, Card, TextField } from '@material-ui/core';
import logo from '../../logo.png';
import { Container } from './styles';
const login: React.FC = () => {
  return (
    <Container>
      <Grid
        style={{ marginTop: '30vh' }}
        container
        direction="row"
        justify="center"
        alignItems="center">
        <Grid item>
          <img src={logo} className="App-logo" alt="logo" />
          <Typography align="justify">
            <h1 style={{ fontSize: 40, marginBottom: '-25px' }}>Olá,</h1>
            <h2 style={{ fontSize: 30, marginBottom: '-25px' }}>seja bem vindo!</h2>
            <h3>
              Este é o meu INPI, sua solução
              <br /> web para consultar detalhes <br />
              completos de suas patentes!
            </h3>
          </Typography>
        </Grid>
        <Grid item>
          <img src="https://image.freepik.com/free-vector/tired-overworked-secretary-accountant-working-laptop-near-pile-folders-throwing-papers-vector-illustration-stress-work-workaholic-busy-office-employee-concept_74855-13264.jpg"></img>
        </Grid>
        <Grid item>
          <form>
            <Card style={{ marginTop: '50px', width: '15vw', height: '28vh' }}>
              <Grid style={{ width: '100%', marginBottom: '20px' }}>
                <TextField variant="outlined" placeholder="Email"></TextField>
              </Grid>
              <Grid style={{ width: '100%', marginBottom: '20px' }}>
                <TextField variant="outlined" placeholder="Password"></TextField>
              </Grid>
              <Grid>
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </Grid>
            </Card>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default login;
