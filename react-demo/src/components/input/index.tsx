import { useEffect, useRef, useState } from "react";

export interface Props {
  value: string
  onChange: (value: string) => void
}

export default (props: Props) => {
  const [value, setValue] = useState(props.value);
  const timeRef = useRef(0);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChange(e.target.value);
  }
  useEffect(() => {
    timeRef.current = setTimeout(() => {
      console.log(value);
    }, 1000);
    return () => {
      clearTimeout(timeRef.current);
    }
  }, [value]);
  return (
    <input value={value} onInput={onChange} />
  );
}