
import React from "react";
import POS from "@/public/assets/recentWorks/POS.png";
import DS from "@/public/assets/recentWorks/D&S.jpg";
import NPB from "@/public/assets/recentWorks/NPB.jpeg";
import road from "@/public/assets/recentWorks/road.jpg";
import UN from "@/public/assets/recentWorks/UN.jpg";
import constraction from "@/public/assets/recentWorks/constraction1.jpg";

const RecentWorks = () => {
  const projects = [
    
    {
      name: '7.5 km Flexible Road’s Pavement',
      category: 'Construction',
      backgroundimg: 'https://i.postimg.cc/tC810NXt/road.jpg',
    },
    {
      name: 'Jolshiri Drainage & Swerege Network',
      category: 'Construction',
      backgroundimg: 'https://i.postimg.cc/J02szbj8/D-S.jpg',
    },
    {
      name: 'Construction of Non-Process Building (NPB)',
      category: 'Construction',
      backgroundimg: 'https://i.postimg.cc/90M42xR1/NPB.jpg',
    },
    {
      name: 'Raw Water Flow Measurement Chamber',
      category: 'Construction',
      backgroundimg: 'https://i.postimg.cc/9FD4NnjQ/constraction1.jpg',
    },
    {
      name: 'UN Vehicle Repair Shed',
      category: 'Construction',
      backgroundimg: 'https://i.postimg.cc/26TqPp6V/UN.jpg',
    },
    {
      name: 'Bhasan Char Ashrayan-3, Storm Drain project at Bhasanchar, Noakhali',
      category: 'Construction',
      backgroundimg: 'https://i.postimg.cc/gjCG74vx/IMG20200408164436.jpg',
    },
    
    // Add other projects here
  ];

  return (
    <div className="py-20 container mx-auto max-w-[1300px]" id="recent-works">
      <div className="mx-5 lg:container lg:mx-auto">
        <div>
          <h2 class="text-2xl text-center font-bold leading-tight mb-10 text-black sm:text-4xl lg:text-4xl">
            Recent Works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="relative h-[300px] overflow-hidden rounded-md">
                    <img
                      className="bg-black bg-opacity-40 w-full h-full"
                      src={project.backgroundimg}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute bottom-0 p-5 border-b-4 border-green-700 w-full hover:bg-green-900 hover:bg-opacity-50 duration-1000">
                      <h2 className="text-2xl text-white font-bold">{project.name}</h2>
                      <div className="flex gap-2 mt-2">
                        <p className="border border-white text-white rounded-full px-5 py-2">
                          Construction
                        </p>
                        <p className="border border-white text-white rounded-full px-5 py-2">
                          Recent Works
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </div>
  );
};

export default RecentWorks;
