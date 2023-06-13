import { Footer, Navbar } from '../components';
import { About, Feedback, Projects, Hero, Insights, Contacts, World } from '../sections';
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
    </div>
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
