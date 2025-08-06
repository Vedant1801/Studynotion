// import React from 'react'
// import HighlightText from './HighlightText'
// import Know_your_progress from "../../../assets/Images/Know_your_progress.png"
// import compare_with_other from "../../../assets/Images/Compare_with_others.png"
// import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
// import CTAButton from "../HomePage/Button"
// const LearningLangaugeSection = () => {
//   return (
//     <div  className='mt-[130px] mb-32'>
//       <div className='flex flex-col gap-5 items-center'>
//         <div className='text-4xl font-semibold text-center '>
//             Your Swiss Knife for
//             <HighlightText text={"learning any language"}/>
//         </div>
//         <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
//         Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.

//         </div>
//         <div className='flex flex-row items-center justify-center mt-5'>
//             <img src={Know_your_progress} alt='knowyourprogress' className='object-contain -mr-32'/> 
//                         <img src={compare_with_other} alt='knowyourprogress' className='object-contain'/> 
//                                     <img src={plan_your_lesson} alt='knowyourprogress' className='object-contain -ml-36'/> 
//         </div>
//         <div className='w-fit'>
//             <CTAButton active={true} linkto={"/signup"}>
//                 <div>
//                     Learn More
//                 </div>
//             </CTAButton>
//         </div>
        

//       </div>
//     </div>
//   )
// }

// export default LearningLangaugeSection






// import React from 'react';
// import HighlightText from './HighlightText';
// import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
// import compare_with_other from "../../../assets/Images/Compare_with_others.png";
// import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png";
// import CTAButton from "../HomePage/Button";

// const LearningLangaugeSection = () => {
//   return (
//     <div className="mt-20 mb-32 px-4 md:px-10">
//       <div className="flex flex-col gap-6 items-center text-center">
//         {/* Heading */}
//         <div className="text-3xl md:text-4xl font-semibold">
//           Your Swiss Knife for <HighlightText text="learning any language" />
//         </div>

//         {/* Subheading */}
//         <div className="text-richblack-600 text-base font-medium w-full md:w-[80%] lg:w-[60%]">
//           Using Spin makes learning multiple languages easy. With 20+ languages, realistic voice-over, progress tracking, custom schedule, and more.
//         </div>

//         {/* Image Group */}
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-6">
//           <img
//             src={Know_your_progress}
//             alt="Know your progress"
//             className="object-contain w-[250px] md:w-[300px] lg:translate-x-[-40px]"
//           />
//           <img
//             src={compare_with_other}
//             alt="Compare with others"
//             className="object-contain w-[250px] md:w-[300px]"
//           />
//           <img
//             src={plan_your_lesson}
//             alt="Plan your lesson"
//             className="object-contain w-[250px] md:w-[300px] lg:translate-x-[40px]"
//           />
//         </div>

//         {/* CTA Button */}
//         <div className="mt-6">
//           <CTAButton active={true} linkto="/signup">
//             <div>Learn More</div>
//           </CTAButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LearningLangaugeSection;



import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from "../../../components/core/HomePage/Button";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";

const LearningLanguageSection = () => {
  return (
    <div>
        <div className="text-4xl font-semibold text-center my-10">
            Your swiss knife for
            <HighlightText text={"learning any language"} />
            <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
              Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over, progress tracking, custom schedule
              and more.
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0">
              <img
                src={Know_your_progress}
                alt=""
                className="object-contain  lg:-mr-32 "
              />
              <img
                src={Compare_with_others}
                alt=""
                className="object-contain lg:-mb-10 lg:-mt-0 -mt-12"
              />
              <img
                src={Plan_your_lessons}
                alt=""
                className="object-contain  lg:-ml-36 lg:-mt-5 -mt-16"
              />
            </div>
          </div>

          <div className="w-fit mx-auto lg:mb-20 mb-8 -mt-5">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="">Learn More</div>
            </CTAButton>
          </div>
    </div>
  )
}

export default LearningLanguageSection