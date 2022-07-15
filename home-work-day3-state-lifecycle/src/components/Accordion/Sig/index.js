import AccSig from "./AccSig";
import React, { useState } from "react";

function Sig({ contents }) {
  const [click, setClick] = useState(0);
  return (
    <>
      {contents.map((content, index) => (
        <div key={index} onClick={() => setClick(index)}>
          <AccSig
            contents={content}
            index={index}
            key={`acc-${index}`}
            click={click}
          />
        </div>
      ))}
    </>
  );
}

export default Sig;
