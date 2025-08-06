
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../services/operations/authAPI';
import { useLocation, Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'; 

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const location = useLocation();
  const { loading } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { password, confirmPassword } = formData;

  const handleOnChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const token = location.pathname.split("/").at(-1);
    dispatch(resetPassword(password, confirmPassword, token,navigate));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-richblack-900 px-4">
      {loading ? (
        <div className="text-white text-xl">Loading...</div>
      ) : (
        <div className="w-full max-w-md bg-richblack-800 p-8 rounded-md shadow-lg text-richblack-5">
          <h1 className="text-2xl font-semibold text-center mb-2">Choose New Password</h1>
          <p className="text-sm text-richblack-200 text-center mb-6">
            Almost done. Enter your new password and you're all set.
          </p>
          <form onSubmit={handleOnSubmit} className="space-y-6">
            {/* Password */}
            <div className="relative">
              <label className="block mb-1 text-sm">New Password <sup className="text-pink-200">*</sup></label>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter password"
                className="w-full px-3 py-2 bg-richblack-700 rounded-md text-white focus:outline-none"
              />
              <span
                className="absolute top-9 right-3 cursor-pointer text-xl text-richblack-200"
                onClick={() => setShowPassword(prev => !prev)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block mb-1 text-sm">Confirm Password <sup className="text-pink-200">*</sup></label>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
                placeholder="Confirm password"
                className="w-full px-3 py-2 bg-richblack-700 rounded-md text-white focus:outline-none"
              />
              <span
                className="absolute top-9 right-3 cursor-pointer text-xl text-richblack-200"
                onClick={() => setShowConfirmPassword(prev => !prev)}
              >
                {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-50 text-richblack-900 py-2 rounded-md font-medium hover:bg-yellow-100 transition-all"
            >
              Reset Password
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link to="/login" className="text-blue-100 hover:underline text-sm">
              &larr; Back to Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;


