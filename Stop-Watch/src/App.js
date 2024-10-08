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
      }
      return () => clearInterval(interval);
    },
    [isStart]
  );

  return (
    <div className="py-8 max-w-48 flex flex-col justify-center items-center mx-auto">
      <h1 className="font-bold text-red-500">Stop - Watch</h1>
      <div className="py-2 px-4 bg-blue-500 w-full text-center  text-white m-4 rounded-lg space-x-1">
        <span>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)} :</span>
        <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)} :</span>
        <span>{("0" + (Math.floor(time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="flex gap-8 justify-between w-full">
        {isStart ? (
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
            onClick={handleClick}
          >
            Stop
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
            onClick={handleClick}
          >
            Start
          </button>
        )}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
