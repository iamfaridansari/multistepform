import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { ValidationContext } from "../context/ValidationContext";

const AdditionalInformation = () => {
  const { progress, user, handleinput, previous, error } =
    useContext(FormContext);
  const { proceed } = useContext(ValidationContext);
  return (
    <>
      <h1 className="mb-2">Additional information</h1>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Company name"
          name="company"
          value={user.company}
          onChange={handleinput}
          autoComplete="off"
        />
        <p className="text-danger mb-2">{error.company}</p>
      </div>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Designation"
          name="designation"
          value={user.designation}
          onChange={handleinput}
          autoComplete="off"
        />
        <p className="text-danger mb-2">{error.designation}</p>
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
          Submit
        </button>
      </div>
    </>
  );
};

export default AdditionalInformation;
