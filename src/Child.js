import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  console.log(color)
  // console.log(onChangeColor)

  function HandleClick() {
    const newColor = getRandomColor()
    onChangeColor(newColor)
  }
  return <div onClick={HandleClick} className="child" style={{ backgroundColor: "#FFF" }} />;
}

export default Child;
