"use client";

import Image from "next/image";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";
import logo from "@/public/assets/logo/logo.png";

const Nav = () => {
  const onButtonClick = () => {
    fetch("/assets/documents/FCL_Brochure.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "FCL_Brochure.pdf";
        alink.click();
      });
    });
  };

  const navItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li className="relative group hidden lg:block">
        <span className="cursor-pointer flex items-center">
          Associates <GoChevronDown className="ml-1 font-bold " />
        </span>
        <ul className="absolute lg:left-[-370px] lg:w-[1530px]  hidden bg-white text-black shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out p-2">
          <div className="flex justify-center items-center gap-6 py-10">
            <Link href="/sub-company">
              <div className="card bg-base-100 w-96 shadow-xl overflow-hidden">
                <figure>
                  <img
                    className="w-52 h-52"
                    src="https://i.postimg.cc/LsR1YHLM/fcl-02.png"
                    alt="M/S MAN ENTERPRISE"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-sm text-center">M/S MAN ENTERPRISE</h2>
                </div>
              </div>
            </Link>

            <div className="card bg-base-100 w-96 shadow-xl overflow-hidden">
              <figure>
                <img
                  className="w-52 h-52"
                  src="https://i.postimg.cc/SNM2gXGh/fcl-03.png"
                  alt="Shoes"
                />
              </figure>

              <div className="card-body">
                <h2 className="text-sm text-center">
                  MR DRILLING & CONSTRUCTION LTD.
                </h2>
              </div>
            </div>
          </div>
        </ul>
      </li>

<li className="lg:hidden">
<details className="dropdown">
  <summary className="">Associates</summary>
  <ul className="menu dropdown-content bg-base-300   z-[1] w-[80%]  shadow">
    <li><Link href='/sub-company'>MAN Enterprise</Link></li>
    <li><a>MR.Drilling & Construction Ltd.</a></li>
  </ul>
</details>
</li>


      <li>
        <Link href="/area-of-activities">Areas of Activities</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
<li className="lg:hidden">
<details className="dropdown">
  <summary className="">Equipment</summary>
  <ul className="menu dropdown-content bg-base-300   z-[1] w-[80%]  shadow">
    <li><Link href='/sub-company'>Equipment List</Link></li>
    <li><a>Equipment Photos</a></li>
  </ul>
</details>
</li>

      <li className="relative group hidden lg:block">
        <span className="cursor-pointer flex items-center">
          Equipment <GoChevronDown className="ml-1 font-bold " />
        </span>

        <ul className="absolute ease-in duration-300 lg:left-[-850px] lg:w-[1530px]  hidden bg-white text-black shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 ease-in-out p-2">
          <div className="flex justify-center items-center gap-6 py-10">
            <div className="card bg-base-100 w-96 shadow-xl">
              <Link href="/list-equipments">
                <figure>
                  <img
                    className="w-full h-52 rounded-xl"
                    src="https://t4.ftcdn.net/jpg/02/49/04/93/360_F_249049329_BpYUPt5TGST3qTTfOJVpTakAdCLFzcg1.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Equipment list</h2>
                </div>
              </Link>
            </div>

            <div className="card bg-base-100 w-96 shadow-xl">
              <Link href="/photo-equipments">
                <figure>
                  <img
                    className="w-full h-52 rounded-xl"
                    src="https://nmccat.com/wp-content/uploads/2020/09/Cat-Backhoe-1.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Equipment Photos</h2>
                </div>
              </Link>
            </div>
          </div>
        </ul>
      </li>
      <li>
        <Link href="/csr">CSR</Link>
      </li>

      <li>
        <Link href="/career">Career</Link>
      </li>
      <li>
        <Link href="/gallery">Gallery</Link>
      </li>
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>
    </>
  );

  return (
    <div>

    <div className=" hidden lg:block bg-white fancyNav sticky top-0 z-50 text-black shadow-md">
      <div className="navbar flex justify-between items-center">
        <div className="lg:container lg:mx-auto lg:max-w-[1300px] flex justify-between items-center">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <Link href="/" >
              <img
                src='https://i.postimg.cc/DykGJf6G/fcl-01.png'
                alt="FCL logo"
                className="w-14"
              ></img>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex flex-grow">
         
            <ul className="menu menu-horizontal px-1 flex items-center text-[18px]">
            <Link href="/">
              <img
                src='https://i.postimg.cc/DykGJf6G/fcl-01.png'
                alt="FCL logo"
                className="w-14"
              ></img>
            </Link>
              {navItems}
            </ul>
          </div>
          
          <div className="navbar-end flex items-center">
            <a
              onClick={onButtonClick}
              href="#"
              className="bg-black text-white hover:bg-green-700 hover:text-white duration-500 rounded-full px-5 py-2 flex items-center cursor-pointer"
            >
              Brochure <MdOutlineFileDownload className="ml-2 text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="block lg:hidden bg-white fancyNav sticky top-0 z-50 text-black shadow-md">
      <div className="navbar flex justify-between items-center">
        <div className="lg:container lg:mx-auto lg:max-w-[1300px] flex justify-between items-center">
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <Link href="/" >
              <img
                src='https://i.postimg.cc/DykGJf6G/fcl-01.png'
                alt="FCL logo"
                className="w-14"
              ></img>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex flex-grow">
            <ul className="menu menu-horizontal px-1 flex items-center text-[18px]">
              {navItems}
            </ul>
          </div>
          <div className="navbar-end flex items-center">
            <a
              onClick={onButtonClick}
              href="#"
              className="bg-black text-white hover:bg-green-700 hover:text-white duration-500 rounded-full px-5 py-2 flex items-center cursor-pointer"
            >
              Brochure <MdOutlineFileDownload className="ml-2 text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>

    </div>

    
  );
};

export default Nav;
