import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";

// Antd Mobile
import { Toast, List, Radio, Button } from "antd-mobile";

// Component
import { Header, CameraLayout } from "../../components";

// Styling
import "./index.css";

// Utils
import { rideList } from "../../config/mock";

const RadioItem = Radio.RadioItem;

const SingleReversion = ({ history }) => {
  const [step, setStep] = useState(0);
  const [ride, setRide] = useState("1");

  const handleSelectRide = ride => setRide(ride);

  const handleCapturePhoto = photo => {
    const params = {
      faceImage: photo
    };
    setStep(1);
    console.log(params);
    Toast.success("Done uploaded!", 1);
  };

  const handleSingleReversion = () => {
    Toast.success("Selected ride: " + ride.label, 1);
    setStep(0);
  };

  return (
    <div className="single-reversion">
      {step === 0 ? (
        <Fragment>
          <Header
            goBack={() => history.goBack()}
            headerName="Single Reversion"
          />
          <CameraLayout onCapture={() => setStep(1)} />
        </Fragment>
      ) : (
        <Fragment>
          <Header goBack={() => setStep(0)} headerName="Single Reversion" />

          <List renderHeader={() => "Select Ride"}>
            {rideList.map(item => (
              <RadioItem
                key={item.value}
                checked={ride.value === item.value}
                onChange={() => handleSelectRide(item)}
              >
                {item.label}
              </RadioItem>
            ))}
          </List>
          <Button
            type="primary"
            className="single-reversion-button"
            onClick={handleSingleReversion}
          >
            Confirm
          </Button>
        </Fragment>
      )}
    </div>
  );
};

export default withRouter(SingleReversion);
