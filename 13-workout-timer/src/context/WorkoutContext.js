import { createContext, useContext, useEffect, useState } from "react";

const WorkoutContext = createContext();

function WorkoutProvider({ children }) {
  const [allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatTime(new Date()));

  function formatTime(date) {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  }

  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  // Will be be AM or PM
  const partOfDay = time.slice(-2);

  return (
    <WorkoutContext.Provider
      value={{
        allowSound,
        setAllowSound,
        time,
        setTime,
        partOfDay,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

function useWorkout() {
  const context = useContext(WorkoutContext);

  if (context === undefined)
    throw new Error("WorkoutContext was used outside WorkoutProvider 🥲");
  return context;
}

export { WorkoutProvider, useWorkout };
