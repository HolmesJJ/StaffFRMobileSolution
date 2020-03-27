import React from "react";

// Antd
import { NavBar, Icon } from "antd-mobile";

const Header = ({ goBack, headerName }) => {
  return (
    <NavBar mode="light" icon={<Icon type="left" />} onLeftClick={goBack}>
      {headerName}
    </NavBar>
  );
};

export default Header;
