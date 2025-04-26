import "../App.css";

function Greeting(props) {

  const hasNameChanged = props.prevName === props.name;

  return (
    <div className="read-the-docs">
      {hasNameChanged ? (
        <h3>Привет, {props.name}!</h3>
      ) : (
        <h3>Привет, у тебя поменялось имя, теперь ты {props.name}!</h3>
      )}
    </div>
  );
}

export default Greeting;
