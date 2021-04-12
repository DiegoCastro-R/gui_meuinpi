import React from 'react';
import { Grid, Typography, Button, Card, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import BaseConhecimento from '../../../Components/BaseConhecimento';
import logo from '../../../logo.png';
import { Container } from './styles';

const login: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  const history = useHistory();
  return (
    <Container>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <img src={logo} className="App-logo" alt="logo" />
          <Typography align="justify">
            <h1 style={{ fontSize: 40, marginBottom: '-25px', color: '#1351B4' }}>Olá,</h1>
            <h2 style={{ fontSize: 30, marginBottom: '-25px', color: '#1351B4' }}>
              seja bem vindo!
            </h2>
            <h3 style={{ color: '#1351B4' }}>
              Este é o meu INPI, sua solução
              <br /> web para consultar detalhes <br />
              completos dos serviços do INPI!
            </h3>
          </Typography>
        </Grid>
        <Grid item>
          <img src="https://image.freepik.com/free-vector/tired-overworked-secretary-accountant-working-laptop-near-pile-folders-throwing-papers-vector-illustration-stress-work-workaholic-busy-office-employee-concept_74855-13264.jpg"></img>
        </Grid>
        <Grid item style={{ width: '100%' }}>
          <form style={{ width: '100%' }}>
            {!isLogin && (
              <Grid style={{ width: '100%' }}>
                <Card
                  style={{
                    width: '100%',
                    height: '50vh',
                  }}>
                  <BaseConhecimento />
                  <Typography style={{ marginTop: '10px', fontSize: '10px' }}>Ou</Typography>
                  <Grid>
                    <Button
                      onClick={() => setIsLogin(true)}
                      style={{ marginTop: '30px', backgroundColor: '#001740', color: '#ffff' }}
                      variant="contained">
                      Entrar
                    </Button>
                  </Grid>
                </Card>
              </Grid>
            )}
            {isLogin && (
              <Grid item xs={12} md={6}>
                <Card style={{ width: '100%', height: '40vh' }}>
                  <Grid style={{ width: '100%', marginBottom: '20px' }}>
                    <TextField variant="outlined" placeholder="Email"></TextField>
                  </Grid>
                  <Grid style={{ width: '100%', marginBottom: '20px' }}>
                    <TextField variant="outlined" type="password" placeholder="Senha"></TextField>
                  </Grid>

                  <Grid>
                    <Button
                      onClick={() => history.push('dashboard')}
                      variant="contained"
                      style={{ marginTop: '30px', backgroundColor: '#001740', color: '#ffff' }}>
                      Entrar
                    </Button>
                  </Grid>
                </Card>
              </Grid>
            )}
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default login;
