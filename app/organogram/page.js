import Image from "next/image";
import React from "react";
import img1 from "@/public/assets/banner/constraction.jpeg";
import organogram from "@/public/assets/organogram/FCL_Organogram.png";

const Organogram = () => {
  return (
    <div>
      <div className="relative -top-20">
        <div class="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
          <div class="absolute inset-0 bg-black opacity-70">
            <Image
              class="relative object-cover w-full h-full"
              src={img1}
              alt="Construction"
            />
          </div>
        </div>
      </div>
      <div className="lg:container mx-5 lg:mx-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl  border-l-4 border-green-500 hover:bg-opacity-50 pl-3 uppercase">
          Farees Construction Limited Organogram
        </h2>
        <div>
          <Image
            src={organogram}
            className="min-w-[900px]"
            alt="Organogram"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Organogram;
