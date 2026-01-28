# Redux & API Integration Setup

This document explains the Redux and API integration that has been set up for the frontend.

## 📁 File Structure

```
frontend/src/
├── services/
│   ├── api.js              # Axios instance with interceptors
│   ├── authApi.js          # Auth API endpoints
│   ├── faqApi.js           # FAQ API endpoints
│   ├── aboutUsApi.js       # About Us API endpoints
│   ├── premiumApi.js       # Premium API endpoints
│   └── exampleUsage.js     # Usage examples
├── store/
│   ├── store.js            # Redux store configuration
│   ├── hooks.js            # Redux hooks
│   └── slices/
│       ├── authSlice.js    # Auth Redux slice
│       ├── faqSlice.js     # FAQ Redux slice
│       ├── aboutUsSlice.js # About Us Redux slice
│       └── premiumSlice.js # Premium Redux slice
```

## 🔧 Configuration

### API Base URL

Update the API base URL in `src/services/api.js`:

```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';
```

Or create a `.env` file in the frontend directory:

```
REACT_APP_API_URL=http://localhost:5000/api/v1
```

## 📦 Available Redux Slices

### 1. Auth Slice (`authSlice.js`)

**Actions:**
- `sendOTP(mobileNo)` - Send OTP to mobile number
- `verifyOTP({ mobileNo, otp })` - Verify OTP and login
- `registerAdmin(mobileNo)` - Register admin user
- `updateProfile(formData)` - Update user profile
- `assignAdminRole(userId)` - Assign admin role (Admin only)
- `removeAdminRole(userId)` - Remove admin role (Admin only)
- `deleteAccount()` - Delete user account
- `logout()` - Logout user
- `clearError()` - Clear error state

**State:**
```javascript
{
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false
}
```

### 2. FAQ Slice (`faqSlice.js`)

**Category Actions:**
- `createFaqCategory(formData)` - Create FAQ category (Admin)
- `getAllFaqCategory()` - Get all categories
- `getFaqCategoryById(id)` - Get category by ID
- `updateFaqCategoryById({ id, formData })` - Update category (Admin)
- `deleteFaqCategoryById(id)` - Delete category (Admin)

**Question Actions:**
- `createFaqQuestion(data)` - Create FAQ question (Admin)
- `getAllFaqQuestions()` - Get all questions
- `getFaqQuestionById(id)` - Get question by ID
- `updateFaqQuestion({ id, data })` - Update question (Admin)
- `deleteFaqQuestion(id)` - Delete question (Admin)
- `getFaqQuestionsByCategory(categoryId)` - Get questions by category

### 3. About Us Slice (`aboutUsSlice.js`)

Similar structure to FAQ slice with About Us specific endpoints.

### 4. Premium Slice (`premiumSlice.js`)

**Actions:**
- `createPremium(data)` - Create premium plan (Admin)
- `getAllPremium()` - Get all premium plans
- `getPremiumById(id)` - Get premium plan by ID
- `updatePremiumById({ id, data })` - Update premium plan (Admin)
- `deletePremiumById(id)` - Delete premium plan (Admin)
- `togglePremiumStatus(id)` - Toggle premium status (Admin)

## 💡 Usage Examples

### Using Redux in Components

```javascript
import { useDispatch, useSelector } from 'react-redux';
import { sendOTP, verifyOTP } from '../store/slices/authSlice';

function MyComponent() {
  const dispatch = useDispatch();
  const { loading, error, user, isAuthenticated } = useSelector((state) => state.auth);

  const handleSendOTP = async () => {
    try {
      const result = await dispatch(sendOTP('9876543210')).unwrap();
      console.log('OTP sent:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {isAuthenticated && <p>Welcome, {user?.name}</p>}
      <button onClick={handleSendOTP}>Send OTP</button>
    </div>
  );
}
```

### Direct API Calls (without Redux)

```javascript
import { authApi } from '../services/authApi';

async function sendOTPDirect() {
  try {
    const response = await authApi.sendOTP('9876543210');
    console.log('Response:', response);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## 🔐 Authentication

The axios instance automatically adds the JWT token from localStorage to all requests. When a 401 error occurs, it automatically clears the token and redirects to login.

## 📝 Notes

- All API responses follow the format: `{ success: boolean, message: string, result: any }`
- Tokens are stored in localStorage
- User data is stored in localStorage and Redux state
- Loading and error states are managed by Redux slices
- See `src/services/exampleUsage.js` for more detailed examples

## ✅ Updated Components

The following components have been updated to use Redux:
- `MobileLogin.jsx` - Now uses Redux for sending OTP
- `VerifyOtp.jsx` - Now uses Redux for verifying OTP and login
