import Aboutus from "./components/Aboutus/Aboutus";
import Banner from "./components/Banner/Banner";
import CallToAction from "./components/CallToAction/CallToAction";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <div>
      <Banner />
      <Aboutus />
      <Projects />
      <CallToAction />
      <Footer />
    </div>
  );
}
