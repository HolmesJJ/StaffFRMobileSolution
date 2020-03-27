import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";

// Antd Mobile
import { Toast } from "antd-mobile";

// Components
import { Header, BarCodeScanner, CameraLayout } from "../../components";

// Styling
import "./index.css";

const ExpressLaneRegister = ({ history }) => {
  const [step, setStep] = useState(0);
  const [photo, setPhoto] = useState(null);

  const handleCapturePhoto = photo => {
    setPhoto(photo);
    setStep(1);
  };

  const handleScanBarCode = result => {
    if (result) {
      const params = {
        faceImage: photo,
        barcode: result.codeResult.code
      };
      Toast.success(result.codeResult.code, 1);
      console.log(params);
      setStep(0);
    } else {
      Toast.fail("Scan barcode failed!", 1);
    }
  };

  return (
    <div>
      {step === 0 ? (
        <Fragment>
          <Header
            goBack={() => history.goBack()}
            headerName="Register Patron"
          />
          <CameraLayout onCapture={() => setStep(1)} />
        </Fragment>
      ) : (
        <Fragment>
          <Header goBack={() => setStep(0)} headerName="Register Patron" />
          <BarCodeScanner onDetected={handleScanBarCode} />
        </Fragment>
      )}
    </div>
  );
};

export default withRouter(ExpressLaneRegister);
