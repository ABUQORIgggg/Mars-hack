// Login.js
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../store/slices/AuthSlice"; // Adjust the path as needed

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const response = await axios.post(
          "https://mars-space-server.onrender.com/api/v1/student/login",
          {
            login,
            password,
          }
        );
        localStorage.setItem("studentId", response.data.student._id)
        dispatch(loginSuccess());
        navigate("/main");
        console.log("Login successful", response.data);
      } else {
        const response = await axios.post(
          "https://mars-space-server.onrender.com/api/v1/student/register",
          {
            login,
            password,
            name,
            surname,
          }
        );
        localStorage.setItem("studentId", response.data.student._id)
        dispatch(loginSuccess());
        navigate("/main");
        console.log("Registration successful", response.data);
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white rounded-lg shadow-lg p-8 w-[350px]">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Kirish" : "Space'ga xush kelibsiz"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ism"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Familiya"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
            </>
          )}
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Parol"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-md transition duration-200"
          >
            {isLogin ? "Kirish" : "Keyingisi"}
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          {isLogin ? "Hisobingiz yo'qmi? " : "Hisobingiz bormi? "}
          <button
            className="text-orange-400 hover:underline focus:outline-none"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Ro'yxatdan o'tish" : "Tizimga kirish"}
          </button>
        </p>
      </div>
    </div>
  );
}
