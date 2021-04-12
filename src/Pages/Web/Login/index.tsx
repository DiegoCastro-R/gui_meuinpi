import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, Button, Card, TextField } from '@material-ui/core';
import BaseConhecimento from '../../../Components/BaseConhecimento';
import logo from '../../../logo.png';
import { Container } from './styles';

const login: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  const history = useHistory();
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
              completos dos serviços do INPI!
            </h3>
          </Typography>
        </Grid>
        <Grid item>
          <img src="https://image.freepik.com/free-vector/tired-overworked-secretary-accountant-working-laptop-near-pile-folders-throwing-papers-vector-illustration-stress-work-workaholic-busy-office-employee-concept_74855-13264.jpg"></img>
        </Grid>
        <Grid item>
          <form>
            {!isLogin && (
              <Grid>
                <Card
                  style={{
                    marginTop: '50px',
                    width: '20vw',
                    height: '28vh',
                  }}>
                  <BaseConhecimento />
                  <Typography style={{ marginTop: '10px', fontSize: '10px' }}>Ou</Typography>
                  <Grid>
                    <Button
                      onClick={() => setIsLogin(true)}
                      style={{ marginTop: '20px', backgroundColor: '#001740', color: '#ffff' }}
                      variant="contained">
                      Entrar
                    </Button>
                  </Grid>
                </Card>
              </Grid>
            )}
            {isLogin && (
              <Grid item xs={12} md={6}>
                <Card style={{ marginTop: '50px', width: '15vw', height: '28vh' }}>
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
