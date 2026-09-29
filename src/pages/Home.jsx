import Intro from "../components/home/Intro";
import Reconversion from "../components/home/Reconversion";
import Alternance from "../components/home/Alternance";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
  return (
    <div className="space-y-5"> 
      <Intro />
      <Reconversion />
      <Alternance />
      <CallToAction />
    </div>
  );
}