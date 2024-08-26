import React from "react";

export default function FilterBar() {
  const [status, setStatus] = React.useState("");
  const [show, setShow] = React.useState(false);
  return (
    <>
      <div className="filter-bar">
        <button className={status}>
          <span>🌷</span>All
        </button>
        <button className={status}>
          <span>🌷</span>Design
        </button>
        <button className={status}>
          <span>🌷</span>Coding
        </button>
      </div>
    </>
  );
}
