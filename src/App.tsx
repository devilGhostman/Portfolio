import "./App.css";
import Loader from "./components/loader";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Loader />
    </>
  );
};

export default App;
