import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Context from "../context";
import { Button, Card } from "react-bootstrap";

function TodoItem({ todo, index, onChange }) {
  const [isChecked, setIsChecked] = useState(false);
  const { removeTodo } = useContext(Context);
  const clases = [];

  if (todo.complited) {
    clases.push("done");
  }

  const onCheckboxChange = () => {
    onChange(todo.id);
    setIsChecked(!isChecked);
  };

  return (
    <Card className="flex-row justify-content-between align-items-center mb-3">
      <span style={{ margin: "0 16px" }} className={clases.join(" ")}>
        <label>
          <input
            type="checkbox"
            checked={todo.complited}
            onChange={onCheckboxChange}
          />
          <svg
            className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
            aria-hidden="true"
            viewBox="0 0 15 11"
            fill="none"
          >
            <path
              d="M1 4.5L5 9L14 1"
              strokeWidth="2"
              stroke={isChecked ? "#fff" : "none"}
            />
          </svg>
        </label>
        &nbsp;
        <span>{index + 1}.</span>
        &nbsp;
        {todo.title}
      </span>

      <Button
        className="rounded-0 rounded-end"
        style={{ padding: "6px 14px" }}
        onClick={removeTodo.bind(null, todo.id)}
      >
        Del
      </Button>
    </Card>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
