import { useEffect, useState } from "react";

export default function App() {
  const [isStart, setIsStart] = useState(false);
  const [time, setTime] = useState(0);

  function handleClick() {
    setIsStart((s) => !s);
    setTime((c) => c + 1);
  }

  function handleReset() {
    if (!isStart) setTime(0);
  }

  useEffect(
    function () {
      let interval;
      if (isStart) {
        interval = setInterval(() => setTime((prev) => prev + 10), 10);
      } else {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    },
    [isStart]
  );

  return (
    <div className="py-4 max-w-md flex flex-col justify-center items-center m-auto">
      <h2 className="font-bold">Stop-Watch</h2>
      <div className="py-2 px-4 bg-blue-500  text-white m-4 rounded-lg space-x-1">
        <span>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + (Math.floor(time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="flex gap-8 justify-evenly w-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          {isStart ? "Stop" : "Start"}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
