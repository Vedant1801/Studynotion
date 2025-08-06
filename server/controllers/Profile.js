const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const Course = require("../models/Course")

const { convertSecondsToDuration } = require("../utils/secToDuration")
const CourseProgress = require("../models/CourseProgress")
// Method for updating a profile
exports.updateProfile = async (req, res) => {
	try {
		const { dateOfBirth = "", about = "", contactNumber } = req.body;
		const id = req.user.id;

		// Find the profile by id
		const userDetails = await User.findById(id);
		const profile = await Profile.findById(userDetails.additionalDetails);

		// Update the profile fields
		profile.dateOfBirth = dateOfBirth;
		profile.about = about;
		profile.contactNumber = contactNumber;

		// Save the updated profile
		await profile.save();

		return res.json({
			success: true,
			message: "Profile updated successfully",
			profile,
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			success: false,
			error: error.message,
		});
	}
};

exports.deleteAccount = async (req, res) => {
	try {
		// TODO: Find More on Job Schedule
		// const job = schedule.scheduleJob("10 * * * * *", function () {
		// 	console.log("The answer to life, the universe, and everything!");
		// });
		// console.log(job);
        console.log("Printing Id:",req.user.id);
		const id = req.user.id;
		const user = await User.findById({ _id: id });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User not found",
			});
		}
		// Delete Assosiated Profile with the User
		await Profile.findByIdAndDelete({ _id: user.additionalDetails });
		// TODO: Unenroll User From All the Enrolled Courses
		// Now Delete User
		await User.findByIdAndDelete({ _id: id });
		res.status(200).json({
			success: true,
			message: "User deleted successfully",
		});
	} catch (error) {
		console.log(error);
		res
			.status(500)
			.json({ success: false, message: "User Cannot be deleted successfully" });
	}
};

exports.getAllUserDetails = async (req, res) => {
	try {
		const id = req.user.id;
		const userDetails = await User.findById(id)
			.populate("additionalDetails")
			.exec();
		console.log(userDetails);
		res.status(200).json({
			success: true,
			message: "User Data fetched successfully",
			data: userDetails,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};

// exports.updateDisplayPicture = async (req, res) => {
//     try {
//       const displayPicture = req.files.displayPicture
//       const userId = req.user.id
//       const image = await uploadImageToCloudinary(
//         displayPicture,
//         process.env.FOLDER_NAME,
//         1000,
//         1000
//       )
//       console.log(image)
//       const updatedProfile = await User.findByIdAndUpdate(
//         { _id: userId },
//         { image: image.secure_url },
//         { new: true }
//       )
//       res.send({
//         success: true,
//         message: `Image Updated successfully`,
//         data: updatedProfile,
//       })
//     } catch (error) {
//       return res.status(500).json({
//         success: false,
//         message: error.message,
//       })
//     }
// };
// exports.updateDisplayPicture = async (req, res) => {
// 	try {
// 		// ✅ Step 1: Check if the file is uploaded
// 		if (!req.files || !req.files.displayPicture) {
// 			return res.status(400).json({
// 				success: false,
// 				message: "No display picture file uploaded",
// 			});
// 		}
//                 console.log("req.files:", req.files);

// 		// ✅ Step 2: Extract uploaded file and user ID
// 		const displayPicture = req.files.displayPicture;
// 		const userId = req.user.id;

// 		// ✅ Step 3: Upload image to Cloudinary
// 		const image = await uploadImageToCloudinary(
// 			displayPicture,
// 			process.env.FOLDER_NAME,
// 			1000,
// 			1000
// 		);

// 		// ✅ Step 4: Update the user's profile image URL
// 		const updatedProfile = await User.findByIdAndUpdate(
// 			{ _id: userId },
// 			{ image: image.secure_url },
// 			{ new: true }
// 		);
  

// 		// ✅ Step 5: Send success response
// 		return res.status(200).json({
// 			success: true,
// 			message: "Image updated successfully",
// 			data: updatedProfile,
// 		});
// 	} catch (error) {
// 		console.error("Error updating display picture:", error);
// 		return res.status(500).json({
// 			success: false,
// 			message: "Something went wrong while updating display picture",
// 			error: error.message,
// 		});
// 	}
// };
// exports.updateDisplayPicture = async (req, res) => {
//   try {
//     console.log("Received files:", req.files); // <--- ADD THIS

//     const displayPicture = req.files?.displayPicture;
//     if (!displayPicture) {
//       return res.status(400).json({
//         success: false,
//         message: "No display picture file uploaded",
//       });
//     }

//     const userId = req.user.id;
//     const image = await uploadImageToCloudinary(
//       displayPicture,
//       process.env.FOLDER_NAME,
//       1000,
//       1000
//     );

//     const updatedProfile = await User.findByIdAndUpdate(
//       { _id: userId },
//       { image: image.secure_url },
//       { new: true }
//     );

//     return res.status(200).json({
//       success: true,
//       message: `Image Updated successfully`,
//       data: updatedProfile,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
exports.updateDisplayPicture = async (req, res) => {
  try {
    if (!req.files || !req.files.displayPicture) {
      return res.status(400).json({
        success: false,
        message: "No display picture file uploaded",
      });
    }

    const displayPicture = req.files.displayPicture;
    const userId = req.user.id;

    const image = await uploadImageToCloudinary(
      displayPicture,
      process.env.FOLDER_NAME,
      1000,
      1000
    );

    const updatedProfile = await User.findByIdAndUpdate(
      userId,
      { image: image.secure_url },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Image Updated successfully",
      data: updatedProfile,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// exports.getEnrolledCourses = async (req, res) => {
//     try {
//       const userId = req.user.id
//       const userDetails = await User.findOne({
//         _id: userId,
//       })
//         .populate("courses")
//         .exec()
//       if (!userDetails) {
//         return res.status(400).json({
//           success: false,
//           message: `Could not find user with id: ${userDetails}`,
//         })
//       }
//       return res.status(200).json({
//         success: true,
//         data: userDetails.courses,
//       })
//     } catch (error) {
//       return res.status(500).json({
//         success: false,
//         message: error.message,
//       })
//     }
// };


exports.getEnrolledCourses = async (req, res) => {
  try {
    const userId = req.user.id
    let userDetails = await User.findOne({
      _id: userId,
    })
      .populate({
        path: "courses",
        populate: {
          path: "courseContent",
          populate: {
            path: "subSection",
          },
        },
      })
      .exec()
    userDetails = userDetails.toObject()
    var SubsectionLength = 0
    for (var i = 0; i < userDetails.courses.length; i++) {
      let totalDurationInSeconds = 0
      SubsectionLength = 0
      for (var j = 0; j < userDetails.courses[i].courseContent.length; j++) {
        totalDurationInSeconds += userDetails.courses[i].courseContent[
          j
        ].subSection.reduce((acc, curr) => acc + parseInt(curr.timeDuration), 0)
        userDetails.courses[i].totalDuration = convertSecondsToDuration(
          totalDurationInSeconds
        )
        SubsectionLength +=
          userDetails.courses[i].courseContent[j].subSection.length
      }
	//   console.log(`Course: ${userDetails.courses[i].courseName}, Completed Videos:`, courseProgressCount)

      let courseProgressCount = await CourseProgress.findOne({
        courseID: userDetails.courses[i]._id,
        userId: userId,
      })
	  console.log(`Course: ${userDetails.courses[i].courseName}, Completed Videos:`, courseProgressCount)

      courseProgressCount = courseProgressCount?.completedVideos.length  ?? 0
      if (SubsectionLength === 0) {
        userDetails.courses[i].progressPercentage = 100
		console.log(`Course: ${userDetails.courses[i].courseName}, Completed Videos:`, courseProgressCount)

      }
	  
	   else {
        // To make it up to 2 decimal point
        const multiplier = Math.pow(10, 2)
        userDetails.courses[i].progressPercentage =
          Math.round(
            (courseProgressCount / SubsectionLength) * 100 * multiplier
          ) / multiplier
      }
    }
	

    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: `Could not find user with id: ${userDetails}`,
      })
    }
    return res.status(200).json({
      success: true,
      data: userDetails.courses,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}



exports.instructorDashboard = async (req, res) => {
  try {
    const courseDetails = await Course.find({ instructor: req.user.id })

    const courseData = courseDetails.map((course) => {
      const totalStudentsEnrolled = course.studentsEnrolled.length
      const totalAmountGenerated = totalStudentsEnrolled * course.price

      // Create a new object with the additional fields
      const courseDataWithStats = {
        _id: course._id,
        courseName: course.courseName,
        courseDescription: course.courseDescription,
        // Include other course properties as needed
        totalStudentsEnrolled,
        totalAmountGenerated,
      }

      return courseDataWithStats
    })

    res.status(200).json({ courses: courseData })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server Error" })
  }
}




