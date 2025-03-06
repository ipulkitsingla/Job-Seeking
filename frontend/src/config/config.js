export const API_BASE_URL = "https://job-seeking-backend-peel.onrender.com";

// API endpoints
export const ENDPOINTS = {
  // Auth
  LOGIN: "/api/v1/user/login",
  REGISTER: "/api/v1/user/register",
  LOGOUT: "/api/v1/user/logout",
  GET_USER: "/api/v1/user/getuser",
  
  // Jobs
  GET_ALL_JOBS: "/api/v1/job/getall",
  GET_JOB: "/api/v1/job",  // Append /:id
  POST_JOB: "/api/v1/job/post",
  UPDATE_JOB: "/api/v1/job/update", // Append /:id
  DELETE_JOB: "/api/v1/job/delete", // Append /:id
  GET_MY_JOBS: "/api/v1/job/getmyjobs",
  
  // Applications
  POST_APPLICATION: "/api/v1/application/post",
  GET_EMPLOYER_APPLICATIONS: "/api/v1/application/employer/getall",
  GET_JOBSEEKER_APPLICATIONS: "/api/v1/application/jobseeker/getall",
  DELETE_APPLICATION: "/api/v1/application/delete", // Append /:id
}; 