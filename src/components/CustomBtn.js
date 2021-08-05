const CustomBtn = (props) => {
  //console.log(props);
  const { children, isSelected, handleClick, feature } = props;
  return (
    <button
      onClick={() => handleClick(feature)}
      className={`custom-btn ${isSelected ? "selected" : ""} `}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
