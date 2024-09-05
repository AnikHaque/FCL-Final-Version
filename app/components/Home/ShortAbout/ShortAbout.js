import Link from "next/link";
import house from "@/public/assets/shortAbout/house.jpg";
import road from "@/public/assets/shortAbout/road.jpeg";
import cons from "@/public/assets/shortAbout/cons.jpg";
import Image from "next/image";

const ShortAbout = () => {
  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
        <div class="grid items-center md:grid-cols-2 md:gap-x-20">
          <div class="pr-12 sm:pr-0">
            <div class="relative max-w-md mb-12">
              <img
                class="object-bottom rounded-md"
                src="https://i.postimg.cc/fT2w4crJ/2.jpg"
                alt=""
              />

              <img
                class="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-14 "
                src="https://i.postimg.cc/vHM18thh/1.jpg"
                alt=""
              />
            </div>
          </div>

          <div>
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Farees Construction <br /> Limited (FCL)
            </h2>
            <p class="mt-4 text-base leading-relaxed text-gray-600 text-justify">
              <strong>FAREES CONSTRUCTION LIMITED (FCL)</strong> is an
              independent engineering construction company with an objective to
              provide complete and international standard technical approach in
              the construction industry of Bangladesh. Man Enterprise ventured
              into the construction area as early as 2012 and Farees
              Construction Limited (FCL) was formed in 2017 to join the venture.
              The company was created out of a vision of Brigadier General AKM
              Mahfuzul Haque (Retd.), the CEO & MD of Farees Construction
              Limited, to serve the nation with top-quality professionals.
            </p>
            <br></br>
            <p className="text-base leading-relaxed text-gray-600 text-justify">
              <strong>FCL</strong> consists of a professionals, experts in the
              development sectors, and experienced management. The organization
              have launched country-wide nation-building activities by
              completing several multi-storied buildings, hydraulic structures,
              deep tube wells, water purification plants, irrigation, flood
              control projects, etc. <strong>FCL</strong> is also experienced in
              constructing piling (situ/bored/caisson), pile cap &retaining
              structures etc.
            </p>
            <div>
              <Link
                href="/about"
                aria-label=""
                className="inline-flex items-center  font-semibold transition-colors duration-200 bg-black text-white p-3 w-52 flex justify-center rounded-full mt-8"
              >
               Explore More
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortAbout;
