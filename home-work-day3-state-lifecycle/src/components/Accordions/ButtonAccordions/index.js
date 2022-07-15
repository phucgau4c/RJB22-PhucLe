import ButtonMultipleOpen from "./ButtonMultipleOpen";
// import ButtonOneAtATime from "./ButtonOneAtATime";

function ButtonAccordions({ contents }) {
  return (
    <div>
      {/* <ButtonOneAtATime contents={contents}></ButtonOneAtATime> */}
      <ButtonMultipleOpen contents={contents}></ButtonMultipleOpen>
    </div>
  );
}

export default ButtonAccordions;
