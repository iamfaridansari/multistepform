import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const ProgressBar = () => {
  const { progress } = useContext(FormContext);
  return (
    <>
      <div
        className="progress"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar"
          style={{ width: `${(progress / 4) * 100}%` }}
        >
          <small className="text-white">{`${(progress / 4) * 100}%`}</small>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between my-4 question-count">
        <p className={progress === 0 ? "active bg-primary text-white" : ""}>
          1
        </p>
        <p className={progress === 1 ? "active bg-primary text-white" : ""}>
          2
        </p>
        <p className={progress === 2 ? "active bg-primary text-white" : ""}>
          3
        </p>
        <p className={progress === 3 ? "active bg-primary text-white" : ""}>
          4
        </p>
      </div>
      <hr />
    </>
  );
};

export default ProgressBar;
