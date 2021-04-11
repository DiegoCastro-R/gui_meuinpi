import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
export const Container = styled.div`
  width: 100%;
  height: 100%;
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
    Background: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    spacing: {
      marginRight: '-50px',
    },
  }),
);
