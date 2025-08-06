

// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { getPasswordResetToken } from '../services/operations/authAPI'
// import "../App.css"




// const ForgotPassword = () => {
//   const [emailSent, setEmailSent] = useState(false);
//   const [email, setEmail] = useState("");
//   const { loading } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     dispatch(getPasswordResetToken(email, setEmailSent));
//   }

//   return (
//     <div className='min-h-screen flex items-center justify-center bg-richblack-900 text-richblack-5 px-4 '>
//       {
//         loading ? (
//           <div className="text-xl font-semibold text-yellow-50 spinner"></div>
//         ) : (
//           <div className='w-full max-w-[500px] space-y-6'>
//             <div className='space-y-2'>
//               <h1 className='text-3xl font-bold'>
//                 {emailSent ? "Check your Email" : "Reset your password"}
//               </h1>
//               <p className='text-richblack-200 text-sm'>
//                 {
//                   emailSent
//                     ? `We have sent the reset email to ${email}`
//                     : "Have no fear. We’ll email you instructions to reset your password. If you don’t have access to your email we can try account recovery."
//                 }
//               </p>
//             </div>

//             <form onSubmit={handleOnSubmit} className='space-y-4'>
//               {!emailSent && (
//                 <label className='block w-full'>
//                   <p className='mb-1 text-[0.875rem] text-richblack-5'>
//                     Email Address <sup className="text-pink-200">*</sup>
//                   </p>
//                   <input
//                     required
//                     type='email'
//                     name='email'
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder='Enter your email address'
//                     className='w-full rounded-md bg-richblack-800 p-3 text-richblack-5 border border-richblack-600 focus:outline-none focus:ring-1 focus:ring-yellow-50'
//                   />
//                 </label>
//               )}

//               <button
//                 type="submit"
//                 className='w-full bg-yellow-50 text-richblack-900 py-2 rounded-md font-semibold hover:bg-yellow-100 transition-all duration-200'
//               >
//                 {emailSent ? "Resend Email" : "Reset Password"}
//               </button>
//             </form>

//             <div className='text-center'>
//               <Link to="/login">
//                 <p className='text-sm text-blue-100 hover:underline'>&larr; Back to login</p>
//               </Link>
//             </div>
//           </div>
//         )
//       }
//     </div>
//   )
// }

// export default ForgotPassword;



import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';
import "../App.css";

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-richblack-900 text-richblack-5 px-4 md:px-6">
      {loading ? (
        <div className="text-xl font-semibold text-yellow-50 spinner">Loading...</div>
      ) : (
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-center">
              {emailSent ? "Check your Email" : "Reset your password"}
            </h1>
            <p className="text-richblack-200 text-sm md:text-base text-center">
              {emailSent
                ? `We have sent the reset email to ${email}`
                : "Have no fear. We’ll email you instructions to reset your password. If you don’t have access to your email we can try account recovery."}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleOnSubmit} className="space-y-4">
            {!emailSent && (
              <label className="block w-full">
                <p className="mb-1 text-sm text-richblack-5">
                  Email Address <sup className="text-pink-200">*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-md bg-richblack-800 p-3 text-richblack-5 border border-richblack-600 focus:outline-none focus:ring-1 focus:ring-yellow-50"
                />
              </label>
            )}

            <button
              type="submit"
              className="w-full bg-yellow-50 text-richblack-900 py-2 rounded-md font-semibold hover:bg-yellow-100 transition-all duration-200"
            >
              {emailSent ? "Resend Email" : "Reset Password"}
            </button>
          </form>

          {/* Navigation */}
          <div className="text-center">
            <Link to="/login">
              <p className="text-sm text-blue-100 hover:underline">&larr; Back to login</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
