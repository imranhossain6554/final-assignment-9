import Navbar from "@/components/ui/Navbar/Navbar";
import auth from "@/firebase/firebase.auth";
import { setLoading, setUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";

const PublicHeader = () => {
  const items = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "About", href: "/about-us" },
    { key: "3", label: "Contact", href: "/contact" },
  ];

 

  return (
    <div>
      <Navbar items={items} />
    </div>
  );
};

export default PublicHeader;
