import { Footer, Navbar } from '../components';
import { About, Projects, Hero, Contacts } from '../sections';
import Tech from '../sections/Tech';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Tech />
    </div>
    <div className="relative">
      <Projects />
      <div className="gradient-04 z-0" />
      <Contacts />
      <div className="gradient-03 z-0" />
    </div>
    <div className="gradient-04 z-0" />
    <Footer />
  </div>
);

export default Page;
