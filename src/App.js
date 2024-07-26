import React from "react";
import InputField from "./components/InputField";
import bimage from './assests/todolist.png'

const App = () => {
  const arr = [];
  return (
    <>
      <div className="flex items-center justify-center h-[100vh]" style={{
        backgroundImage:`url(${bimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <InputField arr={arr}/>
      </div>

    </>
  );
};

export default App;
