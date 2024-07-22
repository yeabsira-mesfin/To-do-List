import React from "react";
import InputField from "./components/InputField";
const App = () => {
  const arr = [];
  return (
    <>
      <div className="flex items-center justify-center">
        <InputField arr={arr}/>
      </div>

    </>
  );
};

export default App;
