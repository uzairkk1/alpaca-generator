import React from "react";
import { downloadImg } from "../utils/downloadImage";
import { random } from "../utils/random";

const Image = ({ img, imgData, setImg, setImgData }) => {
  const { backgrounds, ears, hair, neck, leg, eyes, nose, mouth, accessories } =
    img;

  return (
    <div className="child-1">
      <div className="image-container" id="image-container">
        <img
          src={
            require(`../assets/alpaca-images/backgrounds/${backgrounds}.png`)
              .default
          }
          className="backgrounds"
          alt=""
        />

        <img
          src={require(`../assets/alpaca-images/ears/${ears}.png`).default}
          className="ears"
          alt=""
        />

        <img
          src={require(`../assets/alpaca-images/neck/${neck}.png`).default}
          className="neck"
          alt=""
        />
        <img
          src={require(`../assets/alpaca-images/leg/${leg}.png`).default}
          className="leg"
          alt=""
        />

        <img
          src={require(`../assets/alpaca-images/nose/${nose}.png`).default}
          className="nose"
          alt=""
        />
        <img
          src={require(`../assets/alpaca-images/mouth/${mouth}.png`).default}
          className="mouth"
          alt=""
        />

        <img
          src={
            require(`../assets/alpaca-images/accessories/${accessories}.png`)
              .default
          }
          className="accessories"
          alt=""
        />
        <img
          src={require(`../assets/alpaca-images/hair/${hair}.png`).default}
          className="hair"
          alt=""
        />
        <img
          src={require(`../assets/alpaca-images/eyes/${eyes}.png`).default}
          className="eyes"
          alt=""
        />
      </div>

      <div className="action-container">
        <button
          className="action-btn"
          onClick={() => random(imgData, setImgData, setImg)}
        >
          Random
        </button>
        <button className="action-btn" onClick={() => downloadImg()}>
          Download
        </button>
      </div>
    </div>
  );
};

export default Image;
