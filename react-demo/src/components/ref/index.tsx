import { useRef } from "react";

export default function RefComponent() {
  const count1 = useRef(0)
  const count2 = useRef(0)
  const onClick1 = () => {
    count1.current += 1;
  }
  const onClick2 = () => {
    count2.current += 1;
  }
  return (
    <>
      <button onClick={onClick1}>Count is {count1.current}: no effect</button>
      <button onClick={onClick2}>Count is {count2.current}: effect</button>
    </>
  );
}