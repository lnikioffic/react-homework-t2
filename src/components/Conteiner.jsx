import { useState, useEffect } from "react";
import Greeting from "./Greeting";
import Header from "./Header";
import Clock from "./Clock";

// Массив случайных имен
const randomNames = [
  "Алексей",
  "Мария",
  "Иван",
  "Елена",
  "Дмитрий",
  "Анна",
  "Сергей",
  "Ольга",
];

const getRandomName = () => {
  const randomIndex = Math.floor(Math.random() * randomNames.length);
  return randomNames[randomIndex];
};

const Conteiner = () => {
  const [name, setName] = useState(getRandomName());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setName(getRandomName());
    }, 10000);

    return () => clearInterval(intervalId);
  }, [name]);

  return (
    <>
      <Header />
      <Greeting name={name} />
      <Clock />
    </>
  );
};

export default Conteiner;
