import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import RegisterForm from "../../components/RegisterForm";
import classes from "../styles/register.module.css"

export default function Register() {
  return (
    <div className={classes.container}>
      <RegisterForm />
    </div>
  );
}
