import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// Antd Mobile
import { Toast } from "antd-mobile";

// Components
import { Header, BarCodeScanner, CameraLayout } from "../../components";

// Styling
import "./index.css";

const AdmissionRegister = ({ history }) => {
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
      <Header goBack={() => history.goBack()} headerName="Register Patron" />
      {step === 0 ? (
        <CameraLayout onCapture={handleCapturePhoto} />
      ) : (
        <BarCodeScanner onDetected={handleScanBarCode} />
      )}
    </div>
  );
};

export default withRouter(AdmissionRegister);
