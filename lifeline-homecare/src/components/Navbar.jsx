import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.jpg"; // Adjust the path as needed

const Navbar = ({ onScreenSizeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeSection, setActiveSection] = useState("home"); // Track the active section

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    const mobileView = window.innerWidth < 768;
    setIsMobile(mobileView);
    if (onScreenSizeChange) onScreenSizeChange(mobileView);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (onScreenSizeChange) onScreenSizeChange(isMobile);
  }, [isMobile, onScreenSizeChange]);

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full bg-white text-black shadow-md z-50"
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo */}
        <div>
          <img src={logo} alt="logo" style={{ width: "200px" }} />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden relative">
          <button
            onClick={toggleMenu}
            className="text-3xl font-semibold cursor-pointer mr-5"
            aria-label="Toggle menu"
          >
            {isOpen ? "X" : <RxHamburgerMenu size={30} />}
          </button>
        </div>

        {/* Navigation Links for Large Screens */}
        <div className="hidden md:flex items-center space-x-8 text-lg mr-8">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`cursor-pointer transition-colors ${activeSection === "home" ? "text-red-500" : "hover:text-red-500"}`}
            onSetActive={() => setActiveSection("home")}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`cursor-pointer transition-colors ${activeSection === "about" ? "text-red-500" : "hover:text-red-500"}`}
            onSetActive={() => setActiveSection("about")}
          >
            About
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`cursor-pointer transition-colors ${activeSection === "services" ? "text-red-500" : "hover:text-red-500"}`}
            onSetActive={() => setActiveSection("services")}
          >
            Services
          </Link>
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`cursor-pointer transition-colors ${activeSection === "testimonials" ? "text-red-500" : "hover:text-red-500"}`}
            onSetActive={() => setActiveSection("testimonials")}
          >
            Testimonials
          </Link>
          <Link
            to="ourTeam"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`cursor-pointer transition-colors ${activeSection === "ourTeam" ? "text-red-500" : "hover:text-red-500"}`}
            onSetActive={() => setActiveSection("ourTeam")}
          >
            Our Team
          </Link>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      <motion.div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden fixed top-16 left-0 w-full bg-white text-center text-lg z-50`}
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          className={`py-4 cursor-pointer transition-colors ${activeSection === "home" ? "text-red-500" : ""}`}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => { setActiveSection("home"); setIsOpen(false); }}
            className="hover:text-red-600"
          >
            Home
          </Link>
        </motion.div>
        <motion.div
          className={`py-4 cursor-pointer transition-colors ${activeSection === "about" ? "text-red-500" : ""}`}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => { setActiveSection("about"); setIsOpen(false); }}
            className="hover:text-red-600"
          >
            About
          </Link>
        </motion.div>
        <motion.div
          className={`py-4 cursor-pointer transition-colors ${activeSection === "services" ? "text-red-500" : ""}`}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => { setActiveSection("services"); setIsOpen(false); }}
            className="hover:text-red-600"
          >
            Services
          </Link>
        </motion.div>
        <motion.div
          className={`py-4 cursor-pointer transition-colors ${activeSection === "testimonials" ? "text-red-500" : ""}`}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => { setActiveSection("testimonials"); setIsOpen(false); }}
            className="hover:text-red-600"
          >
            Testimonials
          </Link>
        </motion.div>
        <motion.div
          className={`py-4 cursor-pointer transition-colors ${activeSection === "ourTeam" ? "text-red-500" : ""}`}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="ourTeam"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => { setActiveSection("ourTeam"); setIsOpen(false); }}
            className="hover:text-red-600"
          >
            Our Team
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;















