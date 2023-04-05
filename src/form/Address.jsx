import React, { useContext, useEffect, useRef, useState } from "react";
import { FormContext } from "../context/FormContext";
import states from "../data/states";
import { ValidationContext } from "../context/ValidationContext";

const Address = () => {
  const { progress, user, handleinput, previous, error } =
    useContext(FormContext);
  const { proceed } = useContext(ValidationContext);
  //
  const [stateIndex, setStateIndex] = useState(0);
  useEffect(() => {
    states.forEach((item, index) => {
      if (item.state === user.state) {
        setStateIndex(index);
      }
    });
    //
    user.state === ""
      ? cityInput.current.setAttribute("disabled", true)
      : cityInput.current.removeAttribute("disabled");
  }, [user.state]);
  //
  const cityInput = useRef(null);
  return (
    <>
      <h1 className="mb-2">Address</h1>
      <div className="mb-4">
        <textarea
          type="text"
          className="form-control"
          placeholder="House"
          name="house"
          value={user.house}
          onChange={handleinput}
          autoComplete="off"
        ></textarea>
        <p className="text-danger mb-2">{error.address}</p>
      </div>
      <div className="mb-4">
        <input
          type="email"
          className="form-control"
          placeholder="Street name"
          name="street"
          value={user.street}
          onChange={handleinput}
          autoComplete="off"
        />
        <p className="text-danger mb-2">{error.street}</p>
      </div>
      <div className="mb-4">
        <select
          className="form-control"
          name="state"
          value={user.state}
          onChange={handleinput}
          autoComplete="off"
        >
          <option disabled value="">
            State
          </option>
          {states.map((item, index) => {
            return (
              <option value={item.state} key={index}>
                {item.state}
              </option>
            );
          })}
        </select>
        <p className="text-danger mb-2">{error.state}</p>
      </div>
      <div className="mb-4">
        <select
          className="form-control"
          name="city"
          value={user.city}
          onChange={handleinput}
          autoComplete="off"
          ref={cityInput}
        >
          <option disabled value="">
            City
          </option>
          {states[stateIndex].districts.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
        <p className="text-danger mb-2">{error.city}</p>
      </div>
      <div className="mb-4">
        <input
          type="number"
          className="form-control"
          placeholder="PIN code"
          name="pin"
          value={user.pin}
          onChange={handleinput}
          autoComplete="off"
          maxLength="6"
          max="6"
        />
        <p className="text-danger mb-2">{error.pin}</p>
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

export default Address;
