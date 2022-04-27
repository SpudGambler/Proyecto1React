import React from "react";
import { Layout } from "antd";

export default function LayoutBasic(props) {
  const { children } = props;
  return <Layout>{children}</Layout>;
}
