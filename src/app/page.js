import Aboutus from "./components/Aboutus/Aboutus";
import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import CallToAction from "./components/CallToAction/CallToAction";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <div>
      <Banner />
      <Aboutus />
      <Projects />
      <Experties />
      <CallToAction />
      <Blogs />
      <Footer />
    </div>
  );
}
