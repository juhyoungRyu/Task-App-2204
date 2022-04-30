import React, { useState } from "react";
import "./Task.css";

export const Task = (props) => {
  return (
    <div
      className="Task"
      style={{
        borderTopColor: props.color,
        width: props.width + "vw",
        height: props.height + "vh",
      }}
    >
      {props.task.map((value, key) => (
        <p key={key}>{value}</p>
      ))}
    </div>
  );
};
