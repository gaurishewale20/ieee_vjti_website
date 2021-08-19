import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
    }

    return req;
});


export const fetchEvent = (id) => API.get(`/events/${id}`);
export const fetchEvents = (page) => API.get(`/events?page=${page}`);
export const createEvent = (newEvent) => API.post("/events", newEvent);

export const updateEvent = (id, updatedEvent) => API.patch(`/events/${id}`, updatedEvent);
export const deleteEvent = (id) => API.delete(`/events/${id}`);
export const signIn = (adminData) => API.post("/admin/signin", adminData);

export const fetchProjects = (page) => API.get(`/rd?page=${page}`);
export const createProject = (newProject) => API.post("/rd", newProject);
export const updateProject = (id, updatedProject) => API.patch(`/rd/${id}`, updatedProject);
export const deleteProject = (id) => API.delete(`/rd/${id}`);