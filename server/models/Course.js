// const mongoose = require("mongoose");

// const courseSchema=new mongoose({
//     courseName:{
//        type:String,
//        trim:true, 
//     },
//     courseDescription:{
//         type:String,
//         trim:true,
//     },
//     instructor:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//         reqired:true,
//     },
//     whatYouWillLearn:{
//         type:String,
//     },
//     courseContent:[{
//      type:mongoose.Schema.Types.ObjectId,
//         ref:"Section",
       
//     }],
//     ratingAndReviews:[{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"RatingAndReview",
//         reqired:true,
//     }],
//     price:{
//         title:Number,
//         required:true,

//     },
//     thumbnail:{
//         title:String,

//     },
//     tag:{
//         type:[String],
//         required:true,
//     },
//     category:{
//             type:mongoose.Schema.Types.ObjectId,
//         ref:"Category",
//         // reqired:true,
//     },
//     studentsEnrolled:[{
//               type:mongoose.Schema.Types.ObjectId,
//         ref:"User",
//         reqired:true,
//     }],
//     instructions:{
//         type:[String],
//     },
//     status:{
//         type:String,
//         enum:["Draft","Published"
//         ],
//     },
    

// });

// module.exports=mongoose.model("Course",courseSchema);




const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    trim: true,
    required: true,
  },
  courseDescription: {
    type: String,
    trim: true,
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  whatYouWillLearn: {
    type: String,
    required: true,
  },
  courseContent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    }
  ],
  ratingAndReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RatingAndReview",
    }
  ],
  price: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  tag: {
    type: [String],
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  studentsEnrolled: [
    {
      type: mongoose.Schema.Types.ObjectId,
       required: true,
      ref: "User",
      
    }
  ],
  instructions: {
    type: [String],
    default: [],
  },
  status: {
    type: String,
    enum: ["Draft", "Published"],
    default: "Draft",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Course", courseSchema);
