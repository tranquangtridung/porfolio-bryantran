import "./App.css";
import React, { useRef } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Information from "./components/Information";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

function App() {
  const homeRef = useRef(null);
  const inforRef = useRef(null);
  const projectRef = useRef(null);
  const blogRef = useRef(null);

  return (
    <div className="App">
      <Header
        homeRef={homeRef}
        inforRef={inforRef}
        projectRef={projectRef}
        blogRef={blogRef}
      />
      <Home homeRef={homeRef} />
      <About />
      <Information inforRef={inforRef} />
      <Projects projectRef={projectRef} />
      <Blogs blogRef={blogRef} />
      <Footer />
    </div>
  );
}

export default App;
