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
    background: '#1351B4',
    color: '#fff',
    marginLeft: '60%',
  },
  media: {
    height: 140,
  },

  title: {
    fontSize: 14,
  },
  infoText: {
    fontSize: 10,
    marginTop: 10,
    wordWrap: 'break-word',
  },
  pos: {
    fontSize: 10,
  },
});
