"use client";
import React, { useState } from "react";
import Image from "next/image";
import img2 from "@/public/assets/banner/constraction.jpeg";
import Link from "next/link";

const equipmentImages = [
  {
    src: "https://fclweb.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F50TCrane.107b7a02.jpg&w=3840&q=75",
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
  // Add more image objects as needed
];

const PhotoEquipment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  // Calculate the current images to display
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = equipmentImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  );

  const totalPages = Math.ceil(equipmentImages.length / imagesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <Image
            src={img2}
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold">
              {" "}
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
              {currentImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg "
                >
                  <img
                    className="object-cover w-full h-80 transition-transform duration-300 transform group-hover:scale-110"
                    src={image.src}
                    alt={image.alt}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <p className="text-xl font-extrabold text-white">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span>Previous</span>
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      currentPage === i + 1
                        ? "bg-green-800 text-white"
                        : "bg-white text-gray-700"
                    } hover:bg-gray-50`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span>Next</span>
                </button>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PhotoEquipment;
