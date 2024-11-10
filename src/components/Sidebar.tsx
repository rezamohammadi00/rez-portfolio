import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";

import menu from "../assets/lottie/menu.json";

const sidebarVariants = {
  initial: {
    width: 0,
    height: 0,
  },
  animate: {
    width: 240,
    height: "100vh",
    transition: { duration: 0.7, type: "spring", staggerChildren: 0.2 },
  },
  exit: {
    opacity: 0,
    width: 40,
    height: 40,
    transition: { duration: 0.5 },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const hamburgerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <AnimatePresence>
        {sidebar && (
          <motion.div
            className="sticky bottom-0 right-0 flex flex-col items-center justify-center h-screen gap-5 bg-white rounded-sm w-60"
            variants={sidebarVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <p
              className="absolute cursor-pointer top-4 right-6"
              onClick={() => setSidebar(false)}
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                  fill="#000000"
                />
              </svg>
            </p>
            {["خانه", "خدمات", "نمونه‌کارها", "تماس", "درباره‌من"].map(
              (text, index) => (
                <motion.a
                  key={index}
                  href="#home"
                  variants={itemVariants}
                  onClick={() => setSidebar(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-lg font-regular text-stone-800">
                    {text}
                  </span>
                </motion.a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!sidebar && (
          <motion.div
            className="sticky mr-2 bottom-7 brightness-200"
            variants={hamburgerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            >
            <Lottie animationData={menu} loop={true} className="w-24 cursor-pointer hover:opacity-70" onClick={() => setSidebar(true)} />
            {/* <motion.a onClick={() => setSidebar(true)} href="#" whileHover={{ rotateX: 90 }}  >
            </motion.a> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
