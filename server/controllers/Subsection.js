// const SubSection=require("../models/SubSection");
// const Section = require("../models/Section");
// const {uploadVideoToCloudinary}=require("../utils/imageUploader");
// // const { uploadImageToCloudinary } = require("../utils/imageUploader")


// //create subsection
// exports.createSubSection=async(req,res)=>{

//     try{
//          //fetch data from req body
//     const{sectionId,title,timeDuration,description}=req.body;
//     //extract file /video
//     const video=req.files.videoFile;
//     //validadtion
//     if(!sectionId || !title || !timeDuration || !description || !video){
//            return res.status(400).json({
//             success: false,
//             message: "all fields are required",
//         });
//     }
//     //upload viedio to clodudinary
//       const uploadDetails = await uploadVideoToCloudinary(
//                 video,
//                 process.env.FOLDER_NAME
//             );

//             //create sub section
//         const SubSectionDetails=await SubSection.create({
//             title:title,
//             timeDuration:timeDuration,
//             description:description,

//             videoUrl: uploadDetails.secure_url,
//         })  ;
        

//         //update section with this sub section object id
//         const updatedSection=await Section.findByIdAndUpdate({_id:sectionId},
//             {
//                 $push:{
//                     subSection:SubSectionDetails._id,
//                 }
//             },
//             {new:true}
//         ).populate("subSection");
      
//    console.log("Created SubSection:", SubSectionDetails);


//         //hw log updated section here, after adding populate query


//         //return response
//         return res.status(200).json({
//             success:true,
//             message:"sub section created successfully",
//             data:updatedSection,
//         })

//     }
//     catch(error){
                  
//         return res.status(500).json({
//             success: false,
//             message: "Something went wrong ",
//         });
//     }
   


// }



// // hw updated section
// // exports.updateSubSection = async (req, res) => {
// //     try {
// //         const { subSectionId, title, description, timeDuration } = req.body;

// //         // Check required fields
// //         if (!subSectionId) {
// //             return res.status(400).json({
// //                 success: false,
// //                 message: "Sub-section ID is required",
// //             });
// //         }

// //         const updates = {};
// //         if (title) updates.title = title;
// //         if (description) updates.description = description;
// //         if (timeDuration) updates.timeDuration = timeDuration;

// //         // If a new video is provided, upload it
// //         if (req.files && req.files.videoFile) {
// //             const video = req.files.videoFile;
// //             const upload = await uploadVideoToCloudinary(video, process.env.FOLDER_NAME);
// //             updates.video = upload.secure_url;
// //         }

// //         const updatedSubSection = await SubSection.findByIdAndUpdate(
// //             subSectionId,
// //             updates,
// //             { new: true }
// //         );

// //         return res.status(200).json({
// //             success: true,
// //             message: "Sub-section updated successfully",
// //             data: updatedSubSection,
// //         });

// //     } catch (error) {
// //         console.error("Error updating sub-section:", error);
// //         return res.status(500).json({
// //             success: false,
// //             message: "Failed to update sub-section",
// //         });
// //     }
// // };
// exports.updateSubSection = async (req, res) => {
//   try {
//     const { sectionId, subSectionId, title, description } = req.body
//     const subSection = await SubSection.findById(subSectionId)

//     if (!subSection) {
//       return res.status(404).json({
//         success: false,
//         message: "SubSection not found",
//       })
//     }

//     if (title !== undefined) {
//       subSection.title = title
//     }

//     if (description !== undefined) {
//       subSection.description = description
//     }
//     if (req.files && req.files.video !== undefined) {
//       const video = req.files.video
//       const uploadDetails = await uploadVideoToCloudinary(
//         video,
//         process.env.FOLDER_NAME
//       )
//       subSection.videoUrl = uploadDetails.secure_url
//       subSection.timeDuration = `${uploadDetails.duration}`
//     }

//     await subSection.save()

//     // find updated section and return it
//     const updatedSection = await Section.findById(sectionId).populate(
//       "subSection"
//     )

//     console.log("updated section", updatedSection)

//     return res.json({
//       success: true,
//       message: "Section updated successfully",
//       data: updatedSection,
//     })
//   } catch (error) {
//     console.error(error)
//     return res.status(500).json({
//       success: false,
//       message: "An error occurred while updating the section",
//     })
//   }
// }



// // hw delete section
// exports.deleteSubSection = async (req, res) => {
//     try {
//         const { subSectionId, sectionId } = req.body;

//         if (!subSectionId || !sectionId) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Sub-section ID and section ID are required",
//             });
//         }

//         // Delete sub-section
//         await SubSection.findByIdAndDelete(subSectionId);

//         // Remove it from the section's SubSection array
//         const updatedSection = await Section.findByIdAndUpdate(
//             sectionId,
//             { $pull: { subSection: subSectionId } },
//             { new: true }
//         ).populate("subSection");

//         return res.status(200).json({
//             success: true,
//             message: "Sub-section deleted successfully",
//             data: updatedSection,
//         });

//     } catch (error) {
//         console.error("Error deleting sub-section:", error);
//         return res.status(500).json({
//             success: false,
//             message: "Failed to delete sub-section",
//         });
//     }
// };



// Import necessary modules
const mongoose = require("mongoose");
const Section = require("../models/Section")
const SubSection = require("../models/Subsection")
const { uploadImageToCloudinary } = require("../utils/imageUploader")

// Create a new sub-section for a given section
// exports.createSubSection = async (req, res) => {
//   try {
//     // Extract necessary information from the request body
//     const { sectionId, title, description } = req.body
//     const video = req.files.video

//     // Check if all necessary fields are provided
//     if (!sectionId || !title || !description || !video) {
//       return res
//         .status(404)
//         .json({ success: false, message: "All Fields are Required" })
//     }
//     console.log(video)

//     // Upload the video file to Cloudinary
//     const uploadDetails = await uploadImageToCloudinary(
//       video,
//       process.env.FOLDER_NAME
//     )
//     console.log(uploadDetails)
//     // Create a new sub-section with the necessary information
//     const SubSectionDetails = await SubSection.create({
//       title: title,
//       timeDuration: `${uploadDetails.duration}`,
//       description: description,
//       videoUrl: uploadDetails.secure_url,
//     })

//     // Update the corresponding section with the newly created sub-section
//     const updatedSection = await Section.findByIdAndUpdate(
//       { _id: sectionId },
//       { $push: { subSection: SubSectionDetails._id } },
//       { new: true }
//     ).populate("subSection")

//     // Return the updated section in the response
//     return res.status(200).json({ success: true, data: updatedSection })
//   } catch (error) {
//     // Handle any errors that may occur during the process
//     console.error("Error creating new sub-section:", error)
//     return res.status(500).json({
//       success: false,
//       message: "Internal server error",
//       error: error.message,
//     })
//   }
// }
exports.createSubSection = async (req, res) => {
  try {
    const { sectionId, title, description } = req.body;
    const video = req.files?.video;

    // Step 1: Validate inputs
    if (!sectionId || !title || !description || !video) {
      return res.status(400).json({
        success: false,
        message: "All fields (sectionId, title, description, video) are required",
      });
    }

    // Step 2: Normalize and validate sectionId
    const sectionIdStr = typeof sectionId === "string"
      ? sectionId
      : sectionId?._id;

    if (!mongoose.Types.ObjectId.isValid(sectionIdStr)) {
      return res.status(400).json({
        success: false,
        message: "Invalid sectionId",
      });
    }

    console.log("Creating SubSection for Section ID:", sectionIdStr);

    // Step 3: Upload video to Cloudinary
    let uploadDetails;
    try {
      uploadDetails = await uploadImageToCloudinary(
        video,
        process.env.FOLDER_NAME
      );
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Failed to upload video",
        error: err.message,
      });
    }

    // Step 4: Create SubSection document
    const subSectionDetails = await SubSection.create({
      title: title,
      timeDuration: `${uploadDetails.duration}`,
      description: description,
      videoUrl: uploadDetails.secure_url,
    });

    // Step 5: Push SubSection ID to parent Section
    const updatedSection = await Section.findByIdAndUpdate(
      sectionIdStr,
      { $push: { subSection: subSectionDetails._id } },
      { new: true }
    ).populate("subSection");

    // Step 6: Return updated section
    return res.status(200).json({
      success: true,
      message: "Sub-section created successfully",
      data: updatedSection,
    });
  } catch (error) {
    console.error("Error creating new sub-section:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// exports.createSubSection = async (req, res) => {
//   try {
//     const { sectionId, title, description } = req.body;
//     const video = req.files?.video;

//     if (!sectionId || !title || !description || !video) {
//       return res
//         .status(400)
//         .json({ success: false, message: "All fields are required" });
//     }

//     // Optional: Normalize sectionId
//     const sectionIdStr = typeof sectionId === 'object' && sectionId._id
//       ? sectionId._id
//       : sectionId;

//     console.log("Creating SubSection for Section:", sectionIdStr);

//     // Upload the video to Cloudinary
//     let uploadDetails;
//     try {
//       uploadDetails = await uploadImageToCloudinary(
//         video,
//         process.env.FOLDER_NAME
//       );
//     } catch (err) {
//       return res.status(500).json({
//         success: false,
//         message: "Failed to upload video",
//         error: err.message,
//       });
//     }

//     // Create SubSection
//     const subSection = await SubSection.create({
//       title,
//       timeDuration: `${uploadDetails.duration}`,
//       description,
//       videoUrl: uploadDetails.secure_url,
//     });

//     // Add SubSection to Section
//     const updatedSection = await Section.findByIdAndUpdate(
//       sectionIdStr,
//       { $push: { subSection: subSection._id } },
//       { new: true }
//     ).populate("subSection");

//     return res.status(200).json({
//       success: true,
//       message: "SubSection created successfully",
//       data: updatedSection,
//     });
//   } catch (error) {
//     console.error("Error creating SubSection:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal server error",
//       error: error.message,
//     });
//   }
// };

exports.updateSubSection = async (req, res) => {
  try {
    const { sectionId, subSectionId, title, description } = req.body
    const subSection = await SubSection.findById(subSectionId)

    if (!subSection) {
      return res.status(404).json({
        success: false,
        message: "SubSection not found",
      })
    }

    if (title !== undefined) {
      subSection.title = title
    }

    if (description !== undefined) {
      subSection.description = description
    }
    if (req.files && req.files.video !== undefined) {
      const video = req.files.video
      const uploadDetails = await uploadImageToCloudinary(
        video,
        process.env.FOLDER_NAME
      )
      subSection.videoUrl = uploadDetails.secure_url
      subSection.timeDuration = `${uploadDetails.duration}`
    }

    await subSection.save()

    // find updated section and return it
    const updatedSection = await Section.findById(sectionId).populate(
      "subSection"
    )

    console.log("updated section", updatedSection)

    return res.json({
      success: true,
      message: "Section updated successfully",
      data: updatedSection,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the section",
    })
  }
}

exports.deleteSubSection = async (req, res) => {
  try {
    const { subSectionId, sectionId } = req.body
    await Section.findByIdAndUpdate(
      { _id: sectionId },
      {
        $pull: {
          subSection: subSectionId,
        },
      }
    )
    const subSection = await SubSection.findByIdAndDelete({ _id: subSectionId })

    if (!subSection) {
      return res
        .status(404)
        .json({ success: false, message: "SubSection not found" })
    }

    // find updated section and return it
    const updatedSection = await Section.findById(sectionId).populate(
      "subSection"
    )

    return res.json({
      success: true,
      message: "SubSection deleted successfully",
      data: updatedSection,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the SubSection",
    })
  }
}