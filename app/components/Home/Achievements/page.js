import Link from "next/link";
import React from "react";

const Achievements = () => {
  return (
    <div className="bg-black text-white py-14 lg:py-32">
      <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mt-10">
            <h1 class="text-base font-bold tracking-tight text-white text-opacity-90">
              <span>Achievements</span>
            </h1>
            <h1 className="font-bold text-3xl lg:text-5xl">
              Our Achievements <br></br>
              <span className="text-green-400">& Experiences</span>
            </h1>
            <p className="text-justify max-w-[500px] mt-6">
              With decades of industry expertise, we deliver standout
              construction projects across diverse sectors. Our track record
              reflects our commitment to innovation, quality, and client
              satisfaction.
            </p>
          </div>

          <div>
            <div>
              <section class="">
                <div class="">
                  <div class="grid grid-cols-1 gap-6 6 xl:gap-10 sm:grid-cols-2 lg:grid-cols-2">
                  <Link href='/projects'>
                  <div class="overflow-hidden bg-white rounded shadow">
                      <div class="p-8">
                        <div class="flex justify-center items-center">
                          <img
                            class="flex-shrink-0 w-20 h-auto"
                            src="https://static.vecteezy.com/system/resources/thumbnails/008/461/358/small_2x/team-project-filled-line-icon-linear-style-sign-for-mobile-concept-and-web-design-outline-icon-symbol-logo-illustration-graphic-free-vector.jpg"
                            alt=""
                          />
                          <div class="ml-5 mr-auto">
                            <p class="text-4xl font-extrabold text-black">
                              250
                            </p>
                            <p class="mt-px text-lg text-gray-600">
                              Project Done
                            </p>
                          </div>
                          <svg
                            class="hidden w-5 h-5 text-blue-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>

                    <Link href='/Team'>
                    <div class="overflow-hidden bg-white rounded shadow">
                      <div class="p-8">
                        <div class="flex justify-center items-center">
                          <img
                            class="flex-shrink-0 w-20 h-auto"
                            src="https://st2.depositphotos.com/1364916/9506/v/450/depositphotos_95065586-stock-illustration-teamwork-healthy-people-logo.jpg"
                            alt=""
                          />
                          <div class="ml-5 mr-auto">
                            <p class="text-4xl font-extrabold text-black">21</p>
                            <p class="mt-px text-lg text-gray-600">
                              Members
                            </p>
                          </div>
                          <svg
                            class="hidden w-5 h-5 text-blue-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    </Link>

                    <div class="overflow-hidden bg-white rounded shadow">
                      <div class="p-8">
                        <div class="flex justify-center items-center">
                          <img
                            class="flex-shrink-0 w-16 h-auto"
                            src="https://t3.ftcdn.net/jpg/05/52/94/04/360_F_552940486_fxWezKQwCmmUdAEesW2mp19mOZC5vgyn.jpg"
                            alt=""
                          />
                          <div class="ml-5 mr-auto">
                            <p class="text-4xl font-extrabold text-black">99</p>
                            <p class="mt-px text-lg text-gray-600">
                              National Awards
                            </p>
                          </div>
                          <svg
                            class="hidden w-5 h-5 text-blue-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                  <Link href='/happyclients'>
                  <div class="overflow-hidden bg-white rounded shadow">
                      <div class="p-8">
                        <div class="flex justify-center items-center">
                          <img
                            class="flex-shrink-0 w-20 h-auto"
                            src="https://img.freepik.com/premium-vector/happy-customers-clients-vector-icon_116137-4022.jpg"
                            alt=""
                          />
                          <div class="ml-5 mr-auto">
                            <p class="text-4xl font-extrabold text-black">
                              346
                            </p>
                            <p class="mt-px text-lg text-gray-600">
                              Happy Clients
                            </p>
                          </div>
                          <svg
                            class="hidden w-5 h-5 text-blue-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
