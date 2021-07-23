import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  heading:{
display:'flex',
align: 'center',
marginLeft: '100px',
paddingLeft:'100px'
  },
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
