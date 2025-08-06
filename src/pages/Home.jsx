// import React from 'react'
// import { Link } from 'react-router-dom'
// import {FaArrowRight} from "react-icons/fa"
// import HighlightText from '../components/core/HomePage/HighlightText'
// import CTAButton from "../components/core/HomePage/Button"
// import Banner from "../assets/Images/banner.mp4"
// import CodeBlocks from '../components/core/HomePage/CodeBlocks'
// import TimelineSection from "../components/core/HomePage/TimelineSection"
// import LearningLangaugeSection from "../components/core/HomePage/LearningLangaugeSection"
// import InstructorSection from '../components/core/HomePage/InstructorSection'
// import Footer from '../components/common/Footer'
// import ExploreMore from '../components/core/HomePage/ExploreMore'

// const Home = () => {
//   return (
//     <div>
//     {/* section 1 */}
//     <div className=' relative mx-auto flex flex-col w-11/12 max-w-maxContent  items-center text-white justify-between'>

//         <Link to={"/signup"}>
//         <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
//             <div className='flex flex-row items-center px-10 py-[5px] rounded-full transition-all duration-200 group-hover:bg-richblack-900 gap-2'>
//                 <p>Become an Instructor</p>
//                 <FaArrowRight/>
//             </div>
//         </div>

//         </Link>

//         <div className='flex gap-1 text-center font-semibold text-4xl mt-7'>Empower your Future with
//         <HighlightText text={"Coding Skills"}/>
//         </div>
//         <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
//             With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
//         </div>
//         <div className='flex flex-row gap-7 mt-8'>
//             <CTAButton active={true} linkto={"/signup"} >
//                 Learn More
//             </CTAButton>
//             <CTAButton active={false} linkto={"/login"}>
//                 Book a demo
//             </CTAButton>
//         </div>
//         <div className='mx-3 my-12 shadow-blue-200'>
//             <video
//              muted
//              loop
//              autoPlay
//     //       className="rounded-lg w-full max-w-4xl
//     //   [box-shadow:_0_-15px_30px_-10px_rgba(0,200,255,0.4),_15px_18px_45px_-10px_white]"
//                 className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden
//     shadow-[0_-20px_30px_-10px_rgba(0,200,255,0.5),15px_20px_0px_0px_rgba(255,255,255,0.8)]"
//              >
//              <source src={Banner} type='video/mp4'/>
//             </video>
//         </div>

//         {/* code section 1 */}
//         <div>
//         <CodeBlocks 
//             position={"lg:flex-row"}
//             heading={
//                 <div className='text-4xl font-semibold'>
//                     Unlock your
//                     <HighlightText text={"coding potential"}/>
//                     with our online courses
//                 </div>
//             }
//             subheading={
//               "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
//             }
//             ctabtn1={{
//                 btnText:"try is yourself",
//                 linkto:"/signup",
//                 active:true,
//             }}
//               ctabtn2={{
//                 btnText:"learn more",
//                 linkto:"/login",
//                 active:false,
//             }}
//          codeBlock={`<!DOCTYPE html>
//                               <>
//                       <head>
//   <title>Example</title>
//   <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//   <h1><a href="/">Header</a></h1>
//   <nav>
//     <a href="one/">One</a>
//     <a href="two/">Two</a>
//     <a href="three/">Three</a>
//   </nav>
// </body>
// `}

//             codeColor={"text-yellow-25"}
//         />
//         </div>


//           {/* code section 2 */}
//         <div>
//         <CodeBlocks 
//             position={"lg:flex-row-reverse"}
//             heading={
//                 <div className='text-4xl font-semibold'>
//                     Unlock your
//                     <HighlightText text={"coding potential"}/>
//                     with our online courses
//                 </div>
//             }
//             subheading={
//               "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
//             }
//             ctabtn1={{
//                 btnText:"try is yourself",
//                 linkto:"/signup",
//                 active:true,
//             }}
//               ctabtn2={{
//                 btnText:"learn more",
//                 linkto:"/login",
//                 active:false,
//             }}
//          codeBlock={`<!DOCTYPE html>
//                               <html>
//                       <head>
//   <title>Example</title>
//   <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//   <h1><a href="/">Header</a></h1>
//   <nav>
//     <a href="one/">One</a>
//     <a href="two/">Two</a>
//     <a href="three/">Three</a>
//   </nav>
// </body>
// </html>`}

//             codeColor={"text-yellow-25"}
//         />
//         </div>

//         <ExploreMore/>

//     </div>

//     {/* section 2 */}
//     <div className='bg-pure-greys-5 text-richblack-700'>
//     <div className='homepage_bg h-[310px]'>
//     <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto '>
//     <div></div>
//     <div className='flex flex-row gap-7 text-white mt-20'>
//         <CTAButton active={true} linkto={"/signup"} >
//          <div className='flex items-center gap-2'>
//             Explore Full Catalog
//               <FaArrowRight/>
//          </div>
       
//         </CTAButton>
//         <CTAButton active={false} linkto={"/signup"}>
//          <div>Learn More</div>
//         </CTAButton>
//     </div>

//     </div>

//     </div>
    
//     <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between
//     gap-7'>
//         <div className='flex flex-row  gap-5 mb-10 mt-[95px] ml-10'>
//         <div className='text-4xl font-semibold w-[45%]'> 
//             Get the skills you need for a
//             <HighlightText text={"jot that is in demand"}/>
//         </div>
//         <div className='flex flex-col w-[40%] items-start'>
//           <div className='text-[16px] '>
//             The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
//           </div>
//           <br></br>
//           <CTAButton active={true} linkto={"/signup"}>
//             <div>Learn More</div>
//           </CTAButton>
//         </div>
//         </div>
//          <TimelineSection/>
//     <LearningLangaugeSection/>
//     </div>

    

//     </div>

//     {/* section 3 */}
//     <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
//        <InstructorSection/>
//        <h2 className='text-center text-4xl font-semibold mt-10'>review from other learners</h2>
//        {/* {review slider} */}
//     </div>


//      {/* footer */}
//      <Footer/>


      
//     </div>
//   )
// }

// export default Home



// Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import TimelineSection from "../components/core/HomePage/TimelineSection"
import LearningLangaugeSection from "../components/core/HomePage/LearningLangaugeSection"
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'

const Home = () => {
  return (
    <div className="w-full">
      {/* Section 1 */}
      <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>

        <Link to={"/signup"} className='mt-16 w-fit'>
          <div className='group p-1 rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95'>
            <div className='flex flex-row items-center px-6 md:px-10 py-2 rounded-full group-hover:bg-richblack-900 gap-2 text-sm md:text-base'>
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className='flex flex-col sm:flex-row gap-1 text-center font-semibold text-3xl sm:text-4xl mt-7'>
          Empower your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className='mt-4 w-[90%] text-center text-sm sm:text-base text-richblack-300'>
          With our online coding courses, you can learn at your own pace, from anywhere in the world...
        </div>

        <div className='flex flex-col sm:flex-row gap-4 mt-8'>
          <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
          <CTAButton active={false} linkto={"/login"}>Book a demo</CTAButton>
        </div>

        <div className='mx-3 my-12 w-full shadow-blue-200'>
          <video
            muted loop autoPlay
            className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden
                       shadow-[0_-20px_30px_-10px_rgba(0,200,255,0.5),15px_20px_0px_0px_rgba(255,255,255,0.8)]"
          >
            <source src={Banner} type='video/mp4' />
          </video>
        </div>

        {/* Code Block 1 */}
        <CodeBlocks
          position={"lg:flex-row"}
          heading={<div className='text-2xl md:text-4xl font-semibold'>Unlock your <HighlightText text={"coding potential"} /> with our online courses</div>}
          subheading={"Our courses are designed and taught by industry experts..."}
          ctabtn1={{ btnText: "try it yourself", linkto: "/signup", active: true }}
          ctabtn2={{ btnText: "learn more", linkto: "/login", active: false }}
          codeBlock={`<!DOCTYPE html>
                              <>
                      <head>
  <title>Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1><a href="/">Header</a></h1>
  <nav>
    <a href="one/">One</a>
    <a href="two/">Two</a>
    <a href="three/">Three</a>
  </nav>
</body>`}
          codeColor={"text-yellow-25"}
        />

        {/* Code Block 2 */}
        <CodeBlocks
          position={"lg:flex-row-reverse"}
          heading={<div className='text-2xl md:text-4xl font-semibold'>Unlock your <HighlightText text={"coding potential"} /> with our online courses</div>}
          subheading={"Our courses are designed and taught by industry experts..."}
          ctabtn1={{ btnText: "try it yourself", linkto: "/signup", active: true }}
          ctabtn2={{ btnText: "learn more", linkto: "/login", active: false }}
          codeBlock={`<!DOCTYPE html>
                              <>
                      <head>
  <title>Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1><a href="/">Header</a></h1>
  <nav>
    <a href="one/">One</a>
    <a href="two/">Two</a>
    <a href="three/">Three</a>
  </nav>
</body>`}
          codeColor={"text-yellow-25"}
        />

        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className='bg-pure-greys-5 text-richblack-700'>
        <div className='homepage_bg h-[310px] w-full'>
          <div className='w-11/12 max-w-maxContent mx-auto flex flex-col items-center gap-5'>
            <div className='mt-20 flex flex-col sm:flex-row gap-5 text-white'>
              <CTAButton active={true} linkto={"/signup"}>
                <div className='flex items-center gap-2'>
                  Explore Full Catalog <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>Learn More</CTAButton>
            </div>
          </div>
        </div>

        <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
          <div className='flex flex-col lg:flex-row gap-5 mb-10 mt-[95px] ml-2 lg:ml-10'>
            <div className='text-2xl lg:text-4xl font-semibold lg:w-[45%] text-center lg:text-left'>
              Get the skills you need for a <HighlightText text={"job that is in demand"} />
            </div>
            <div className='flex flex-col lg:w-[40%] items-start px-4 lg:px-0'>
              <p className='text-sm md:text-base'>The modern StudyNotion dictates its own terms...</p>
              <br />
              <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
            </div>
          </div>
          <TimelineSection />
          <LearningLangaugeSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
        <InstructorSection />
        <h2 className='text-center text-3xl md:text-4xl font-semibold mt-10'>Review from other learners</h2>
        {/* {Add review slider here later} */}
        <ReviewSlider/>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
