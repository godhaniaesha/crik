import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { premiumApi } from '../../services/premiumApi';

// Initial state
const initialState = {
  premiumPlans: [],
  selectedPremium: null,
  loading: false,
  error: null,
};

// Premium async thunks
export const createPremium = createAsyncThunk(
  'premium/create',
  async (data, { rejectWithValue }) => {
    try {
      const response = await premiumApi.createPremium(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getAllPremium = createAsyncThunk(
  'premium/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await premiumApi.getAllPremium();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getPremiumById = createAsyncThunk(
  'premium/getById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await premiumApi.getPremiumById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updatePremiumById = createAsyncThunk(
  'premium/update',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await premiumApi.updatePremiumById(id, data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deletePremiumById = createAsyncThunk(
  'premium/delete',
  async (id, { rejectWithValue }) => {
    try {
      const response = await premiumApi.deletePremiumById(id);
      return { id, response };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const togglePremiumStatus = createAsyncThunk(
  'premium/toggleStatus',
  async (id, { rejectWithValue }) => {
    try {
      const response = await premiumApi.togglePremiumStatus(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Premium slice
const premiumSlice = createSlice({
  name: 'premium',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setSelectedPremium: (state, action) => {
      state.selectedPremium = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPremium.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPremium.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success && action.payload.result) {
          state.premiumPlans = action.payload.result;
        }
      })
      .addCase(getAllPremium.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getPremiumById.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          state.selectedPremium = action.payload.result;
        }
      })
      .addCase(createPremium.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          state.premiumPlans.push(action.payload.result);
        }
      })
      .addCase(updatePremiumById.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          const index = state.premiumPlans.findIndex(
            (plan) => plan._id === action.payload.result._id
          );
          if (index !== -1) {
            state.premiumPlans[index] = action.payload.result;
          }
        }
      })
      .addCase(deletePremiumById.fulfilled, (state, action) => {
        state.premiumPlans = state.premiumPlans.filter(
          (plan) => plan._id !== action.payload.id
        );
      })
      .addCase(togglePremiumStatus.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          const index = state.premiumPlans.findIndex(
            (plan) => plan._id === action.payload.result._id
          );
          if (index !== -1) {
            state.premiumPlans[index] = action.payload.result;
          }
          if (state.selectedPremium?._id === action.payload.result._id) {
            state.selectedPremium = action.payload.result;
          }
        }
      });
  },
});

export const { clearError: clearPremiumError, setSelectedPremium } = premiumSlice.actions;
export default premiumSlice.reducer;
