import express from 'express';
import mongoose from 'mongoose';
import ProjectsModel from '../models/Projects.js';

const router = express.Router();


export const getProjects = async(req,res)=>{

  // destructure the page that is passed from the query
//   const { page } = req.query;

  // Number is used to convert the page number (that's in string format in the query) into an integer

    try{
    //   const LIMIT = 6;
      // to get the starting index of every page
    //   const startIndex = ( Number(page) - 1 ) * LIMIT ;
    //   console.log(req.query);
    //   const total = await EventsModel.countDocuments({});
      // sorting cuz we want the posts from newest to oldest. -1 means sort in descending order
    //   const events = await EventsModel.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);
    //   res.status(200).json({data : events, currentPage: Number(page) , numberOfPages: Math.ceil(total/LIMIT)} );
      const projects = await ProjectsModel.find();
      res.status(200).json(projects);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
}

export const getProject = async (req,res) => {
  const {id} = req.params;

  try{
    const project = await ProjectsModel.findById(id);
    res.status(200).json(project);
  } catch(error){
    res.status(404).json({message : error.message});
  }
}

export const createProject = async (req, res) => {
    const project = req.body;
  
    const newProjectMessage = new ProjectsModel({
      ...project
    });
  
    try {
      await newProjectMessage.save();
  
      res.status(201).json(newProjectMessage);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  export const updateProject = async (req, res) => {
    const { id } = req.params;
 
    const { title, project_desc, github_link, year} = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
  
    let updatedProject = { title, project_desc, github_link, year, _id: id };
  
    updatedProject = await ProjectsModel.findByIdAndUpdate(id, updatedProject, {
      new: true,
    });
  
    res.json(updatedProject);
  };
  
  export const deleteProject = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);
  
    await ProjectsModel.findByIdAndRemove(id);
  
    res.json({ message: "Event deleted successfully." });
  };

export default router;