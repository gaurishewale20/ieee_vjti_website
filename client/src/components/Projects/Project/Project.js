import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  Divider
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {deleteProject,getProjects} from '../../../actions/projects';
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const Project = ({ project, setCurrentId }) => {
  const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const location = useLocation();
  
  const delete_an_project=()=>{
      if(window.confirm("Are you sure you want to delete this post? "))
       {
         dispatch(deleteProject(project._id));
         dispatch(getProjects());
         window.alert("Project deleted successfully!");
       }
    }


  return (

      <Card className={classes.card} raised elevation={6} >     
            <div className={classes.details}>
              <CardContent>
                <Typography
                  variant="h4"
                  color="textSecondary"
                  component="h2"
                >
                    {project.title}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {project.year}
                </Typography>
              </CardContent>
            </div>
            <Divider style={{ margin: "20px 0" }} />
            <Typography
              className={classes.project_desc}
              gutterBottom
              variant="body1"
              component="h2"
            >
              {project.project_desc}
            </Typography>

            <Typography
              className={classes.github_link}
              gutterBottom
              variant="body1"
              component="h2"
            >
              <a href={project.github_link} target="_blank"><i class="fab fa-github-square"></i>  Link to Project Code!</a>
           
            </Typography>
            
         
          { admin?.result && (location.pathname ==='/dashboard/projects')?(
        <div>
          <Button onClick={() => {setCurrentId(project._id); window.scrollTo(0,0);}} style={{ color: 'black' }} size="small">
            EDIT
          </Button>
            &nbsp; &nbsp;
            <Button size="small" color="secondary" onClick={delete_an_project}>
            DELETE
          </Button>
        </div>):null}
           
      </Card>
  );
};

export default Project;
