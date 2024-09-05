import Image from "next/image";
import Banner from "./components/Home/Banner/Banner";
import Statistic from "./components/Home/Satistics/Satistics";
import Company from "./components/Home/Company/Company";
import RecentWorks from "./components/Home/RecentWork/RecentWorks";
import ShortAbout from "./components/Home/ShortAbout/ShortAbout";
import ConstructionBuild from "./components/Home/WeBuild/ConstructionBuild";
import HomeContact from "./components/Home/HomeContact/page";
import Blog from "./components/Home/Blog/page";
import ManageWorks from "./components/Home/ManageWorks/page";
import Achievements from "./components/Home/Achievements/page";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <ShortAbout />
      <ConstructionBuild />
      <RecentWorks></RecentWorks>
      <Achievements></Achievements>
      <ManageWorks></ManageWorks>
      <Company />
      <HomeContact></HomeContact>
      <Blog></Blog>
    </main>
  );
}
