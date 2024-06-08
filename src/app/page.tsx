import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/whyChooseUs";
import MusicSchoolTestimonials from "./components/TestimonialCards";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[0.96] bg-grid-white/[0.02] antialiased">
      {/* <h1 className=" text-2xl text-center"> Chai aur code</h1> */}
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials/>
    </main>
  );
}
