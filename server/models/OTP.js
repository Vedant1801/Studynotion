const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");


const OTPSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true,
  },
  otp:{
    type:String,
    required:true,
  },
  createAt:{
    type:Date,
    default:Date.now(),
    expires:5*60,
  }

});

//a function -> to send emails
async function sendverificationEmail(email,otp){
    try{
       const mailResponse=await mailSender(email,"verification email from studyNotion",otp);
       console.log("email sent successfully",mailResponse);
    }
    catch(error){
        console.log("error occured while sending mails:",error);
        throw error;
    }
}

//pre
OTPSchema.pre("save",async function (next) {
    await sendverificationEmail(this.email,this.otp);
    next();
})



module.exports=mongoose.model("OTP",OTPSchema);