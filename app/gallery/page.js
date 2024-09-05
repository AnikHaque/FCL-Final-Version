"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Dummy gallery images
const galleryImages = [
  { id: 1, src: 'https://i.postimg.cc/Jh3X8hmt/20210607-174357.jpg', alt: 'Nature Image 1' },
  { id: 2, src: 'https://i.postimg.cc/W49kzHFP/C-1.jpg', alt: 'Nature Image 2' },
  { id: 3, src: 'https://i.postimg.cc/fT8xPyCK/11.jpg', alt: 'Nature Image 3' },
  { id: 4, src: 'https://i.postimg.cc/YCSx2Y0Z/12.jpg', alt: 'Landscape Image 1' },
  { id: 5, src: 'https://i.postimg.cc/pLP6fmTJ/2.jpg', alt: 'Landscape Image 2' },
  { id: 6, src: 'https://i.postimg.cc/25bFhY4x/20210525-083210.jpg', alt: 'Landscape Image 3' },
  { id: 7, src: 'https://i.postimg.cc/Y21RdtTn/20210617-171600.jpg', alt: 'Architecture Image 1' },
  { id: 8, src: 'https://i.postimg.cc/LsckVWDF/3.jpg', alt: 'Architecture Image 2' },
  { id: 9, src: 'https://i.postimg.cc/X748hTbV/a-7.jpg', alt: 'Architecture Image 3' },
  { id: 10, src: 'https://i.postimg.cc/httxnnv0/2.jpg', alt: 'Nature Image 1' },
  { id: 11, src: 'https://i.postimg.cc/fb393vxt/6.jpg', alt: 'Nature Image 2' },
  { id: 12, src: 'https://i.postimg.cc/wBSsDsVW/7.jpg', alt: 'Nature Image 3' },
];

const GalleryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = galleryImages.slice(startIndex, startIndex + imagesPerPage);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
         <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src="https://i.postimg.cc/Jh3X8hmt/20210607-174357.jpg"
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold">
              Gallery
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
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  
      <main className="lg:container lg:mx-auto lg:max-w-[1300px] px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {currentImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40 rounded-lg">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-1 bg-green-500 text-white rounded shadow-md hover:bg-green-600 transition duration-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-1 bg-green-500 text-white rounded shadow-md hover:bg-green-600 transition duration-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;
