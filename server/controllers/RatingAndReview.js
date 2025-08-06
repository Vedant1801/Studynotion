const RatingAndReview = require("../models/RatingAndReview");
const Course = require("../models/Course");
const mongoose =require("mongoose")

// exports.createRatingAndReview = async (req, res) => {
//     try {
//         const userId = req.user.id;
//         const { rating, review, courseId } = req.body;

    
//         //check if user is enrolled or not
//         const courseDetails=await Course.findOne({
//             _id:courseId,
//             studentsEnrolled:{$elemMatch:{$eq:userId}},
//         })
//         if(!courseDetails){
//                return res.status(403).json({
//                 success: false,
//                 message: "student is not enrolled in the course",
//             });
//         }
//         // Check if user already reviewed this course
//         const alreadyReviewed = await RatingAndReview.findOne({
//             user: userId,
//             course: courseId,
//         });

//         if (alreadyReviewed) {
//             return res.status(403).json({
//                 success: false,
//                 message: "You have already reviewed this course",
//             });
//         }

//         // Create review
//         const ratingReview = await RatingAndReview.create({
//             user: userId,
//             course: courseId,
//             rating,
//             review,
//         });

//         // Add review to the course's ratings array
//      const updatedCourseDetails =   await Course.findByIdAndUpdate(
//            {_id:courseId},
//             {
//                 $push: {
//                     ratingAndReviews: ratingReview._id,
//                 }
//             },
//             { new: true }
//         );
//         console.log(updatedCourseDetails);
//         return res.status(201).json({
//             success: true,
//             message: "Review submitted successfully",
//             ratingReview,
//         });

//         // // Recalculate average rating for the course
//         // const courseReviews = await RatingAndReview.find({ course: courseId });
//         // const totalRating = courseReviews.reduce((sum, item) => sum + item.rating, 0);
//         // const avgRating = totalRating / courseReviews.length;

//         // // Save updated average rating
//         // await Course.findByIdAndUpdate(courseId, { averageRating: avgRating });

        

//     } catch (error) {
//         console.error("Error creating rating/review:", error);
//         return res.status(500).json({
//             success: false,
//             message: "Internal Server Error",
//             error: error.message,
//         });
//     }
// };

//getAverageRating

exports.createRating = async (req, res) => {
  try {
    const userId = req.user.id
    const { rating, review, courseId } = req.body

    // Check if the user is enrolled in the course

    const courseDetails = await Course.findOne({
      _id: courseId,
      studentsEnrolled: { $elemMatch: { $eq: userId } },
    })

    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: "Student is not enrolled in this course",
      })
    }

    // Check if the user has already reviewed the course
    const alreadyReviewed = await RatingAndReview.findOne({
      user: userId,
      course: courseId,
    })

    if (alreadyReviewed) {
      return res.status(403).json({
        success: false,
        message: "Course already reviewed by user",
      })
    }

    // Create a new rating and review
    const ratingReview = await RatingAndReview.create({
      rating,
      review,
      course: courseId,
      user: userId,
    })

    // Add the rating and review to the course
    await Course.findByIdAndUpdate(courseId, {
      $push: {
        ratingAndReviews: ratingReview,
      },
    })
    await courseDetails.save()

    return res.status(201).json({
      success: true,
      message: "Rating and review created successfully",
      ratingReview,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}

// exports.getAverageRating = async (req, res) => {
//     try {
//         const courseId = req.body.courseId || req.params.courseId;

//         if (!courseId) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Course ID is required",
//             });
//         }

//         // Aggregate average rating
//         const result = await RatingAndReview.aggregate([
//             {
//                 $match: {
//                     course: new mongoose.Types.ObjectId(courseId),
//                 },
//             },
//             {
//                 $group: {
//                     _id: null,
//                     averageRating: { $avg: "$rating" },
//                 },
//             },
//         ]);

//         // return rating
//         if (result.length > 0) {
//             return res.status(200).json({
//                 success: true,
//                 // message: "No ratings found for this course",
//                 averageRating: result[0].averageRating,
//             });
//         }

//         return res.status(200).json({
//             success: true,
//             message: "No ratings found for this course" ,
//             averageRating: 0, 
//         });

//     } catch (error) {
//         console.error("Error getting average rating:", error);
//         return res.status(500).json({
//             success: false,
//             message: "Failed to get average rating",
//             error: error.message,
//         });
//     }
// };


//get all rating

// exports.getAverageRating = async (req, res) => {
//   try {
//     const courseId = req.body.courseId

//     // Calculate the average rating using the MongoDB aggregation pipeline
  

//     const result = await RatingAndReview.aggregate([

//       {
//         $match: {
//           course: new mongoose.Types.ObjectId(courseId), // Convert courseId to ObjectId
          
//         },
        
//       },
//       {
//         $group: {
//           _id: null,
//           averageRating: { $avg: "$rating" },
//         },
//       },
//     ])

//     if (result.length > 0) {
//       return res.status(200).json({
//         success: true,
//         averageRating: result[0].averageRating,
//       })
//     }

//     // If no ratings are found, return 0 as the default rating
//     return res.status(200).json({ success: true, averageRating: 0 })
//   } catch (error) {
//     console.error(error)
//     return res.status(500).json({
//       success: false,
//       message: "Failed to retrieve the rating for the course",
//       error: error.message,
//     })
//   }
// }

exports.getAverageRating = async (req, res) => {
  try {
    const courseId = req.body.courseId;

    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid courseId",
      });
    }

    const result = await RatingAndReview.aggregate([
      {
        $match: {
          course: mongoose.Types.ObjectId(courseId), // ✅ correct usage, no `new`
        },
      },
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$rating" },
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      averageRating: result[0]?.averageRating || 0,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve the rating for the course",
      error: error.message,
    });
  }
};


// exports.getAllRating = async (req, res) => {
//   try {
//     const allReviews = await RatingAndReview.find({})
//       .sort({ rating: "desc" }) // Sort from highest to lowest rating
//       .populate({
//         path: "user",
//         select: "firstName lastName email image",
//       })
//       .populate({
//         path: "course",
//         select: "courseName ",
//       })
//       .exec();

//     return res.status(200).json({
//       success: true,
//       message: "All ratings fetched successfully",
//       data: allReviews,
//     });
//   } catch (error) {
//     console.error("Error fetching all ratings:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch ratings",
//       error: error.message,
//     });
//   }
// };


exports.getAllRatingReview = async (req, res) => {
  try {
    const allReviews = await RatingAndReview.find({})
      .sort({ rating: "desc" })
      .populate({
        path: "user",
        select: "firstName lastName email image", // Specify the fields you want to populate from the "Profile" model
      })
      .populate({
        path: "course",
        select: "courseName", //Specify the fields you want to populate from the "Course" model
      })
      .exec()

    res.status(200).json({
      success: true,
      data: allReviews,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve the rating and review for the course",
      error: error.message,
    })
  }
}


// const RatingAndReview = require("../models/RatingandReview")
// const Course = require("../models/Course")
// const mongoose = require("mongoose")

// // Create a new rating and review
// exports.createRating = async (req, res) => {
//   try {
//     const userId = req.user.id
//     const { rating, review, courseId } = req.body

//     // Check if the user is enrolled in the course

//     const courseDetails = await Course.findOne({
//       _id: courseId,
//       studentsEnroled: { $elemMatch: { $eq: userId } },
//     })

//     if (!courseDetails) {
//       return res.status(404).json({
//         success: false,
//         message: "Student is not enrolled in this course",
//       })
//     }

//     // Check if the user has already reviewed the course
//     const alreadyReviewed = await RatingAndReview.findOne({
//       user: userId,
//       course: courseId,
//     })

//     if (alreadyReviewed) {
//       return res.status(403).json({
//         success: false,
//         message: "Course already reviewed by user",
//       })
//     }

//     // Create a new rating and review
//     const ratingReview = await RatingAndReview.create({
//       rating,
//       review,
//       course: courseId,
//       user: userId,
//     })

//     // Add the rating and review to the course
//     await Course.findByIdAndUpdate(courseId, {
//       $push: {
//         ratingAndReviews: ratingReview,
//       },
//     })
//     await courseDetails.save()

//     return res.status(201).json({
//       success: true,
//       message: "Rating and review created successfully",
//       ratingReview,
//     })
//   } catch (error) {
//     console.error(error)
//     return res.status(500).json({
//       success: false,
//       message: "Internal server error",
//       error: error.message,
//     })
//   }
// }

// // Get the average rating for a course
// exports.getAverageRating = async (req, res) => {
//   try {
//     const courseId = req.body.courseId

//     // Calculate the average rating using the MongoDB aggregation pipeline
//     const result = await RatingAndReview.aggregate([
//       {
//         $match: {
//           course: new mongoose.Types.ObjectId(courseId), // Convert courseId to ObjectId
//         },
//       },
//       {
//         $group: {
//           _id: null,
//           averageRating: { $avg: "$rating" },
//         },
//       },
//     ])

//     if (result.length > 0) {
//       return res.status(200).json({
//         success: true,
//         averageRating: result[0].averageRating,
//       })
//     }

//     // If no ratings are found, return 0 as the default rating
//     return res.status(200).json({ success: true, averageRating: 0 })
//   } catch (error) {
//     console.error(error)
//     return res.status(500).json({
//       success: false,
//       message: "Failed to retrieve the rating for the course",
//       error: error.message,
//     })
//   }
// }

// // Get all rating and reviews
// exports.getAllRatingReview = async (req, res) => {
//   try {
//     const allReviews = await RatingAndReview.find({})
//       .sort({ rating: "desc" })
//       .populate({
//         path: "user",
//         select: "firstName lastName email image", // Specify the fields you want to populate from the "Profile" model
//       })
//       .populate({
//         path: "course",
//         select: "courseName", //Specify the fields you want to populate from the "Course" model
//       })
//       .exec()

//     res.status(200).json({
//       success: true,
//       data: allReviews,
//     })
//   } catch (error) {
//     console.error(error)
//     return res.status(500).json({
//       success: false,
//       message: "Failed to retrieve the rating and review for the course",
//       error: error.message,
//     })
//   }
// }