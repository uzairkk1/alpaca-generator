import { useState } from "react";
import { data } from "../data";
import CustomBtn from "./CustomBtn";
import Image from "./Image";
import PartBtn from "./PartBtn";
import Header from "./Header";

const Preview = () => {
  const [imgData, setImgData] = useState(data);
  const [parts, setParts] = useState(data[0]);
  const [img, setImg] = useState({
    backgrounds: "blue50",
    ears: "default",
    hair: "default",
    neck: "default",
    leg: "default",
    eyes: "default",
    nose: "nose",
    mouth: "default",
    accessories: "headphone",
  });

  const handleClick = (e) => {
    const stateClone = [...imgData];
    const index = stateClone.indexOf(e);
    stateClone.forEach((data) => (data.selected = false));
    stateClone[index].selected = true;

    setParts(e);
  };

  const handlePart = (e) => {
    const partClone = { ...parts };
    const index = partClone.items.indexOf(e);
    partClone.items.forEach((item) => (item.selected = false));
    partClone.items[index].selected = true;

    setParts(partClone);
    setImg({
      ...img,
      [parts.directory]: e.filename,
    });
  };

  return (
    <div>
      <Header />

      <div className="flex">
        <Image
          img={img}
          imgData={imgData}
          setImg={setImg}
          setImgData={setImgData}
        />

        <div className="child-2">
          <h2 className="my-5"> ACCESSORIZE THE ALPACA'S </h2>

          <div className="btn-container-1">
            {imgData.map((feature) => (
              <CustomBtn
                isSelected={feature.selected}
                key={feature.id}
                handleClick={handleClick}
                feature={feature}
              >
                {feature.label}
              </CustomBtn>
            ))}
          </div>
          <hr className="my-5" />

          <h2 className="my-5"> {parts.label} </h2>
          <div className="btn-conainer-2">
            {parts.items.map((item) => (
              <PartBtn
                key={item.id}
                item={item}
                handlePart={handlePart}
                isSelected={item.selected}
              >
                {item.label}
              </PartBtn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
