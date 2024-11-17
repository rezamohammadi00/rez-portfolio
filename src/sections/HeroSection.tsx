import { motion } from "framer-motion";
import Topbar from "../components/Topbar";
import HERO from "../assets/images/he.png"; // Fixed typo in variable name
import SCROLL from "../assets/images/scroll.png";

interface ButtonProps {
  text: string;
  variant: "filled" | "outlined";
}

const Button = ({ text, variant }: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded-md font-regular";
  const variantStyles = {
    filled: "text-black bg-AppTextColor",
    outlined: "border border-AppTextColor text-AppTextColor",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {text}
    </motion.button>
  );
};

const HeroSection = () => {
  return (
    <section
      className="overflow-hidden px-6 py-8 h-screen snap-center"
      id="home"
    >
      <Topbar />
      <div className="flex flex-col gap-8 justify-center items-center h-full">
        {/* title and subtitle and buttons */}
        <div className="flex flex-col gap-4 items-star">
          {/* <p className="mx-auto text-base text-indigo-800">رضا‌محمدی</p> */}
          <motion.p
            className="flex flex-col items-center w-full text-2xl font-bold leading-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span>توسعه دهنده<span className="text-orange-400"> موبایل و وب</span> </span> {/* Space added here */}
              <motion.span
                className="mr-2 text-indigo-800"
                whileHover={{ scale: 1.1 }}
              >
                اپلیکیشن
              </motion.span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              و طراح رابط کاربری
            </motion.span>
          </motion.p>

          <div className="flex gap-3 justify-center items-center mt-4 w-full font-regular">
            <Button text="نمونه‌کارها" variant="filled" />
            <Button text="تماس‌با‌من" variant="outlined" />
          </div>
        </div>
        {/* hero image */}
        <img
          src={HERO}
          alt="hero"
          className="object-contain w-full h-auto max-h-96"
        />
        <motion.a
          href="#parallax1"
          className="absolute right-10 bottom-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={SCROLL} alt="scroll" className="w-10" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
