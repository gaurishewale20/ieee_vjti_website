import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    media: {
        height: 0,
        paddingTop: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",

    },
    [theme.breakpoints.down("sm")]: {
        card: {
            marginRight: "3em",

        },
        project_desc: {
            whiteSpace: "pre-wrap",
            padding: "0 6px",
            maxWidth: "100%",
            margin: "0",


        },
    },

    border: {
        border: "solid",
    },
    fullHeightCard: {
        height: "100%",
    },
    card: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "5px",

        position: "relative",
        maxHeight: "100%",
        transition: "transform 0.2s ease-in",
        "&:hover": {
            transform: "translateY(-5px)",
        },
    },
    card_img: {
        maxWidth: "100%",
    },
    notwhite: {
        position: "relative",
        maxHeight: "100%",

        maxWidth: "100%",
    },
    heading: {
        flexBasis: "85%",
        flexShrink: 0,
    },
    secondaryHeading: {
        color: theme.palette.text.secondary,
        marginTop: "5px",
    },
    overlay: {
        position: "absolute",
        bottom: "20px",
        left: "20px",
    },
    overlay2: {
        position: "absolute",
        top: "20px",
        right: "20px",
    },
    grid: {
        display: "flex",
    },
    details: {
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
        marginBottom: '0',
        paddingBottom: '0'
    },
    title: {
        padding: "0 16px",
        margin: " 0 20px",
        marginTop: "0",
        overflowWrap: "break-word",
    },

    github_link: {
        padding: "0 16px",
        margin: "20px",
        marginTop: "0",
        overflowWrap: "break-word",
    },
    cardAction: {
        display: "flex",
        justifyContent: "space-between",
    },
    postmsg: {
        whiteSpace: "pre",
    },
    project_desc: {
        whiteSpace: "pre-wrap",
        padding: "0 16px",
        maxWidth: "100%",
        margin: "20px",
        marginTop: "0",
    },
    cardImage: {
        width: "100%",
        height: "100%",
    },
}));

export default useStyles;