import React from "react";
import "./NavBar.css";

export const NavBar = (props) => {
  return (
    <div className="NavBar">
      <section className="titleZone">
        {/* Project Name */}
        <p className="title">Task App</p>
      </section>
      <section className="menuZone">
        {/* Btn List */}
        <button className="menu-btn" onClick={() => props.typeSelect("All")}>
          All
        </button>
        <button className="menu-btn" onClick={() => props.typeSelect("Daily")}>
          Daily
        </button>
        <button className="menu-btn" onClick={() => props.typeSelect("Weekly")}>
          Weekly
        </button>
        <button
          className="menu-btn"
          onClick={() => props.typeSelect("Monthly")}
        >
          Monthly
        </button>
      </section>
    </div>
  );
};
