import React, { useState, useEffect } from "react";
import "./Task.css";
import { FiSettings } from "react-icons/fi";
import { BsCircle } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
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
          <input
            className="ipt2"
            type={"number"}
            onChange={onWidthChange}
            min={"1"}
            max={"34"}
          />
          <input className="ipt2" type={"number"} onChange={onHeightChange} />
          <input className="ipt2" type={"number"} onChange={onTitleChange} />
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
        <div key={key} className="taskCon">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "60%",
              }}
            >
              {value.check ? (
                <BsCircleFill
                  className="check"
                  onClick={() => props.check(value.id, value.type)}
                />
              ) : (
                <BsCircle
                  onClick={() => props.check(value.id, value.type)}
                  className="check"
                />
              )}

              <p className={value.check ? "endTask" : "task"}>{value.task}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "40%",
              }}
            >
              <BiEditAlt className="edit" />
              <RiDeleteBin5Line
                className="del"
                onClick={() => {
                  if (window.confirm("정말 삭제하겠습니까?") === true) {
                    props.del(value.type, value.id);
                  }
                }}
              />
            </div>
          </div>
          <div className="lineCon">
            <hr className="line" />
          </div>
        </div>
      ))}
    </div>
  );
};
