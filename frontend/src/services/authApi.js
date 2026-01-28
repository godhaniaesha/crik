import api from './api';

// Auth API endpoints
export const authApi = {
  // Send OTP
  sendOTP: async (mobileNo) => {
    const response = await api.post('/auth/sendOtp', { mobileNo });
    return response.data;
  },

  // Verify OTP
  verifyOTP: async (mobileNo, otp) => {
    const response = await api.post('/auth/verifyOtp', { mobileNo, otp });
    return response.data;
  },

  // Register Admin
  registerAdmin: async (mobileNo) => {
    const response = await api.post('/auth/registerAdmin', { mobileNo });
    return response.data;
  },

  // Update Profile
  updateProfile: async (formData) => {
    const response = await api.put('/auth/updateProfile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Assign Admin Role (Admin only)
  assignAdminRole: async (userId) => {
    const response = await api.post('/auth/assignAdminRole', { userId });
    return response.data;
  },

  // Remove Admin Role (Admin only)
  removeAdminRole: async (userId) => {
    const response = await api.post('/auth/removeAdminRole', { userId });
    return response.data;
  },

  // Delete Account
  deleteAccount: async () => {
    const response = await api.delete('/auth/deleteAccount');
    return response.data;
  },
};
