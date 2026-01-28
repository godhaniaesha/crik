import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { couponApi } from '../../services/couponApi';

// Initial state
const initialState = {
  coupons: [],
  selectedCoupon: null,
  loading: false,
  error: null,
};

// Coupon async thunks
export const getAllCoupon = createAsyncThunk(
  'coupon/getAll',
  async (planName, { rejectWithValue }) => {
    try {
      const response = await couponApi.getAllCoupon(planName);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getCouponById = createAsyncThunk(
  'coupon/getById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await couponApi.getCouponById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const applyCouponForPlan = createAsyncThunk(
  'coupon/apply',
  async (data, { rejectWithValue }) => {
    try {
      const response = await couponApi.applyCouponForPlan(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Coupon slice
const couponSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setSelectedCoupon: (state, action) => {
      state.selectedCoupon = action.payload;
    },
    clearSelectedCoupon: (state) => {
      state.selectedCoupon = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCoupon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCoupon.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success && action.payload.result) {
          state.coupons = action.payload.result;
        }
      })
      .addCase(getAllCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCouponById.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          state.selectedCoupon = action.payload.result;
        }
      })
      .addCase(applyCouponForPlan.fulfilled, (state, action) => {
        // Handle coupon application result
        if (action.payload.success && action.payload.result) {
          state.selectedCoupon = action.payload.result;
        }
      })
      .addCase(applyCouponForPlan.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearError, setSelectedCoupon, clearSelectedCoupon } = couponSlice.actions;
export default couponSlice.reducer;
