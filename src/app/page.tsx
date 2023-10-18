"use client";

import Banner from "@/components/home/Banner/Banner";
import Features from "@/components/home/Features/Features";
import Gallery from "@/components/home/Gallery/Gallery";
import NavBar from "@/components/shared/NavBar";
import AboutUs from "@/components/ui/AboutUs/AboutUs";
import BannerCard from "@/components/ui/BannerCard/BannerCard";
import Facilities from "@/components/ui/Facilities/Facilities";
import Footer from "@/components/ui/Footer/Footer";
import Navbar from "@/components/ui/Navbar/Navbar";
import Testimonials from "@/components/ui/Testimonials/Testimonials";
import Welcome from "@/components/ui/Welcome/Welcome";
import PublicHeader from "@/components/view/Header/PublicHeader";
import auth from "@/firebase/firebase.auth";
import { setLoading, setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user?.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div>
      <PublicHeader />
      {/* <h1 className="text-l">This web application eLearning Platform</h1> */}
      <Banner />
      <BannerCard />
      <Welcome />
      <Features />
      <AboutUs />
      <Gallery />
      <Testimonials />
      <Facilities />
      <Footer />
    </div>
  );
}
