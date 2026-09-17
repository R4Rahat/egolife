import { useEffect, useState } from "react";
import { animate } from "framer-motion";

// Counts from 0 to `target` once `start` becomes true.
export default function CountUp({ target, start, duration = 1.8 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });

    return () => controls.stop();
  }, [start, target, duration]);

  return <span>{value}</span>;
}
