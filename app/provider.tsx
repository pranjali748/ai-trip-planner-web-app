"use client";

import React, { useContext, useEffect, useState } from "react";
import Header from "./_components/Header";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { UserDetailContext } from "@/context/UserDetailContext";

// Type-safe shape of user data to send to Convex
interface NewUser {
  name: string;
  email: string;
  imageUrl: string;
}

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useUser();
  const createUser = useMutation(api.user.CreateNewUser);
  const[userDetail,setUserDetail]=useState<any>();
  useEffect(() => {
    if (!user) return;

    const newUser: NewUser = {
      name: user.fullName ?? "",
      email: user.primaryEmailAddress?.emailAddress ?? "",
      imageUrl: user.imageUrl ?? "",
    };


    // Call Convex mutation
    createUser(newUser).catch((err) => {
      console.error("Error creating user in Convex:", err);
    });
  }, [user, createUser]);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail}}>
    <div>
      <Header />
      {children}
    </div>
    </UserDetailContext.Provider>
  );
};

export default Provider;

export const useUserDetail =() => {
  return useContext(UserDetailContext);
}
