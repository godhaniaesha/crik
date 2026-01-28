import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import faqReducer from './slices/faqSlice';
import aboutUsReducer from './slices/aboutUsSlice';
import premiumReducer from './slices/premiumSlice';
import couponReducer from './slices/couponSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    faq: faqReducer,
    aboutUs: aboutUsReducer,
    premium: premiumReducer,
    coupon: couponReducer,
  },
});
