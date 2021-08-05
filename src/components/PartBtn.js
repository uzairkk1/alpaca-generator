const PartBtn = (props) => {
  //console.log(props);
  const { children, isSelected, handlePart, item } = props;
  return (
    <button
      onClick={() => handlePart(item)}
      className={`custom-btn ${isSelected ? "selected" : ""} `}
    >
      {children}
    </button>
  );
};

export default PartBtn;
