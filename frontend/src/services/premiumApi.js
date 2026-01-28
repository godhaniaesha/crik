import api from './api';

// Premium API endpoints
export const premiumApi = {
  // Create Premium (Admin only)
  createPremium: async (data) => {
    const response = await api.post('/auth/createPremium', data);
    return response.data;
  },

  // Get All Premium
  getAllPremium: async () => {
    const response = await api.get('/auth/getAllPremium');
    return response.data;
  },

  // Get Premium By ID
  getPremiumById: async (id) => {
    const response = await api.get(`/auth/getPremiumById/${id}`);
    return response.data;
  },

  // Update Premium (Admin only)
  updatePremiumById: async (id, data) => {
    const response = await api.patch(`/auth/updatePremiumById/${id}`, data);
    return response.data;
  },

  // Delete Premium (Admin only)
  deletePremiumById: async (id) => {
    const response = await api.delete(`/auth/deletePremiumById/${id}`);
    return response.data;
  },

  // Toggle Premium Status (Admin only)
  togglePremiumStatus: async (id) => {
    const response = await api.patch(`/auth/togglePremiumStatus/${id}`);
    return response.data;
  },
};

// AWS API endpoints
export const awsApi = {
  // List all images from S3
  listImages: async () => {
    const response = await api.get('/auth/list');
    return response.data;
  },

  // Delete single image from S3
  deleteImage: async (url) => {
    const response = await api.delete('/auth/delete', { data: { url } });
    return response.data;
  },

  // Delete multiple images from S3
  deleteManyImages: async (images) => {
    const response = await api.delete('/auth/deleteMany', { data: { images } });
    return response.data;
  },
};
