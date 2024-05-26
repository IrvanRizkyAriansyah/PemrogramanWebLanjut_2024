import React, { useEffect, useState } from "react";

export default function HelloWorld() {
  const today = new Date();

  function matkul() {
    return "Pemrograman Web Lanjut";
  }

  const nama = () => {
    return <h3>Febri D F</h3>;
  };

  const [currDate, setCurrDate] = useState(today);

  const countTimer = () => {
    setCurrDate(new Date());
  };

  useEffect(() => {
    setInterval(() => countTimer(), 1000);
  }, []);

  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => <li>{number}</li>);

  return (
    <div>
      <h2>HelloWorld</h2>
      <h2>{today.toTimeString()}</h2>
      <h2>{matkul()}</h2>
      {nama()}
      <h1>Today is {currDate.toTimeString()}</h1>
      {listItems}
    </div>
  );
}
