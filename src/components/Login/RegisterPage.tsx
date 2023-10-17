"use client";
import React, { useState } from "react";
import img from "./../../assets/sign.png";
import Image from "next/image";
import auth from "./../../firebase/firebase.auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Router from "next/router";
import Link from "next/link";

const RegistrationPage: React.FC = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
    termsAndConditions: false,
  });
  const [errorMessages, setErrorMessages] = useState({
    usernameOrEmail: "",
    password: "",
    termsAndConditions: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const validateForm = () => {
    const errors = {
      usernameOrEmail: "",
      password: "",
      termsAndConditions: "",
    };

    if (!formData.usernameOrEmail) {
      errors.usernameOrEmail = "Username or Email is required.";
    }

    if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    if (!formData.termsAndConditions) {
      errors.termsAndConditions = "You must accept the terms and conditions.";
    }

    setErrorMessages(errors);

    return Object.values(errors).every((error) => error === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const { usernameOrEmail, password } = formData;

      try {
        await createUserWithEmailAndPassword(usernameOrEmail, password);
        Router.push("/");
      } catch (error) {
        console.error("Error registering:", error);
      }
    }

    // Here, you can handle the registration logic using the formData.
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {user && <p style={{ color: "green" }}>User Registration successful!</p>}
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="container mx-auto flex items-center">
          <div className="flex-1">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold mb-4">Register</h2>
              <form onSubmit={handleSubmit}>
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
                  <p className="text-red-500">
                    {errorMessages.usernameOrEmail}
                  </p>
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
                <div className="mb-4">
                  <input
                    type="checkbox"
                    id="termsAndConditions"
                    name="termsAndConditions"
                    checked={formData.termsAndConditions}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="termsAndConditions" className="text-gray-600">
                    I agree to the{" "}
                    <a href="/privacy-policy" className="text-blue-500">
                      Terms and Conditions & Privacy Policy
                    </a>
                  </label>
                  <p className="text-red-500">
                    {errorMessages.termsAndConditions}
                  </p>
                </div>

                {formData.termsAndConditions ? ( // Check if termsAndConditions is true
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 cursor-pointer"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled
                    onClick={handleSubmit}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg border-0 focus:outline-none focus:ring focus:ring-blue-300 pointer"
                  >
                    Register
                  </button>
                )}
                <div className="text-center have_acount_area other_author_option">
                  <div className="line_or">
                    <span>or</span>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      margin: "15px 0",
                    }}
                  >
                    <li>
                      <button
                        style={{
                          padding: "10px 30px",
                          border: "1px solid gray",
                          borderRadius: "30px",
                          outline: "none",
                          background: "transparent",
                          cursor: "pointer",
                          fontSize: "18px",
                          margin: "0 10px",
                        }}
                      >
                        Google
                      </button>
                    </li>
                    <li>
                      <button
                        style={{
                          padding: "10px 30px",
                          border: "1px solid gray",
                          borderRadius: "30px",
                          outline: "none",
                          background: "transparent",
                          cursor: "pointer",
                          fontSize: "18px",
                          margin: "0 10px",
                        }}
                      >
                        facebook
                      </button>
                    </li>
                    <li>
                      <button
                        style={{
                          padding: "10px 30px",
                          border: "1px solid gray",
                          borderRadius: "30px",
                          outline: "none",
                          background: "transparent",
                          cursor: "pointer",
                          fontSize: "18px",
                          margin: "0 10px",
                        }}
                      >
                        Twitter
                      </button>
                    </li>
                  </ul>
                  <p>
                    Already have an account?{" "}
                    <Link href="/login">Login Here</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="flex-1 hidden md:flex">
            <Image
              src={img} // Replace with your image source
              alt="Registration Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
