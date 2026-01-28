import api from './api';

// FAQ Category API endpoints
export const faqCategoryApi = {
  // Create FAQ Category (Admin only)
  createFaqCategory: async (formData) => {
    const response = await api.post('/auth/createFaqCategory', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Get All FAQ Categories
  getAllFaqCategory: async () => {
    const response = await api.get('/auth/getAllFaqCategory');
    return response.data;
  },

  // Get FAQ Category By ID
  getFaqCategoryById: async (id) => {
    const response = await api.get(`/auth/getFaqCategoryById/${id}`);
    return response.data;
  },

  // Update FAQ Category (Admin only)
  updateFaqCategoryById: async (id, formData) => {
    const response = await api.patch(`/auth/updateFaqCategoryById/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Delete FAQ Category (Admin only)
  deleteFaqCategoryById: async (id) => {
    const response = await api.delete(`/auth/deleteFaqCategoryById/${id}`);
    return response.data;
  },
};

// FAQ Question API endpoints
export const faqQuestionApi = {
  // Create FAQ Question (Admin only)
  createFaqQuestion: async (data) => {
    const response = await api.post('/auth/createFaqQuestion', data);
    return response.data;
  },

  // Get All FAQ Questions
  getAllFaqQuestions: async () => {
    const response = await api.get('/auth/getAllFaqQuestions');
    return response.data;
  },

  // Get FAQ Question By ID
  getFaqQuestionById: async (id) => {
    const response = await api.get(`/auth/getFaqQuestionById/${id}`);
    return response.data;
  },

  // Update FAQ Question (Admin only)
  updateFaqQuestion: async (id, data) => {
    const response = await api.patch(`/auth/updateFaqQuestion/${id}`, data);
    return response.data;
  },

  // Delete FAQ Question (Admin only)
  deleteFaqQuestion: async (id) => {
    const response = await api.delete(`/auth/deleteFaqQuestion/${id}`);
    return response.data;
  },

  // Get FAQ Questions By Category
  getFaqQuestionsByCategory: async (categoryId) => {
    const response = await api.get(`/auth/getFaqQuestionsByCategory/${categoryId}`);
    return response.data;
  },
};
