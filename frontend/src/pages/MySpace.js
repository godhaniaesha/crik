import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaEdit, FaCrown, FaVideo, FaBell, FaQuestionCircle, FaUser, FaChevronRight, FaPlay, FaTimes } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/z_style.css';

export default function MySpace() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('Enter you nickname');
  const [isEditing, setIsEditing] = useState(false);
  const uid = '1423903002';
  const [couponApplied, setCouponApplied] = useState(false);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const availableCoupons = [
    {
      id: 'newuser20',
      title: 'Flat 20% off for NEW USERS',
      description: 'Get 20% off on your first transaction',
      discount: 20,
      code: 'NEWUSER20',
      icon: <FaPlay />
    },
    {
      id: 'monthly15',
      title: '15% off Monthly Plan',
      description: 'Special discount on monthly subscription',
      discount: 15,
      code: 'MONTHLY15',
      icon: <FaCrown />
    },
    {
      id: 'annual30',
      title: '30% off Annual Plan',
      description: 'Best value with maximum savings',
      discount: 30,
      code: 'ANNUAL30',
      icon: <FaCrown />
    },
    {
      id: 'first50',
      title: '50% off First Purchase',
      description: 'Limited time offer for new customers',
      discount: 50,
      code: 'FIRST50',
      icon: <FaPlay />
    }
  ];

  const handleCouponSelect = (coupon) => {
    setSelectedCoupon(coupon);
    setCouponApplied(true);
    setShowCouponModal(false);
  };

  const handleRemoveCoupon = () => {
    setSelectedCoupon(null);
    setCouponApplied(false);
  };


  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleNicknameBlur = () => {
    setIsEditing(false);
    if (!nickname.trim()) {
      setNickname('Enter you nickname');
    }
  };

  const handleNicknameKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNicknameBlur();
    }
  };

  const handleNicknameClick = () => {
    setIsEditing(true);
    if (nickname === 'Enter you nickname') {
      setNickname('');
    }
  };

  const [activeTab, setActiveTab] = useState('subscription');

  const subscriptionPlans = [
    {
      id: 'single',
      name: 'Single Match',
      price: 1.99,
      description: 'One match. One payment.',
    },
    {
      id: 'monthly',
      name: 'Monthly',
      price: 29.99,
      description: 'Unlimited access to live matches.',
    },
    {
      id: 'quarterly',
      name: 'Quarterly',
      price: 49.99,
      description: 'Extended access with better value.',
    },
    {
      id: 'annual',
      name: 'Annual Plan',
      price: 99.99,
      description: 'Complete access with maximum savings.',
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState('monthly');

  const settingsItems = [
    {
      id: 'subscription',
      icon: <FaCrown />,
      title: 'Subscription & Purchases',
      subtitle: 'Currently No Active Plan',
    },
    {
      id: 'streaming',
      icon: <FaVideo />,
      title: 'Streaming Quality',
      subtitle: 'Video Settings',
    },
    {
      id: 'notifications',
      icon: <FaBell />,
      title: 'Notifications',
      subtitle: 'preferences for alerts',
    },
    {
      id: 'help',
      icon: <FaQuestionCircle />,
      title: 'Help & Support',
      subtitle: 'FAQs, Contact us',
      badge: '24'
    },
    {
      id: 'about',
      icon: <FaUser />,
      title: 'About',
      subtitle: 'App Version, Terms',
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'subscription': {
        const selected = subscriptionPlans.find(p => p.id === selectedPlan);
        const basePrice = selected ? selected.price : 0;
        const discount = selectedPlan === 'monthly' ? 1.99 : 0;
        const priceAfterInitialDiscount = basePrice - discount;
        const couponDiscount = selectedCoupon
          ? (priceAfterInitialDiscount * selectedCoupon.discount) / 100
          : 0;

        const payable = (priceAfterInitialDiscount - couponDiscount).toFixed(2);

        return (
          <>
            <div className="z_sett_tab_card">
              <h3 className="z_sett_tab_title">Choose the Plan That Fits You</h3>
              <p className="z_sett_tab_text">
                You will get access on all our platforms. Explore and watch match on your device.
              </p>

              {/* Plans */}
              <div className="z_sett_subs_plans mt-3">
                {subscriptionPlans.map(plan => {
                  const isActive = selectedPlan === plan.id;
                  return (
                    <div
                      key={plan.id}
                      className={`z_sett_subs_plan_card ${isActive ? 'z_sett_subs_plan_active' : ''}`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <div className="z_sett_subs_plan_left">
                        <div className="z_sett_plan_name">{plan.name}</div>
                        <div className="z_sett_plan_desc">{plan.description}</div>
                      </div>
                      <div className="z_sett_subs_plan_right">
                        <span className="z_sett_plan_price">${plan.price.toFixed(2)}</span>
                        <span
                          className={`z_sett_subs_radio ${isActive ? 'z_sett_subs_radio_active' : ''}`}
                        >
                          {isActive && <span className="z_sett_subs_radio_dot" />}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Coupons & Offers Section */}
              <div className="z_sett_coupon_section mt-3">
                <div 
                  className="z_sett_coupon_header d-flex align-items-center justify-content-between"
                  onClick={() => setShowCouponModal(true)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="z_sett_coupon_section_title">Coupons & Offers</span>
                  <FaChevronRight className="z_sett_coupon_chevron" />
                </div>
                {selectedCoupon ? (
                  <div className="z_sett_coupon_card mt-2 d-flex align-items-center">
                    <div className="z_sett_coupon_icon">
                      {selectedCoupon.icon}
                    </div>
                    <div className="z_sett_coupon_content flex-grow-1">
                      <div className="z_sett_coupon_title">{selectedCoupon.title}</div>
                      <div className="z_sett_coupon_sub">{selectedCoupon.description}</div>
                    </div>
                    <button
                      className="z_sett_coupon_btn z_sett_coupon_remove"
                      onClick={handleRemoveCoupon}
                    >
                      REMOVE
                    </button>
                  </div>
                ) : (
                  <div className="z_sett_coupon_card mt-2 d-flex align-items-center">
                    <div className="z_sett_coupon_icon">
                      <FaPlay />
                    </div>
                    <div className="z_sett_coupon_content flex-grow-1">
                      <div className="z_sett_coupon_title">Flat 20% off for NEW USERS</div>
                      <div className="z_sett_coupon_sub">Get 20% off on your first transaction</div>
                    </div>
                    <button
                      className="z_sett_coupon_btn"
                      onClick={() => setShowCouponModal(true)}
                    >
                      APPLY
                    </button>
                  </div>
                )}
              </div>

              {/* Price break-up */}
              <div className="z_sett_price_box mt-3">
                <div className="z_sett_price_row_header">Price Break-up</div>
                <div className="z_sett_price_row">
                  <span>{selected?.name || '-'}</span>
                  <span>${basePrice.toFixed(2)}</span>
                </div>
                <div className="z_sett_price_row">
                  <span className="z_sett_price_discount">Initial Discount</span>
                  <span className="z_sett_price_discount">
                    {discount > 0 ? `- $${discount.toFixed(2)}` : '-$1.99'}
                  </span>
                </div>
                {selectedCoupon && (
                  <div className="z_sett_price_row">
                    <span className="z_sett_price_discount">
                      Coupon Discount ({selectedCoupon.code} - {selectedCoupon.discount}%)
                    </span>
                    <span className="z_sett_price_discount">
                      - ${couponDiscount.toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="z_sett_price_row z_sett_price_total">
                  <span>Total Payable</span>
                  <span>${payable}</span>
                </div>
              </div>

              {/* Sticky Footer */}
              <div className="z_sett_subs_footer">
                <div className="z_sett_subs_footer_banner">
                  <span>NEW USERS Get 20% off on your first transaction</span>
                  <FaChevronRight />
                </div>
                <div className="z_sett_subs_footer_content d-flex align-items-center justify-content-between">
                  <div className="z_sett_subs_payable">
                    <div className="z_sett_subs_payable_label">Payable Amount</div>
                    <div className="z_sett_subs_payable_value">${payable}</div>
                  </div>
                  <button className="z_sett_subs_continue_btn">Continue</button>
                </div>
              </div>
            </div>

            {/* Coupons Modal */}
            {showCouponModal && (
              <>
                <div className="z_sett_coupon_modal_overlay" onClick={() => setShowCouponModal(false)}></div>
                <div className="z_sett_coupon_modal">
                  <div className="z_sett_coupon_modal_header d-flex align-items-center justify-content-between">
                    <h4 className="z_sett_coupon_modal_title">Available Coupons & Offers</h4>
                    <button 
                      className="z_sett_coupon_modal_close"
                      onClick={() => setShowCouponModal(false)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <div className="z_sett_coupon_modal_body">
                    {availableCoupons.map((coupon) => (
                      <div 
                        key={coupon.id} 
                        className={`z_sett_coupon_modal_item ${selectedCoupon?.id === coupon.id ? 'z_sett_coupon_modal_item_selected' : ''}`}
                        onClick={() => handleCouponSelect(coupon)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="z_sett_coupon_modal_icon">
                          {coupon.icon}
                        </div>
                        <div className="z_sett_coupon_modal_content flex-grow-1">
                          <div className="z_sett_coupon_modal_item_title">{coupon.title}</div>
                          <div className="z_sett_coupon_modal_item_desc">{coupon.description}</div>
                          <div className="z_sett_coupon_modal_code">Code: {coupon.code}</div>
                        </div>
                        <div className="z_sett_coupon_modal_discount">
                          {coupon.discount}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </>
        );
      }
      case 'streaming':
        return (
          <div className="z_sett_tab_card">
            <h3 className="z_sett_tab_title">Streaming Quality</h3>
            <p className="z_sett_tab_text">
              Optimise your video quality based on your network and data usage.
            </p>
            <div className="z_sett_option_group">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="quality" id="auto" defaultChecked />
                <label className="form-check-label" htmlFor="auto">
                  Auto (Recommended)
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="quality" id="hd" />
                <label className="form-check-label" htmlFor="hd">
                  HD / Full HD
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="quality" id="data" />
                <label className="form-check-label" htmlFor="data">
                  Data Saver
                </label>
              </div>
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div className="z_sett_tab_card">
            <h3 className="z_sett_tab_title">Notifications</h3>
            <p className="z_sett_tab_text">
              Decide what you want to be notified about.
            </p>
            <div className="z_sett_notification_list">
              <div className="z_sett_notification_item">
                <div className="z_sett_notification_content">
                  <div className="z_sett_notification_title">Match Start</div>
                  <div className="z_sett_notification_desc">Receive alert when a match goes live.</div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="matchStart" defaultChecked />
                </div>
              </div>

              <div className="z_sett_notification_item">
                <div className="z_sett_notification_content">
                  <div className="z_sett_notification_title">Upcoming Matches</div>
                  <div className="z_sett_notification_desc">Get reminders before your selected matches start.</div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="upcomingMatches" defaultChecked />
                </div>
              </div>

              <div className="z_sett_notification_item">
                <div className="z_sett_notification_content">
                  <div className="z_sett_notification_title">Wicket Alerts</div>
                  <div className="z_sett_notification_desc">Get notified when a wicket falls in live matches.</div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="wicketAlerts" defaultChecked />
                </div>
              </div>

              <div className="z_sett_notification_item">
                <div className="z_sett_notification_content">
                  <div className="z_sett_notification_title">Innings Break</div>
                  <div className="z_sett_notification_desc">Get updates at the end of each innings.</div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="inningsBreak" />
                </div>
              </div>

              <div className="z_sett_notification_item">
                <div className="z_sett_notification_content">
                  <div className="z_sett_notification_title">Match Result</div>
                  <div className="z_sett_notification_desc">Receive full-time match result notifications.</div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="matchResult" defaultChecked />
                </div>
              </div>

              <div className="z_sett_notification_item">
                <div className="z_sett_notification_content">
                  <div className="z_sett_notification_title">Points Table Updates</div>
                  <div className="z_sett_notification_desc">Get notified when standings are updated.</div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="pointsTable" />
                </div>
              </div>

              <div className="z_sett_notification_item">
                <div className="z_sett_notification_content">
                  <div className="z_sett_notification_title">Qualification Updates</div>
                  <div className="z_sett_notification_desc">Get alerts when teams qualify or get eliminated.</div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="qualificationUpdates" />
                </div>
              </div>

              <div className="z_sett_notification_item">
                <div className="z_sett_notification_content">
                  <div className="z_sett_notification_title">Match Delay / Abandoned</div>
                  <div className="z_sett_notification_desc">Receive alerts for delays or abandoned matches.</div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="matchDelay" defaultChecked />
                </div>
              </div>

              <div className="z_sett_notification_item">
                <div className="z_sett_notification_content">
                  <div className="z_sett_notification_title">Tournament Updates</div>
                  <div className="z_sett_notification_desc">Get important tournament-related announcements.</div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="tournamentUpdates" />
                </div>
              </div>

              <div className="z_sett_notification_item">
                <div className="z_sett_notification_content">
                  <div className="z_sett_notification_title">Subscription Alerts</div>
                  <div className="z_sett_notification_desc">Get reminders about plan expiry and renewals.</div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="subscriptionAlerts" defaultChecked />
                </div>
              </div>
            </div>
          </div>
        );
      case 'help':
        return (
          <div className="z_sett_tab_card">
            <h3 className="z_sett_tab_title">Help & Support</h3>
            <p className="z_sett_tab_text">
              Find quick answers or reach out to our support team.
            </p>
            <ul className="z_sett_help_list">
              <li>• How to manage your subscription</li>
              <li>• Troubleshooting video or audio issues</li>
              <li>• Updating your account or login details</li>
            </ul>
            <button className="z_sett_primary_btn mt-3">Contact Support</button>
          </div>
        );
      case 'about':
      default:
        return (
          <div className="z_sett_tab_card">
            <h3 className="z_sett_tab_title">About CRICK.LIVE</h3>
            <p className="z_sett_tab_text">
              Version 1.0.0 • Made for cricket fans who never want to miss a ball.
            </p>
            <p className="z_sett_tab_text mb-0">
              View our terms of use and privacy policy for more information about how we
              handle your data.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="z_sett_container">
      {/* Header */}
      <div className="z_sett_header">
        <div className="z_sett_header_left">
          <h1 className="z_sett_logo">CRICK.LIVE</h1>
        </div>
        <div className="z_sett_header_right">
          <FaSearch className="z_sett_search_icon" />
        </div>
      </div>

      {/* User Profile Section */}
      <div className="z_sett_profile_card">
        <div className="z_sett_profile_content">
          <div className="z_sett_profile_left">
            <div className="z_sett_avatar">
              <FaUser className="z_sett_avatar_icon" />
            </div>
            <div className="z_sett_profile_info">
              <div className="z_sett_uid">UID : {uid}</div>
              {isEditing ? (
                <input
                  type="text"
                  className="z_sett_nickname_input"
                  value={nickname}
                  onChange={handleNicknameChange}
                  onBlur={handleNicknameBlur}
                  onKeyPress={handleNicknameKeyPress}
                  autoFocus
                />
              ) : (
                <div className="z_sett_nickname" onClick={handleNicknameClick}>
                  {nickname}
                </div>
              )}
            </div>
          </div>
          <div className="z_sett_profile_right">
            <FaEdit size={30} className="z_sett_edit_icon" onClick={() => navigate('/account-settings')} />
          </div>
        </div>
      </div>

      {/* Settings layout: left nav (cards) + right tab content */}
      <div className="row z_sett_layout_row">
        <div className="col-12 col-md-5 col-lg-4 mb-3 mb-md-0">
          <div className="z_sett_list">
            {settingsItems.map((item) => (
              <div
                key={item.id}
                className={`z_sett_item ${activeTab === item.id ? 'z_sett_item_active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <div className="z_sett_item_left">
                  <div className="z_sett_item_icon">{item.icon}</div>
                  <div className="z_sett_item_text">
                    <div className="z_sett_item_title">{item.title}</div>
                    <div className="z_sett_item_subtitle">{item.subtitle}</div>
                  </div>
                </div>
                <div className="z_sett_item_right">
                  {item.badge && (
                    <span className="z_sett_badge">{item.badge}</span>
                  )}
                  <FaChevronRight className="z_sett_arrow" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}