import React from "react";
//
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./css/style.css";
import "./css/responsive.css";
//
import { FormContextProvider } from "./context/FormContext";
//
//
import Form from "./pages/Form";
import { ValidationContextProvider } from "./context/ValidationContext";

const App = () => {
  return (
    <FormContextProvider>
      <ValidationContextProvider>
        <Form />
      </ValidationContextProvider>
    </FormContextProvider>
  );
};

export default App;
