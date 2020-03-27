import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";

// Antd Mobile
import { List, Radio, Button } from "antd-mobile";

// Components
import { Header, CameraLayout } from "../../components";

// Config
import { rideList } from "../../config/mock";

// Styling
import "./index.css";

const RadioItem = Radio.RadioItem;

const CheckRide = ({ history }) => {
  const [ride, setRide] = useState("1");
  const [step, setStep] = useState(0);
  const [photo, setPhoto] = useState(null);

  const handleCapturePhoto = photo => {
    setPhoto(photo);
    setStep(1);
  };

  const handleCheckRide = () => {
    const params = {
      rideId: ride,
      faceImage: photo
    };
    console.log(params);
  };

  return (
    <div className="check-ride">
      {step === 0 ? (
        <Fragment>
          <Header
            goBack={() => history.goBack()}
            headerName="Check Ride Eligibility"
          />
          <CameraLayout onCapture={handleCapturePhoto} />
        </Fragment>
      ) : (
        <Fragment>
          <Header
            goBack={() => setStep(0)}
            headerName="Check Ride Eligibility"
          />
          <List renderHeader={() => "Select your ride"}>
            {rideList.map(item => (
              <RadioItem
                key={item.value}
                checked={ride === item.value}
                onChange={() => setRide(item.value)}
              >
                {item.label}
              </RadioItem>
            ))}
          </List>
          <Button
            type="primary"
            className="check-ride-btn"
            onClick={handleCheckRide}
          >
            Check
          </Button>
        </Fragment>
      )}
    </div>
  );
};

export default withRouter(CheckRide);
