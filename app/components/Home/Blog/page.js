import React from "react";

const Blog = () => {
  return (
    <div className="bg-state-50 mt-20 mb-20">
      <h2 class="text-2xl text-center mt-10 mb-10 font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
        Recent Activities
      </h2>
      <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://i.postimg.cc/Jh3X8hmt/20210607-174357.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                ></a>
                <span className="text-gray-600">28 Dec 2020</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
               Top 5 Trends Shaping the Future of Construction in 2024
              </a>
              <p className="mb-2 text-gray-700 text-justify">
              The construction industry is evolving rapidly, driven by technological advances and changing consumer preferences.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://i.postimg.cc/W49kzHFP/C-1.jpgv"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                ></a>
                <span className="text-gray-600">28 Dec 2020</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Simple is better"
                className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Essential Tips for Planning a Successful Renovation Project
              </a>
              <p className="mb-2 text-gray-700">
              Renovating a space can be both exciting and challenging. Proper planning is key to ensuring the project runs smoothly.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://i.postimg.cc/dtKLsYHy/Whats-App-img-2021-06-06-at-07-26-18.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                ></a>
                <span className="text-gray-600">28 Dec 2020</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Film It!"
                className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
               The Importance of Choosing the Right Materials for Your Construction Projec
              </a>
              <p className="mb-2 text-gray-700">
              Selecting the appropriate materials is crucial for the durability, sustainability, and overall.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
