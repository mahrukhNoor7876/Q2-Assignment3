import HeroSection from "@/app/components/HeroSection";
import MainSection from "@/app/components/MainSection";
import PopularCourse from "@/app/components/PopularCourse";
import Registration from "@/app/components/Registration";

export default function Home() {
  return (
    <div>
        <HeroSection />
        <MainSection />
        <PopularCourse />
        <Registration />
    </div>
  );
}
