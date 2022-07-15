import React, { useState } from "react";

function AccMul({ contents }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <button onClick={() => setIsActive(!isActive)}>{contents.name}</button>
      <p>{isActive && contents.para}</p>
    </>
  );
}

export default AccMul;
