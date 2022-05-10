import React, { useState } from "react";
import "./Task.css";
import { FiSettings } from "react-icons/fi";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export const Task = (props) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const onWidthChange = (e) => {
    props.setWidth(e.target.value);
  };

  const onHeightChange = (e) => {
    props.setHeight(e.target.value);
  };

  const onTitleChange = (e) => {
    props.setTSize(e.target.value);
  };

  return (
    <div
      className="Task"
      style={{
        borderTopColor: props.color,
        width: props.width + "vw",
        height: props.height + "vh",
      }}
    >
      <Modal open={open} onClose={closeModal} center>
        <div className="modal">
          <p className="exp">[{props.type}] Setting Modal</p>
          <input type={"number"} onChange={onWidthChange} />
          <input type={"number"} onChange={onHeightChange} />
          <input type={"number"} onChange={onTitleChange} />
          <section>
            <input
              className="saveIpt"
              value={"Save"}
              type={"submit"}
              onClick={closeModal}
            />
          </section>
        </div>
      </Modal>
      <div className="nav" style={{ backgroundColor: props.color }}>
        <p className="typeName" style={{ fontSize: props.titleSize + "px" }}>
          {props.type}
        </p>
        <FiSettings
          className="settingBtn"
          color={"black"}
          onClick={openModal}
        />
      </div>
      {props.task.map((value, key) => (
        <div className="taskCon">
          <p className="task" key={key}>
            {value}
          </p>
          <div className="lineCon">
            <hr className="line" />
          </div>
        </div>
      ))}
    </div>
  );
};
