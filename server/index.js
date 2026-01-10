const express=require("express");
const app=express();


const userRoutes=require("./routes/User");
const profileRoutes=require("./routes/Profile");
const paymentRoutes=require("./routes/Payment");
const courseRoutes=require("./routes/Course");
// const contactUsRoute = require("./routes/Contact");

const database=require("./config/database");
const cookieParser=require("cookie-parser");
const cors=require("cors");
const {cloudinaryConnect }=require("./config/cloudinary");
const fileUpload=require("express-fileupload");
const dotenv=require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

//databse connect
database.connect();
//middlerwares
app.use(express.json());

app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://studynotion-fhi7.vercel.app"
    ],
    credentials: true,
  })
);







app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp",
    })
)

//coudinary connection
cloudinaryConnect();

//routes
app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1/payment",paymentRoutes);
app.use("/api/v1/course",courseRoutes);
// app.use("/api/v1/reach", contactUsRoute);


//def route
app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"Your server is up and running....."
    });
});


//activate server
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})


// Importing necessary modules and packages
// const express = require("express");
// const app = express();
// const userRoutes = require("./routes/user");
// const profileRoutes = require("./routes/profile");
// const courseRoutes = require("./routes/Course");
// const paymentRoutes = require("./routes/Payments");
// const contactUsRoute = require("./routes/Contact");
// const database = require("./config/database");
// const cookieParser = require("cookie-parser");
// const cors = require("cors");
// const { cloudinaryConnect } = require("./config/cloudinary");
// const fileUpload = require("express-fileupload");
// const dotenv = require("dotenv");

// // Setting up port number
// const PORT = process.env.PORT || 4000;

// // Loading environment variables from .env file
// dotenv.config();

// // Connecting to database
// database.connect();
 
// // Middlewares
// app.use(express.json());
// app.use(cookieParser());
// app.use(
// 	cors({
// 		origin: "*",
// 		credentials: true,
// 	})
// );
// app.use(
// 	fileUpload({
// 		useTempFiles: true,
// 		tempFileDir: "/tmp/",
// 	})
// );

// // Connecting to cloudinary
// cloudinaryConnect();

// // Setting up routes
// app.use("/api/v1/auth", userRoutes);
// app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/course", courseRoutes);
// app.use("/api/v1/payment", paymentRoutes);
// app.use("/api/v1/reach", contactUsRoute);

// // Testing the server
// app.get("/", (req, res) => {
// 	return res.json({
// 		success: true,
// 		message: "Your server is up and running ...",
// 	});
// });

// // Listening to the server
// app.listen(PORT, () => {
// 	console.log(`App is listening at ${PORT}`);
// });

// // End of code