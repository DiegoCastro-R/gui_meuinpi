import { Avatar, Typography, Card, CardContent } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React from 'react';
import { Container } from './styles';
const Dashboard: React.FC = () => {
  return (
    <Container>
      <Card style={{ width: '46vw' }} elevation={3}>
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
                    fontSize: 36,
                    marginBottom: '-25px',
                    color: '#1351B4',
                  }}>
                  Olá, Usuário
                </h1>
                <h2 style={{ fontSize: 30, marginBottom: '-10px', color: '#1351B4' }}>
                  seja bem vindo!
                </h2>
                <h2 style={{ fontSize: 12, color: '#1351B4' }}>
                  Você tem 3 notificações de patentes em seu cadastro
                </h2>
              </Typography>
            </Grid>
            <Grid item>
              <NotificationsIcon
                style={{ color: '#1351B4', marginLeft: -10, marginTop: -40, fontSize: 40 }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Dashboard;
30;
