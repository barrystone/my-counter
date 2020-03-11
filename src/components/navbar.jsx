import React, { Component } from "react";
import SumValue from "./sumValue";
const Navbar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li>
              <b style={{ color: "#B33771" }}>Your list&nbsp;</b>:&nbsp;
            </li>
            <li class="breadcrumb-item">
              <div className="badge badge-pill badge-success">
                Product Categories&nbsp;:&nbsp;
                <span style={{ color: "#ffcccc" }}>{props.totalCounters}</span>
              </div>
              &nbsp;
              <SumValue counters={props.counters} />
            </li>
          </ol>
        </nav>
      </a>
    </nav>
  );
};
export default Navbar;
