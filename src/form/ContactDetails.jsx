import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { ValidationContext } from "../context/ValidationContext";

const ContactDetails = () => {
  const { progress, user, handleinput, previous, error } =
    useContext(FormContext);
  const { proceed } = useContext(ValidationContext);
  return (
    <>
      <h1 className="mb-2">Contact details</h1>
      <div className="mb-4">
        <input
          type="number"
          className="form-control"
          placeholder="Phone number"
          name="phone"
          value={user.phone}
          onChange={handleinput}
          autoComplete="off"
          maxLength="10"
        />
        <p className="text-danger mb-2">{error.phone}</p>
      </div>
      <div className="mb-4">
        <input
          type="email"
          className="form-control"
          placeholder="Email address"
          name="email"
          value={user.email}
          onChange={handleinput}
          autoComplete="off"
        />
        <p className="text-danger mb-2">{error.email}</p>
      </div>
      <div className="d-flex align-items-center justify-content-between gap-2 mt-2">
        <button
          className="btn btn-primary w-100"
          onClick={() => previous(progress)}
        >
          Previous
        </button>
        <button
          className="btn btn-primary w-100"
          onClick={() => proceed(progress)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ContactDetails;
