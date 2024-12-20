// import Sidebar from "./components/Sidebar";
// import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import ParallaxSection from "./sections/ParallaxSection";
// import PortfolioSection from "./sections/PortfolioSection";
import ServicesSection from "./sections/ServicesSection";

const App = () => {
  return (
    <div className="overflow-y-scroll relative h-screen snap-mandatory snap-y scroll-smooth bg-AppBgColor">
      {/*snap scroll effect + bg-AppBgColor */}
      <div className="max-w-[1366px] mx-auto font-alibaba text-AppTextColor text-right font-light">
        {/*container + FontStyles*/}
        <HeroSection />

        <div id="parallax1">
          <ParallaxSection text = "کاار من چیه؟" />
        </div>
        <ServicesSection />

        <div id="parallax2">
          <ParallaxSection  text ="مییخوای کارمو ببینی؟" />
        </div>
        {/* <ParallaxSection /> */}
        {/* <div id="portfolio">
          <PortfolioSection />
        </div> */}
        {/* <PortfolioSection />
        <PortfolioSection />
        <ContactSection /> */}
        {/* <Sidebar/> */}
      </div>
    </div>
  );
};

export default App;
