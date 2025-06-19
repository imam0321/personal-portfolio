import { FaWhatsapp } from 'react-icons/fa';
import { GrFacebookOption, GrGithub, GrLinkedinOption } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const SocialLinks = () => {
  return (
    <div className="flex gap-5 text-white text-xl">
      <Link
        target="_blank"
        rel="noreferrer"
        to="https://github.com/imam0321/"
        className="border-[1px] border-white p-[12px] rounded-full hover:border-primary hover:text-primary transition duration-300"
      >
        <GrGithub />
      </Link>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/imam-hossain-691619196/"
        className="border-[1px] border-white p-[12px] rounded-full hover:border-primary hover:text-primary transition duration-300"
      >
        <GrLinkedinOption />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/imam0321/"
        className="border-[1px] border-white p-[12px] rounded-full hover:border-primary hover:text-primary transition duration-300"
      >
        <GrFacebookOption />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://wa.me/8801857737810/"
        className="border-[1px] border-white p-[12px] rounded-full hover:border-primary hover:text-primary transition duration-300"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default SocialLinks;