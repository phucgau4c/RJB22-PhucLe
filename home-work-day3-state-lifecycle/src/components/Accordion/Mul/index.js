import AccMul from "../Mul/AccMul";

function Mul({ contents }) {
  return (
    <>
      {contents.map((content, index) => (
        <div key={index}>
          <AccMul contents={content} index={index} key={`acc-${index}`} />
        </div>
      ))}
    </>
  );
}

export default Mul;
