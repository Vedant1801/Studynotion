

// import React from "react";


// import { HiUsers } from "react-icons/hi";
// import { ImTree } from "react-icons/im";

// const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
//   return (
//     <div
//       className={`w-[360px] lg:w-[30%] ${
//         currentCard === cardData?.heading
//           ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
//           : "bg-richblack-800"
//       }  text-richblack-25 h-[300px] box-border cursor-pointer`}
//       onClick={() => setCurrentCard(cardData?.heading)}
//     >
//       <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
//         <div
//           className={` ${
//             currentCard === cardData?.heading && "text-richblack-800"
//           } font-semibold text-[20px]`}
//         >
//           {cardData?.heading}
//         </div>

//         <div className="text-richblack-400">{cardData?.description}</div>
//       </div>

//       <div
//         className={`flex justify-between ${
//           currentCard === cardData?.heading ? "text-blue-300" : "text-richblack-300"
//         } px-6 py-3 font-medium`}
//       >
//         {/* Level */}
//         <div className="flex items-center gap-2 text-[16px]">
//           <HiUsers />
//           <p>{cardData?.level}</p>
//         </div>

//         {/* Flow Chart */}
//         <div className="flex items-center gap-2 text-[16px]">
//           <ImTree />
//           <p>{cardData?.lessionNumber} Lession</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;


import React from "react";
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData?.heading;

  return (
    <div
      className={`w-full sm:w-[90%] md:w-[48%] lg:w-[30%] 
        ${isActive ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50" : "bg-richblack-800"} 
        text-richblack-25 
        h-auto 
        min-h-[280px] 
        rounded-lg 
        transition-all duration-300 
        box-border 
        cursor-pointer`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      {/* Top section */}
      <div className="border-b-[2px] border-richblack-400 border-dashed p-6 flex flex-col gap-3">
        <div className={`font-semibold text-[18px] md:text-[20px] ${isActive && "text-richblack-800"}`}>
          {cardData?.heading}
        </div>

        <div className="text-richblack-400 text-[14px] md:text-[15px]">
          {cardData?.description}
        </div>
      </div>

      {/* Bottom section */}
      <div
        className={`flex justify-between items-center 
          px-6 py-3 text-[14px] md:text-[16px] font-medium 
          ${isActive ? "text-blue-300" : "text-richblack-300"}`}
      >
        {/* Level */}
        <div className="flex items-center gap-2">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Lessons */}
        <div className="flex items-center gap-2">
          <ImTree />
          <p>{cardData?.lessionNumber} Lesson</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
