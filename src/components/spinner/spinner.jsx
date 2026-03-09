import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen w-xl mx-auto animate-fadeUp">
      <div className="w-27 h-27 border-7 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;