import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
export const Container = styled.div`
  max-width: '90vw';
  height: 100%;
  background: #ffff;
  flex: 1;
  margin-bottom: 0;
`;

export const useStyles = makeStyles({
  root: {
    width: 340,
    maxWidth: 340,
    marginTop: '40px',
    marginRight: '50px',
  },
  button: {
    background: '#1351B4',
    color: '#fff',
    marginLeft: '70%',
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
