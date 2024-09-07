'use client';

import React, { useState } from "react";
import Link from "next/link";
import Pagination from "../components/pagination/page";


// Dummy gallery imgs
const galleryimgs = [
  { id: 1, src: 'https://i.postimg.cc/Jh3X8hmt/20210607-174357.jpg', alt: 'Nature img 1' },
  { id: 2, src: 'https://i.postimg.cc/W49kzHFP/C-1.jpg', alt: 'Nature img 2' },
  { id: 3, src: 'https://i.postimg.cc/fT8xPyCK/11.jpg', alt: 'Nature img 3' },
  { id: 4, src: 'https://i.postimg.cc/YCSx2Y0Z/12.jpg', alt: 'Landscape img 1' },
  { id: 5, src: 'https://i.postimg.cc/pLP6fmTJ/2.jpg', alt: 'Landscape img 2' },
  { id: 6, src: 'https://i.postimg.cc/25bFhY4x/20210525-083210.jpg', alt: 'Landscape img 3' },
  { id: 7, src: 'https://i.postimg.cc/Y21RdtTn/20210617-171600.jpg', alt: 'Architecture img 1' },
  { id: 8, src: 'https://i.postimg.cc/LsckVWDF/3.jpg', alt: 'Architecture img 2' },
  { id: 9, src: 'https://i.postimg.cc/X748hTbV/a-7.jpg', alt: 'Architecture img 3' },
  { id: 10, src: 'https://i.postimg.cc/httxnnv0/2.jpg', alt: 'Nature img 1' },
];

const GalleryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imgsPerPage = 6;
  const totalPages = Math.ceil(galleryimgs.length / imgsPerPage);

  const startIndex = (currentPage - 1) * imgsPerPage;
  const currentimgs = galleryimgs.slice(startIndex, startIndex + imgsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
          {currentimgs.map((img) => (
            <div
              key={img.id}
              className="relative group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={handlePageChange}
          />
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;
