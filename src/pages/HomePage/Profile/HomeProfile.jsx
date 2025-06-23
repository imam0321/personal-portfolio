
import SocialLinks from '../../../components/SocialLinks';
import profile from "../../../assets/profile.jpg"

const HomeProfile = () => {
  return (
    <div className="w-full px-4 lg:hidden flex md:flex-row justify-center items-center flex-col py-10">
      <div>
        <img
          src={profile}
          alt=""
          className="h-[250px] w-[250px] object-cover rounded-3xl md:ml-auto mx-auto"
        />
        <div className="flex flex-col justify-center items-center mt-8">
          <h2 className="text-white  ">Imam Hossain</h2>
          <h2 className="text-white  ">Software Engineer</h2>
          <h2 className="text-white ">imam.hossain0321@gmail.com</h2>
          <h2 className="text-white mb-6">Dhaka, Bangladesh</h2>
        </div>
        <SocialLinks />
        <a href="#contact">
          <button className="btn btn-wide btn-primary text-black mt-8">Hire Me</button>
        </a>
      </div>
    </div>
  );
};

export default HomeProfile;