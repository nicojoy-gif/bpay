import Features from "./Components/Features";
import Hero from "./Components/Hero";
import Metrics from "./Components/Metrics";
import Nav from "./Components/Nav";
import Partners from "./Components/Partners";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12 bg-customLightBlue">
      <Nav />
     <Hero />
     <Partners />
     <Features />
     <Metrics />
    </main>
  );
}
