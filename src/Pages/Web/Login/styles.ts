import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ffff;
  flex: 1;
  margin-bottom: 0;
`;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }),
);
