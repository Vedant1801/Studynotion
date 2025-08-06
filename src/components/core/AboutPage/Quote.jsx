// import React from 'react'
// import HighlightText from '../HomePage/HighlightText'

// const Quote = () => {
//   return (
//     <div>
//       We are passionate about revolutionizing the way we learn. Our innovative platform 
//       <HighlightText text={"combines technology"}/>
      
//        <span className='text-brown-500'> 
//         {" "}
//        expertise</span>
//        ,  and community to create an 
//        <span className='text-brown-500'>
//         {" "}
//        unparalleled educational experience.
//        </span>
//     </div>
//   )
// }

// export default Quote


import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-richblack-200 leading-relaxed text-center max-w-4xl mx-auto">
        We are passionate about revolutionizing the way we learn. Our innovative platform{" "}
        <HighlightText text="combines technology" />{" "}
        <span className="text-brown-500 font-semibold">expertise</span>, and community to create an{" "}
        <span className="text-brown-500 font-semibold">unparalleled educational experience.</span>
      </p>
    </div>
  )
}

export default Quote
