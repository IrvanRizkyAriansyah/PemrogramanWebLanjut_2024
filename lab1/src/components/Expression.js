import React, { useEffect, useState } from "react";

const Expression = () => {
  const today = new Date();
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
      <div>
        <h1>Today is {currDate.toTimeString()}</h1>
        {listItems}
      </div>
    </div>
  );
};

export default Expression;
