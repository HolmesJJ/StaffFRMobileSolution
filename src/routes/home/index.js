import React from "react";
import { withRouter } from "react-router-dom";

// Antd Mobile
import { Modal, Toast, List } from "antd-mobile";

// Config
import { routes } from "../../config/routes";

// Styling
import "./index.css";

const alert = Modal.alert;

const Home = ({ history }) => {
  const logoutHandler = () => {
    localStorage.removeItem("userToken");
    history.push("/login");
  };

  const triggerLogoutBox = () => {
    alert("Important!", "Are you sure want to logout?", [
      {
        text: "Cancel",
        onPress: null
      },
      {
        text: "OK",
        onPress: () => {
          logoutHandler();
          Toast.success("Logout succeed!",1);
        }
      }
    ]);
  };

  return (
    <div>
      {/** Home Logo **/}
      <div className="home-container-title">
        <img
          src={require("../../assets/images/home_title.svg")}
          height={60}
          alt="Home Title"
        />
      </div>

      {/** Menu Routes List **/}
      {routes.map((route, index) => (
        <List
          renderHeader={() => route.title}
          className="my-list"
          key={route.title + index}
        >
          {route.subRoutes.map(subRoute => (
            <List.Item
              arrow="horizontal"
              onClick={() => history.push(subRoute.link)}
              key={subRoute.title + index}
            >
              {subRoute.title}
            </List.Item>
          ))}
        </List>
      ))}

      {/** Other List **/}
      <List renderHeader={() => "Others"} className="my-list">
        <List.Item onClick={triggerLogoutBox}>Logout</List.Item>
      </List>
    </div>
  );
};

export default withRouter(Home);
