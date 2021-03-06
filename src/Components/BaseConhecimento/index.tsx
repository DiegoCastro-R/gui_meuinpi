import React from 'react';
import { List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from './styles';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
const BaseConhecimento: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.Background}>
      <List dense>
        <ListItem>
          <ListItemText
            style={{ color: '#001740' }}
            primary="Quer submeter? Entenda a legislação"
          />
          <ListItemSecondaryAction>
            <IconButton onClick={() => history.push('legislacao')} edge="end" aria-label="delete">
              <ArrowRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText
            style={{ color: '#001740' }}
            primary="Cases podem te ajudar! Dê uma olhada"
          />
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => history.push('cases')}
              edge="end"
              aria-label="Navegar para cases">
              <ArrowRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText
            style={{ color: '#001740' }}
            primary="Ainda precisa de ajuda? Consulte nosso Tutorial"
          />
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => history.push('tutoriais')}
              edge="end"
              aria-label="Navegar para tutoriais">
              <ArrowRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText
            style={{ color: '#001740' }}
            primary="Nada te ajudou? Visite as Dúvidas Frequentes"
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <ArrowRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
};

export default BaseConhecimento;
