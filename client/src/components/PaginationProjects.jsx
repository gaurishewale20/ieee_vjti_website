import React,{ useEffect} from "react";

import  Pagination from "@material-ui/lab/Pagination";
import  PaginationItem from "@material-ui/lab/PaginationItem";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {getProjects} from "../actions/projects";

import useStyles from "./styles";

const Paginate = ({page}) => {
  const { numberOfPages } = useSelector((state) => state.events);
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  

  useEffect(()=>{
    if(page) dispatch(getProjects(page));
    console.log(location);
  },[page]);

  return (<div>
    {
  (location.pathname == '/rd') ? ( <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/rd?page=${item.page}`} />
      )}
    />):
    (
      <Pagination
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/dashboard/projects?page=${item.page}`} />
      )}
    />
    )
      }
    </div>
  );
};

export default Paginate;
