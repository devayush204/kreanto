import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import OurApproach from "./_components/OurApproach";
import OurServices from "./_components/OurServices";
import Progress from "./_components/Progress";
import CaseStudy from "./_components/CaseStudy";
import SucessStory from "./_components/SucessStory";
import Faq from "./_components/Faq";
import LetsConnect from "./_components/LetsConnect";
import Footer from "./_components/Footer";

export default function Home() {

  return (
    <section className="overflow-hidden pb-16">
      <div id="black-bg" className="px-5 md:px-10 lg:px-20  bg-transparent bg-black">
        <Header />
        <Hero />
      </div>
      <div className="mt-20 lg:mt-0 px-5 md:px-10 lg:px-20  md:pb-10 ">
        <OurApproach />
        <OurServices />
        <Progress />
      </div>
      <div className="py-10">
        <CaseStudy />
      </div>
      <div className="px-5 md:px-10 lg:px-20">
        <SucessStory />
        <Faq />
        <LetsConnect />
        <Footer/>
      </div>

    </section>

  );
}
