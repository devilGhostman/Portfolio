import "./App.css";
import Loader from "./components/loader";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Expertise from "./components/Expertise"
import Work from "./components/Work"

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Expertise/>
      <Work/>
      <Loader />
    </>
  );
};

export default App;
