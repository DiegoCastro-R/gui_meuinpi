import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ffff;
  margin-right: 20px;
  margin-left: 20px;
  flex: 1;

  margin-bottom: 0;
`;

export const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    marginTop: '40px',
    marginRight: '20px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  infoText: {
    fontSize: 10,
    wordWrap: 'break-word',
  },
  pos: {
    fontSize: 10,
    marginBottom: 12,
  },
});
