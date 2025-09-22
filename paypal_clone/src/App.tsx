import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/navBar";
import Why from "./components/whyUs";

const App: React.FC = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
      <Why />
    </main>
  );
};

export default App;
