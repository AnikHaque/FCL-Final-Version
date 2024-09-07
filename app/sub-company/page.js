import Link from "next/link";
import React from "react";

const SubCompany = () => {
  return (
    <div>
      <section className="relative bg-gray-800 text-white">
        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2024/05/14/05/38/construction-8760339_640.jpg"
            alt="Banner"
            className="object-cover w-full h-64 bg-black opacity-5"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-white text-3xl lg:text-4xl font-extrabold text-center ">
              {" "}
              M/S MAN ENTERPRISE{" "}
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
                  <Link href="/sub-company">
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
                    Associate With
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-[1400px] px-4 lg:mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div className="">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl mb-4">
                M/S MAN ENTERPRISE
              </h2>
              <div className="text-justify">
                <p>
                  <strong>M/S MAN ENTERPRISE</strong> is an independent
                  engineering construction company with an objective to provide
                  complete and international standard technical approach in the
                  construction industry of Bangladesh. Man Enterprise ventured
                  into the construction area as early as 2012 and Farees
                  Construction Limited (FCL) was formed in 2017 to join the
                  venture. The company was created out of a vision of Brigadier
                  General AKM Mahfuzul Haque (Retd.), the CEO & MD of Farees
                  Construction Limited, to serve the nation with top-quality
                  professionals.
                </p>
                
              </div>
            </div>

            <div className="relative pl-20 pr-6 sm:pl-6 md:px-0">
              <div className="relative w-full max-w-lg mt-4 mb-10 ml-auto">
                <img
                  className="ml-auto"
                  src="https://i.postimg.cc/15my8CqW/Cover.jpg"
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

      <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Services We Provide</h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div class="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/Construction-Logos.jpg" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Site Preparation</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Clearing the land, leveling the ground, and setting up access roads and fences.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://www.utilities-me.com/2021/07/AtlasCopco.jpg" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Temporary Utilities</p>
                        </div>
                       
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Provision of electricity, water, drainage, and sewage facilities necessary for construction activities.</p>
                </div>
            </div>

            <div class="overflow-hidden bg-white rounded shadow">
                <div class="p-8">
                    <div class="flex items-center">
                        <img class="flex-shrink-0 w-12 h-auto" src="https://encrypted-tbn0.gstatic.com/imgs?q=tbn:ANd9GcQ_Kbce_BvHsHYJMs-Q6DWOQF9fovCZ7danZywkHYbXwBLbUuxfI31eZjhYt5VSc6-KDkw&usqp=CAU" alt="" />
                        <div class="ml-5 mr-auto">
                            <p class="text-xl font-semibold text-black">Waste Management</p>
                        </div>
                        <svg class="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                    <p class="text-base leading-relaxed text-gray-600 mt-7">Managing the disposal of construction waste, including recycling and proper disposal of hazardous materials.</p>
                </div>
            </div>
        </div>


    </div>
</section>

    </div>
  );
};

export default SubCompany;
