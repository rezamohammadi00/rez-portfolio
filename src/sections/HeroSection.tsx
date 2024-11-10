import { motion } from "framer-motion";
import Topbar from "../components/Topbar";
import HERO from "../assets/images/he.png"; // Fixed typo in variable name
import SCROLL from "../assets/images/scroll.png";

interface ButtonProps {
  text: string;
  variant: "filled" | "outlined";
}

const Button = ({ text, variant }: ButtonProps) => {
  const baseStyles = "px-4 py-2 rounded-md";
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
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex flex-col gap-4 items-start mt-8 w-96">
          <p className="mx-auto text-base text-indigo-800">
            (رضا‌محمدی)
          </p>
          <p className="flex flex-col items-center w-full text-lg font-bold leading-loose">
            <span>
              توسعه دهنده موبایل و وب
              <span className="mr-2 text-indigo-800">اپلیکیشن</span>
            </span>
            و طراح رابط کاربری
          </p>
          <div className="flex gap-3 justify-center items-center mt-10 w-full font-regular">
            <Button text="نمونه‌کارها" variant="filled" />
            <Button text="تماس‌با‌من" variant="outlined" />
          </div>
        </div>

        <img
          src={HERO}
          alt="hero"
          className="object-cover mt-24 w-full h-auto"
        />
        <a href="#parallax1" className="absolute bottom-10">
          <img src={SCROLL} alt="scroll" className="mt-10 w-10" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;