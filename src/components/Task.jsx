import React, { useState } from "react";
import "./Task.css";
import { FiSettings } from "react-icons/fi";

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
      <div className="nav" style={{ backgroundColor: props.color }}>
        <p
          className="typeName"
          style={{ fontSize: 100 + props.titleSize + "%" }}
        >
          {props.type}
        </p>
        <FiSettings
          className="settingBtn"
          color={"black"}
          onClick={props.openModal}
        />
      </div>
      {props.task.map((value, key) => (
        <p className="task" key={key}>
          {value}
        </p>
      ))}
    </div>
  );
};
