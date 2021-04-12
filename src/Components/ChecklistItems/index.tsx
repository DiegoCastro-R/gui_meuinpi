import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Container } from './styles';

const ChecklistItems: React.FC = () => {
  return (
    <Container>
      <Grid container direction="row" justify="center" alignItems="center">
        <Button
          variant="outlined"
          style={{
            marginTop: '10px',
            width: '80vw',
            color: '#1351B4',
            marginRight: '10px',
            background: '#DDDDDD',
          }}>
          Checklist de Marca
        </Button>
        <Button
          variant="outlined"
          style={{
            marginTop: '10px',
            width: '80vw',
            color: '#1351B4',
            marginRight: '10px',
            background: '#DDDDDD',
          }}>
          Checklist de Patente
        </Button>
        <Button
          variant="outlined"
          style={{
            marginTop: '10px',
            width: '80vw',
            color: '#1351B4',
            marginRight: '10px',
            background: '#DDDDDD',
          }}>
          Checklist de Topografia de Circuitos
        </Button>
        <Button
          variant="outlined"
          style={{
            marginTop: '10px',
            width: '80vw',
            color: '#1351B4',
            marginRight: '10px',
            background: '#DDDDDD',
          }}>
          Checklist de Programa de Computador
        </Button>
        <Button
          variant="outlined"
          style={{
            marginTop: '10px',
            width: '80vw',
            color: '#1351B4',
            marginRight: '10px',
            background: '#DDDDDD',
          }}>
          Checklist de Indicações Geográficas
        </Button>
        <Button
          variant="outlined"
          style={{
            marginTop: '10px',
            width: '80vw',
            color: '#1351B4',
            marginRight: '10px',
            background: '#DDDDDD',
          }}>
          Checklist de Desenhos Industriais
        </Button>
      </Grid>
    </Container>
  );
};

export default ChecklistItems;
