'use client'

import React, { useState } from "react";
import img1 from "@/public/assets/banner/constraction.jpeg";
import { TbTargetArrow } from "react-icons/tb";
import { IoCompassOutline } from "react-icons/io5";
import Link from "next/link";

// Certificate data
const certificates = [
  {
    title: "Certificate of Incorporation",
    logoURL: "https://i.postimg.cc/wxCwb5dL/goved.png",
  },

  {
    title: "E-Trade License",
    logoURL: "https://i.postimg.cc/YqQdc4pV/dhaSouth.png",
  },

  {
    title: "Taxpayer's Identification Number (TIN) Certificate",
    logoURL: "https://i.postimg.cc/wxCwb5dL/goved.png",
  },

  {
    title: "Value Added Tax Registration Certificate",
    logoURL: "https://i.postimg.cc/wxCwb5dL/goved.png",
  },

  {
    title: "Export Registration Certificate (ERC)",
    logoURL: "https://i.postimg.cc/wxCwb5dL/goved.png",
  },

  {
    title: "Import Registration Certificate (IRC)",
    logoURL: "https://i.postimg.cc/wxCwb5dL/goved.png",
  },

  {
    title: "Clearance Certificate from DGFI",
    logoURL: "https://i.postimg.cc/RZRGFjJL/army.png",
  },

  {
    title: "Dhaka Chamber of Commerce & Industry",
    logoURL: "https://i.postimg.cc/XY3QnVqv/DCCI.png",
  },
];

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src="https://i.postimg.cc/hvL2Qk6k/Cover.jpg"
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold"> About Us</h1>
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
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="max-w-[1300px] px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
              <div className="">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mb-4">
                  Farees Construction Limited (FCL)
                </h2>
                <div className="text-justify">
                  <p>
                    <strong>FAREES CONSTRUCTION LIMITED (FCL)</strong> is an
                    independent engineering construction company with an
                    objective to provide complete and international standard
                    technical approach in the construction industry of
                    Bangladesh. Man Enterprise ventured into the construction
                    area as early as 2012 and Farees Construction Limited (FCL)
                    was formed in 2017 to join the venture. The company was
                    created out of a vision of Brigadier General AKM Mahfuzul
                    Haque (Retd.), the CEO & MD of Farees Construction Limited,
                    to serve the nation with top-quality professionals.
                  </p>
                  <br />
                  <p>
                    <strong>FCL</strong> consists of a professionals, experts in
                    the development sectors, and experienced management. The
                    organization have launched country-wide nation-building
                    activities by completing several multi-storied buildings,
                    hydraulic structures, deep tube wells, water purification
                    plants, irrigation, flood control projects, etc.{" "}
                    <strong>FCL</strong> is also experienced in constructing
                    piling (situ/bored/caisson), pile cap & retaining structures
                    etc.
                  </p>
                  <br />
                  <p>
                    Over the short period after its establishment,{" "}
                    <strong>FCL</strong> gathered experience in different
                    fields, working with local and foreign experts and
                    management professionals in both government & foreign funded
                    projects and delivered mentionable construction services.
                    Combining experience with quality, <strong>FCL</strong>{" "}
                    emerged as one of the top construction firms in Bangladesh.
                    With workmanship and refinement, it earned a reputation in
                    several sectors involving engineering and technological
                    inputs.
                  </p>
                </div>
              </div>

              <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
                <div className="relative w-full max-w-lg mt-4 mb-10 ml-auto">
                  <img
                    className="ml-auto rounded-md"
                    src="https://i.postimg.cc/QMLgbTsy/about.jpg"
                    alt=""
                  />

                  <img
                    className="absolute -top-4 -left-12"
                    src="https://cdn.rareblocks.xyz/collection/celebration/imgs/features/1/wavey-lines.svg"
                    alt=""
                  />

                  <div className="absolute -bottom-10 -left-16">
                    <div className="bg-green-800">
                      <div className="px-8 py-10">
                        <span className="block text-4xl font-bold text-white lg:text-5xl">
                          8+
                        </span>
                        <span className="block mt-2 text-base leading-tight text-white">
                          Years Of
                          <br />
                          Experience
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white text-black">
  <div className="lg:container px-4 py-10 lg:mx-auto lg:max-w-[1300px]">
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
      <div className="p-8 space-y-3 border-2 border-blue-400 rounded-xl">
        <span className="inline-block text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
        </span>

        <h1 className="text-xl font-semibold text-black capitalize ">Mission</h1>

        <p className="text-gray-500 ">
        In order to fulfill our mission to deliver high-quality, reliable services, we strive to stay on top of current industry trends and practices.
        </p>

        <a href="#" className="inline-flex p-2 text-black capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500  hover:underline hover:text-blue-600 dark:hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
      </div>

      <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
        <span className="inline-block text-black dark:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        </span>

        <h1 className="text-xl font-semibold text-black capitalize text-black">Vision</h1>

        <p className="text-gray-500 ">
        In order to fulfill our mission to deliver high-quality, reliable services, we strive to stay on top of current industry trends and practices.
        </p>

        <a href="#" className="inline-flex p-2 text-black capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500  hover:underline hover:text-blue-600 dark:hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
      </div>

      <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
        <span className="inline-block text-black dark:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </span>

        <h1 className="text-xl font-semibold text-black capitalize ">Objectives</h1>

        <p className="text-gray-500 ">
        The primary objectives of Farees Construction Limited were drawn up encompassing the development of rural industry.
        </p>

        <a href="#" className="inline-flex p-2 text-black capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500  hover:underline hover:text-blue-600 dark:hover:text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>


      {/* section 04  */}
      <div className="bg-gray-800 py-10 ">
        <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px] mt-10 mb-20">
          <h2 class="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-4xl mb-4">
            Organogram
          </h2>
          <img
            src="https://i.ibb.co/L85nJpy/ORGANOGRAM.png"
            className="w-full"
          ></img>
        </div>
      </div>

      {/* Certificates Section */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl mb-8">
              Certificates
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white py-10 px-4 rounded-lg shadow-lg flex flex-col items-center"
              >
                {/* <img
                  src={cert.logoURL}
                  alt={cert.title}
                  className="w-20 h-20 mb-4 object-cover"
                /> */}
                <h3 className="text-lg text-center font-semibold ">
                  {cert.title}
                </h3>
                <div className="relative flex justify-center">
            <button
                onClick={() => setIsOpen(true)}
                className="px-6 py-2 mx-auto tracking-wide text-blue-400 capitalize transition-colors duration-300 transform "
            >
                View Certificate
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-10 overflow-y-auto transition duration-300 ease-out transform"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>

                        <div className="relative inline-block p-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl sm:max-w-sm rounded-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:p-6">
                            <div className="flex items-center justify-center mx-auto">
                                <img
                                    className="h-full rounded-lg"
                                    src="https://i.postimg.cc/0NHDLGgt/Capture.jpg"
                                    alt=""
                                />
                            </div>



                            <div className="mt-4 sm:flex sm:items-center sm:justify-between sm:mt-6 sm:-mx-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 sm:mx-2 w-full py-2.5 text-sm font-medium dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 tracking-wide text-black capitalize transition-colors duration-300 transform border border-gray-200 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
