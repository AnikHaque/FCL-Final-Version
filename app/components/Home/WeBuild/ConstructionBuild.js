import Image from "next/image";
import React from "react";

const ConstructionBuild = () => {
  return (
    <div className="bg-slate-50">
      <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px]">
        <section className="py-10 sm:py-16 lg:py-24">
          <div>
            <h2 className="text-3xl font-bold leading-tight mb-10 text-black sm:text-4xl lg:text-4xl">
              What We Build
            </h2>
          </div>
          <div className="">
            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16">
              <div className="bg-white p-6 rounded-md transform transition-transform duration-300 hover:scale-105">
                <div className="relative flex items-center justify-center mx-auto">
                  <img
                    src="https://media.istockphoto.com/id/1269785368/vector/road-construction-logo-road-maintenance-creative-sign-concept-paving-design-template-vector.jpg?s=612x612&w=0&k=20&c=nsHUDbyjIO1rFRpkgsug51nz-39zPx470CF6vIlcsg8="
                    className="w-20"
                  />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Highway Expansion
                </h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Expansion of the main highway with two additional lanes to
                  improve traffic flow and include updated signals and sound
                  barriers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-md transform transition-transform duration-300 hover:scale-105">
                <div className="relative flex items-center justify-center mx-auto">
                  <img
                    src="https://cdn.vectorstock.com/i/500p/35/81/bridge-construction-transportation-partnership-vector-47213581.jpg"
                    className="w-20"
                  />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Bridge Construction
                </h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Completion of a 500-meter suspension bridge, enhancing
                  connectivity over the river and providing a crucial link for
                  the local transportation network.
                </p>
              </div>

              <div className="bg-white p-6 rounded-md transform transition-transform duration-300 hover:scale-105">
                <div className="relative flex items-center justify-center mx-auto">
                  <img
                    src="https://png.pngtree.com/template/20191014/ourmid/pngtree-building-and-construction-logo-design-template-image_317780.jpg"
                    className="w-20"
                  />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Building Construction
                </h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Our construction services are designed to create beautiful,
                  functional, and sustainable homes with a high level of safety
                  and comfort.
                </p>
              </div>

              <div className="bg-white p-6 rounded-md transform transition-transform duration-300 hover:scale-105">
                <div className="relative flex items-center justify-center mx-auto">
                  <img
                    src="https://media.istockphoto.com/id/1330212296/vector/way-logo-vector-icon-design-illustration.jpg?s=612x612&w=0&k=20&c=aLz-15PCLMUYpKBHqEmXLSlQR81OIOpuQmSo4RSWIGs="
                    className="w-20"
                  />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Road Construction
                </h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Our construction services are designed to create beautiful,
                  functional, and sustainable homes with a high level of safety
                  and comfort.
                </p>
              </div>

              <div className="bg-white p-6 rounded-md transform transition-transform duration-300 hover:scale-105">
                <div className="relative flex items-center justify-center mx-auto">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/89/21/22/360_F_289212263_3U2UQ0o6ugFGzrBOj0Swe1U4SK0WdAlW.jpg"
                    className="w-20"
                  />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Drainage & Sewerage System Construction
                </h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Our construction services are designed to create beautiful,
                  functional, and sustainable homes with a high level of safety
                  and comfort.
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConstructionBuild;
