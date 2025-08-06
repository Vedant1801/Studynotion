




// import React from 'react'
// import CTAButton from "../HomePage/Button"
// import { FaArrowRight } from "react-icons/fa"
// import { TypeAnimation } from 'react-type-animation'

// const CodeBlocks = ({
//   position,
//   heading,
//   subheading,
//   ctabtn1,
//   ctabtn2,
//   codeBlock,
//   codeColor
// }) => {
//   return (
//     <div className={`flex ${position} my-20 mx-20 justify-between gap-10`}>
      
//       {/* Section 1 - Text and Buttons */}
//       <div className="lg:w-[50%] w-full flex flex-col gap-8">
//         <div className="text-4xl font-semibold text-richblack-5">
//           {heading}
//         </div>

//         <div className="text-richblack-300 font-medium text-lg">
//           {subheading}
//         </div>

//         {/* Buttons */}
//         <div className="flex gap-6 mt-4">
//           <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
//             <div className="flex gap-2 items-center">
//               {ctabtn1.btnText}
//               <FaArrowRight />
//             </div>
//           </CTAButton>

//           <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
//             {ctabtn2.btnText}
//           </CTAButton>
//         </div>
//       </div>

//       {/* Section 2 - Code Block */}
//       <div className="relative h-fit w-full lg:w-[500px] rounded-md border border-richblack-700 bg-richblack-800 p-4 flex">

//         {/* Line Numbers */}
//         <div className="w-[10%] text-right text-richblack-400 font-mono pr-3 select-none">
//           {Array.from({ length: 13 }, (_, i) => (
//             <p key={i} className="leading-6">{i + 1}</p>
//           ))}
//         </div>

//         {/* Code Block with Type Animation */}
//         <div className={`w-[90%] font-mono text-sm whitespace-pre-line ${codeColor}`}>
//           <TypeAnimation
//             sequence={[codeBlock, 2000, ""]}
//             repeat={Infinity}
//             cursor={true}
//             style={{
//               whiteSpace: "pre-line",
//               display: "block"
//             }}
//             omitDeletionAnimation={true}
//           />
//         </div>

//       </div>
//     </div>
//   )
// }

// export default CodeBlocks



import React from 'react'
import CTAButton from "../HomePage/Button"
import { FaArrowRight } from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeBlock,
  codeColor
}) => {
  return (
    <div className={`flex flex-col ${position} justify-between items-center gap-10 px-4 md:px-10 lg:px-20 my-10`}>
      
      {/* Section 1 - Text and Buttons */}
      <div className="w-full lg:w-[50%] flex flex-col gap-6 text-center lg:text-left">
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-richblack-5">
          {heading}
        </div>

        <div className="text-richblack-300 font-medium text-sm md:text-base">
          {subheading}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
            <div className="flex gap-2 items-center justify-center">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>

          <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Section 2 - Code Block */}
      <div className="w-full max-w-full lg:max-w-[600px] rounded-md border border-richblack-700 bg-richblack-800 p-4 flex">
        {/* Line Numbers */}
        <div className="w-[10%] text-right text-richblack-400 font-mono pr-3 select-none">
          {Array.from({ length: 13 }, (_, i) => (
            <p key={i} className="leading-6">{i + 1}</p>
          ))}
        </div>

        {/* Code Block with Type Animation */}
        <div className={`w-[90%] font-mono text-sm whitespace-pre-line ${codeColor}`}>
          <TypeAnimation
            sequence={[codeBlock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block"
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  )
}

export default CodeBlocks
