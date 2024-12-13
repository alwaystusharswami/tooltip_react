import { useState } from "react";
import Tooltip from "./Tooltip";
export default function App() {
  const [position, setPosition] = useState("top");
  const [activeButton, setActiveButton] = useState(1);
  return (
    <div
      className="flex flex-col items-center justify-around "
      style={{ height: "100vh" }}
    >
      <div className=" ">
        <button
          className={`border-4 px-5 py-2 m-2 rounded-lg  ${
            activeButton === 1
              ? "bg-green-500 text-white"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => {
            setPosition("top");
            setActiveButton(1);
          }}
        >
          Top
        </button>
        <button
          className={`border-4 px-5 py-2 m-2 rounded-lg ${
            activeButton === 2
              ? "bg-green-500 text-white"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => {
            setPosition("bottom");
            setActiveButton(2);
          }}
        >
          Bottom
        </button>
        <button
          className={`border-4 px-5 py-2 m-2 rounded-lg ${
            activeButton === 3
              ? "bg-green-500 text-white"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => {
            setPosition("left");
            setActiveButton(3);
          }}
        >
          left
        </button>
        <button
          className={`border-4 px-5 py-2 m-2 rounded-lg ${
            activeButton === 4
              ? "bg-green-500 text-white"
              : "bg-blue-500 text-white"
          }`}
          onClick={() => {
            setPosition("right");
            setActiveButton(4);
          }}
        >
          right
        </button>
      </div>
      <Tooltip position={position} />
    </div>
  );
}
