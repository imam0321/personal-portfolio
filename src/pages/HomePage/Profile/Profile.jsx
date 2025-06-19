import profile from "../../../assets/profile.jpg"
import SocialLinks from "../../../components/SocialLinks";

const Profile = () => {
  return (
    <div className="lg:w-[380px] border-[1px] border-[#bbb] rounded-3xl px-6 py-10 sticky top-16">
      {/* <div className="flex justify-between mb-6">
        <h2 className="text-white text-4xl font-bold text-[#03C988]">Ashik</h2>
        <h2 className="text-white leading-[20px]">Software Engineer</h2>
      </div> */}
      <img
        src={profile}
        alt=""
        className="h-[250px] w-[250px] object-cover rounded-3xl mx-auto"
      />
      <div className="flex flex-col  items-center mt-8">
        <h2 className="text-white  ">Imam Hossain</h2>
        <h2 className="text-white  ">Software Engineer</h2>
        <h2 className="text-white ">imam.hossain0321@gmail.com</h2>
        <h2 className="text-white mb-6">Dhaka, Bangladesh</h2>

        {/* SOCIAL MEDIA ICONS */}
        <SocialLinks />
        <a href="#contact">
          <button className="btn btn-wide btn-primary mt-8">Hire Me</button>
        </a>
      </div>
    </div>
  );
};

export default Profile;