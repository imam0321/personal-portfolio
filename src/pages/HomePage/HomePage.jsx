import useTitle from "../../hooks/useTitle";
import AboutMe from "./AboutMe/AboutMe";
import HomeProfile from "./Profile/HomeProfile";
import Services from "./Services/Services";
import TopBanner from "./TopBanner/TopBanner";


const HomePage = () => {
  useTitle('Portfolio')
  return (
    <div>
      <HomeProfile/>
      <TopBanner />
      <AboutMe />
      <Services />
      {/* <MySkills /> */}
      {/* <Projects /> */}
      {/* <ContactMe /> */}
    </div >
  );
};

export default HomePage;