import { useEffect, useState } from "react";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollProgressBar from "./components/ScrollProgressBar";
import LoginForm from "./components/LoginForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // ⏳ Wait before rendering

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    if (status === "true") {
      setIsLoggedIn(true);
    }
    setIsCheckingAuth(false); // ✅ Done checking
  }, []);

  if (isCheckingAuth) {
    return null; // or a loading spinner
  }

  if (!isLoggedIn) {
    return (
      <LoginForm
        onLoginSuccess={() => {
          localStorage.setItem("isLoggedIn", "true");
          setIsLoggedIn(true);
        }}
      />
    );
  }

  return (
    <>
      <Navbar />
      <ScrollProgressBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
