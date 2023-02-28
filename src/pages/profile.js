import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileComponent from "../../components/ProfileComponent";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user);

  return user && <ProfileComponent data={user} />;
}
