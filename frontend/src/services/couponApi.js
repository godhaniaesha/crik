import api from './api';

// Coupon API endpoints
export const couponApi = {
  // Get All Coupons (Public)
  getAllCoupon: async (planName) => {
    const params = planName ? { planName } : {};
    const response = await api.get('/coupon/getAllCoupon', { params });
    return response.data;
  },

  // Get Coupon By ID
  getCouponById: async (id) => {
    const response = await api.get(`/coupon/getCouponById/${id}`);
    return response.data;
  },

  // Apply Coupon For Plan (User Auth required)
  applyCouponForPlan: async (data) => {
    const response = await api.post('/coupon/apply-plan', data);
    return response.data;
  },
};
