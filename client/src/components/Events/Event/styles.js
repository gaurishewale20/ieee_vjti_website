import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // backgroundBlendMode: 'darken',
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
    height: "100%",
    width: "300px",
    transition: "transform 0.2s ease-in",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },

  notwhite: {
    position: "relative",
    // border: 'solid black 8px',
    overflow: "hidden",
    maxHeight: "100%",

    maxWidth: "100%",
  },
  heading: {
    //fontSize: theme.typography.pxToRem(15),
    flexBasis: "85%",
    flexShrink: 0,
  },
  secondaryHeading: {
    //fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginTop: "5px",
  },
  overlay: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    // color: 'white',
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    // color: 'white',
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
    margin: "20px",
    marginTop: "0",
    overflowWrap: "break-word",
  },
  cardAction: {
    // padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
    // marginTop: "10px",
  },
  postmsg: {
    whiteSpace: "pre",
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
}));

export default useStyles;
