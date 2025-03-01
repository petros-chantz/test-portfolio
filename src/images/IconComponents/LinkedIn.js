import React from "react";

export default function LinkedIn(props) {
  return (
    <svg
      id="emoji"
      width="50px"
      height="50px"
      viewBox="0 0 72 72"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="line">
        <rect
          x="11"
          y="11"
          rx="3"
          width="50"
          height="50"
          fill="none"
          stroke={props.color}
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <rect
          x="20"
          y="30"
          width="6"
          height="21"
          fill="none"
          stroke={props.color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <circle
          cx="23"
          cy="22"
          r="3.5"
          fill="none"
          stroke={props.color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <path
          fill="none"
          stroke={props.color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m42.5 35c-2.209 0-4 1.168-4 4.5v11.5h-6v-21h6v2.21h-0.0016a7.981 7.981 0 0 1 6.002-2.71c4.418 0 8 3.3 8 9v12.5h-6v-11.5c0-3.332-1.791-4.5-4-4.5"
        />
      </g>
    </svg>
  );
}
