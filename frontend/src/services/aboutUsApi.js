import api from './api';

// About Us Category API endpoints
export const aboutUsCategoryApi = {
  // Create About Us Category (Admin only)
  createAboutUsCategory: async (data) => {
    const response = await api.post('/auth/createAboutUsCategory', data);
    return response.data;
  },

  // Get All About Us Categories
  getAllAboutUsCategory: async () => {
    const response = await api.get('/auth/getAllAboutUsCategory');
    return response.data;
  },

  // Get About Us Category By ID
  getAboutUsCategoryById: async (id) => {
    const response = await api.get(`/auth/getAboutUsCategoryById/${id}`);
    return response.data;
  },

  // Update About Us Category (Admin only)
  updateAboutUsCategoryById: async (id, data) => {
    const response = await api.patch(`/auth/updateAboutUsCategoryById/${id}`, data);
    return response.data;
  },

  // Delete About Us Category (Admin only)
  deleteAboutUsCategoryById: async (id) => {
    const response = await api.delete(`/auth/deleteAboutUsCategoryById/${id}`);
    return response.data;
  },
};

// About Us Question API endpoints
export const aboutUsQuestionApi = {
  // Create About Us Question (Admin only)
  createAboutUsQuestion: async (data) => {
    const response = await api.post('/auth/createAboutUsQuestion', data);
    return response.data;
  },

  // Get All About Us Questions
  getAllAboutUsQuestions: async () => {
    const response = await api.get('/auth/getAllAboutUsQuestions');
    return response.data;
  },

  // Get About Us Question By ID
  getAboutUsQuestionById: async (id) => {
    const response = await api.get(`/auth/getAboutUsQuestionById/${id}`);
    return response.data;
  },

  // Update About Us Question (Admin only)
  updateAboutUsQuestion: async (id, data) => {
    const response = await api.patch(`/auth/updateAboutUsQuestion/${id}`, data);
    return response.data;
  },

  // Delete About Us Question (Admin only)
  deleteAboutUsQuestion: async (id) => {
    const response = await api.delete(`/auth/deleteAboutUsQuestion/${id}`);
    return response.data;
  },

  // Get About Us Questions By Category
  getAboutUsQuestionsByCategory: async (categoryId) => {
    const response = await api.get(`/auth/getAboutUsQuestionsByCategory/${categoryId}`);
    return response.data;
  },
};
