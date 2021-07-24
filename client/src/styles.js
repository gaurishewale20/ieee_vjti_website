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
    }},
    mainContainer: {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      // border: '1px red solid',
      
    },

    holderContainer: {
      // gap: theme.spacing(8),
    },
   
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(2),
    },  [theme.breakpoints.down('xs')]: {
      myPostsMainContainer: {
        flexDirection: 'column-reverse',
        paddingBottom: '50px'
      },
    },
  
   
    [theme.breakpoints.down('sm')]: {
      appBar: {
        padding: '10px 20px',
      },
      heading: {
        display: 'none',
      },
      userName: {
        display: 'none',
      },
      image: {
        marginLeft: '5px',
      },
      toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
      },
    }
  
 
  }));


 
