import React from "react";
import Iframe from "react-iframe";

export default function Subestacao() {
  return (
    <Iframe
      url="http://ec2-18-117-132-1.us-east-2.compute.amazonaws.com:1880/ui/#!/2"
      width="100%"
      height="100%"
      id="myId"
      className=""
      display="initial"
      position="relative"
      scrolling="yes"
    />
  );
}
