

import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sendOtp, signUp } from "../services/operations/authAPI";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, signupData } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
        contactNumber,
      confirmPassword,
    } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,

        password,
          contactNumber,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-richblack-900 text-white px-4">
      {loading ? (
        <div className="text-white text-xl">Loading...</div>
      ) : (
        <div className="max-w-md w-full bg-richblack-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-semibold text-center mb-4">Verify Email</h1>
          <p className="text-sm text-richblack-200 text-center mb-6">
            A verification code has been sent to your email. Enter the code below.
          </p>

          <form onSubmit={handleOnSubmit} className="flex flex-col items-center">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-10 h-10 m-1 text-center border border-richblack-300 rounded bg-richblack-700 text-white focus:outline-none focus:ring-1 focus:ring-yellow-50"
                />
              )}
              inputStyle=""
              shouldAutoFocus
            />
            <button
              type="submit"
              className="mt-6 bg-yellow-50 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-100 transition-all"
            >
              Verify Email
            </button>
          </form>

          <div className="mt-6 flex justify-between items-center text-sm">
            <Link to="/login" className="text-blue-100 hover:underline">
              &larr; Back to Login
            </Link>

            <button
              onClick={() => dispatch(sendOtp(signupData.email,navigate))}
              className="text-yellow-50 hover:underline"
            >
              Resend Code
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
