/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useAppDispatch } from "@/redux/hooks";
import { Metadata } from "next";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setLoading, setUser } from "@/redux/features/user/userSlice";
import auth from "@/firebase/firebase.auth";
import Footer from "@/components/ui/Footer/Footer";

const metadata: Metadata = {
  title: "Order",
  description: "Build To Better",
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, [dispatch]);

  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
