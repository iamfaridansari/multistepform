import React, { useContext } from "react";
import AdditionalInformation from "../form/AdditionalInformation";
import Address from "../form/Address";
import ContactDetails from "../form/ContactDetails";
import PersonalInformation from "../form/PersonalInformation";
import ProgressBar from "../components/ProgressBar";
import { FormContext } from "../context/FormContext";
import Message from "../components/Message";
import Disclaimer from "../components/Disclaimer";

const Form = () => {
  const { progress, disclaimer } = useContext(FormContext);
  //
  return (
    <div className="container">
      <div className="row align-items-start justify-content-center mt-2 px-2">
        <div className="col-lg-6 col-md-8 shadow border p-2 rounded">
          {disclaimer ? (
            <Disclaimer />
          ) : (
            <>
              <ProgressBar />
              {progress === 0 ? (
                <div>
                  <PersonalInformation />
                </div>
              ) : (
                ""
              )}
              {progress === 1 ? (
                <div>
                  <ContactDetails />
                </div>
              ) : (
                ""
              )}
              {progress === 2 ? (
                <div>
                  <Address />
                </div>
              ) : (
                ""
              )}
              {progress === 3 ? (
                <div>
                  <AdditionalInformation />
                </div>
              ) : (
                ""
              )}
              {progress === 4 ? <Message /> : ""}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
