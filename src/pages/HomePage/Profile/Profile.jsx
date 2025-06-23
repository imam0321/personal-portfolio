import { Link } from "react-router-dom";
import profile from "../../../assets/profile.jpg"
import SocialLinks from "../../../components/SocialLinks";

const Profile = () => {
  return (
    <div className="lg:w-[380px] border-[1px] border-[#bbb] rounded-3xl px-6 py-10 sticky top-10">
      <img
        src={profile}
        alt="profile"
        className="h-[250px] w-[250px] object-cover rounded-3xl mx-auto"
      />
      <div className="flex flex-col  items-center mt-8">
        <h2 className="text-white  ">Imam Hossain</h2>
        <h2 className="text-white  ">Software Engineer</h2>
        <h2 className="text-white ">imam.hossain0321@gmail.com</h2>
        <h2 className="text-white mb-6">Dhaka, Bangladesh</h2>

        {/* SOCIAL MEDIA ICONS */}
        <SocialLinks />
        <Link to="#contact">
          <button className="btn btn-wide btn-primary mt-8">Hire Me</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;