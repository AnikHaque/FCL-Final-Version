import Image from "next/image";
import React from "react";
import POS from "@/public/assets/recentWorks/POS.png";
import DS from "@/public/assets/recentWorks/D&S.jpg";
import NPB from "@/public/assets/recentWorks/NPB.jpeg";
import road from "@/public/assets/recentWorks/road.jpg";
import UN from "@/public/assets/recentWorks/UN.jpg";
import constraction from "@/public/assets/recentWorks/constraction1.jpg";

const RecentWorks = () => {
  const imageHeight = 300;

  return (
    <div className="py-20 container mx-auto max-w-[1300px]" id="recent-works">
      <div className="mx-5 lg:container lg:mx-auto">
        <div>
          <h2 class="text-3xl text-center font-bold leading-tight mb-10 text-black sm:text-4xl lg:text-4xl">
            Recent Works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 rounded">
          <div className="relative h-[300px] overflow-hidden rounded-md">
            <Image
              src={POS}
              alt="PSO Banglow, Dhaka Cantonment."
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute bottom-0 p-5 border-b-4 border-green-700 w-full hover:bg-green-900 hover:bg-opacity-50 duration-1000">
              <h2 className="text-2xl  text-white font-bold">
                PSO Banglow, Dhaka Cantonment.
              </h2>
              <div className="flex gap-2 mt-2">
                <p className="border border-white text-white  rounded-full px-5 py-2">
                  Construction
                </p>
                <p className="border border-white text-white  rounded-full px-5 py-2">
                  Recent
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-md">
            <Image
              src={road}
              alt="7.5 km Flexible Road’s Pavement"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute bottom-0 p-5 border-b-4 border-green-700 w-full hover:bg-green-900 hover:bg-opacity-50 duration-1000">
              <h2 className="text-2xl  text-white font-bold">
                7.5 km Flexible Road’s Pavement
              </h2>
              <div className="flex gap-2 mt-2">
                <p className="border border-white text-white  rounded-full px-5 py-2">
                  Construction
                </p>
                <p className="border border-white text-white  rounded-full px-5 py-2">
                  Recent
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-md">
            <Image
              src={DS}
              alt="Jolshiri Drainage & Swerege Network"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute bottom-0 p-5 border-b-4 border-green-700 w-full hover:bg-green-900 hover:bg-opacity-50 duration-1000">
              <h2 className="text-2xl  text-white font-bold">
                Jolshiri Drainage & Swerege Network
              </h2>
              <div className="flex gap-2 mt-2">
                <p className="border border-white text-white  rounded-full px-5 py-2">
                  Construction
                </p>
                <p className="border border-white text-white  rounded-full px-5 py-2">
                  Recent
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-md">
            <Image
              src={NPB}
              alt="Construction of Non-Process Building (NPB)"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute bottom-0 p-5 border-b-4 border-green-700 w-full hover:bg-green-900 hover:bg-opacity-50 duration-1000">
              <h2 className="text-2xl  text-white font-bold">
                Construction of Non-Process Building (NPB)
              </h2>
              <div className="flex gap-2 mt-2">
                <p className="border border-white text-white  rounded-full px-5 py-2">
                  Construction
                </p>
                <p className="border border-white text-white  rounded-full px-5 py-2">
                  Recent
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-md">
            <Image
              src={constraction}
              alt="Raw Water Flow Measurement Chamber"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute bottom-0 p-5 border-b-4 border-green-700 w-full hover:bg-green-900 hover:bg-opacity-50 duration-1000">
              <h2 className="text-2xl  text-white font-bold">
                Raw Water Flow Measurement Chamber
              </h2>
              <div className="flex gap-2 mt-2">
                <p className="border border-white text-white  rounded-full px-5 py-2">
                  Construction
                </p>
                <p className="border border-white text-white  rounded-full px-5 py-2">
                  Recent
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-md">
            <Image
              src={UN}
              alt="UN Vehicle Repair Shed"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute bottom-0 p-5 border-b-4 border-green-700 w-full hover:bg-green-900 hover:bg-opacity-50 duration-1000">
              <h2 className="text-2xl  text-white font-bold">
                UN Vehicle Repair Shed
              </h2>
              <div className="flex gap-2 mt-2">
                <p className="border border-white text-white  rounded-full px-5 py-2">
                  Construction
                </p>
                <p className="border border-white text-white  rounded-full px-5 py-2">
                  Recent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
