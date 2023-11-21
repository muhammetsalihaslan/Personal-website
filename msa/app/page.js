import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import SkillsProject from "@/components/projectSkills/skillsProject";

export default function Home() {
  return (
    <main className="lg:max-w-[1110px] lg:ms-[180px] font-spaceGrotesk ">
      <Header />
      <Hero />
      <hr />
      <SkillsProject />
    </main>
  );
}
