// components/JobDetailsPage.js
import React from 'react';
import Link from 'next/link';

const JobDetailsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
     

      {/* Job Details Section */}
      <main className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Job Title and Header */}
         

          {/* Job Description */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Job Description</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Design and oversee the construction of buildings and infrastructure projects.</li>
              <li>Ensure compliance with safety regulations and building codes.</li>
              <li>Collaborate with architects, contractors, and other engineers.</li>
              <li>Conduct site inspections and assess structural integrity.</li>
              <li>Prepare reports, documents, and presentations for stakeholders.</li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Requirements</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Bachelor’s degree in Structural Engineering or related field.</li>
              <li>Proven experience in structural design and analysis.</li>
              <li>Strong knowledge of engineering principles and safety regulations.</li>
              <li>Excellent communication and teamwork skills.</li>
              <li>Ability to work under pressure and meet deadlines.</li>
            </ul>
          </div>

          {/* Application Details */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Application Details</h3>
            <p className="text-gray-700 mb-4">
              To apply for this position, please submit your resume and cover letter through our online application portal or send them to 
              <a href="mailto:rbornali@yahoo.com" className="text-blue-600 hover:underline"> rbornali@yahoo.com</a>.
            </p>
            <p className="text-gray-700">Application Deadline: 30th September 2024</p>
          </div>
        </div>
      </main>

     
    </div>
  );
};

export default JobDetailsPage;
