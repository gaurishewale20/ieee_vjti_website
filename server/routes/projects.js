import express from 'express';
import {getProjects,getProject,createProject,updateProject,deleteProject} from '../controllers/projects.js';
import admin from '../middleware/admin.js';

const router = express.Router();

router.get('/:id', getProject);
router.get('/',getProjects);
router.post('/',admin,createProject);
router.patch('/:id', admin, updateProject);
router.delete('/:id', admin, deleteProject);
export default router;
