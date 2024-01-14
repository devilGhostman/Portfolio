import "./App.css";
import Loader from "./components/loader";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Expertise from "./components/Expertise";
import Work from "./components/Work";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Expertise />
      <Work />
      <Experience />
      {/* <Loader /> */}
    </>
  );
};

export default App;
