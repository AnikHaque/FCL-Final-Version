// 'use client';
// import React from "react";
// 
// import img2 from "@/public/assets/banner/constraction.jpeg";
// import Link from "next/link";

// const ITEMS_PER_PAGE = 6; // Number of items to display per page

// const equipmentimgs = [
//   {
//     src: "https://fclweb.netlify.app/_next/img?url=%2F_next%2Fstatic%2Fmedia%2F50TCrane.107b7a02.jpg&w=3840&q=75",
//     alt: "50T Mobile Crane (wheel type)",
//   },
//   {
//     src: "https://i.postimg.cc/C5mGPJxj/Bulldozer.jpg",
//     alt: "Bulldozer",
//   },
//   {
//     src: "https://i.postimg.cc/NjwsCtZk/Dump-Truck-10-wheel.jpg",
//     alt: "Dump Truck 10 wheel",
//   },
//   {
//     src: "https://i.postimg.cc/yN8knBSr/Generator.jpg",
//     alt: "Generator",
//   },
//   {
//     src: "https://i.postimg.cc/vB68Sm8X/Motor-grader.jpg",
//     alt: "Motor grader",
//   },
//   {
//     src: "https://i.postimg.cc/rp7MWLG4/Road-Roller.jpg",
//     alt: "Road Roller",
//   },
//   {
//     src: "https://i.postimg.cc/c1BG13zw/Excavator-0-7cum.webp",
//     alt: "Excavator- 0.7cum",
//   },
//   {
//     src: "https://i.postimg.cc/x8tZvvrZ/Vibro-roller.jpg",
//     alt: "Vibro-roller",
//   },
//   // Add more img objects as needed
// ];

// const PhotoEquipment = () => {
//   const [currentPage, setCurrentPage] = React.useState(1);

//   const paginatedimgs = React.useMemo(() => {
//     const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//     const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, equipmentimgs.length);
//     return equipmentimgs.slice(startIndex, endIndex);
//   }, [currentPage, equipmentimgs]);

//   const totalPages = Math.ceil(equipmentimgs.length / ITEMS_PER_PAGE);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <section className="relative bg-gray-800 text-white">
//         <div className="relative">
//           <img
//             src={img2}
//             alt="Banner"
//             className="object-cover w-full h-64 bg-black opacity-5"
//           />
//           <div className="absolute inset-0 flex flex-col justify-center items-center">
//             <h1 className="text-white text-4xl font-extrabold">
//               Equipment Photos
//             </h1>
//             <div className="text-sm text-white breadcrumbs">
//               <ul>
//                 <li>
//                   <Link href="/">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       className="w-4 h-4 mr-2 stroke-current"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
//                       ></path>
//                     </svg>
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       className="w-4 h-4 mr-2 stroke-current"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
//                       ></path>
//                     </svg>
//                     Equipments
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       className="w-4 h-4 mr-2 stroke-current"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
//                       ></path>
//                     </svg>
//                     Equipment Photos
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="mx-5 lg:container lg:mx-auto pb-20">
//         <section className="py-6">
//           <div className="container mx-auto mt-10">
//             <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//               {paginatedimgs.map((img, index) => (
//                 <div
//                   key={index}
//                   className="relative group overflow-hidden rounded-lg shadow-lg "
//                 >
//                   <img
//                     className="object-cover w-full h-80 transition-transform duration-300 transform group-hover:scale-110"
//                     src={img.src}
//                     alt={img.alt}
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
//                     <p className="text-xl font-extrabold text-white">
//                       {img.alt}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className="flex justify-center mt-10">
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                 (pageNumber) => (
//                   <button
//                     key={pageNumber}
//                     className={`px-3 py-2 mr-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
//                       currentPage === pageNumber ? "bg-gray-200" : ""
//                     }`}
//                     onClick={() => handlePageChange(pageNumber)}
//                   >
//                     {pageNumber}
//                   </button>
//                 )
//               )}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default PhotoEquipment;

// components/PhotoEquipment.js
"use client";
import React, { useState } from "react";

import img2 from "@/public/assets/banner/constraction.jpeg";
import Link from "next/link";
import Pagination from "../components/pagination/page";


const equipmentimgs = [
  {
        src: "https://fclweb.netlify.app/_next/img?url=%2F_next%2Fstatic%2Fmedia%2F50TCrane.107b7a02.jpg&w=3840&q=75",
        alt: "50T Mobile Crane (wheel type)",
      },
      {
        src: "https://i.postimg.cc/C5mGPJxj/Bulldozer.jpg",
        alt: "Bulldozer",
      },
      {
        src: "https://i.postimg.cc/NjwsCtZk/Dump-Truck-10-wheel.jpg",
        alt: "Dump Truck 10 wheel",
      },
      {
        src: "https://i.postimg.cc/yN8knBSr/Generator.jpg",
        alt: "Generator",
      },
      {
        src: "https://i.postimg.cc/vB68Sm8X/Motor-grader.jpg",
        alt: "Motor grader",
      },
      {
        src: "https://i.postimg.cc/rp7MWLG4/Road-Roller.jpg",
        alt: "Road Roller",
      },
      {
        src: "https://i.postimg.cc/c1BG13zw/Excavator-0-7cum.webp",
        alt: "Excavator- 0.7cum",
      },
      {
        src: "https://i.postimg.cc/x8tZvvrZ/Vibro-roller.jpg",
        alt: "Vibro-roller",
      },
];

const PhotoEquipment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imgsPerPage = 6;

  // Calculate the current imgs to display
  const indexOfLastimg = currentPage * imgsPerPage;
  const indexOfFirstimg = indexOfLastimg - imgsPerPage;
  const currentimgs = equipmentimgs.slice(
    indexOfFirstimg,
    indexOfLastimg
  );

  const totalPages = Math.ceil(equipmentimgs.length / imgsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src={img2}
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold">
              Equipment Photos
            </h1>
            <div className="text-sm text-white breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    Equipments
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      ></path>
                    </svg>
                    Equipment Photos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-5 lg:container lg:mx-auto pb-20">
        <section className="py-6">
          <div className="container mx-auto mt-10">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {currentimgs.map((img, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg "
                >
                  <img
                    className="object-cover w-full h-80 transition-transform duration-300 transform group-hover:scale-110"
                    src={img.src}
                    alt={img.alt}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <p className="text-xl font-extrabold text-white">
                      {img.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Use the reusable Pagination component */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              paginate={paginate}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PhotoEquipment;
