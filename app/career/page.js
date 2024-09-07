// app/career/page.tsx
import Link from 'next/link';
import img1 from '@/public/assets/banner/constraction.jpeg';

const jobOpenings = [
  {
    id: 1,
    title: "Structural engineer",
    location: "Mirpur DOHS, Dhaka, Bangladesh",
    description: "A structural engineer is a specialized type of civil engineer focused on developing structures",
  },

];

export default function CareerPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src={img1}
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-extrabold">
              Build your career
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Current Job Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job) => (
              <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-3xl font-semibold mb-2">Structural Engineer</h2>
              <p className="text-gray-600 mb-4">Construction Site - [Location]</p>
              <div className="flex items-center mb-4">
                <span className="inline-block bg-green-200 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded-full mr-2">Full-Time</span>
                <span className="inline-block bg-yellow-200 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded-full">Immediate Start</span>
              </div>
              <p className="text-gray-700 mb-6">
                We are looking for a highly skilled Structural Engineer to join our team at a prominent construction site. You will be responsible for ensuring that structural designs are safe, stable, and suitable for the project requirements.
              </p>

              <Link href='/sub-career'>
              <button className='btn bg-green-800 text-white hover:bg-green-600'>View Job Details</button>
              
              </Link>
            </div>
            ))}
          </div>
        </div>
      </section>

   
    </div>
  );
}
