import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8081',
  timeout: 10000, // optional
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage (or cookie, etc.)
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        // Handle unauthorized (e.g., logout user)
        console.warn('Unauthorized. Logging out...');
        localStorage.removeItem('authToken');
        window.location.href = '/login'; // redirect to login
      }
      // Handle other errors globally if needed
    }

    return Promise.reject(error); // Always reject to handle in component if needed
  }
);

export default api;
