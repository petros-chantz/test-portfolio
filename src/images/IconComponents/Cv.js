import React from "react";

export default function Cv(props) {
  return (
    <svg
      id="emoji"
      width="50px"
      height="50px"
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="line">
        <polyline
          fill="none"
          stroke={props.color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          points="36,10.9583 55.9577,31.0626 55.9577,60.9583 16.0423,60.9583 16.0423,10.9583 36,10.9583"
        />
        <polyline
          fill="none"
          stroke={props.color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          points="36,10.9583 35.9577,31.0626 49.1463,31.0626"
        />
      </g>
    </svg>
  );
}
