import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaEdit, FaCrown, FaVideo, FaBell, FaQuestionCircle, FaUser, FaChevronRight, FaPlay, FaTimes, FaCheck, FaGlobe, FaCalendarAlt, FaFilm, FaPlus, FaMinus, FaCreditCard, FaPaypal, FaGooglePay, FaApplePay, FaWallet, FaBuilding, FaMobileAlt, FaMoneyBillWave } from 'react-icons/fa';
import { SiPaytm, SiPhonepe, SiGooglepay, SiAmazonpay, SiSamsungpay, SiPaypal } from 'react-icons/si';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/z_style.css';
import { IoCallOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";


export default function MySpace() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('Enter you nickname');
  const [isEditing, setIsEditing] = useState(false);
  const uid = '1423903002';
  const [couponApplied, setCouponApplied] = useState(false);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [showStreamingModal, setShowStreamingModal] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState('fullhd50');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [paymentFormData, setPaymentFormData] = useState({});
  const [paymentStep, setPaymentStep] = useState('method'); // 'method', 'suboptions', 'upi-form', 'form', 'success', 'failed'
  const [upiVerified, setUpiVerified] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);

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
  const [selectedFaqCategory, setSelectedFaqCategory] = useState('global');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedAboutCategory, setSelectedAboutCategory] = useState('about');

  // Wallet icon mapping
  const getWalletIcon = (walletName) => {
    const walletIcons = {
      'Paytm': <SiPaytm />,
      'PhonePe': <SiPhonepe />,
      'Google Pay': <SiGooglepay />,
      'Amazon Pay': <SiAmazonpay />,
      'Samsung Pay': <SiSamsungpay />,
      'PayPal': <SiPaypal />,
      'Apple Pay': <FaApplePay />,
      'JioMoney': <FaMobileAlt />,
      'OlaMoney': <FaMobileAlt />,
      'Freecharge': <FaMobileAlt />,
      'Mobikwik': <FaMobileAlt />,
      'Airtel Money': <FaMobileAlt />,
      'PayZapp': <FaMobileAlt />,
      'The RuPay UPI': <FaBuilding />,
      'Cash App': <FaMoneyBillWave />,
      'Walmart Pay': <FaMobileAlt />,
      'Cred UPI': <FaBuilding />,
      'Venmo': <FaMobileAlt />,
      'Samsung Wallet': <SiSamsungpay />
    };
    return walletIcons[walletName] || <FaWallet />;
  };

  const paymentMethods = [
    {
      id: 'upi',
      name: 'UPI',
      icon: <FaBuilding />,
      description: 'Apple Pay, Samsung Pay, Google Pay, Walmart Pay, Cred UPI, Amazon Pay UPI and more',
      hasSubOptions: true,
      wallets: ['Paytm', 'PhonePe', 'Google Pay', 'Amazon Pay', 'Samsung Pay', 'JioMoney', 'OlaMoney', 'Freecharge', 'Mobikwik', 'Airtel Money', 'PayZapp', 'The RuPay UPI', 'Cash App']
    },
    {
      id: 'card',
      name: 'Credit & Debit Card',
      icon: <FaCreditCard />,
      description: 'Visa, Mastercard, American Express and more',
      fields: [
        { id: 'cardNumber', label: 'Card Number', type: 'text', placeholder: 'Enter your card number', required: true },
        { id: 'expiry', label: 'Expiry Date', type: 'text', placeholder: 'MM/YY', required: true },
        { id: 'cvv', label: 'CVV', type: 'text', placeholder: 'CVV', required: true }
      ]
    },
    {
      id: 'wallets',
      name: 'Wallets',
      icon: <FaWallet />,
      description: 'Amazon Pay Balance, Apple Pay, PayPal, Venmo, Samsung Wallet and more',
      hasSubOptions: true,
      wallets: ['Paytm', 'PhonePe', 'Google Pay', 'Amazon Pay', 'Samsung Pay', 'JioMoney', 'OlaMoney', 'Freecharge', 'Mobikwik', 'Airtel Money', 'PayZapp', 'The RuPay UPI', 'Cash App']
    }
  ];

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    if (method.hasSubOptions) {
      setPaymentStep('suboptions');
    } else if (method.fields) {
      setPaymentStep('form');
      const initialData = {};
      method.fields.forEach(field => {
        initialData[field.id] = '';
      });
      setPaymentFormData(initialData);
    }
  };

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet);
  };

  const handleUpiVerify = () => {
    const upiId = paymentFormData.upiId || '';
    if (upiId.includes('@') && upiId.length > 5) {
      if (upiId === 'invalid@upi') {
        setUpiVerified('invalid');
      } else {
        setUpiVerified(true);
      }
    }
  };

  const handlePaymentSubmit = () => {
    // Simulate payment processing
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% success rate
      if (success) {
        setPaymentStep('success');
      } else {
        setPaymentStep('failed');
      }
    }, 1500);
  };

  const handlePaymentFieldChange = (fieldId, value) => {
    setPaymentFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
    if (fieldId === 'upiId') {
      setUpiVerified(false);
    }
  };

  const handleBackToMethods = () => {
    setPaymentStep('method');
    setSelectedPaymentMethod(null);
    setSelectedWallet(null);
    setUpiVerified(false);
    setPaymentFormData({});
  };

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
    handleBackToMethods();
  };

  const faqCategories = [
    {
      id: 'global',
      icon: <FaGlobe />,
      title: 'Global Questions',
      subtitle: 'General app related help'
    },
    {
      id: 'matches',
      icon: <FaQuestionCircle />,
      title: 'Matches & Scores',
      subtitle: 'Live scores and results'
    },
    {
      id: 'schedule',
      icon: <FaCalendarAlt />,
      title: 'Match Schedule',
      subtitle: 'Upcoming matches and series'
    },
    {
      id: 'notifications',
      icon: <FaBell />,
      title: 'Notifications',
      subtitle: 'Manage match alerts'
    },
    {
      id: 'account',
      icon: <FaCrown />,
      title: 'Account & Plans',
      subtitle: 'Login and subscription help'
    },
    {
      id: 'streaming',
      icon: <FaFilm />,
      title: 'Streaming Issues',
      subtitle: 'Video and app performance'
    }
  ];

  const faqData = {
    global: [
      { id: 1, question: 'Is this app free?', answer: 'Basic features are absolutely free.' },
      { id: 2, question: 'How often does data update?', answer: 'Near real-time.' },
      { id: 3, question: 'Can I use app outside my country?', answer: 'Availability depends on region.' },
      { id: 4, question: 'Is my personal data safe?', answer: 'Yes, we follow security standards.' },
      { id: 5, question: 'How to contact customer support?', answer: 'Use Help & Support section.' },
      { id: 6, question: 'Can I give feedback?', answer: 'Yes, from Feedback option.' },
      { id: 7, question: 'App not opening at all', answer: 'Restart or reinstall app.' },
      { id: 8, question: 'How to check app version?', answer: 'Available in About section.' },
      { id: 9, question: 'Does app work on tablets?', answer: 'Yes, supported tablets.' },
      { id: 10, question: 'Will new features be added?', answer: 'Yes, regular updates are planned.' }
    ],
    matches: [
      { id: 1, question: 'Is the app free to use?', answer: 'Basic features are free, premium needs subscription.' },
      { id: 2, question: 'Why is the live score not updating right now?', answer: 'Live scores depend on real-time data feeds. Sometimes updates may be delayed due to network issues or delays from the official data provider. Refreshing the app usually fixes this.' },
      { id: 3, question: 'Match shows live but no balls are updating.', answer: 'This usually happens during drinks breaks, rain delays, or temporary data interruptions. The score will update automatically once play continues.' },
      { id: 4, question: 'Why is commentary missing for some matches?', answer: 'Commentary is added manually and may be available for every ball in certain matches.' },
      { id: 5, question: 'Final scoreboard not available yet.', answer: 'Please wait for official match confirmation.' },
      { id: 6, question: 'Can I see wagon wheel and pitch map?', answer: 'Advanced visuals are available only for selected matches and tournaments.' },
      { id: 7, question: 'Match result changed after some time.', answer: 'Results are updated once verified by official cricket boards.' },
      { id: 8, question: 'Why super over score came late?', answer: 'Super Over data is added separately after match validation.' },
      { id: 9, question: 'Did match data loading slowly.', answer: 'Older matches may take longer to load due to enriched data.' },
      { id: 10, question: 'Why match status says \'Stumps\'?', answer: 'This means the day\'s play has ended in a multi-day match.' }
    ],
    schedule: [
      { id: 1, question: 'Where can I see upcoming matches?', answer: 'You can view all upcoming matches from the Schedule section on the home screen.' },
      { id: 2, question: 'Match time changed suddenly.', answer: 'Match timings may change due to weather, travel delays, or official rescheduling.' },
      { id: 3, question: 'Tournament not showing in list.', answer: 'Some domestic or regional tournaments may not be supported yet.' },
      { id: 4, question: 'Why some matches show \'TBA\'?', answer: 'Venue or time is yet to be officially announced.' },
      { id: 5, question: 'Can I filter matches by team or league?', answer: 'Yes, filters are available to help you quickly find relevant matches.' },
      { id: 6, question: 'Past matches disappeared.', answer: 'Completed matches move to the results section automatically.' },
      { id: 7, question: 'Why is venue information missing?', answer: 'Venue details are added once confirmed by organizers.' },
      { id: 8, question: 'Are schedules updated automatically?', answer: 'Yes, schedules refresh as soon as official updates are received.' },
      { id: 9, question: 'Can I add matches to my calendar?', answer: 'This feature may be added in future updates.' },
      { id: 10, question: 'Why international and domestic matches mix together?', answer: 'You can separate them using tournament filters.' }
    ],
    notifications: [
      { id: 1, question: 'I am not getting any notifications.', answer: 'Please check both app notification settings and your phone\'s system notification permissions.' },
      { id: 2, question: 'Too many notifications coming.', answer: 'You can customize alerts such as wickets, match start, or results from settings.' },
      { id: 3, question: 'Match reminder did not arrive.', answer: 'Reminder notifications must be enabled at least a few minutes before match time.' },
      { id: 4, question: 'Can I turn off specific alerts like \'loss\' or \'wickets\'?', answer: 'Yes, each alert type can be individually turned on or off.' },
      { id: 5, question: 'Notifications are delayed.', answer: 'Delays may happen due to battery optimization or background restrictions.' },
      { id: 6, question: 'Why alerts stopped after app update?', answer: 'Sometimes permissions reset after updates. Please recheck settings.' },
      { id: 7, question: 'Do notifications work without internet?', answer: 'No, an active internet connection is required.' },
      { id: 8, question: 'Can I mute notifications at night?', answer: 'Use your phone\'s Do Not Disturb mode.' },
      { id: 9, question: 'Will notifications increase battery usage?', answer: 'Minimal battery impact under normal usage.' },
      { id: 10, question: 'Is there a master notification toggle?', answer: 'Yes, you can disable all notifications at once.' }
    ],
    account: [
      { id: 1, question: 'Do I need an account to use the app?', answer: 'You can view basic scores without login, but advanced features require an account.' },
      { id: 2, question: 'Subscription active but premium locked.', answer: 'Try logging out and logging back in to refresh your account.' },
      { id: 3, question: 'Can I change my subscription plan later?', answer: 'Yes, plans can be upgraded or changed via app store.' },
      { id: 4, question: 'Payment deducted but subscription not activated.', answer: 'Please contact support with transaction details.' },
      { id: 5, question: 'Can I use one account on multiple devices?', answer: 'Yes, but simultaneous usage may be limited.' },
      { id: 6, question: 'How to cancel my subscription?', answer: 'Subscriptions must be cancelled from your app store settings.' },
      { id: 7, question: 'Will I get a refund after cancelling?', answer: 'Refunds depend on store policy.' },
      { id: 8, question: 'How to update profile information?', answer: 'Go to Account > Profile.' },
      { id: 9, question: 'Can I delete my account permanently?', answer: 'Yes, from account settings or by contacting support.' },
      { id: 10, question: 'How to enter info in profile card?', answer: 'Yes, from account settings.' }
    ],
    streaming: [
      { id: 1, question: 'Live video not loading.', answer: 'Check your internet speed and try again.' },
      { id: 2, question: 'Video buffering frequently.', answer: 'Selecting to lower quality may help.' },
      { id: 3, question: 'App crashes during streaming.', answer: 'Please update the app to the latest version.' },
      { id: 4, question: 'Audio playing but video frozen.', answer: 'Restart the stream or reopen the app.' },
      { id: 5, question: 'Can I change streaming quality manually?', answer: 'Yes, from streaming settings.' },
      { id: 6, question: 'App feels slow.', answer: 'Clear cache and close background apps.' },
      { id: 7, question: 'Video stops on mobile data.', answer: 'Ensure background data is enabled.' },
      { id: 8, question: 'Picture-in-Picture not working.', answer: 'Device support is required.' },
      { id: 9, question: 'App heating phone.', answer: 'Long streaming sessions may cause temporary heating.' },
      { id: 10, question: 'Which devices are supported?', answer: 'Most modern Android and iOS devices.' }
    ]
  };

  const aboutCategories = [
    {
      id: 'about',
      title: 'About the App'
    },
    {
      id: 'features',
      title: 'Features'
    },
    {
      id: 'data',
      title: 'Data & Accuracy'
    },
    {
      id: 'privacy',
      title: 'Privacy & Security'
    },
    {
      id: 'appinfo',
      title: 'App Information'
    }
  ];

  const aboutData = {
    about: [
      { title: 'What is CRICK.LIVE', content: 'CRICK.LIVE is a dedicated cricket information app created for fans who want instant access to match scores, schedules, and key moments without unnecessary distractions. The app focuses on speed, clarity, and reliability so users can quickly absorb what\'s happening in a match at any time.' },
      { title: 'Built for Cricket Fans', content: 'Whether you follow international tournaments, domestic leagues, or local series, CRICK.LIVE brings essential match information into a single, easy-to-use platform. The app is designed for both casual viewers and dedicated cricket followers.' },
      { title: 'Simple by Design', content: 'We believe sports apps should be fast and easy to understand. Every screen in CRICK.LIVE is designed to reduce clutter, improve readability, and make navigation intuitive, especially during live matches.' },
      { title: 'Continuous Improvement', content: 'CRICK.LIVE is actively maintained and updated. We regularly improve data quality, performance, and usability based on user feedback and usage patterns.' },
      { title: 'Always-On Match Access', content: 'CRICK.LIVE is designed to be your quick check-in app. Whether you have a few seconds or a few minutes, you can instantly see match status, scores, and results without navigating through complex screens.' },
      { title: 'Built for Speed', content: 'The app prioritizes fast loading and responsive interactions. Pages are optimized to open quickly even on slower networks, making it reliable during live matches.' },
      { title: 'Focused Experience', content: 'CRICK.LIVE avoids unnecessary content and distractions. Every feature exists to support one goal: helping users stay informed about cricket with minimal effort.' },
      { title: 'Evolving Platform', content: 'The app continues to evolve with improvements in data handling, UI clarity, and feature stability to match user expectations over time.' }
    ],
    features: [
      { title: 'Live Scores & Commentary', content: 'Follow ongoing matches with live scores and ball-by-ball updates. Key moments such as wickets, boundaries, and milestones are highlighted to help you stay informed even when you cannot watch the match.' },
      { title: 'Match Schedules & Results', content: 'View upcoming matches, full tournament schedules, and completed match results. Match timings are shown clearly to help you plan ahead.' },
      { title: 'Smart Notifications', content: 'Enable notifications for match starts, wickets, innings breaks, and final results. Notification preferences can be customized so you only receive alerts that matter to you.' },
      { title: 'Detailed Scorecards', content: 'Browse complete scorecards including team totals, individual player performance, and match summaries. Data is presented in a clear and structured format for easy reading.' },
      { title: 'Performance Optimized', content: 'The app is optimized for smooth performance, low data usage, and stable operation across a wide range of devices. Dark mode support ensures comfortable viewing in all lighting conditions.' },
      { title: 'Match Overview Screens', content: 'Each match includes a clear overview showing losing current status, scores, and match progress, allowing users to understand the situation at a glance.' },
      { title: 'Tournament Tracking', content: 'Users can follow tournaments and series, through structured listings, making it easy to track progress across multiple matches.' },
      { title: 'Custom Notification Flow', content: 'Notifications are designed to be informative without being intrusive. Users can filter these alerts based on their preferences.' },
      { title: 'Consistent UI Design', content: 'The app maintains consistent layouts, typography, and spacing across all screens to ensure a smooth and predictable user experience.' },
      { title: 'Optimized for Long Sessions', content: 'CRICK.LIVE is stable for extended usage during long matches, minimizing crashes and performance drops.' }
    ],
    data: [
      { title: 'Trusted Data Sources', content: 'CRICK.LIVE relies on reliable cricket data providers to deliver match information, scores, and statistics. Data is continuously monitored and updated as matches progress.' },
      { title: 'Real-Time Updates', content: 'Live match data is updated in near real-time. Minor delays may occur depending on network conditions, data availability, or official confirmation processes.' },
      { title: 'Official Confirmation', content: 'Match results, player statistics, and tournament standings are finalized only after official verification. This ensures accuracy, even if updates appear slightly later than live broadcasts.' },
      { title: 'Data Limitations', content: 'Some matches, especially lower-tier or regional games, may have limited data coverage. Advanced statistics and visuals may not be available for all matches.' },
      { title: 'Live Data Processing', content: 'Live match information is processed continuously and displayed as it becomes available. Updates may appear in stages rather than all at once.' },
      { title: 'Handling Interruptions', content: 'Network delays, breaks, or match interruptions are reflected in the app based on official match status updates.' },
      { title: 'Data Consistency', content: 'The app ensures consistency across scores, commentary, and summaries to avoid conflicting information.' },
      { title: 'Accuracy Over Speed', content: 'In cases where there is a trade-off, accuracy is prioritized over instant display.' }
    ],
    privacy: [
      { title: 'User Privacy Commitment', content: 'Your privacy is important to us. CRICK.LIVE is designed to collect only the information necessary to operate core features and improve app performance.' },
      { title: 'Information We Collect', content: 'This may include basic project details, device information, and usage data. We do not collect sensitive personal information unless explicitly required for a feature.' },
      { title: 'Data Protection', content: 'All user data is stored securely and protected using standard security practices. We take reasonable measures to prevent unauthorized access, loss, or misuse of information.' },
      { title: 'Transparency & Control', content: 'Users can manage account settings and notification preferences directly within the app. We aim to be transparent about how data is used and who it is needed.' },
      { title: 'Responsible Data Usage', content: 'CRICK.LIVE uses collected data solely to improve functionality, reliability, and user experience within the app.' },
      { title: 'Limited Permissions', content: 'The app requests only essential permissions required for notifications, basic functionality, and performance monitoring.' },
      { title: 'Secure Communication', content: 'Standard security practices are used to protect communication between the app and its services.' },
      { title: 'User Transparency', content: 'Users are informed about how and why data is used, ensuring clarity and trust.' },
      { title: 'Preference Management', content: 'Users can control notification preferences, and account-related settings at all times.' }
    ],
    appinfo: [
      { title: 'Application Details', content: 'App Name: CRICK.LIVE\nCategory: Sports\nPlatform: Android & iOS' },
      { title: 'Version & Updates', content: 'The app is regularly updated to fix issues, improve stability, and introduce new features. We recommend keeping the app updated for the best experience.' },
      { title: 'Compatibility', content: 'CRICK.LIVE supports most modern smartphones and tablets. Performance may vary depending on device specifications and operating system version.' },
      { title: 'Support & Feedback', content: 'If you experience issues or have suggestions, you can contact us through the Help & Support section. User feedback plays a key role in shaping future updates.' },
      { title: 'Update Cycle', content: 'Updates are released periodically to address bugs, improve stability, and enhance existing features.' },
      { title: 'Feature Availability', content: 'Some features may be introduced gradually or tested with a limited user group before a full rollout.' },
      { title: 'Device Support', content: 'The app is designed to work across a wide range of devices, though performance may vary depending on hardware and OS version.' },
      { title: 'Network Dependency', content: 'Certain features require an active internet connection to function correctly.' },
      { title: 'Future Improvements', content: 'CRICK.LIVE is actively developed, with plans to expand features and coverage based on user demand.' }
    ]
  };

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
                  <button className="z_sett_subs_continue_btn" onClick={() => setShowPaymentModal(true)}>Continue</button>
                </div>
              </div>
            </div>

            {/* Payment Method Modal */}
            {showPaymentModal && (
              <>
                <div className="z_sett_payment_modal_overlay" onClick={handleClosePaymentModal}></div>
                <div className="z_sett_payment_modal">
                  <div className="z_sett_payment_modal_header">
                    {paymentStep !== 'method' && (
                      <button className="z_sett_payment_modal_back" onClick={handleBackToMethods}>
                        <FaChevronRight style={{ transform: 'rotate(180deg)' }} />
                      </button>
                    )}
                    <h4 className="z_sett_payment_modal_title">
                      {paymentStep === 'method' && 'Select Payment Method'}
                      {paymentStep === 'suboptions' && selectedPaymentMethod?.name}
                      {paymentStep === 'upi-form' && 'Pay using UPI App'}
                      {paymentStep === 'form' && `Pay with ${selectedPaymentMethod?.name}`}
                      {paymentStep === 'success' && 'Payment Successful'}
                      {paymentStep === 'failed' && 'Payment Failed'}
                    </h4>
                    <button 
                      className="z_sett_payment_modal_close"
                      onClick={handleClosePaymentModal}
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <div className="z_sett_payment_modal_body">
                    {paymentStep === 'method' && (
                      <div className="z_sett_payment_methods_main">
                        <div className="z_sett_payment_total_header">
                          <span>Total Payable</span>
                          <span>${payable}</span>
                        </div>
                        <div className="z_sett_payment_methods_main_list">
                          {paymentMethods.map((method) => (
                            <div
                              key={method.id}
                              className="z_sett_payment_method_main_item"
                              onClick={() => handlePaymentMethodSelect(method)}
                            >
                              <div className="z_sett_payment_method_main_left">
                                <div className="z_sett_payment_method_main_icon">{method.icon}</div>
                                <div className="z_sett_payment_method_main_content">
                                  <div className="z_sett_payment_method_main_name">{method.name}</div>
                                  <div className="z_sett_payment_method_main_desc">{method.description}</div>
                                </div>
                              </div>
                              <FaChevronRight className="z_sett_payment_method_main_arrow" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {paymentStep === 'suboptions' && selectedPaymentMethod && (
                      <div className="z_sett_payment_suboptions">
                        <div className="z_sett_payment_suboptions_list">
                          {selectedPaymentMethod.wallets.map((wallet) => (
                            <div
                              key={wallet}
                              className={`z_sett_payment_wallet_item ${selectedWallet === wallet ? 'z_sett_payment_wallet_item_active' : ''}`}
                              onClick={() => handleWalletSelect(wallet)}
                            >
                              <div className="z_sett_payment_wallet_icon">
                                {getWalletIcon(wallet)}
                              </div>
                              <div className="z_sett_payment_wallet_circle"></div>
                              <span className="z_sett_payment_wallet_name">{wallet}</span>
                            </div>
                          ))}
                        </div>
                        <div className="z_sett_payment_suboptions_footer">
                          <button className="z_sett_payment_submit_btn" onClick={() => {
                            if (selectedPaymentMethod.id === 'upi') {
                              setPaymentStep('upi-form');
                              setPaymentFormData({ upiId: '' });
                            } else {
                              handlePaymentSubmit();
                            }
                          }}>
                            Pay ${payable}
                          </button>
                          <p className="z_sett_payment_terms">
                            By continuing, you'll agree to our Terms and Conditions and Privacy Policy.
                          </p>
                        </div>
                      </div>
                    )}

                    {paymentStep === 'upi-form' && (
                      <div className="z_sett_payment_upi_form">
                        <div className="z_sett_payment_form_field">
                          <label className="z_sett_payment_form_label">UPI ID</label>
                          <div className="z_sett_payment_upi_input_wrapper">
                            <input
                              type="text"
                              className={`z_sett_payment_form_input ${upiVerified === true ? 'z_sett_payment_input_valid' : ''} ${upiVerified === 'invalid' ? 'z_sett_payment_input_invalid' : ''}`}
                              placeholder="Enter your UPI ID"
                              value={paymentFormData.upiId || ''}
                              onChange={(e) => handlePaymentFieldChange('upiId', e.target.value)}
                            />
                            {upiVerified === true && (
                              <FaCheck className="z_sett_payment_input_check" />
                            )}
                            {upiVerified === 'invalid' && (
                              <FaTimes className="z_sett_payment_input_error" />
                            )}
                          </div>
                          {upiVerified === 'invalid' && (
                            <div className="z_sett_payment_error_text">INVALID UPI ID</div>
                          )}
                        </div>
                        <p className="z_sett_payment_security_text">
                          Your UPI ID is secured with 128-bit encryption.
                        </p>
                        <button
                          className={`z_sett_payment_upi_verify_btn ${upiVerified === true ? 'z_sett_payment_upi_proceed_btn' : ''} ${upiVerified === 'invalid' ? 'z_sett_payment_upi_retry_btn' : ''}`}
                          onClick={upiVerified === true ? handlePaymentSubmit : handleUpiVerify}
                        >
                          {upiVerified === true ? `Proceed to Pay $${payable}` : upiVerified === 'invalid' ? 'Re-enter UPI ID' : 'Verify UPI ID'}
                        </button>
                      </div>
                    )}

                    {paymentStep === 'form' && selectedPaymentMethod && (
                      <div className="z_sett_payment_card_form">
                        <div className="z_sett_payment_form_fields">
                          {selectedPaymentMethod.fields.map((field) => (
                            <div key={field.id} className="z_sett_payment_form_field">
                              <label className="z_sett_payment_form_label">{field.label}</label>
                              <input
                                type={field.type}
                                className="z_sett_payment_form_input"
                                placeholder={field.placeholder}
                                value={paymentFormData[field.id] || ''}
                                onChange={(e) => handlePaymentFieldChange(field.id, e.target.value)}
                                required={field.required}
                              />
                            </div>
                          ))}
                        </div>
                        <p className="z_sett_payment_security_text">
                          Your card details are secured with 128-bit encryption.
                        </p>
                        <button className="z_sett_payment_submit_btn" onClick={handlePaymentSubmit}>
                          Pay ${payable}
                        </button>
                      </div>
                    )}

                    {paymentStep === 'success' && (
                      <div className="z_sett_payment_result">
                        <div className="z_sett_payment_result_icon z_sett_payment_success_icon">
                          <FaCheck />
                        </div>
                        <h3 className="z_sett_payment_result_title">Payment Successful</h3>
                        <p className="z_sett_payment_result_desc">
                          Your transaction has been successfully completed. You will receive a confirmation email shortly.
                        </p>
                        <div className="z_sett_payment_result_details">
                          <div className="z_sett_payment_result_row">
                            <span>Amount:</span>
                            <span>${payable}</span>
                          </div>
                          <div className="z_sett_payment_result_row">
                            <span>Transaction ID:</span>
                            <span>UPI_ORDER_{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                          </div>
                          <div className="z_sett_payment_result_row">
                            <span>Date:</span>
                            <span>{new Date().toLocaleDateString()}</span>
                          </div>
                          <div className="z_sett_payment_result_row">
                            <span>Time:</span>
                            <span>{new Date().toLocaleTimeString()}</span>
                          </div>
                          {selectedPaymentMethod?.id === 'upi' && paymentFormData.upiId && (
                            <div className="z_sett_payment_result_row">
                              <span>UPI ID:</span>
                              <span>{paymentFormData.upiId}</span>
                            </div>
                          )}
                        </div>
                        <button className="z_sett_payment_result_btn" onClick={handleClosePaymentModal}>
                          Continue to Home
                        </button>
                      </div>
                    )}

                    {paymentStep === 'failed' && (
                      <div className="z_sett_payment_result">
                        <div className="z_sett_payment_result_icon z_sett_payment_failed_icon">
                          <FaTimes />
                        </div>
                        <h3 className="z_sett_payment_result_title">Payment Failed</h3>
                        <p className="z_sett_payment_result_desc">
                          We were unable to complete your payment. If you believe this is an error, please try again.
                        </p>
                        <div className="z_sett_payment_result_details">
                          <div className="z_sett_payment_result_row">
                            <span>Error Code:</span>
                            <span>UPI_ORDER_{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                          </div>
                          <div className="z_sett_payment_result_row">
                            <span>Reason:</span>
                            <span>Bank server is not responding.</span>
                          </div>
                        </div>
                        <button className="z_sett_payment_result_btn" onClick={handlePaymentSubmit}>
                          Try Again
                        </button>
                        <button className="z_sett_payment_result_link" onClick={handleBackToMethods}>
                          Use Different Payment Method
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}

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
        const qualityOptions = [
          { id: 'auto', label: 'Auto', recommended: true },
          { id: 'fullhd50', label: 'Full HD (Upto 1080p 50fps)', desc: '' },
          { id: 'fullhd25', label: 'Full HD (Upto 1080p 25fps)', desc: '' },
          { id: 'hd', label: 'HD (Upto 720p)', desc: '' },
          { id: 'datasaver', label: 'Data Saver', desc: '' }
        ];

        return (
          <>
            <div className="z_sett_tab_card">
              <h3 className="z_sett_tab_title">Streaming Quality</h3>
              <p className="z_sett_tab_text">
                Optimise your video quality based on your network and data usage.
              </p>
              <button
                className="z_sett_streaming_btn"
                onClick={() => setShowStreamingModal(true)}
              >
                Change Quality Settings
              </button>
            </div>

            {/* Video Settings Modal */}
            {showStreamingModal && (
              <>
                <div className="z_sett_streaming_modal_overlay" onClick={() => setShowStreamingModal(false)}></div>
                <div className="z_sett_streaming_modal">
                  <div className="z_sett_streaming_modal_header">
                    <h4 className="z_sett_streaming_modal_title">Video Settings</h4>
                    <button
                      className="z_sett_streaming_modal_close"
                      onClick={() => setShowStreamingModal(false)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                  <div className="z_sett_streaming_modal_body">
                    {qualityOptions.map((option) => {
                      const isSelected = selectedQuality === option.id;
                      return (
                        <div
                          key={option.id}
                          className={`z_sett_streaming_option ${isSelected ? 'z_sett_streaming_option_selected' : ''}`}
                          onClick={() => setSelectedQuality(option.id)}
                        >
                          {isSelected && (
                            <FaCheck className="z_sett_streaming_check" />
                          )}
                          <div className="z_sett_streaming_option_content">
                            <div className="z_sett_streaming_option_label">
                              {option.label}
                              {option.recommended && (
                                <span className="z_sett_streaming_recommended"> (Recommended)</span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </>
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
        const currentFaqs = faqData[selectedFaqCategory] || [];
        return (
          <div className="z_sett_help_wrapper">
            {/* FAQ Category Cards - Nav Row */}
            <div className="z_sett_faq_nav_row">
              {faqCategories.map((category) => (
                <div
                  key={category.id}
                  className={`z_sett_faq_nav_card ${selectedFaqCategory === category.id ? 'z_sett_faq_nav_card_active' : ''}`}
                  onClick={() => {
                    setSelectedFaqCategory(category.id);
                    setExpandedFaq(null);
                  }}
                >
                  <div className="z_sett_faq_nav_icon">{category.icon}</div>
                  <div className="z_sett_faq_nav_title">{category.title}</div>
                  <div className="z_sett_faq_nav_subtitle">{category.subtitle}</div>
                </div>
              ))}
            </div>

            {/* FAQ Accordion - Tab Content */}
            <div className="z_sett_faq_accordion">
              <h3 className="z_sett_faq_accordion_title">FAQ's</h3>
              <div className="z_sett_faq_accordion_list">
                {currentFaqs.map((faq) => {
                  const isExpanded = expandedFaq === faq.id;
                  return (
                    <div key={faq.id} className="z_sett_faq_item">
                      <div
                        className="z_sett_faq_question"
                        onClick={() => setExpandedFaq(isExpanded ? null : faq.id)}
                      >
                        <span className="z_sett_faq_question_text">{faq.question}</span>
                        {isExpanded ? (
                          <FaMinus className="z_sett_faq_icon" />
                        ) : (
                          <FaPlus className="z_sett_faq_icon" />
                        )}
                      </div>
                      {isExpanded && (
                        <div className="z_sett_faq_answer">{faq.answer}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      case 'about':
      default:
        const currentAboutContent = aboutData[selectedAboutCategory] || [];
        return (
          <div className="z_sett_about_wrapper">
            {/* About Category Nav - Horizontal Row */}
            <div className="z_sett_about_nav_row">
              {aboutCategories.map((category) => (
                <div
                  key={category.id}
                  className={`z_sett_about_nav_item ${selectedAboutCategory === category.id ? 'z_sett_about_nav_item_active' : ''}`}
                  onClick={() => setSelectedAboutCategory(category.id)}
                >
                  <span className="z_sett_about_nav_text">{category.title}</span>
                </div>
              ))}
            </div>

            {/* About Content - Below Navs */}
            <div className="z_sett_about_content">
              <div className="z_sett_about_header">
                <FaChevronRight className="z_sett_about_back_icon" style={{ transform: 'rotate(180deg)' }} />
                <h3 className="z_sett_about_title">
                  {aboutCategories.find(c => c.id === selectedAboutCategory)?.title || 'About'}
                </h3>
              </div>
              <div className="z_sett_about_sections">
                {currentAboutContent.map((section, index) => (
                  <div key={index} className="z_sett_about_section">
                    <h4 className="z_sett_about_section_title">{section.title}</h4>
                    <p className="z_sett_about_section_content">
                      {section.content.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < section.content.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
                  <FaChevronRight className="z_sett_arrow" />
                </div>
              </div>
            ))}
            <hr />

            {/* We're Here to Help */}
            <div className="z_help_wrapper">
              <h2 className="z_help_title">We're Here to Help</h2>

              {/* CALL */}
              <a
                href="tel:02227610846"
                className="z_help_card z_help_link"
              >
                <div className="z_help_icon"><IoCallOutline /></div>
                <div className="z_help_text">
                  <span className="z_help_label">Our 24x7 Customer Service</span>
                  <span className="z_help_value">02227610846</span>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:support@cricklive.com"
                className="z_help_card z_help_link"
              >
                <div className="z_help_icon"><IoMailOpenOutline /></div>
                <div className="z_help_text">
                  <span className="z_help_label">Write us at</span>
                  <span className="z_help_value">support@cricklive.com</span>
                </div>
              </a>
            </div>


          </div>
        </div>
        <div className="col-12 col-md-7 col-lg-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}