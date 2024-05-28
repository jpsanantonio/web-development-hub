import { ComponentProps } from "react";

export default function ReacIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      viewBox="-10.5 -9.45 21 18.9"
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="0" cy="0" r="2" fill="#58c4dc"></circle>
      <g stroke="#58c4dc" stroke-width="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  );
}