import { useState } from "react";

interface ISecondProps {
  theName: string;
}

export const Second = (props: ISecondProps) => {
  const [a, setName] = useState(props.theName);

  const changeName = () => {
    setName("Sebastian");
  };
  console.log(a);
  return (
    <h1 onClick={changeName}>
      If you click on the text you change the name: {a}
    </h1>
  );
};
