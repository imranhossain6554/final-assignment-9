"use client";
import React, { useState } from "react";
import auth from "@/firebase/firebase.auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import imgLogin from "./../../assets/login.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {
      usernameOrEmail: "",
      password: "",
    };

    if (!formData.usernameOrEmail) {
      errors.usernameOrEmail = "Username or Email is required.";
    }

    if (!formData.password) {
      errors.password = "Password is required.";
    }

    setErrorMessages(errors);

    return Object.values(errors).every((error) => error === "");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const { usernameOrEmail, password } = formData;

      try {
        await signInWithEmailAndPassword(usernameOrEmail, password);
        if (user) {
          router.push("/");
        }
      } catch (error) {
        console.error("Error logging in:", error);
      }
    }
  };
  console.log("user:", user);
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex items-center">
        <div className="flex-1 hidden md:flex">
          <Image
            src={imgLogin}
            alt="Login Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="usernameOrEmail"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Username or Email:
                </label>
                <input
                  type="text"
                  id="usernameOrEmail"
                  name="usernameOrEmail"
                  value={formData.usernameOrEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <p className="text-red-500">{errorMessages.usernameOrEmail}</p>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <p className="text-red-500">{errorMessages.password}</p>
              </div>
              <button
                onClick={handleLogin}
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
