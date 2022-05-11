import React from "react";
import Logo from "../../../assets/img/jpg/logo.jpg";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import "./MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className='menu-top'>
      <div className='menu-top_left'>
        <img className='menu-top_left-logo' src={Logo} alt='Alternate' />
        <Button type='link' onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className='menu-top_right'>
        <Button type='link' onClick={() => console.Log("Log Off!")}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
