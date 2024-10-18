import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, ChevronDown } from "lucide-react";

// Assuming you're using a bundler like webpack or Create React App
import logo from "@/assets/logo.png";
import backgroundImage from "@/assets/background.jpeg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setIsLoaded(true);
      setTimeout(() => setIsContentVisible(true), 500);
    };
  }, []);
  const navigate = useNavigate()
  return (
    <div className="relative h-screen overflow-hidden bg-black">
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
          <img src={logo} alt="Decafee Logo" className="w-32 h-32 mx-auto mb-8" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Decafe</h1>
          <p className="text-xl md:text-2xl mb-8">Experience the perfect blend of flavor and ambiance</p>
          
          <motion.button
            onClick={()=>navigate("/booking")}
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