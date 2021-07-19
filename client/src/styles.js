import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  [theme.breakpoints.down('xs')]: {
    mainContainer: {
      flexDirection: 'column',
    },


  }
}));
