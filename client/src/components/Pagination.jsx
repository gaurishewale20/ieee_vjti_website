import React,{ useEffect} from "react";
import  Pagination from "@material-ui/lab/Pagination";
import  PaginationItem from "@material-ui/lab/PaginationItem";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {getEvents} from "../actions/events";

import useStyles from "./styles";

const Paginate = ({page}) => {
  const { numberOfPages } = useSelector((state) => state.events);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(page) dispatch(getEvents(page));
  },[page]);

  return (<>
    
    <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/events?page=${item.page}`} />
      )}
    />
    </>
  );
};

export default Paginate;
