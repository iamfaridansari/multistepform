import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { ValidationContext } from "../context/ValidationContext";

const PersonalInformation = () => {
  const { progress, user, handleinput, error } = useContext(FormContext);
  const { proceed } = useContext(ValidationContext);
  //
  return (
    <>
      <h1 className="mb-4">Personal Information</h1>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          name="firstname"
          value={user.firstname}
          onChange={handleinput}
          autoComplete="off"
          maxLength="20"
        />
        <p className="text-danger mb-2">{error.firstname}</p>
      </div>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          name="lastname"
          value={user.lastname}
          onChange={handleinput}
          autoComplete="off"
          maxLength="20"
        />
        <p className="text-danger mb-2">{error.lastname}</p>
      </div>
      <div className="mb-4">
        <input
          type="date"
          className="form-control"
          placeholder="Date of birth"
          name="dob"
          value={user.dob}
          onChange={handleinput}
          autoComplete="off"
        />
        <p className="text-danger mb-2">{error.dob}</p>
      </div>
      <div className="mb-4">
        <select
          className="form-control"
          name="gender"
          value={user.gender}
          onChange={handleinput}
          autoComplete="off"
        >
          <option disabled value="">
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <p className="text-danger mb-2">{error.gender}</p>
      </div>
      <button
        className="btn btn-primary w-100"
        onClick={() => proceed(progress)}
      >
        Next
      </button>
    </>
  );
};

export default PersonalInformation;
