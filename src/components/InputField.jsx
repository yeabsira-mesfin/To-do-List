import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const InputField = ({ arr }) => {
  const [inputF, setInput] = useState("");
  const [inputA, setInputArray] = useState(arr);

  // T
  function handleInput(event) {
    setInput(event.target.value);
    // console.log(inputF);
  }
  function handleClick() {
    setInputArray([inputF, ...inputA]);
    setInput('');
    console.log(inputA);
  }
  function handleRemove(index) {
    const newArr = inputA.filter((item, i) => i !== index);
    setInputArray(newArr);
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
            className="px-4 py-2 border border-blue-500 rounded focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            onClick={handleClick}
            className="px-4 py-2 ml-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
        <div className="mt-4">
          <ul>
            {inputA.map((input, index) => (
              <li key={index} className="flex items-center justify-between text-white">
                {input}{" "}
                <span>
                  <button className="text-blue-300">Edit</button>
                  <button className="ml-2 text-red-500"
                  onClick={()=>handleRemove(index)}>
                    <FaTimes />
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default InputField;
