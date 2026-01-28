/**
 * Example Usage Guide for Redux and API Integration
 * 
 * This file shows how to use the Redux slices and API services in your components
 */

// ============================================
// AUTH EXAMPLES
// ============================================

/*
import { useDispatch, useSelector } from 'react-redux';
import { sendOTP, verifyOTP, updateProfile, logout } from '../store/slices/authSlice';

function LoginComponent() {
  const dispatch = useDispatch();
  const { loading, error, user, isAuthenticated } = useSelector((state) => state.auth);

  const handleSendOTP = async () => {
    try {
      await dispatch(sendOTP('9876543210')).unwrap();
      // OTP sent successfully
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      await dispatch(verifyOTP({ mobileNo: '9876543210', otp: '123456' })).unwrap();
      // User logged in successfully
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append('name', 'John Doe');
    formData.append('profileImage', file); // file from input

    try {
      await dispatch(updateProfile(formData)).unwrap();
      // Profile updated successfully
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {isAuthenticated && <p>Welcome, {user?.name}</p>}
      <button onClick={handleSendOTP}>Send OTP</button>
      <button onClick={handleVerifyOTP}>Verify OTP</button>
      <button onClick={handleUpdateProfile}>Update Profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
*/

// ============================================
// FAQ EXAMPLES
// ============================================

/*
import { useDispatch, useSelector } from 'react-redux';
import { getAllFaqCategory, createFaqCategory, getAllFaqQuestions } from '../store/slices/faqSlice';

function FAQComponent() {
  const dispatch = useDispatch();
  const { categories, questions, loading, error } = useSelector((state) => state.faq);

  useEffect(() => {
    dispatch(getAllFaqCategory());
    dispatch(getAllFaqQuestions());
  }, [dispatch]);

  const handleCreateCategory = async () => {
    const formData = new FormData();
    formData.append('name', 'General');
    formData.append('faqCategoryImage', file);

    try {
      await dispatch(createFaqCategory(formData)).unwrap();
      // Category created successfully
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <h2>FAQ Categories</h2>
      {categories.map((category) => (
        <div key={category._id}>{category.name}</div>
      ))}
      <h2>FAQ Questions</h2>
      {questions.map((question) => (
        <div key={question._id}>
          <h3>{question.question}</h3>
          <p>{question.answer}</p>
        </div>
      ))}
    </div>
  );
}
*/

// ============================================
// PREMIUM EXAMPLES
// ============================================

/*
import { useDispatch, useSelector } from 'react-redux';
import { getAllPremium, togglePremiumStatus } from '../store/slices/premiumSlice';

function PremiumComponent() {
  const dispatch = useDispatch();
  const { premiumPlans, loading, error } = useSelector((state) => state.premium);

  useEffect(() => {
    dispatch(getAllPremium());
  }, [dispatch]);

  const handleToggleStatus = async (id) => {
    try {
      await dispatch(togglePremiumStatus(id)).unwrap();
      // Status toggled successfully
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <h2>Premium Plans</h2>
      {premiumPlans.map((plan) => (
        <div key={plan._id}>
          <h3>{plan.name}</h3>
          <p>Price: {plan.price}</p>
          <p>Status: {plan.isActive ? 'Active' : 'Inactive'}</p>
          <button onClick={() => handleToggleStatus(plan._id)}>
            Toggle Status
          </button>
        </div>
      ))}
    </div>
  );
}
*/

// ============================================
// DIRECT API CALL EXAMPLES (without Redux)
// ============================================

/*
import { authApi } from '../services/authApi';
import { faqCategoryApi } from '../services/faqApi';
import { premiumApi } from '../services/premiumApi';

// Direct API call example
async function directApiCall() {
  try {
    const response = await authApi.sendOTP('9876543210');
    console.log('OTP sent:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}

// FAQ Category API call
async function getFAQCategories() {
  try {
    const response = await faqCategoryApi.getAllFaqCategory();
    console.log('Categories:', response.result);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Premium API call
async function getPremiumPlans() {
  try {
    const response = await premiumApi.getAllPremium();
    console.log('Premium plans:', response.result);
  } catch (error) {
    console.error('Error:', error);
  }
}
*/
