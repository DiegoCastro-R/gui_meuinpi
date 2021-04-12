import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: '#1351B4',
    },
    title: {
      flexGrow: 1,
      marginLeft: '-160px',
      color: '#1351B4',
    },

    toolbar: {
      background: '#fff',
    },
  }),
);
