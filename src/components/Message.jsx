import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Message = () => {
  const { returnHome, message } = useContext(FormContext);
  return (
    <div className="text-center mt-4">
      <h2>{message.message1}</h2>
      <p>{message.message2}</p>
      <div className="mt-4">
        <button className="btn btn-primary w-100" onClick={returnHome}>
          Return to home
        </button>
      </div>
    </div>
  );
};

export default Message;
