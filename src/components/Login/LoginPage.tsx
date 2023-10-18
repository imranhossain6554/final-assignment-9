"use client";

import React from "react";
import { Button, Col, Row } from "antd";

import imgLogin from "./../../assets/login.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useRouter } from "next/navigation";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import PublicHeader from "../view/Header/PublicHeader";
import { loginUser } from "@/redux/features/user/userSlice";
import { useEffect } from "react";

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const { user, isLoading } = useAppSelector((state) => state.user);
  const router = useRouter();

  const [userLogin] = useUserLoginMutation();

  const onSubmit = async (data: Inputs) => {
    dispatch(loginUser({ email: data.email, password: data.password }));
  };

  useEffect(() => {
    if (user?.email && !isLoading) {
      router.push("/");
    }
  }, [router, user?.email, isLoading]);

  return (
    <div>
      <PublicHeader />
      {/* ==================== */}
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
              <form onSubmit={handleSubmit(onSubmit)} className="mt-4 lg:mt-7 ">
                <div className="">
                  {/* email input */}
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
                      {/* password input */}
                      <input
                        type="password"
                        {...register("password", { required: true })}
                        className="w-full px-4 py-3 bg-white rounded-lg lg:py-5 dark:text-gray-300 dark:bg-gray-700 -gray-800"
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
                  </div>
                </div>
                {errors.password && (
                  <span className="text-danger-600 mt-2">
                    This field is required
                  </span>
                )}
                <div className="flex flex-wrap items-center justify-between mt-4 lg:mt-7">
                  <label htmlFor="" className="flex dark:text-gray-300">
                    <input type="checkbox" className="mt-1 mr-4" />
                    <span className="text-sm ">Remember me</span>
                  </label>
                  <a
                    href=" #"
                    className="mt-2 text-sm font-semibold text-blue-500 lg:mt-0 dark:text-blue-300 hover:underline"
                  >
                    forgot password?{" "}
                  </a>
                </div>
                <button
                  className="w-full py-3 text-lg font-bold text-gray-300 uppercase bg-blue-700 rounded-md lg:mt-7 mt-7 dark:text-gray-300 dark:bg-blue-700 px-11 md:mt-7 hover:bg-blue-900 dark:hover:bg-blue-900"
                  type="submit"
                >
                  LOGIN
                </button>
                <p className="mt-4 text-xs text-gray-700 lg:mt-7 dark:text-gray-400 lg:text-base">
                  Need an account?
                  <a
                    href="/signup"
                    className="font-semibold text-blue-400 hover:text-blue-600 ml-1"
                  >
                    Create an account
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
