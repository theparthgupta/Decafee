import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, ChevronDown, Search, User, Book, Compass, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";  
import backgroundImage from "@/assets/background.jpeg";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false); // New state for navbar visibility

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setIsLoaded(true);
      setIsNavbarVisible(true); // Show the navbar when the image is loaded
      setTimeout(() => setIsContentVisible(true), 500); // Delay showing the main content
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence>
        {isNavbarVisible && ( // Animate the navbar
          <motion.nav 
            className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-4 bg-black bg-opacity-30"
            initial={{ opacity: 0, y: -20 }} // Start position
            animate={{ opacity: 1, y: 0 }} // End position
            exit={{ opacity: 0, y: -20 }} // Exit animation
            transition={{ duration: 1.0 }} // Transition duration
          >
            <div className="flex justify-between w-full">
              <Button variant="ghost" size="lg" className="text-white text-xl flex-1">
                <User className="w-10 h-10 mr-2" />
                Sign Up
              </Button>
              <Button variant="ghost" size="lg" className="text-white text-xl flex-1">
                <Book className="w-10 h-10 mr-2" />
                Booking
              </Button>
              <Button variant="ghost" size="lg" className="text-white text-xl flex-1 hidden md:flex">
                <Compass className="w-10 h-10 mr-2" />
                Recommend
              </Button>
              <Button variant="ghost" size="lg" className="text-white text-xl flex-1 hidden md:flex">
                <Coffee className="w-10 h-10 mr-2" />
                Explore
              </Button>
              <Button variant="ghost" size="lg" className="text-white text-xl flex-1 hidden md:flex">
                <Search className="w-10 h-10 mr-2" />
                Search
              </Button>
              <Button variant="ghost" size="lg" className="text-white md:hidden flex-1">
                <Menu className="w-10 h-10" />
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isContentVisible ? 1 : 0, y: isContentVisible ? 0 : 20 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <img src={logo} alt="Decafe Logo" className="w-96 h-96 mx-auto mb-8" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Decafe</h1>
          <p className="text-xl md:text-2xl mb-8">Experience the perfect blend of flavor and ambiance</p>

          <motion.button
            onClick={() => navigate("/booking")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg flex items-center"
          >
            <Coffee className="mr-2" />
            Explore Our Menu
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isContentVisible ? 1 : 0, y: isContentVisible ? 0 : 20 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
}
