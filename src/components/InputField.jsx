import { useState } from "react";

const InputField = () => {
  const [inputF, setInput] = useState("");
  function handleInput(event) {
    setInput(event.target.value);
  }
  return (
    <>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter your task"
          value={inputF}
          onChange={handleInput}
          className="mx-3 mt-4 py-2 px-4"
        />
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Add
        </button>
      </div>
    </>
  );
};

export default InputField;
