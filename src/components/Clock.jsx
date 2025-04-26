import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = time.getMinutes();

  return (
    <div>
      <p>Время {time.toLocaleTimeString()}</p>
      <p>Дата {time.toLocaleDateString()}</p>
      {minutes % 5 === 0 && <p>Время делится на 5</p>}
    </div>
  );
}

export default Clock;
