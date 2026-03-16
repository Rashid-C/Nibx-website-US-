import { useEffect, useRef, useState, Component } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import About from "./components/About";
import Services from "./components/Services";
import OurWork from "./components/OurWork";
import Teams from "./components/Teams";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

/* ── scroll to top on every route change ── */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
};

/* ── error boundary ── */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 text-gray-700 dark:text-white dark:bg-black">
          <h1 className="text-2xl font-bold">Something went wrong.</h1>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="bg-primary text-white px-6 py-2 rounded-full text-sm hover:scale-103 transition-all"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const HomePage = ({ theme }) => (
  <>
    <Hero />
    <TrustedBy />
    <About />
    <Services />
    <OurWork />
    <Teams />
    <ContactUs />
    <Footer theme={theme} />
  </>
);

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const dotRef     = useRef(null);
  const outlineRef = useRef(null);
  const mouse      = useRef({ x: 0, y: 0 });
  const position   = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;
      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform     = `translate3d(${mouse.current.x - 6}px,${mouse.current.y - 6}px,0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px,${position.current.y - 20}px,0)`;
      }
      requestAnimationFrame(animate);
    };
    animate();

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <ErrorBoundary>
      <div className="dark:bg-black relative">
        <Toaster />
        <ScrollToTop />
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/"             element={<HomePage theme={theme} />} />
          <Route path="/products"     element={<><Products /><Footer theme={theme} /></>} />
          <Route path="/products/:id" element={<><ProductDetail /><Footer theme={theme} /></>} />
        </Routes>

        {/* custom cursor ring */}
        <div ref={outlineRef} className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999]" style={{ transition: "transform 0.1s ease-out" }} />
        {/* custom cursor dot */}
        <div ref={dotRef}     className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]" />
      </div>
    </ErrorBoundary>
  );
};

export default App;
