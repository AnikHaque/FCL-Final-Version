"use client";  // Ensure this file is treated as a client component

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import img1 from '@/public/assets/banner/constraction.jpeg';
import Link from 'next/link';

const jobOpenings = [
  {
    id: 1,
    title: "Structural engineer",
    location: "Mirpur DOHS, Dhaka, Bangladesh",
    description: "A structural engineer is a specialized type of civil engineer focused on developing structures",
    responsibilities: [
      "Design structures and ensure their stability",
      "Work with architects and other engineers"
    ],
    qualifications: [
      "Bachelor’s degree in Civil Engineering",
      "Experience with design software"
    ]
  },
  
];

export default function JobDetails() {
  const router = useRouter();
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      if (id) {
        const jobId = parseInt(id, 10);
        const selectedJob = jobOpenings.find((job) => job.id === jobId);
        setJob(selectedJob);
      }
    }
  }, [router.isReady, router.query]);

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <Image
            src={img1}
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold">
              {job.title}
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
                  <Link href="/career">
                    Career
                  </Link>
                </li>
                <li>{job.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">{job.title}</h2>
          <p className="text-gray-600 mb-4">{job.location}</p>
          <p className="text-gray-800 mb-4">{job.description}</p>

          <h3 className="text-2xl font-semibold mb-2">Responsibilities</h3>
          <ul className="list-disc ml-5 mb-4">
            {job.responsibilities.map((resp, index) => (
              <li key={index} className="text-gray-800">{resp}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold mb-2">Qualifications</h3>
          <ul className="list-disc ml-5 mb-4">
            {job.qualifications.map((qual, index) => (
              <li key={index} className="text-gray-800">{qual}</li>
            ))}
          </ul>

          <Link href="/career" className="btn">
            Back to Job Openings
          </Link>
        </div>
      </section>
    </div>
  );
}
