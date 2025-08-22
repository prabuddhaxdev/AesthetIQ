"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

function Provider({ children }) {
  const { user } = useUser();
  const [userData, setUserData] = useState(null);

  const VerifyUser = useCallback(async () => {
    if (user) {
      try {
        const dataResult = await axios.post("/api/verify-user", {
          user: user,
        });
        setUserData(dataResult.data.result);
      } catch (error) {
        console.error("Error verifying user:", error);
      }
    }
  }, [user]);

  useEffect(() => {
    user && VerifyUser();
  }, [user, VerifyUser]);

  return (
      <div>{children}</div>
  );
}

export default Provider;