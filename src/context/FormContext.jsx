import React, { createContext, useState } from "react";
const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);
  //
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    house: "",
    street: "",
    state: "",
    city: "",
    pin: "",
    company: "",
    designation: "",
  });
  const handleinput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  //
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    house: "",
    street: "",
    state: "",
    city: "",
    pin: "",
    company: "",
    designation: "",
  });
  //
  const previous = (progress) => {
    setProgress(progress - 1);
  };
  //
  const [message, setMessage] = useState({
    message1: "",
    message2: "",
  });
  const submit = async (progress) => {
    const {
      firstname,
      lastname,
      dob,
      gender,
      phone,
      email,
      house,
      street,
      state,
      city,
      pin,
      company,
      designation,
    } = user;
    //
    // const response = await fetch("/adduser", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     firstname,
    //     lastname,
    //     dob,
    //     gender,
    //     phone,
    //     email,
    //     house,
    //     street,
    //     state,
    //     city,
    //     pin,
    //     company,
    //     designation,
    //   }),
    // });
    // const data = await response.json();
    // console.log(data);
    //
    // if (response.status === 200) {
    //   setProgress(progress + 1);

    //   setMessage({
    //     message1: data.message1,
    //     message2: data.message2,
    //   });
    // }
  };
  //
  const returnHome = () => {
    setUser({
      firstname: "",
      lastname: "",
      dob: "",
      gender: "",
      phone: "",
      email: "",
      house: "",
      street: "",
      state: "",
      city: "",
      pin: "",
      company: "",
      designation: "",
    });
    setProgress(0);
    setDisclaimer(true);
  };
  //
  const [disclaimer, setDisclaimer] = useState(true);
  return (
    <FormContext.Provider
      value={{
        progress,
        setProgress,
        user,
        setUser,
        error,
        setError,
        handleinput,
        returnHome,
        previous,
        disclaimer,
        setDisclaimer,
        submit,
        message,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormContextProvider };
