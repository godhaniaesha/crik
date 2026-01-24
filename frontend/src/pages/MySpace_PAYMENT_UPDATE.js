// This is a reference file showing the complete payment modal structure
// Replace the payment modal section in MySpace.js with this code

{/* Payment Method Modal */}
{showPaymentModal && (
  <>
    <div className="z_sett_payment_modal_overlay" onClick={() => {
      setShowPaymentModal(false);
      handleBackToMethods();
    }}></div>
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
          onClick={() => {
            setShowPaymentModal(false);
            handleBackToMethods();
          }}
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
            <p className="z_sett_payment_security_text">
              Your UPI ID is secured with 128-bit encryption.
            </p>
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
            <button className="z_sett_payment_result_btn" onClick={() => {
              setShowPaymentModal(false);
              handleBackToMethods();
            }}>
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
