// import React, { useState } from 'react'
// import { HomePageExplore } from '../../../data/homepage-explore';
// import HighlightText from './HighlightText';
// import CourseCard from './CourseCard';
// const tabsName=[
//     "Free",
//     "New to coding",
//     "Most popular",
//     "Skill p aths",
//     "Career paths"
// ];
// const ExploreMore = () => {
//     const [currentTab,setCurrentTab]=useState(tabsName[0]);
//     const [courses,setCourses]=useState (HomePageExplore[0].courses);
//     const [currentCard,setCurrentCard]=useState(HomePageExplore[0].courses[0].heading);

//     const setMyCards=(value)=>{
//         setCurrentTab(value);
//         const result=HomePageExplore.filter((courses)=>courses.tag===value)
//         setCourses(result[0].courses);
//         setCurrentCard(result[0].courses.heading); 

//     }
//   return (
//     <div>
//     <div className='text-4xl font-semibold text-center'>
//         Unlock the
//         <HighlightText text={"power of code"}/>
//     </div>
//     <p className='text-center text-richblack-300 text-[16px] mt-3'>Learn to build anything you can imagine</p>
//       <div className='flex flex-row rounded-full bg-richblack-800 mb-5 mt-5 px-2 py-2'>
//         {
//             tabsName.map((element,index)=>{
//                 return(
//                    <div className={`text-[16px] flex flex-row items-center gap-2
//                    ${currentTab===element ? "bg-richblack-900 text-richblack-5 font-medium" : "text-richblack-200"} rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`} key={index}
//                    onClick={()=>setMyCards(element)}>{element}</div> 
//                 )
//             })
//         }
//       </div>
//       <div className='lg:h-[150px]'></div>
//       {/* {course card ka group} */}

//       <div className='lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3'>
//      {
//         courses.map((element,index)=>{
//             return(
//                 <CourseCard
//                     key={index}
//                     cardData={element}
//                     currentCard={currentCard}
//                     setCurrentCard={setCurrentCard}
//                 />
//             )
//         })
//      }
//       </div>
//     </div>
//   )
// }

// export default ExploreMore





// import React, { useState } from 'react';
// import { HomePageExplore } from '../../../data/homepage-explore';
// import HighlightText from './HighlightText';
// import CourseCard from './CourseCard';

// const tabsName = [
//   "Free",
//   "New to coding",
//   "Most popular",
//   "Skill paths",
//   "Career paths",
// ];

// const ExploreMore = () => {
//   const [currentTab, setCurrentTab] = useState(tabsName[0]);
//   const [courses, setCourses] = useState(HomePageExplore[0].courses);
//   const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

//   const setMyCards = (value) => {
//     setCurrentTab(value);
//     const result = HomePageExplore.find((course) => course.tag === value);
//     if (result) {
//       setCourses(result.courses);
//       setCurrentCard(result.courses[0]?.heading || "");
//     }
//   };

//   return (
//     <div className="w-full px-4 md:px-10 lg:px-20 py-10">
//       {/* Heading */}
//       <div className="text-3xl md:text-4xl font-semibold text-center">
//         Unlock the <HighlightText text="power of code" />
//       </div>

//       {/* Subheading */}
//       <p className="text-center text-richblack-300 text-[14px] md:text-[16px] mt-3">
//         Learn to build anything you can imagine
//       </p>

//       {/* Tabs */}
//       <div className="flex flex-wrap justify-center gap-3 bg-richblack-800 rounded-full my-6 px-3 py-2">
//         {tabsName.map((element, index) => (
//           <div
//             key={index}
//             className={`text-[14px] md:text-[16px] px-5 py-2 rounded-full transition-all duration-200 cursor-pointer
//               ${
//                 currentTab === element
//                   ? "bg-richblack-900 text-richblack-5 font-medium"
//                   : "text-richblack-200 hover:bg-richblack-900 hover:text-richblack-5"
//               }`}
//             onClick={() => setMyCards(element)}
//           >
//             {element}
//           </div>
//         ))}
//       </div>
     

//       {/* Course Cards */}
//       <div className=" flex flex-wrap gap-6 justify-center mt-8">
//         {courses.map((element, index) => (
//           <CourseCard
//             key={index}
//             cardData={element}
//             currentCard={currentCard}
//             setCurrentCard={setCurrentCard}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExploreMore;


import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  return (
    <div>
      {/* Explore more section */}
      <div>
        <div className="text-4xl font-semibold text-center my-10">
          Unlock the
          <HighlightText text={"Power of Code"} />
          <p className="text-center text-richblack-300 text-lg font-semibold mt-1">
            Learn to Build Anything You Can Imagine
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-richblack-800 text-richblack-200 p-1 rounded-full font-medium drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] flex-row   mb-5 px-2 py-2">
        {tabsName.map((ele, index) => {
          return (
            <div
              className={` text-[16px] flex flex-row items-center gap-2 ${
                currentTab === ele
                  ? "bg-richblack-900 text-richblack-5 font-medium"
                  : "text-richblack-200"
              } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5`}
              key={index}
              onClick={() => setMyCards(ele)}
            >
              {ele}
            </div>
          );
        })}
      </div>
      <div className="hidden lg:block lg:h-[200px]"></div>

      {/* Cards Group */}
      <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
        {courses.map((ele, index) => {
          return (
            <CourseCard
              key={index}
              cardData={ele}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMore;




