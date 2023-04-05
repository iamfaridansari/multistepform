import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Disclaimer = () => {
  const { disclaimer, setDisclaimer } = useContext(FormContext);
  return (
    <div className="mt-4">
      <h2 className="text-center">Disclaimer</h2>
      <ul className="my-4 ms-4">
        <li>
          This form is created by{" "}
          <strong>
            <a href="mailto:iamfaridansari@gmail.com">Farid Ansari</a>
          </strong>
          , a<strong> ReactJS developer</strong>, purely for educational purpose
          only and it has nothing to do with any company/organisation.
        </li>
        <li>This form does not generate any leads, so feel free to use it.</li>
        <li>
          But try to avoid providing your true credentials/personal information
          as the data will be stored in the backend.
        </li>
      </ul>
      <button
        className="btn btn-primary w-100"
        onClick={() => setDisclaimer(!disclaimer)}
      >
        Start
      </button>
    </div>
  );
};

export default Disclaimer;
