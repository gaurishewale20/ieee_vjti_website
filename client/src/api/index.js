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

export const fetchEvents = () => API.get(`/events/all`);
export const createEvent = (newEvent) => API.post("/events", newEvent);

export const signIn = (adminData) => API.post("/admin/signin", adminData);
