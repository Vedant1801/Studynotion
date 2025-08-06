const Course = require("../models/Course");

const Category=require("../models/Category");
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

//create category ka handler function
exports.createCategory=async(req,res)=>{
    try{
        //fetch data
      const {name,description}=req.body;
      //validation
      if(!name || !description){
          return res.status(400).json({
            success: false,
            message: "all fields are required",
        });
      }
          const category = await Category.create({ name, description });
      //response
      return res.status(200).json({
        success:true,
        message:"category Created Successfully",
      })
      
    }
    catch(error){
          console.error("Error resetting password:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while resetting password",
        });
    }
}

//show all
exports.showAllCategories = async (req, res) => {
  try {
    // Fetch all categories with selected fields
    const allCategories = await Category.find({}, "name description");

    return res.status(200).json({
      success: true,
      message: "All categories fetched successfully",
      data: allCategories,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch categories",
      error: error.message,
    });
  }
};



// exports.categoryPageDetails = async (req, res) => {
//   try {
//     const { categoryId } = req.body;

//     // Get selected category and its courses
//     const selectedCategory = await Category.findById(categoryId)
//       .populate("courses")
//       .exec();

//     if (!selectedCategory) {
//       return res.status(404).json({
//         success: false,
//         message: "Data Not Found",
//       });
//     }

//     // Get courses from different categories
//     const differentCategories = await Category.find({
//       _id: { $ne: categoryId },
//     })
//       .populate("courses")
//       .exec();

//     // Get top 10 selling courses
//     const topSellingCourses = await Course.find({})
//       .sort({ studentsEnrolled: -1 })
//       .limit(10)
//       .populate("instructor", "firstName lastName")
//       .populate("category", "name")
//       .select("courseName price thumbnail studentsEnrolled");

//     return res.status(200).json({
//       success: true,
//       data: {
//         selectedCategory,
//         differentCategories,
//         topSellingCourses,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };


exports.categoryPageDetails = async (req, res) => {
  try {
    const { categoryId } = req.body

    // Get courses for the specified category
    const selectedCategory = await Category.findById(categoryId)
      .populate({
        path: "courses",
        match: { status: "Published" },
        populate: "ratingAndReviews",
      })
      .exec()

    console.log("SELECTED COURSE", selectedCategory)
    // Handle the case when the category is not found
    if (!selectedCategory) {
      console.log("Category not found.")
      return res
        .status(404)
        .json({ success: false, message: "Category not found" })
    }
    // Handle the case when there are no courses
    if (selectedCategory.courses.length === 0) {
      console.log("No courses found for the selected category.")
      return res.status(404).json({
        success: false,
        message: "No courses found for the selected category.",
      })
    }

    // Get courses for other categories
    const categoriesExceptSelected = await Category.find({
      _id: { $ne: categoryId },
    })
    let differentCategory = await Category.findOne(
      categoriesExceptSelected[getRandomInt(categoriesExceptSelected.length)]
        ._id
    )
      .populate({
        path: "courses",
        match: { status: "Published" },
      })
      .exec()
    console.log()
    // Get top-selling courses across all categories
    const allCategories = await Category.find()
      .populate({
        path: "courses",
        match: { status: "Published" },
        populate:{
          path:"instructor",
        }
      })
      .exec()
    const allCourses = allCategories.flatMap((category) => category.courses)
    const mostSellingCourses = allCourses
      .sort((a, b) => b.sold - a.sold)
      .slice(0, 10)

    res.status(200).json({
      success: true,
      data: {
        selectedCategory,
        differentCategory,
        mostSellingCourses,
      },
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}
