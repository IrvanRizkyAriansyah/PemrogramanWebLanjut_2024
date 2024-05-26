import React from "react";
import MyBio from "./MyBio";

export default function Profile() {
  const myData = {
    name: "Febry D F",
    age: 90,
  };

  const ClickMe = ({ children, onClickBtn }) => {
    return (
      <button type="button" onClick={() => onClickBtn()}>
        {children}
      </button>
    );
  };

  const HandlerHitme = () => {
    alert("Anda telah mengetuk saya");
  };

  return (
    <div>
      <h1>Biodata:</h1>
      <MyBio name="Febry D F" age="80" />
      <ClickMe onClickBtn={HandlerHitme}>Klik!</ClickMe>
    </div>
  );
}
