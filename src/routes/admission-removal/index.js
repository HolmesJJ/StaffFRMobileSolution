import React from "react";
import { withRouter } from "react-router-dom";

// Antd Mobile
import { Toast } from "antd-mobile";

// Components
import { Header, BarCodeScanner } from "../../components";

const AdmissionRemoval = ({ history }) => {
  const handleScanBarCode = result => {
    if (result) {
      Toast.success(result.codeResult.code, 1);
      history.push("/");
    } else {
      Toast.fail("Scan barcode failed!", 1);
    }
  };

  return (
    <div>
      <Header goBack={() => history.goBack()} headerName="Remove Patron" />
      <BarCodeScanner onDetected={handleScanBarCode} />
    </div>
  );
};

export default withRouter(AdmissionRemoval);
