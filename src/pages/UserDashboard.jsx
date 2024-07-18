import  { useState } from "react";
import { UserAuth } from "../context/AuthContext";

export default function UserDashboard() {
  const { user } = UserAuth();

  return (
    <div>Welcome {user?.firstName} </div>
  )
}