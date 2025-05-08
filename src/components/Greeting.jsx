import { useRef, useEffect } from "react";
import "../App.css";

function Greeting({ name }) {
  const prevName = useRef(name);

  // обновление
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  const isNewName = prevName.current === name;

  return (
    <div className="read-the-docs">
      {isNewName ? (
        <h3>Привет, {name}!</h3>
      ) : (
        <h3>Привет, у тебя поменялось имя, теперь ты {name}!</h3>
      )}
    </div>
  );
}

export default Greeting;
