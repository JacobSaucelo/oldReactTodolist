import React, { useState } from "react";

const AddTodoUs = ({ onAdd }) => {
  const [content, setContent] = useState({ content: "" });

  const handleChange = (e) => {
    setContent({ content: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(content);
    setContent({ content: "" });

    console.log(content);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label>Add todo.</label>
          <input type="text" onChange={handleChange} value={content.content} />
          <button className="btn blue waves-effect light-waves">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoUs;
