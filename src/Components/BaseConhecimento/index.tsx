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
          <ListItemText primary="Quer submeter? Entenda a legislação" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <ArrowRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary="Cases podem te ajudar! Dê uma olhada" />
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
          <ListItemText primary="Ainda precisa de ajuda? Consulte nosso Tutorial" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <ArrowRightIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary="Nada te ajudou? Visite as Dúvidas Frequentes" />
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
