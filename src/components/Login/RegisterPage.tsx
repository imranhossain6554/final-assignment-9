"use client";
import React, { useState } from "react";
import img from "./../../assets/sign.png";
import Image from "next/image";
import auth from "./../../firebase/firebase.auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import { createUser } from "@/redux/features/user/userSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

interface SignUpFormInputs {
  email: string;
  password: string;
  termsAndConditions: boolean;
}
type Inputs = {
  name: string;
  email: string;
  password: string;
};

const RegistrationPage = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    console.log(data);
    dispatch(createUser({ email: data?.email, password: data?.password }));
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
              <form onSubmit={handleSubmit(onSubmit)} className="mt-4 lg:mt-7 ">
                <div className="">
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="w-full px-4 py-3 mt-2 bg-white rounded-lg lg:py-5 dark:text-gray-300 dark:bg-gray-700 -gray-800"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                {errors.name && (
                  <span className="text-danger-600 mt-1">
                    This field is required
                  </span>
                )}
                <div className="mt-4 lg:mt-7">
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="w-full px-4 py-3 mt-2 bg-white rounded-lg lg:py-5 dark:text-gray-300 dark:bg-gray-700 -gray-800"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <span className="text-danger-600 mt-1">
                    This field is required
                  </span>
                )}
                <div className="mt-4 lg:mt-7">
                  <div>
                    <div className="relative flex items-center">
                      <input
                        type="password"
                        {...register("password", { required: true })}
                        className="w-full px-4 py-3 bg-white rounded-lg lg:py-5 dark:text-gray-300 dark:bg-gray-700 -gray-800 "
                        name="password"
                        placeholder="Enter password"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        className="absolute right-0 mr-3 dark:text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                      </svg>
                    </div>
                    {errors.password && (
                      <span className="text-danger-600 mt-1">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <button
                  className="w-full py-3 text-lg font-bold text-gray-300 uppercase bg-blue-700 rounded-md lg:mt-7 mt-7 dark:text-gray-300 dark:bg-blue-700 px-11 md:mt-7 hover:bg-blue-900 dark:hover:bg-blue-900"
                  type="submit"
                >
                  REGISTER
                </button>
                <p className="mt-4 text-xs text-gray-700 lg:mt-7 dark:text-gray-400 lg:text-base">
                  already have an account?
                  <a
                    href="/login"
                    className="font-semibold text-blue-400 hover:text-blue-600 ml-1"
                  >
                    login
                  </a>
                </p>
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
