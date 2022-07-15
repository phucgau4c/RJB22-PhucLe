function AccSig({ contents, index, click }) {
  return (
    <div>
      <button>{contents.name}</button>
      <p>{click === index && contents.para}</p>
    </div>
  );
}

export default AccSig;
