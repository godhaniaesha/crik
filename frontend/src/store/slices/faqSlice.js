import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { faqCategoryApi, faqQuestionApi } from '../../services/faqApi';

// Initial state
const initialState = {
  categories: [],
  questions: [],
  selectedCategory: null,
  selectedQuestion: null,
  loading: false,
  error: null,
};

// FAQ Category async thunks
export const createFaqCategory = createAsyncThunk(
  'faq/createCategory',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await faqCategoryApi.createFaqCategory(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getAllFaqCategory = createAsyncThunk(
  'faq/getAllCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await faqCategoryApi.getAllFaqCategory();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getFaqCategoryById = createAsyncThunk(
  'faq/getCategoryById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await faqCategoryApi.getFaqCategoryById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateFaqCategoryById = createAsyncThunk(
  'faq/updateCategory',
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await faqCategoryApi.updateFaqCategoryById(id, formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteFaqCategoryById = createAsyncThunk(
  'faq/deleteCategory',
  async (id, { rejectWithValue }) => {
    try {
      const response = await faqCategoryApi.deleteFaqCategoryById(id);
      return { id, response };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// FAQ Question async thunks
export const createFaqQuestion = createAsyncThunk(
  'faq/createQuestion',
  async (data, { rejectWithValue }) => {
    try {
      const response = await faqQuestionApi.createFaqQuestion(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getAllFaqQuestions = createAsyncThunk(
  'faq/getAllQuestions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await faqQuestionApi.getAllFaqQuestions();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getFaqQuestionById = createAsyncThunk(
  'faq/getQuestionById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await faqQuestionApi.getFaqQuestionById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateFaqQuestion = createAsyncThunk(
  'faq/updateQuestion',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await faqQuestionApi.updateFaqQuestion(id, data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteFaqQuestion = createAsyncThunk(
  'faq/deleteQuestion',
  async (id, { rejectWithValue }) => {
    try {
      const response = await faqQuestionApi.deleteFaqQuestion(id);
      return { id, response };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getFaqQuestionsByCategory = createAsyncThunk(
  'faq/getQuestionsByCategory',
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await faqQuestionApi.getFaqQuestionsByCategory(categoryId);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// FAQ slice
const faqSlice = createSlice({
  name: 'faq',
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
      .addCase(getAllFaqCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllFaqCategory.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success && action.payload.result) {
          state.categories = action.payload.result;
        }
      })
      .addCase(getAllFaqCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getFaqCategoryById.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          state.selectedCategory = action.payload.result;
        }
      })
      .addCase(createFaqCategory.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          state.categories.push(action.payload.result);
        }
      })
      .addCase(updateFaqCategoryById.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          const index = state.categories.findIndex(
            (cat) => cat._id === action.payload.result._id
          );
          if (index !== -1) {
            state.categories[index] = action.payload.result;
          }
        }
      })
      .addCase(deleteFaqCategoryById.fulfilled, (state, action) => {
        state.categories = state.categories.filter(
          (cat) => cat._id !== action.payload.id
        );
      });

    // Questions
    builder
      .addCase(getAllFaqQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllFaqQuestions.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.success && action.payload.result) {
          state.questions = action.payload.result;
        }
      })
      .addCase(getAllFaqQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getFaqQuestionById.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          state.selectedQuestion = action.payload.result;
        }
      })
      .addCase(getFaqQuestionsByCategory.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          state.questions = action.payload.result;
        }
      })
      .addCase(createFaqQuestion.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          state.questions.push(action.payload.result);
        }
      })
      .addCase(updateFaqQuestion.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.result) {
          const index = state.questions.findIndex(
            (q) => q._id === action.payload.result._id
          );
          if (index !== -1) {
            state.questions[index] = action.payload.result;
          }
        }
      })
      .addCase(deleteFaqQuestion.fulfilled, (state, action) => {
        state.questions = state.questions.filter(
          (q) => q._id !== action.payload.id
        );
      });
  },
});

export const { clearError: clearFaqError, setSelectedCategory, setSelectedQuestion } = faqSlice.actions;
export default faqSlice.reducer;
