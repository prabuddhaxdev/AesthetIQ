"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { UserDetailContext } from "./_context/UserDetailContext";

function Provider({ children }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState([]);

  const VerifyUser = useCallback(async () => {
    if (user) {
      try {
        const dataResult = await axios.post("/api/verify-user", {
          user: user,
        });
        setUserDetail(dataResult.data.result);
      } catch (error) {
        console.error("Error verifying user:", error);
      }
    }
  }, [user]);

  useEffect(() => {
    user && VerifyUser();
  }, [user, VerifyUser]);

  return (
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
}

export default Provider;