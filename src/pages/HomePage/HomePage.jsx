import useTitle from "../../hooks/useTitle";
import HomeProfile from "./Profile/HomeProfile";


const HomePage = () => {
  useTitle('Portfolio')
  return (
    <div>
      <HomeProfile/>
      {/* <TopBanner />
      <AboutMe />
      <Services />
      <MySkills />
      <Projects />
      <ContactMe /> */}
    </div >
  );
};

export default HomePage;