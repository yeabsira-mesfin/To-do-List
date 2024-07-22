import { useState } from "react";

const InputField = ({ arr }) => {
  const [inputF, setInput] = useState("");
  function handleInput(event) {
    setInput(event.target.value);
    console.log(inputF);
  }
  function handleClick() {}
  return (
    <>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter your task"
          value={inputF}
          onChange={handleInput}
          className="mx-3 mt-4 py-2 px-4 border border-blue-500 focus:border-blue-500 
          focus:ring-2 focus:ring-blue-500 focus:outline-none rounded"
        />
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Add
        </button>
      </div>
    </>
  );
};

export default InputField;
