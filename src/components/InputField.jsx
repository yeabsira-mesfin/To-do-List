import { useState } from "react";
import { FaTimes, FaEdit, FaSave } from "react-icons/fa";

const InputField = ({ arr }) => {
  const [inputF, setInput] = useState("");
  const [inputA, setInputArray] = useState(arr);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [novalue, setNoValue] = useState(false);

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleClick() {
    if (inputF.trim() === "") {
      // Check if the input field is empty
      setNoValue(true);
      return; // Don't add an empty item to the array
    }

    setInputArray([inputF, ...inputA]);
    setNoValue(false);
    setInput("");
  }

  function handleRemove(index) {
    const newArr = inputA.filter((item, i) => i !== index);
    setInputArray(newArr);
  }

  function handleEdit(index) {
    setEditIndex(index);
    setEditValue(inputA[index]);
  }

  function handleSave() {
    const updatedArray = inputA.map((item, index) =>
      index === editIndex ? editValue : item
    );
    setInputArray(updatedArray);
    setEditIndex(null);
    setEditValue("");
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
          {novalue && <h1 className="text-red-500 ">Please enter your task</h1>}
          <ul>
            {inputA.map((input, index) => (
              <li
                key={index}
                className="flex items-center justify-between text-black"
              >
                {editIndex === index ? (
                  <>
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="px-4 py-2 border border-blue-500 rounded focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button
                      onClick={handleSave}
                      className="ml-2 text-green-500"
                    >
                      <FaSave />
                    </button>
                  </>
                ) : (
                  <>
                        {input}
                        <span>
                          <button
                            onClick={() => handleEdit(index)}
                            className="text-blue-300"
                          >
                            <FaEdit />
                          </button>
                          <button
                            className="ml-2 text-red-500"
                            onClick={() => handleRemove(index)}
                          >
                            <FaTimes />
                          </button>
                        </span>
                     
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default InputField;
