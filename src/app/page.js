import Image from "next/image";
import Footer from "./components/Footer/Footer";
import CallToAction from "./components/CallToAction/CallToAction";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Aboutus from "./components/Aboutus/Aboutus";

export default function Home() {
  return (
    <div>
      <Banner />
      <Aboutus/>
      <CallToAction/>
      <Footer />
    </div>
  );
}
