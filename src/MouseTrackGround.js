import React, { useEffect, useState } from "react";
import { useAppReducer } from "./reducer";

const MouseTrackGround = (props) => {
  useEffect(() => {});
  const { state } = useAppReducer();

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onTrackMouseMove = (event) =>
    setPosition({ x: event.clientX, y: event.clientY });

  return (
    <div
      style={{
        margin: "0 auto",
        width: "80vw",
        height: "50vh",
        backgroundColor: props.color || "#ccc"
      }}
      onMouseMove={onTrackMouseMove}
    >
      {props.render && props.render(position)}
      <br />
      position is:{state.visited}
    </div>
  );
};
export default MouseTrackGround;
