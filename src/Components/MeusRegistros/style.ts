import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ffff;
  flex: 1;
  margin-bottom: 0;
`;

export const useStyles = makeStyles({
  root: {
    width: '95vw',
    marginTop: '40px',
  },
  button: {
    background: '#FF8C00',
    color: '#fff',
    marginLeft: '40px',
  },
  media: {
    height: 140,
  },

  title: {
    fontSize: 14,
    color: '#fff',
  },
  infoText: {
    fontSize: 10,
    marginTop: 10,
    wordWrap: 'break-word',
    color: '#fff',
    textAlign: 'initial',
  },
  statusText: {
    fontSize: 10,
    marginRight: 70,
    color: '#fff',
    textAlign: 'initial',
  },
  pos: {
    fontSize: 10,
  },
});
