import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";

// Antd Mobile
import { Toast, Button } from "antd-mobile";

// Components
import { Header, BarCodeScanner } from "../../components";

// Styling
import "./index.css";

const ExpressRemoval = ({ history }) => {
  const [step, setStep] = useState(0);
  const [barcode, setBarcode] = useState("");

  const handleScanBarCode = result => {
    if (result) {
      Toast.success(result.codeResult.code, 1);
      setBarcode(result.codeResult.code);
      setStep(1);
    } else {
      Toast.fail("Scan barcode failed!", 1);
    }
  };

  const handleRemovePatron = () => {
    Toast.success("Removed successfully!", 1);
    setStep(0);
  };

  return (
    <div>
      {step === 0 ? (
        <Fragment>
          <Header goBack={() => history.goBack()} headerName="Remove Patron" />
          <BarCodeScanner onDetected={handleScanBarCode} />
        </Fragment>
      ) : (
        <Fragment>
          <Header goBack={() => setStep(0)} headerName="Remove Patron" />
          <div className="express-removal-container">
            <img
              src={require("../../assets/images/avatar.jpeg")}
              alt="avatar"
              className="express-removal-avatar"
            />
            <div className="express-removal-details">Barcode: {barcode}</div>

            <div className="express-removal-details">Name: David Beckham</div>

            <Button
              type="primary"
              className="express-removal-button"
              onClick={handleRemovePatron}
            >
              Confirm Delete
            </Button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default withRouter(ExpressRemoval);
