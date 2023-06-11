import React from "react"

const Textbtn = ({name, type}) => {
  return (
    <button className={`text-button ${type}`} >
      {name}
    </button>
  )
};

export default Textbtn;
