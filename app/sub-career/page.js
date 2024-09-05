// src/app/career/[id]/page.js
import Image from 'next/image';

// Mock function to simulate data fetching
const fetchJobDetails = async (id) => {
  // Simulate a delay for data fetching
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Replace with actual data fetching logic
  const jobDetails = [
    {
      id: 1,
      title: "Structural Engineer",
      vacancy: "5",
      jobType: "Onsite",
      location: "Mirpur DOHS, Dhaka, Bangladesh",
      description: "A structural engineer is a specialized type of civil engineer focused on developing structures.",
      keyResponsibilities: [
        "Develop and maintain responsive web applications using modern front-end frameworks (e.g., React, or Vue.js).",
        "Build robust back-end services and APIs using technologies such as Node.js, Express, or Django.",
        "Collaborate with cross-functional teams to define, design, and ship new features.",
        "Write clean, maintainable, and well-documented code.",
        "Participate in code reviews and provide constructive feedback to peers.",
        "Troubleshoot, debug, and optimize existing applications for performance and scalability.",
        "Stay up-to-date with emerging technologies and industry trends."
      ],
      competencies: [
        "Familiarity with front-end frameworks/libraries such as React or Vue.js.",
        "Good knowledge of server-side programming languages and frameworks (e.g., Node.js, Express, Django).",
        "Experience with version control systems (e.g., Git).",
        "Understanding of RESTful APIs and web services.",
        "Familiarity with database technologies such as SQL and NoSQL databases.",
        "Excellent problem-solving skills and attention to detail.",
        "Strong communication and teamwork abilities."
      ],
      preferredQualifications: [
        "Experience with cloud platforms (e.g., AWS, Azure, or Google Cloud).",
        "Knowledge of containerization and orchestration tools (e.g., Docker, Kubernetes).",
        "Exposure to CI/CD pipelines and automated testing.",
        "Understanding of agile development methodologies."
      ],
      whatWeOffer: [
        "Opportunities for professional growth and development.",
        "A collaborative and inclusive work environment.",
        "Access to the latest tools and technologies."
      ],
      howToApply: "If you are passionate about technology and eager to kick-start your career in full stack development, we would love to hear from you! Please submit your resume, a cover letter detailing your relevant experience, and any portfolio or project links to info@goinnovior.com.",
      applicationDeadline: "30 June 2024"
    },
    // Add more job details here if needed
  ];

  return jobDetails.find((job) => job.id === parseInt(id, 10)) || null;
};

// Job Detail Page Component
const JobDetailPage = async ({ params }) => {
  const { id } = params;
  const job = await fetchJobDetails(id);

  if (!job) return <div className="text-center p-6">Job not found</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <section className="bg-white shadow-md rounded-lg">
        <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px] px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row">
            {/* Job Description Column */}
            <div className="lg:w-2/3 lg:pr-6">
              <div className="flex items-center mb-6">
                <Image
                  src="https://via.placeholder.com/100"
                  alt={`${job.title} Logo`}
                  className="w-16 h-16 object-contain rounded-full border border-gray-300 shadow-lg mr-4"
                  width={100}
                  height={100}
                />
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
                  <p className="text-gray-600 text-lg">{job.location}</p>
                  <p className="text-gray-600 text-md mt-1">Vacancy: {job.vacancy}</p>
                  <p className="text-gray-600 text-md">Job Type: {job.jobType}</p>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h2>
                <p className="text-gray-700 mb-4">{job.description}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Responsibilities</h2>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  {job.keyResponsibilities.map((responsibility, index) => (
                    <li key={index} className="mb-2">{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Competencies</h2>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  {job.competencies.map((competency, index) => (
                    <li key={index} className="mb-2">{competency}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Preferred Qualifications</h2>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  {job.preferredQualifications.map((qualification, index) => (
                    <li key={index} className="mb-2">{qualification}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  {job.whatWeOffer.map((offer, index) => (
                    <li key={index} className="mb-2">{offer}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Apply</h2>
                <p className="text-gray-700 mb-4">{job.howToApply}</p>
                <p className="text-gray-600">Application Deadline: {job.applicationDeadline}</p>
              </div>
            </div>

            {/* Apply Form Column */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Apply Now</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below to apply for this position. Our team will review your application and get back to you as soon as possible.
                </p>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="resume" className="block text-gray-700 font-semibold mb-2">Resume</label>
                    <input
                      type="file"
                      id="resume"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetailPage;
