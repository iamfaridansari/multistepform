import React, { createContext, useContext } from "react";
import { FormContext } from "./FormContext";
const ValidationContext = createContext();

const ValidationContextProvider = ({ children }) => {
  const { setProgress, user, submit, setError } = useContext(FormContext);
  //
  const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const proceed = (progress) => {
    if (progress === 0) {
      if (user.firstname === "") {
        setError({
          firstname: "Enter your first name",
        });
      } else if (user.lastname === "") {
        setError({
          lastname: "Enter your last name",
        });
      } else if (user.dob === "") {
        setError({
          dob: "Enter your date of birth",
        });
      } else if (user.gender === "") {
        setError({
          gender: "Select your gender",
        });
      } else {
        setProgress(progress + 1);
        setError({});
      }
    } else if (progress === 1) {
      if (user.phone === "") {
        setError({
          phone: "Enter your phone number",
        });
      } else if (user.phone.length !== 10) {
        setError({
          phone: "Enter a valid 10 digit phone number",
        });
      } else if (user.email === "") {
        setError({
          email: "Enter your email address",
        });
      } else if (!emailpattern.test(user.email)) {
        setError({
          email: "Invalid email address",
        });
      } else {
        setProgress(progress + 1);
        setError({});
      }
    } else if (progress === 2) {
      if (user.house === "") {
        setError({
          house: "Enter your house address",
        });
      } else if (user.street === "") {
        setError({
          street: "Enter your street name",
        });
      } else if (user.state === "") {
        setError({
          state: "Select your state",
        });
      } else if (user.city === "") {
        setError({
          city: "Select your city",
        });
      } else if (user.pin === "") {
        setError({
          pin: "Enter your PIN code",
        });
      } else if (user.pin.length !== 6) {
        setError({
          pin: "Enter a valid 6 digit PIN code",
        });
      } else if (isNaN(user.pin)) {
        setError({
          pin: "Enter a valid 6 digit PIN code",
        });
      } else {
        setProgress(progress + 1);
        setError({});
      }
    } else if (progress === 3) {
      if (user.company === "") {
        setError({
          company: "Enter your company name",
        });
      } else if (user.designation === "") {
        setError({
          designation: "Enter your designation",
        });
      } else {
        setProgress(progress + 1);
        setError({});
        submit(progress);
      }
    }
  };
  return (
    <ValidationContext.Provider value={{ proceed }}>
      {children}
    </ValidationContext.Provider>
  );
};

export { ValidationContext, ValidationContextProvider };
