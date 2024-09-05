"use client";

import React, { useState } from 'react';

const people = [
  { name: "Juliet Smith", role: "Team Leader", imgSrc: "https://img.freepik.com/free-photo/businesspeople-office-meeting_23-2148908969.jpg", linkedin: "https://linkedin.com", description: "This is all about Juliet." },
  { name: "Andrew Davis", role: "Analyst", imgSrc: "https://img.freepik.com/free-photo/portrait-adult-male-smiling_23-2148729648.jpg", linkedin: "https://linkedin.com", description: "This is all about Andrew." },
  { name: "John Doe", role: "Developer", imgSrc: "https://img.freepik.com/free-photo/portrait-adult-male-smiling_23-2148729648.jpg", linkedin: "https://linkedin.com", description: "This is all about John." },
  { name: "John Doe", role: "Developer", imgSrc: "https://img.freepik.com/free-photo/portrait-adult-male-smiling_23-2148729648.jpg", linkedin: "https://linkedin.com", description: "This is all about John." },
  { name: "John Doe", role: "Developer", imgSrc: "https://img.freepik.com/free-photo/portrait-adult-male-smiling_23-2148729648.jpg", linkedin: "https://linkedin.com", description: "This is all about John." },
  { name: "John Doe", role: "Developer", imgSrc: "https://img.freepik.com/free-photo/portrait-adult-male-smiling_23-2148729648.jpg", linkedin: "https://linkedin.com", description: "This is all about John." },
  { name: "John Doe", role: "Developer", imgSrc: "https://img.freepik.com/free-photo/portrait-adult-male-smiling_23-2148729648.jpg", linkedin: "https://linkedin.com", description: "This is all about John." },
  { name: "John Doe", role: "Developer", imgSrc: "https://img.freepik.com/free-photo/portrait-adult-male-smiling_23-2148729648.jpg", linkedin: "https://linkedin.com", description: "This is all about John." },
  { name: "John Doe", role: "Developer", imgSrc: "https://img.freepik.com/free-photo/portrait-adult-male-smiling_23-2148729648.jpg", linkedin: "https://linkedin.com", description: "This is all about John." },
  // ... more people data
];

const ITEMS_PER_PAGE = 6;

const TeamSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(people.length / ITEMS_PER_PAGE);
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPeople = people.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="bg-white py-4 sm:py-6">
      <div className="px-4 lg:container lg:mx-auto lgmax-w-[1400px]">
        <ul role="list" className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-0 gap-y-0 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {currentPeople.map((person) => (
            <li key={person.name}>
              <div className="m-2 space-y-2">
                <div className="group flex flex-col gap-1 rounded-lg p-5 text-gray" tabIndex="1">
                  <div className="group relative m-0 flex h-72 w-72 rounded-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                      <img
                        src={person.imgSrc}
                        className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                        alt={person.name}
                      />
                    </div>
                    <div
                      className="p-3 rounded-xl opacity-60 absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100"
                      style={{ backgroundColor: 'Black', width: '70%' }}
                    >
                      <h1 className="text-lg font-bold text-white">{person.name}</h1>
                      <h2 className="text-m font-light text-gray-200">{person.role}</h2>
                    </div>
                  </div>
                  <p className="pl-5 text-gray-500 hover:text-gray-500">
                    <a target="_blank" rel="noopener noreferrer" href={person.linkedin}>
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      &nbsp;<span style={{ fontSize: '.8em', fontStyle: 'italic' }}>connect with {person.name}</span>
                    </a>
                  </p>

                  <div className="invisible h-auto max-h-0 p-5 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
                    <p style={{ fontSize: '.9em' }}>{person.description}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <nav aria-label="Page navigation">
            <ul className="inline-flex items-center space-x-1">
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-l-lg border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 transition ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                  Previous
                </button>
              </li>
              {[...Array(totalPages).keys()].map((page) => (
                <li key={page + 1}>
                  <button
                    onClick={() => handlePageChange(page + 1)}
                    className={`px-4 py-2 border ${currentPage === page + 1 ? 'bg-green-500 text-white border-green-500' : 'border-gray-300 text-gray-500 hover:bg-gray-100'} rounded-lg transition`}
                  >
                    {page + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-r-lg border border-gray-300 bg-white text-gray-500 hover:bg-gray-100 transition ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
