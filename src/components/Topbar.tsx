import { motion } from "framer-motion";
import Lottie from "lottie-react";

// Icons
import instagramIcon from "../assets/images/instagram.png";
import dribbbleIcon from "../assets/images/dribbble.png";
// import facebookIcon from "../assets/images/facebook.png";
// import youtubeIcon from "../assets/images/youtube.png";
import linkedin from "../assets/lottie/Linkedin.json";

const socialIcons = [
  { href: "#", src: instagramIcon, alt: "Instagram" },
  { href: "#", src: dribbbleIcon, alt: "Dribbble" },
  // { href: "#", src: facebookIcon, alt: "Facebook" },
  // { href: "#", src: youtubeIcon, alt: "YouTube" },
];


const Topbar = () => {
  return (
    <div className="flex justify-between items-center">
      <motion.p
        className="text-2xl font-bold"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        رض
      </motion.p>

      <div className="flex gap-3 justify-between items-center">
      <Lottie animationData={linkedin} loop={true} className="-ml-3 w-12"/> 
        {socialIcons.map(({alt,src,href}) => (
          <a href={href} key={alt}>
          <img src={src} alt={alt} className="w-6" />
        </a>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
