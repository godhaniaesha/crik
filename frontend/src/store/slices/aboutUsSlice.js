import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { aboutUsCategoryApi, aboutUsQuestionApi } from '../../services/aboutUsApi';

// Initial state
const initialState = {
  categories: [],
  questions: [],
  selectedCategory: null,
  selectedQuestion: null,
  loading: false,
  error: null,
};

// About Us Category async thunks
export const createAboutUsCategory = createAsyncThunk(
  'aboutUs/createCategory',
  async (data, { rejectWithValue }) => {
    try {
      const response = await aboutUsCategoryApi.createAboutUsCategory(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getAllAboutUsCategory = createAsyncThunk(
  'aboutUs/getAllCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await aboutUsCategoryApi.getAllAboutUsCategory();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getAboutUsCategoryById = createAsyncThunk(
  'aboutUs/getCategoryById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await aboutUsCategoryApi.getAboutUsCategoryById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateAboutUsCategoryById = createAsyncThunk(
  'aboutUs/updateCategory',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await aboutUsCategoryApi.updateAboutUsCategoryById(id, data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteAboutUsCategoryById = createAsyncThunk(
  'aboutUs/deleteCategory',
  async (id, { rejectWithValue }) => {
    try {
      const response = await aboutUsCategoryApi.deleteAboutUsCategoryById(id);
      return { id, response };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// About Us Question async thunks
export const createAboutUsQuestion = createAsyncThunk(
  'aboutUs/createQuestion',
  async (data, { rejectWithValue }) => {
    try {
      const response = await aboutUsQuestionApi.createAboutUsQuestion(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getAllAboutUsQuestions = createAsyncThunk(
  'aboutUs/getAllQuestions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await aboutUsQuestionApi.getAllAboutUsQuestions();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getAboutUsQuestionById = createAsyncThunk(
  'aboutUs/getQuestionById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await aboutUsQuestionApi.getAboutUsQuestionById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateAboutUsQuestion = createAsyncThunk(
  'aboutUs/updateQuestion',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await aboutUsQuestionApi.updateAboutUsQuestion(id, data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteAboutUsQuestion = createAsyncThunk(
  'aboutUs/deleteQuestion',
  async (id, { rejectWithValue }) => {
    try {
      const response = await aboutUsQuestionApi.deleteAboutUsQuestion(id);
      return { id, response };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getAboutUsQuestionsByCategory = createAsyncThunk(
  'aboutUs/getQuestionsByCategory',
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await aboutUsQuestionApi.getAboutUsQuestionsByCategory(categoryId);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// About Us slice
const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSelectedQuestion: (state, action) => {
      state.selectedQuestion = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Categories
    builder
      .addCase(getAllAboutUsCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllAboutUsCategory.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success && action.payload.result) {
          state.categories = action.payload.result;
        }
      })
      .addCase(getAllAboutUsCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAboutUsCategoryById.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          state.selectedCategory = action.payload.result;
        }
      })
      .addCase(createAboutUsCategory.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          state.categories.push(action.payload.result);
        }
      })
      .addCase(updateAboutUsCategoryById.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          const index = state.categories.findIndex(
            (cat) => cat._id === action.payload.result._id
          );
          if (index !== -1) {
            state.categories[index] = action.payload.result;
          }
        }
      })
      .addCase(deleteAboutUsCategoryById.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (cat) => cat._id !== action.payload.id
        );
      });

    // Questions
    builder
      .addCase(getAllAboutUsQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllAboutUsQuestions.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success && action.payload.result) {
          state.questions = action.payload.result;
        }
      })
      .addCase(getAllAboutUsQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAboutUsQuestionById.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          state.selectedQuestion = action.payload.result;
        }
      })
      .addCase(getAboutUsQuestionsByCategory.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          state.questions = action.payload.result;
        }
      })
      .addCase(createAboutUsQuestion.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          state.questions.push(action.payload.result);
        }
      })
      .addCase(updateAboutUsQuestion.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          const index = state.questions.findIndex(
            (q) => q._id === action.payload.result._id
          );
          if (index !== -1) {
            state.questions[index] = action.payload.result;
          }
        }
      })
      .addCase(deleteAboutUsQuestion.fulfilled, (state, action) => {
        state.questions = state.questions.filter(
          (q) => q._id !== action.payload.id
        );
      });
  },
});

export const { clearError: clearAboutUsError, setSelectedCategory, setSelectedQuestion } = aboutUsSlice.actions;
export default aboutUsSlice.reducer;
