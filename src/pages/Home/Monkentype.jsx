import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const words = [
  "salom", "dunyo", "dasturlash", "react", "tailwind",
  "o'zbek", "toshkent", "kompyuter", "internet", "klaviatura"
];

export default function MonkeyType() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [timer, setTimer] = useState(30);
  const [isGameActive, setIsGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isGameActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setIsGameActive(false);
    }
  }, [isGameActive, timer]);

  const startGame = () => {
    setIsGameActive(true);
    setTimer(30);
    setScore(0);
    setCurrentWordIndex(0);
    setInputValue('');
    inputRef.current?.focus();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value === words[currentWordIndex]) {
      setScore((prevScore) => prevScore + 1);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setInputValue('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center w-full h-full">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 w-96"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">MonkeyType</h1>
        {!isGameActive ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="w-full bg-green-500 text-white py-2 rounded-md font-semibold hover:bg-green-600 transition duration-300"
          >
            O'yinni boshlash
          </motion.button>
        ) : (
          <>
            <div className="mb-4 text-center">
              <span className="text-2xl font-bold text-blue-600">{timer}</span>
              <span className="text-gray-600 ml-2">soniya qoldi</span>
            </div>
            <div className="mb-4 text-center">
              <span className="text-xl font-semibold text-gray-800">{words[currentWordIndex]}</span>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Bu yerga yozing..."
            />
            <div className="mt-4 text-center">
              <span className="text-lg font-semibold text-gray-800">Ball: {score}</span>
            </div>
            <Link to="/main">Go back</Link>
          </>
        )}
      </motion.div>
    </div>
  );
}
