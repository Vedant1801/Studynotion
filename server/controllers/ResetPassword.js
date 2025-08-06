const User=require("../models/User");
const mailSender=require("../utils/mailSender");
const crypto=require("crypto");

const bcrypt = require("bcrypt");

//resetpasswordtoken
exports.resetPasswordToken=async(req,res)=>{
try{
    //get email from req body

    const email=req.body.email;
    //check user for this email,email validation
      const user=await User.findOne({email:email});
      if(!user){
        return res.json({
            success:false,
            message :"your email is not registered ",
        })
      }

    //generate token
    const token=crypto.randomUUID();
    //update user by adding token and expiration time
    const updatedDetails=await User.findOneAndUpdate({email:email},

        {
            token:token,
            resetPasswordExpires:Date.now() + 5*60*1000,
        },

        {
            new:true
        }
    );
    //create url
    const url=`http://localhost:3000/update-password/${token}`
    //send mail containing the url
    await mailSender(email,"Password Reset Link",`Password Reset Link: ${url}`);
    //return response
    return res.json(
        {
            success:true,
            message:"email sent successfully , please check email and change password",
        }
    )
}
catch(error){
console.log(error);
return res.status(500).json(
    {
   success:false,
    message:"something went wrong while sending "
   
})
}
};








// Reset Password Controller
exports.resetPassword = async (req, res) => {
    try {
        const { token, password, confirmPassword } = req.body;

        // Validate input
        if (!token || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match",
            });
        }

        // Find user by token
        const userDetails = await User.findOne({ token :token});

        if (!userDetails) {
            return res.status(400).json({
                success: false,
                message: "Invalid token",
            });
        }

        // Check if token is expired
        if (userDetails.resetPasswordExpires < Date.now()) {
            return res.status(400).json({
                success: false,
                message: "Token has expired",
            });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update password and clear token fields
       await User.findOneAndUpdate(
        {token:token},
        {password:hashedPassword},
        {new:true},
       );
      

        return res.status(200).json({
            success: true,
            message: "Password has been reset successfully",
        });

    } catch (error) {
        console.error("Error resetting password:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while resetting password",
        });
    }
};
