import React from "react";

export default function Flag(props) {
  return (
    <svg
      id="emoji"
      width="50px"
      height="50px"
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="line">
        <path
          fill="none"
          stroke={props.color}
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
          d="M32.1769,46.2743C36.2877,47.49,39.16,50.2617,39.16,53.4859c0,4.3462-5.2186,7.87-11.6561,7.87s-11.656-3.5234-11.656-7.87c0-3.1536,2.7474-5.8739,6.7144-7.1295"
        />
        <path
          fill="none"
          stroke={props.color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M30.6547,12.48a13.9517,13.9517,0,0,1,7.21-2.2332c4.7236,0,8.7752,4.1079,14.9073,4.1079.9039,0,1.3564-.4069,2.2686-.4069.7566,0,1.0586.5411,1.0586,1.496V31.3092c0,.7455-.8143,1.5923-3.2048,1.5923-7.1861,0-11.2378-4.0647-15.4069-4.0647a12.2077,12.2077,0,0,0-6.9151,2.3078v-4.438"
        />
        <line
          x1="27.1824"
          x2="27.1824"
          y1="10.421"
          y2="52.3401"
          fill="none"
          stroke={props.color}
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
      </g>
    </svg>
  );
}
