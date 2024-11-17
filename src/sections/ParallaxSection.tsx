import { motion } from "framer-motion";

import mountains from "../assets/images/mountains.png";
import sun from "../assets/images/sun.png";
import stars from "../assets/images/stars.png";
import SCROLL from "../assets/images/scroll.png";
import { useEffect, useState } from "react";

const ParallaxSection = ({ text }: { text: string }) => {
  const backgroundStyle = {
    backgroundImage: `url(${stars})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let index = 0;
    let isDeleting = false; // New variable to track deleting state
    const interval = setInterval(
      () => {
        if (!isDeleting) {
          if (index < text.length) {
            setDisplayedText((prev: string) => {
              if (text[index]) return prev + text[index];
              else return prev;
            });
            index++;
          } else {
            isDeleting = true; // Start deleting after reaching the end
          }
        } else {
          if (index > 0) {
            setDisplayedText((prev: string) => prev.slice(0, -1));
            index--;
          } else {
            isDeleting = false; // Start typing again
            index = 0; // Reset index for typing
          }
        }
      },
      isDeleting ? 70 : 170
    ); // Adjust timing based on typing or deleting

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="relative h-screen snap-center" style={backgroundStyle}>
      <div className="flex justify-center items-center h-full">
        <motion.p
          initial={{ opacity: 0, color: "black" }}
          animate={{ opacity: 1, color: "lightgray" }}
          transition={{ duration: 4 }}
          className="px-12 -mt-12 text-5xl font-bold leading-normal text-center"
        >
          {displayedText}
        </motion.p>
      </div>{" "}
      <img
        src={sun}
        alt="mountains"
        className="object-center absolute bottom-20 w-96"
      />
      <img
        src={mountains}
        alt="mountains"
        className="object-center absolute bottom-0 w-full h-96"
      />
      <motion.a
        href="#sevices"
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
