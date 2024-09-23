import React, { useState } from "react";

function BgChanger() {
  const [color, setColor] = useState("aqua");

  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <div className="bg-white p-4 rounded-xl">
          <div className="flex flex-wrap p-2 gap-3">
            <button
              className="bg-red-600 rounded-xl w-20"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="bg-green-600 rounded-xl w-20"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="bg-blue-600 rounded-xl w-20"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="bg-pink-600 rounded-xl w-20"
              onClick={() => setColor("pink")}
            >
              pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BgChanger;
