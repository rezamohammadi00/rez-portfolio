// import { motion } from "framer-motion";
import Lottie from "lottie-react";

// Icons
import instagramIcon from "../assets/images/instagram.png";
import dribbbleIcon from "../assets/images/dribbble.png";
// import facebookIcon from "../assets/images/facebook.png";
// import youtubeIcon from "../assets/images/youtube.png";
import linkedin from "../assets/lottie/Linkedin.json";

//logo
import logo from "../assets/images/logo.png";

const socialIcons = [
  {
    href: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fh.afrasiab%2F%3Fhl%3Den&is_from_rle",
    src: instagramIcon,
    alt: "Instagram",
  },
  { href: "https://dribbble.com/irez__", src: dribbbleIcon, alt: "Dribbble" },
  // { href: "#", src: facebookIcon, alt: "Facebook" },
  // { href: "#", src: youtubeIcon, alt: "YouTube" },
];

const Topbar = () => {
  return (
    <div className="flex justify-between items-center">
      {/* <motion.p
        className="text-2xl font-bold"
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.5 }}
      >
      </motion.p> */}
      <img src={logo} alt="logo" className="object-cover w-28" />

      <div className="flex gap-3 justify-between items-center">
        <a href="https://www.linkedin.com/in/reza-mohammadi-30ab10238/">
          <Lottie animationData={linkedin} loop={true} className="-ml-3 w-12" />
        </a>
        {socialIcons.map(({ alt, src, href }) => (
          <a href={href} key={alt}>
            <img src={src} alt={alt} className="w-6" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
