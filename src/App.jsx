import React, { useEffect, useRef, useState, useTransition } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const [isPending, startTransition] = useTransition();

  const inputRef = useRef(null);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const li = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        li.push(e.target.value);
      }
      setList(li);
    });
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter Something"
        autoComplete="off"
        ref={inputRef}
      />
      {isPending?"Loading ...":list.map((item, key) => (
        <div key={key}>{item}</div>
      ))}
    </div>
  );
};

export default App;
