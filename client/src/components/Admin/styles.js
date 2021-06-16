
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: '#fefefe'
 
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor:'#386cb5',
    '&:hover': {
      backgroundColor: '#152238',
      color: '#fff'}
  },

  buttonClear: {
    marginBottom: 10,
    backgroundColor:'#e3927a',
    '&:hover': {
      backgroundColor: '#e74c3c',
      color: '#fff'
  }
    
  },
  
  }));
