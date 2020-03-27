import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// Components
import { Header } from "../../components";

// Antd Mobile
import { List, Picker, DatePicker, Button, Modal } from "antd-mobile";
import enUs from "antd-mobile/lib/date-picker/locale/en_US";

// Config
import { rideList } from "../../config/mock";

// Styling
import "./index.css";

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

const BatchReversion = ({ history }) => {
  const [ride, setRide] = useState(["1"]);
  const [startTime, setStartTime] = useState(now);
  const [endTime, setEndTime] = useState(now);

  const batchReversionHandler = () => {
    Modal.prompt(
      "Authentication",
      "Please enter your username and password",
      [
        {
          text: "Cancel",
          onPress: null
        },
        {
          text: "Confirm",
          onPress: (login, password) => console.log(login, password)
        }
      ],
      "login-password",
      null,
      ["Please enter username", "Please enter password"]
    );
  };

  return (
    <div className="batch-reversion">
      <Header goBack={() => history.goBack()} headerName="Batch Reversion" />
      <List renderHeader={() => "Please fill up the form"} className="my-list">
        {/** Select Ride Name **/}
        <Picker
          data={rideList}
          value={ride}
          cols={1}
          onChange={ride => setRide(ride)}
          okText="OK"
          dismissText="Cancel"
        >
          <List.Item>Ride Location</List.Item>
        </Picker>

        {/** Select Start Time **/}
        <DatePicker
          mode="time"
          value={startTime}
          locale={enUs}
          onChange={time => setStartTime(time)}
          okText="OK"
          dismissText="Cancel"
        >
          <List.Item arrow="horizontal">Start Time</List.Item>
        </DatePicker>

        {/** Select End Time **/}
        <DatePicker
          mode="time"
          value={endTime}
          locale={enUs}
          onChange={time => setEndTime(time)}
          okText="OK"
          dismissText="Cancel"
        >
          <List.Item arrow="horizontal">End Time</List.Item>
        </DatePicker>
      </List>

      <Button
        type="primary"
        className="batch-reversion-btn"
        onClick={batchReversionHandler}
      >
        Reversion
      </Button>
    </div>
  );
};

export default withRouter(BatchReversion);
