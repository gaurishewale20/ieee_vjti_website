import mongoose from 'mongoose';

const projectsSchema = mongoose.Schema({
    title: String,
    project_desc: String,
    github_link: String,
    year:String,
    id:String
})

var ProjectsModel = mongoose.model("ProjectsModel", projectsSchema,'projectsmodel');

export default ProjectsModel;