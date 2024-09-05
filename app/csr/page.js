"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define your images data array
const imagesData = [
  { id: 1, src: 'https://i.postimg.cc/7PSSMXjS/FCL-Brochure-2.jpg', alt: "Image 1" },
  { id: 2, src: 'https://i.postimg.cc/httxnnv0/2.jpg', alt: "Image 2" },
  { id: 6, src: 'https://i.postimg.cc/7PSSMXjS/FCL-Brochure-2.jpg', alt: "Image 6" },
  { id: 7, src: 'https://i.postimg.cc/7PSSMXjS/FCL-Brochure-2.jpg', alt: "Image 7" },
  { id: 8, src: 'https://i.postimg.cc/7PSSMXjS/FCL-Brochure-2.jpg', alt: "Image 8" },
  { id: 9, src: 'https://i.postimg.cc/7PSSMXjS/FCL-Brochure-2.jpg', alt: "Image 9" },
  { id: 10, src: 'https://i.postimg.cc/7PSSMXjS/FCL-Brochure-2.jpg', alt: "Image 10" },
  // Add more images if needed
];

const CSR = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 4; // Number of images to display per page
  const totalPages = Math.ceil(imagesData.length / imagesPerPage);

  // Calculate start and end index based on the current page
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = imagesData.slice(startIndex, startIndex + imagesPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src='https://png.pngtree.com/thumb_back/fh260/background/20230515/pngtree-construction-site-with-cranes-in-the-field-image_2541656.jpg'
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold">CSR</h1>
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
                    CSR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="lg:container grid grid-cols-2 gap-4 p-4 lg:mx-auto lg:max-w-[1300px] md:grid-cols-4">
          {currentImages.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            />
          ))}
        </div>
        {/* Pagination controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 border rounded bg-gray-200 text-gray-800"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`p-2 border rounded ${
                currentPage === index + 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 border rounded bg-gray-200 text-gray-800"
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default CSR;

