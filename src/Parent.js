import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF")

  function HandleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor()
    setColor(newRandomColor)
    setChildrenColor(newChildColor)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={HandleChangeColor}/>
      <Child color={childrenColor} onChangeColor={HandleChangeColor}/>
    </div>
  );
}

export default Parent;
