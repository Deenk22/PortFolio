// import Home from "./view/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import {AboutMe, Project, Music} from "./sections";

function App() {
  return (
    <>
      <Navbar />
      {/* <h1 className="text-8xl font-principal">Santiago</h1>
      <h1 className="text-4xl font-principal">Full Stack Web Developer</h1> */}
      {/* <Home /> */}
      <AboutMe />
      <Project />
      <Music />
    </>
  );
}

export default App;
