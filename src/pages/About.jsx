import Profile from "../components/cv/Profile";
import Experience from "../components/cv/Experience";
import Formation from "../components/cv/Formation";
import Skills from "../components/cv/Skills";
import Interests from "../components/cv/Interests";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-10">
      <Profile />
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-16">
          <Experience />
          <Formation />
        </div>
        <div className="space-y-12">
          <Skills />
          <Interests />
        </div>
      </div>
    </div>
  );
}