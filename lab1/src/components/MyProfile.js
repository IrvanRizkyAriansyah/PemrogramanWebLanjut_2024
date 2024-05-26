import React, { Component } from "react";
import MyName from "./MyName";
import MyBio from "./MyBio";

export default class MyProfile extends Component {
  render() {
    return (
      <div>
        {/* <h1>Biodata:</h1>
        <MyName /> */}
        <MyBio name="Irvan Rizky A" age="22" />
      </div>
    );
  }
}
