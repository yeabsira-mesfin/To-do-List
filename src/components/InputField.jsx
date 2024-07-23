import { useState } from "react";

const InputField = ({ arr }) => {
  const [inputF, setInput] = useState("");
  const [inputA,setInputArray] = useState(arr)
  function handleInput(event) {
    setInput(event.target.value);
    
    console.log(inputF);
    
  }
  function handleClick() {
    setInputArray([inputF,...inputA])
    console.log(inputA)
  }
  return (
    <>
      <div className="block mx-3 mt-4">
        <div className="flex">
          <input
            type="text"
            placeholder="Enter your task"
            value={inputF}
            onChange={handleInput}
            className="py-2 px-4 border border-blue-500 focus:border-blue-500 
            focus:ring-2 focus:ring-blue-500 focus:outline-none rounded"
          />
          <button
            onClick={handleClick}
            className="bg-blue-500 text-white py-2 px-4 ml-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
        <div className="mt-4">
          <ul>
            {inputA.map((input, index) => (
              <li key={index}>{input} <button>Click</button></li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default InputField;
