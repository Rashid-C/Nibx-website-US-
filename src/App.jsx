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
            className="btn-primary"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const HomePage = () => (
  <>
    <Hero />
    <TrustedBy />
    <About />
    <Services />
    <OurWork />
    <Teams />
    <ContactUs />
    <Footer />
  </>
);

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  const [menuCursorActive, setMenuCursorActive] = useState(false);

  const dotRef     = useRef(null);
  const outlineRef = useRef(null);
  const mouse      = useRef({ x: 0, y: 0 });
  const position   = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    const handleCursorTarget = (e) => {
      const hoveredMenuItem = e.target instanceof Element
        && e.target.closest("[data-mobile-menu-item='true']")
        && document.body.classList.contains("mobile-menu-open");

      setMenuCursorActive(Boolean(hoveredMenuItem));
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleCursorTarget);
    document.addEventListener("focusin", handleCursorTarget);

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

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleCursorTarget);
      document.removeEventListener("focusin", handleCursorTarget);
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="dark:bg-black relative">
        <Toaster />
        <ScrollToTop />
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/"             element={<HomePage />} />
          <Route path="/products"     element={<><Products /><Footer theme={theme} /></>} />
          <Route path="/products/:id" element={<><ProductDetail /><Footer theme={theme} /></>} />
        </Routes>

        {/* custom cursor ring */}
        <div
          ref={outlineRef}
          className={`fixed top-0 left-0 h-10 w-10 rounded-full pointer-events-none z-[9999] transition-colors duration-200 ${
            menuCursorActive ? "border border-white/95 shadow-[0_0_26px_rgba(255,255,255,0.35)]" : "border border-primary"
          }`}
          style={{ transition: "transform 0.1s ease-out, border-color 0.2s ease-out, box-shadow 0.2s ease-out" }}
        />
        {/* custom cursor dot */}
        <div
          ref={dotRef}
          className={`fixed top-0 left-0 h-3 w-3 rounded-full pointer-events-none z-[9999] transition-colors duration-200 ${
            menuCursorActive ? "bg-white" : "bg-primary"
          }`}
        />
      </div>
    </ErrorBoundary>
  );
};

export default App;
