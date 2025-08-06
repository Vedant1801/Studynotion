// import React, { useEffect, useState } from "react"
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react"

// // Import Swiper styles
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// // import "../../.."
// // Import required modules
// // import { FreeMode, Pagination } from "swiper"
// import { FreeMode, Pagination } from "swiper/modules"


// // import { getAllCourses } from "../../services/operations/courseDetailsAPI"
// import CourseCard from "./CourseCard"

// function CourseSlider({ Courses }) {
//   return (
//     <>
//       {Courses?.length ? (
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={25}
//           loop={true}
//           modules={[FreeMode, Pagination]}
//           breakpoints={{
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           className="max-h-[30rem]"
//         >
//           {Courses?.map((course, i) => (
//             <SwiperSlide key={i}>
//               <CourseCard course={course} Height={"h-[250px]"} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <p className="text-xl text-richblack-5">No Course Found</p>
//       )}
//     </>
//   )
// }

// export default CourseSlider

// import React from "react"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { FreeMode, Pagination, Navigation } from "swiper/modules"

// // Import Swiper styles
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import "swiper/css/navigation"

// import CourseCard from "./CourseCard"

// function CourseSlider({ Courses }) {
//   return (
//     <>
//       {Courses?.length ? (
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={25}
//           loop={true}
//           modules={[FreeMode, Pagination, Navigation]}
//           navigation={true} // 🔁 Enable arrows
//           breakpoints={{
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           className="relative w-full max-w-[100%] px-4"
//         >
//           {Courses.map((course, i) => (
//             <SwiperSlide key={i}>
//               <CourseCard course={course} Height={"h-[250px]"} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <p className="text-xl text-richblack-5">No Course Found</p>
//       )}
//     </>
//   )
// }

// export default CourseSlider




// import React from "react"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules"

// // Import Swiper styles
// import "swiper/css"
// import "swiper/css/free-mode"
// import "swiper/css/pagination"
// import "swiper/css/navigation"

// import CourseCard from "./CourseCard"

// function CourseSlider({ Courses }) {
//   return (
//     <>
//       {Courses?.length ? (
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={25}
//           loop={true}
//           autoplay={{
//             delay: 3000,       // 3 seconds between slides
//             disableOnInteraction: false, // keep autoplay after user interaction
//           }}
//           navigation={true}
//           modules={[FreeMode, Pagination, Navigation, Autoplay]}
//           breakpoints={{
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           className="relative w-full max-w-[100%] px-4"
//         >
//           {Courses.map((course, i) => (
//             <SwiperSlide key={i}>
//               <CourseCard course={course} Height={"h-[250px]"} />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <p className="text-xl text-richblack-5">No Course Found</p>
//       )}
//     </>
//   )
// }

// export default CourseSlider




import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules"

// Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../../../App.css"


import CourseCard from "./CourseCard"

function CourseSlider({ Courses }) {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination, Navigation, Autoplay]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="relative w-full max-w-[100%] px-4 pb-12 "
        >
          {Courses.map((course, i) => (
            <SwiperSlide key={i}>
              <CourseCard course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default CourseSlider
