import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../../services/authApi';

// Initial state
const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
  isAuthenticated: !!localStorage.getItem('token'),
};

// Async thunks
export const sendOTP = createAsyncThunk(
  'auth/sendOTP',
  async (mobileNo, { rejectWithValue }) => {
    try {
      const response = await authApi.sendOTP(mobileNo);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const verifyOTP = createAsyncThunk(
  'auth/verifyOTP',
  async ({ mobileNo, otp }, { rejectWithValue }) => {
    try {
      const response = await authApi.verifyOTP(mobileNo, otp);
      if (response.success && response.result) {
        localStorage.setItem('token', response.result.token);
        localStorage.setItem('user', JSON.stringify(response.result.user));
      }
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const registerAdmin = createAsyncThunk(
  'auth/registerAdmin',
  async (mobileNo, { rejectWithValue }) => {
    try {
      const response = await authApi.registerAdmin(mobileNo);
      if (response.success && response.result) {
        localStorage.setItem('token', response.result.token);
        localStorage.setItem('user', JSON.stringify(response.result.user));
      }
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await authApi.updateProfile(formData);
      if (response.success && response.result) {
        localStorage.setItem('user', JSON.stringify(response.result.user));
      }
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const assignAdminRole = createAsyncThunk(
  'auth/assignAdminRole',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await authApi.assignAdminRole(userId);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const removeAdminRole = createAsyncThunk(
  'auth/removeAdminRole',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await authApi.removeAdminRole(userId);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteAccount = createAsyncThunk(
  'auth/deleteAccount',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authApi.deleteAccount();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    clearError: (state) => {
      state.error = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
  },
  extraReducers: (builder) => {
    // Send OTP
    builder
      .addCase(sendOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOTP.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(sendOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Verify OTP
    builder
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success && action.payload.result) {
          state.user = action.payload.result.user;
          state.token = action.payload.result.token;
          state.isAuthenticated = true;
        }
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Register Admin
    builder
      .addCase(registerAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAdmin.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success && action.payload.result) {
          state.user = action.payload.result.user;
          state.token = action.payload.result.token;
          state.isAuthenticated = true;
        }
      })
      .addCase(registerAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Update Profile
    builder
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success && action.payload.result) {
          state.user = action.payload.result.user;
        }
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Assign Admin Role
    builder
      .addCase(assignAdminRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(assignAdminRole.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(assignAdminRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Remove Admin Role
    builder
      .addCase(removeAdminRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeAdminRole.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(removeAdminRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Delete Account
    builder
      .addCase(deleteAccount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAccount.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(deleteAccount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError, setUser } = authSlice.actions;
export default authSlice.reducer;
