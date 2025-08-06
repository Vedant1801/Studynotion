// import React from 'react'
// import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
// import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
// import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
// import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
// import timelineImage from "../../../assets/Images/TimelineImage.png"



// const timeline =[
//     {
//         Logo:Logo1,
//         Heading:"Leadership",
//         Description:"Fully committed to the success company",
//     },
//       {
//         Logo:Logo2,
//         Heading:"Responsibility",
//         Description:"Students will always be our top priority",
//     },
//       {
//         Logo:Logo3,
//         Heading:"Flexibility",
//         Description:"The ability to switch is an important skills",
//     },
//       {
//         Logo:Logo4,
//         Heading:"Solve the problem",
//         Description:"Code your way to a solution",
//     },
// ]
// const TimelineSection = () => {
//   return (
//     <div>
//     <div className='flex flex-row gap-10 items-center'>
       
//        <div className='w-[45%] flex flex-col gap-5'>
//        {
//         timeline.map((element,index)=>{
//             return(
//                 <div className='flex flex-row gap-6 'key={index}>
//                     <div className='w-[50px] h-[50px] bg-white flex items-center'>
//                         <img src={element.Logo}/>
//                     </div>
//                     <div>
//                         <h2 className='font-semibold text-[18px]'>{element.Heading}</h2>
//                         <p className='text-base'>{element.Description}</p>
//                     </div>
//                 </div>
//             )
//         })
//        }

//        </div>

 
// <div className="relative w-fit mx-auto">
//   {/* Image with Glacier Blue Shadow */}
//   <img 
//     src={timelineImage} 
//     alt="timelineimage"
//     className="h-[300px] w-auto rounded-lg
//       shadow-[0_25px_60px_-10px_rgba(0,180,255,0.6)]"
//   />

//   {/* Floating Info Card (overlapping bottom) */}
//   <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 
//     bg-caribbeangreen-700 text-white rounded-md px-8 py-4 
//     flex gap-8 shadow-lg z-10">

//     {/* Experience Block */}
//     <div className="flex gap-1 items-center justify-center border-r border-caribbeangreen-300 pr-6">
//       <p className="text-3xl font-bold">10</p>
//       <p className="text-caribbeangreen-300 text-xs text-center">YEARS<br />EXPERIENCE</p>
//     </div>

//     {/* Courses Block */}
//     <div className="flex gap-1 items-center justify-center pl-6">
//       <p className="text-3xl font-bold">250</p>
//       <p className="text-caribbeangreen-300 text-xs text-center">TYPES OF<br />COURSES</p>
//     </div>

//   </div>
// </div>


//     </div>
      
//     </div>
//   )
// }

// export default TimelineSection




// import React from 'react';
// import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
// import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
// import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
// import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
// import timelineImage from "../../../assets/Images/TimelineImage.png";

// const timeline = [
//   {
//     Logo: Logo1,
//     Heading: "Leadership",
//     Description: "Fully committed to the success company",
//   },
//   {
//     Logo: Logo2,
//     Heading: "Responsibility",
//     Description: "Students will always be our top priority",
//   },
//   {
//     Logo: Logo3,
//     Heading: "Flexibility",
//     Description: "The ability to switch is an important skill",
//   },
//   {
//     Logo: Logo4,
//     Heading: "Solve the problem",
//     Description: "Code your way to a solution",
//   },
// ];

// const TimelineSection = () => {
//   return (
//     <div className="px-4 md:px-10 lg:px-20 mt-12 mb-24 w-full">
//       <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
        
//         {/* Timeline Text Section */}
//         <div className="w-full lg:w-[45%] flex flex-col gap-6">
//           {timeline.map((element, index) => (
//             <div className="flex gap-5 items-start" key={index}>
//               {/* Icon */}
//               <div className="min-w-[50px] min-h-[50px] bg-white rounded-md flex items-center justify-center shadow-md">
//                 <img src={element.Logo} alt="timeline logo" className="w-[24px] h-[24px]" />
//               </div>
//               {/* Text */}
//               <div>
//                 <h2 className="font-semibold text-lg">{element.Heading}</h2>
//                 <p className="text-sm text-richblack-300">{element.Description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Image & Stats Section */}
//         <div className="relative w-full max-w-[400px] mx-auto">
//           <img
//             src={timelineImage}
//             alt="timeline"
//             className="w-full h-auto rounded-lg shadow-[0_25px_60px_-10px_rgba(0,180,255,0.6)]"
//           />

       
// {/* Floating Info Card */}
// <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 
//   w-[90%] max-w-[340px] sm:max-w-fit 
//   bg-caribbeangreen-700 text-white rounded-lg 
//   px-4 py-4 sm:px-8 sm:py-4 
//   flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-10 
//   shadow-md z-10">

//   {/* Experience */}
//   <div className="flex flex-col items-center sm:items-start border-b sm:border-b-0 sm:border-r border-caribbeangreen-300 sm:pr-6 pb-2 sm:pb-0 text-center sm:text-left">
//     <p className="text-2xl sm:text-3xl font-bold">10</p>
//     <p className="text-caribbeangreen-300 text-xs">
//       YEARS<br />EXPERIENCE
//     </p>
//   </div>

//   {/* Divider line only on mobile (optional) */}
//   <div className="h-[1px] w-full bg-caribbeangreen-300 sm:hidden"></div>

//   {/* Courses */}
//   <div className="flex flex-col items-center sm:items-start sm:pl-6 text-center sm:text-left">
//     <p className="text-2xl sm:text-3xl font-bold">250</p>
//     <p className="text-caribbeangreen-300 text-xs">
//       TYPES OF<br />COURSES
//     </p>
//   </div>
// </div>


//         </div>

//       </div>
//     </div>
//   );
// };

// export default TimelineSection;



import React from "react";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

const TimeLine = [
    {
      Logo: Logo1,
      Heading: "Leadership",
      Description: "Fully committed to the success company",
    },
    {
      Logo: Logo2,
      Heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      Logo: Logo3,
      Heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },
    {
      Logo: Logo4,
      Heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ];


const TimelineSection = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
        <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
          {TimeLine.map((ele, i) => {
            return (
              <div className="flex flex-col lg:gap-3" key={i}>
                <div className="flex gap-6" key={i}>
                  <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                    <img src={ele.Logo} alt="" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                    <p className="text-base">{ele.Description}</p>
                  </div>
                </div>
                <div
                  className={`hidden ${
                    TimeLine.length - 1 === i ? "hidden" : "lg:block"
                  }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                ></div>
              </div>
            );
          })}
        </div>
        <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
          <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
            {/* Section 1 */}
            <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
              <h1 className="text-3xl font-bold w-[75px]">10</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                Years experiences
              </h1>
            </div>

            {/* Section 2 */}
            <div className="flex gap-5 items-center lg:px-14 px-7">
              <h1 className="text-3xl font-bold w-[75px]">250</h1>
              <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                types of courses
              </h1>
            </div>
            <div></div>
          </div>
          <img
            src={TimeLineImage}
            alt="timelineImage"
            className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
