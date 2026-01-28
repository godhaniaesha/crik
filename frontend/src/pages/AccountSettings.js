import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaCamera, FaCopy, FaEdit, FaMobileAlt, FaTabletAlt, FaGlobe, FaTrash, FaUser, FaCheckCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/z_style.css';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

export default function AccountSettings() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [uid, setUid] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingMobile, setIsEditingMobile] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [loading, setLoading] = useState(true);
  // 🔴 Delete flow states
  const [showFinalConfirm, setShowFinalConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [deleteText, setDeleteText] = useState('');
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState("");

  const canConfirm =
    deleteText === 'DELETE' && agree1 && agree2;

  const handleCopyUID = () => {
    navigator.clipboard.writeText(uid);
    // You can add a toast notification here
  };

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleEditMobile = () => {
    setIsEditingMobile(true);
  };

  const handleNameBlur = () => {
    setIsEditingName(false);
  };

  const handleMobileBlur = () => {
    setIsEditingMobile(false);
    // Mobile number updates are typically not allowed as it's used for authentication
    // If you need to update mobile, you'll need a separate endpoint with OTP verification
  };

  const handleEditEmail = () => {
    setIsEditingEmail(true);
  };

  const handleEmailBlur = () => {
    setIsEditingEmail(false);
    // Validate email format
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    updateProfile({ email });
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/MobileLogin');
        return;
      }

      const response = await fetch(`${API_BASE_URL}/auth/getProfile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.result?.user) {
          const user = data.result.user;
          setName(user.name || '');
          setMobile(user.mobileNo || '');
          setEmail(user.email || '');
          setUid(user.uid || '');
        }
      } else if (response.status === 401) {
        localStorage.removeItem('token');
        navigate('/MobileLogin');
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const formData = new FormData();
      if (updates.name !== undefined) formData.append('name', updates.name);
      if (updates.email !== undefined) formData.append('email', updates.email);

      const response = await fetch(`${API_BASE_URL}/auth/updateProfile`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.result?.user) {
          const user = data.result.user;
          setName(user.name || '');
          setEmail(user.email || '');
        }
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleDeleteAccount = () => {
    // Handle delete account logic
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('Account deletion confirmed');
    }
  };

  const handleLogoutClick = (device) => {
    setSelectedDevice(device);
    setShowLogoutModal(true);
  };

  const confirmLogoutDevice = () => {
    console.log(`Logging out from ${selectedDevice}`);
    setShowLogoutModal(false);

    // 👉 API call here if needed
  };

  if (loading) {
    return (
      <div className="z_account_settings d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="z_account_settings">
      {/* Header */}
      <div className="z_account_header d-flex justify-content-between align-items-center" >
        <div className='d-flex align-items-center'>
          <button className="z_account_back_btn" onClick={() => navigate('/profile')}>
            <FaChevronLeft />
          </button>
          <h2 className="z_account_title">Account Settings</h2>
        </div>
        {/* DELETE ACCOUNT BUTTON */}
        <div className="z_account_delete_section">
          <button
            className="z_account_delete_btn"
            data-bs-toggle="modal"
            data-bs-target="#deleteAccountModal"
          >
            Delete Account
          </button>
        </div>
      </div>

      <div className='z_both_section d-flex  justify-content-between gap-4 align-items-center'>

        {/* Profile Section */}
        <div className="z_account_section ">
          <div className="z_account_section_label">PROFILE</div>
          <div className='d-flex gap-5 align-items-center w-100'>
            {/* Profile Picture Section */}
            <div className="z_account_profile_pic_section">
              <div className="z_account_profile_pic_wrapper">
                <div className="z_account_profile_pic">
                  <FaUser className="z_account_profile_pic_icon" />
                </div>
                <div className="z_account_camera_icon">
                  <FaCamera />
                </div>
              </div>
            </div>
            <div className='w-100'>
              <div className="z_account_info_list">
                {/* UID */}
                <div className="z_account_info_item">
                  <div className="z_account_info_label">UID</div>
                  <div className="z_account_info_value_wrapper">
                    <span className="z_account_info_value">{uid}</span>
                    <button className="z_account_action_btn" onClick={handleCopyUID}>
                      <FaCopy />
                    </button>
                  </div>
                </div>
                <div className="z_account_divider"></div>

                {/* Name */}
                <div className="z_account_info_item">
                  <div className="z_account_info_label">Name</div>
                  <div className="z_account_info_value_wrapper">
                    {isEditingName ? (
                      <input
                        type="text"
                        className="z_account_info_input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={handleNameBlur}
                        autoFocus
                      />
                    ) : (
                      <>
                        <span className="z_account_info_value">{name}</span>
                        <button className="z_account_action_btn" onClick={handleEditName}>
                          <FaEdit />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div className="z_account_divider"></div>

                {/* Mobile */}
                <div className="z_account_info_item">
                  <div className="z_account_info_label">Mobile</div>
                  <div className="z_account_info_value_wrapper">
                    {isEditingMobile ? (
                      <input
                        type="text"
                        className="z_account_info_input"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        onBlur={handleMobileBlur}
                        autoFocus
                      />
                    ) : (
                      <>
                        <span className="z_account_info_value">{mobile}</span>
                        <button className="z_account_action_btn" onClick={handleEditMobile}>
                          <FaEdit />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div className="z_account_divider"></div>

                {/* Email */}
                <div className="z_account_info_item">
                  <div className="z_account_info_label">Email</div>
                  <div className="z_account_info_value_wrapper">
                    {isEditingEmail ? (
                      <input
                        type="email"
                        className="z_account_info_input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={handleEmailBlur}
                        placeholder="Enter your email"
                        autoFocus
                      />
                    ) : (
                      <>
                        <span className="z_account_info_value">{email || 'Not set'}</span>
                        <button className="z_account_action_btn" onClick={handleEditEmail}>
                          <FaEdit />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* This Device Section */}
      <div className="z_account_section">
        <div className="z_account_section_label">THIS DEVICE</div>
        <div className="z_account_device_list">
          <div className="z_account_device_item">
            <div className="z_account_device_left">
              <div className="z_account_device_icon">
                <FaMobileAlt />
              </div>
              <div className="z_account_device_info">
                <div className="z_account_device_name">Samsung Phone</div>
                <div className="z_account_device_time">Last Used : Today</div>
              </div>
            </div>
            <button
              className="z_account_logout_btn"
              onClick={() => handleLogoutClick("Samsung Phone")}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* Other Device Section */}
      <div className="z_account_section">
        <div className="z_account_section_label">OTHER DEVICE</div>
        <div className="z_account_device_list">
          <div className="z_account_device_item">
            <div className="z_account_device_left">
              <div className="z_account_device_icon">
                <FaTabletAlt />
              </div>
              <div className="z_account_device_info">
                <div className="z_account_device_name">iPad</div>
                <div className="z_account_device_time">Last Used : 7 days ago</div>
              </div>
            </div>
            <button
              className="z_account_logout_btn"
              onClick={() => handleLogoutClick("iPad")}
            >
              Log Out
            </button>
          </div>

          <div className="z_account_device_item">
            <div className="z_account_device_left">
              <div className="z_account_device_icon">
                <FaGlobe />
              </div>
              <div className="z_account_device_info">
                <div className="z_account_device_name">Chrome</div>
                <div className="z_account_device_time">Last Used : 16 days ago</div>
              </div>
            </div>
            <button
              className="z_account_logout_btn"
              onClick={() => handleLogoutClick("Chrome")}
            >
              Log Out
            </button>

          </div>
        </div>
      </div>

      {/* LOGOUT CONFIRMATION MODAL */}
      {showLogoutModal && (
        <>
          <div className="modal fade show d-block">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content z_delete_modal">

                <div className="modal-header border-0">
                  <h5 className="modal-title text-white">Log out device</h5>
                  <button
                    className="btn-close btn-close-white"
                    onClick={() => setShowLogoutModal(false)}
                  ></button>
                </div>

                <div className="modal-body text-secondary">
                  <p>
                    Are you sure you want to log out from{" "}
                    <b>{selectedDevice}</b>?
                  </p>
                </div>

                <div className="modal-footer border-0">
                  <button
                    className="btn btn-outline-light"
                    onClick={() => setShowLogoutModal(false)}
                  >
                    Cancel
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={confirmLogoutDevice}
                  >
                    Log Out
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* BACKDROP */}
          <div className="modal-backdrop fade show"></div>
        </>
      )}

      {/* ================= FIRST MODAL ================= */}
      <div className="modal fade" id="deleteAccountModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content z_delete_modal">

            <div className="modal-header border-0">
              <h5 className="modal-title text-white">Delete Account</h5>
              <button className="btn-close btn-close-white" data-bs-dismiss="modal" />
            </div>

            <div className="modal-body text-secondary">
              <p>
                Deleting your account is permanent and cannot be undone.
                You will lose access to:
              </p>

              <ol className="z_delete_list">
                <li><b>Premium Streaming</b> – cancelled immediately</li>
                <li><b>Watch History</b> – permanently erased</li>
                <li><b>Offline Downloads</b> – removed</li>
                <li><b>No Recovery</b> – account cannot be restored</li>
              </ol>
            </div>

            <div className="modal-footer border-0">
              <button className="btn btn-outline-light" data-bs-dismiss="modal">
                Not Now
              </button>

              <button
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => setShowFinalConfirm(true)}
              >
                Delete Account
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ================= FINAL CONFIRM MODAL ================= */}
      {showFinalConfirm && <div className="modal-backdrop fade show"></div>}
      <div className={`modal fade ${showFinalConfirm ? 'show d-block' : ''}`}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content z_delete_modal">

            <div className="modal-header border-0">
              <h5 className="modal-title text-white">Final Confirmation</h5>
              <button
                className="btn-close btn-close-white"
                onClick={() => setShowFinalConfirm(false)}
              />
            </div>

            <div className="modal-body">
              <p className="text-secondary">
                Type <b>DELETE</b> to confirm. This cannot be undone.
              </p>

              <input
                className="form-control mb-3 bg-dark text-white"
                placeholder='Type "DELETE"'
                value={deleteText}
                onChange={(e) => setDeleteText(e.target.value)}
              />

              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={agree1}
                  onChange={(e) => setAgree1(e.target.checked)}
                />
                <label className="form-check-label text-secondary">
                  I understand I will lose Premium access immediately
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={agree2}
                  onChange={(e) => setAgree2(e.target.checked)}
                />
                <label className="form-check-label text-secondary">
                  I understand this action cannot be undone
                </label>
              </div>
            </div>

            <div className="modal-footer border-0">
              <button
                className="btn btn-outline-light"
                onClick={() => setShowFinalConfirm(false)}
              >
                Cancel
              </button>

              <button
                className="btn btn-danger"
                disabled={!canConfirm}
                onClick={() => {
                  setShowFinalConfirm(false);
                  setShowSuccess(true);
                }}
              >
                Confirm Delete
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ================= SUCCESS MODAL ================= */}
      {showSuccess && <div className="modal-backdrop fade show"></div>}
      <div className={`modal fade ${showSuccess ? 'show d-block' : ''}`}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content z_delete_modal text-center p-5 align-items-center">

            <FaCheckCircle size={70} className="text-success mb-3" />

            <h3 className="text-white">Account Deleted</h3>
            <p className="text-secondary mt-2">
              Your account and subscription details have been permanently removed.
            </p>

            <button
              className="btn btn-outline-light mt-4"
              onClick={() => navigate('/MobileLogin')}
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
