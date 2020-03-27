import React, { useState } from "react";
import { withRouter, Redirect } from "react-router-dom";

// Antd Mobile
import { Button } from "antd-mobile";

// Components
import { FormItem } from "../../components";

// Styling
import "./index.css";

const Login = ({ history }) => {
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);
  const getUserToken = localStorage.getItem("userToken");

  const loginHandler = () => {
    setLoading(true);
    //TODO: integrate api
    localStorage.setItem("userToken", "666");
    setLoading(false);
    history.push("/");
  };

  return (
    <div className="login-container">
      {getUserToken && <Redirect to="/" />}

      <img
        src={require("../../assets/images/home_title.svg")}
        alt="logo"
        height={120}
        width={200}
      />

      <h1>USS FRS Attraction</h1>

      <div className="login-form-container">
        {/* Username */}
        <FormItem
          label="Username"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />

        {/* Password */}
        <FormItem
          label="Password"
          value={password}
          type="password"
          onChange={event => setPassword(event.target.value)}
        />

        {/* Login Button */}
        <Button type="primary" onClick={loginHandler} loading={loading}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default withRouter(Login);
