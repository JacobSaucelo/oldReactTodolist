import React from "react";

const Todo = ({ todolist, onDel }) => {
  const todo =
    todolist.length > 0 ? (
      todolist.map((t) => {
        return (
          <div
            onClick={() => {
              onDel(t.id);
            }}
            className="collection-item"
            style={{ cursor: "pointer" }}
          >
            <span style={{ fontSize: 16 }}>{t.content}.</span>
          </div>
        );
      })
    ) : (
      <h5>there are no more todo's left, Yey!</h5>
    );
  return <div className="collection">{todo}</div>;
};

export default Todo;
