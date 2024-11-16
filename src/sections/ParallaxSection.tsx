import { motion } from "framer-motion";

import mountains from "../assets/images/mountains.png";
import stars from "../assets/images/stars.png";
import SCROLL from "../assets/images/scroll.png";

const ParallaxSection = () => {
  const backgroundStyle = { backgroundImage: `url(${stars})` };

  return (
    <div className="relative h-screen snap-center" style={backgroundStyle}>
      <div className="flex justify-center items-center h-full">
        <p className="px-6 -mt-12 text-5xl font-bold leading-normal text-center">تخصص من چیه؟</p>
      </div>
      <img
        src={mountains}
        alt="mountains"
        className="object-center absolute bottom-0 w-full h-96"
      />
       <motion.a
          href="#portfolio"
          className="absolute right-10 bottom-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={SCROLL} alt="scroll" className="w-10" />
        </motion.a>
    </div> // for snap scroll effect
  );
};

export default ParallaxSection;
