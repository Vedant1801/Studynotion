// import React from 'react'
// import Instructor_image from "../../../assets/Images/Instructor.png"
// import HighlightText from './HighlightText'
// import CTNButton from "../HomePage/Button"
// import { FaArrowRight } from "react-icons/fa"
// const InstructorSection = () => {
//   return (
//     <div className='mt-16'>
//     <div className='flex flex-row items-center gap-3 mt-9 '>

// <div className=" p-6 w-[53%] rounded-lg">
//   <img
//     src={Instructor_image}
//     alt="instructor"
//     className="rounded-lg 
//             shadow-[ 15px_20px_0px_0px_rgba(255,255,255,0.8)]  "
//   />
// </div>


//      <div className='w-[45%] flex flex-col'>
//        <p className='text-4xl font-semibold'>Become an 
//        <HighlightText text={"instructor"}/>
//        </p>
//        <p className="text-richblack-300 font-medium text-md">Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
//        <br></br>
//        <div className='flex '>
//         <CTNButton active={true} linkto={"/signup"}>
//          <div className='flex  items-center gap-2 '>start Teaching Today
//          <FaArrowRight />
//          </div>
          
//          </CTNButton>

//        </div>
        
       
       
      

//      </div>

//     </div>
      
//     </div>
//   )
// }

// export default InstructorSection





import React from 'react';
import Instructor_image from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';
import CTNButton from "../HomePage/Button";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className="mt-16 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 mt-9">
        
        {/* Image Section */}
        <div className="w-full lg:w-[50%] p-2">
          <img
            src={Instructor_image}
            alt="instructor"
            className="rounded-lg shadow-[15px_20px_0px_0px_rgba(255,255,255,0.8)] w-full"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-[50%] flex flex-col gap-4">
          <p className="text-3xl md:text-4xl font-semibold">
            Become an <HighlightText text="instructor" />
          </p>

          <p className="text-richblack-300 font-medium text-[14px] md:text-[16px] leading-relaxed">
            Instructors from around the world teach millions of students on StudyNotion.
            We provide the tools and skills to teach what you love.
          </p>

          <CTNButton active={true} linkto="/signup">
            <div className="flex items-center gap-2">
              Start Teaching Today <FaArrowRight />
            </div>
          </CTNButton>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
