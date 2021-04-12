import { Avatar, Typography, Card, CardContent, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import BaseConhecimento from '../../../Components/BaseConhecimento';
import { Grid } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React from 'react';
import { Container } from './styles';
const Dashboard: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <Card style={{ width: '95vw' }} elevation={3}>
        <CardContent>
          <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
            <Grid item>
              <Avatar
                alt="Usuario"
                src="https://www.pngfind.com/pngs/m/649-6494435_gender-neutral-user-guest-png-transparent-png.png"
              />
            </Grid>
            <Grid item>
              <Typography align="justify">
                <h1
                  style={{
                    fontSize: 26,
                    marginBottom: '-25px',
                    color: '#1351B4',
                  }}>
                  Olá, Usuário
                </h1>
                <h2 style={{ fontSize: 20, marginBottom: '-10px', color: '#1351B4' }}>
                  seja bem vindo!
                </h2>
                <h2 style={{ fontSize: 8, color: '#1351B4' }}>
                  Você tem 3 notificações de patentes em seu cadastro
                </h2>
              </Typography>
            </Grid>
            <Grid item>
              <NotificationsIcon
                style={{ color: '#1351B4', marginLeft: 20, marginTop: -40, fontSize: 40 }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ marginTop: '30px' }}>
        <Grid item>
          <BaseConhecimento />
        </Grid>
        <Grid item>
          <Button
            onClick={() => history.push('registros')}
            variant="contained"
            style={{
              width: '80vw',
              height: '10vh',
              background: '#1351B4',
              color: '#fff',
              marginBottom: '10px',
            }}>
            Meus Registros
          </Button>
          <Button
            variant="contained"
            style={{
              width: '80vw',
              height: '10vh',
              background: '#1351B4',
              color: '#fff',
              marginBottom: '10px',
            }}>
            Quiz
          </Button>
          <Button
            variant="contained"
            style={{
              width: '80vw',
              height: '10vh',
              background: '#1351B4',
              color: '#fff',
              marginBottom: '10px',
            }}>
            Checklist
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
30;
