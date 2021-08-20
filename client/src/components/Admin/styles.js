import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    pagination: {
        borderRadius: 17,
        marginTop: "1rem",
        padding: "16px",
        backgroundColor: "#f2fefe",
    },
    [theme.breakpoints.down("xs")]: {
        pagination: {
            marginTop: "1rem",
            // padding: '16px',
            marginRight: "1.7em",
        },
    },
    paper: {
        padding: theme.spacing(3),
        backgroundColor: '#fefefe',
        justifyContent: 'center'


    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',


    },
    fileInput: {
        width: '100%',
        margin: theme.spacing(1),
        display: 'flex',
        flexWrap: 'wrap',
        // marginBottom:5,
    },

    buttonSubmit: {
        marginBottom: 5,
        backgroundColor: '#386cb5',

        '&:hover': {
            backgroundColor: '#152238',
            color: '#fff'
        }
    },


    [theme.breakpoints.down("xs")]: {
        projContainer: {
            display: 'flex',
            flexDirection: 'column-reverse'
        },
        fileInput:{
            justifyContent: 'center'

        }

    },

}));