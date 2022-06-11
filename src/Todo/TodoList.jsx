import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import { Col, Row } from "react-bootstrap";

function TodoList(props) {
  return (
    <div className="w-100">
      {props.todos.map((todo, index) => {
        return (
          <Row>
            <Col>
              <TodoItem
                todo={todo}
                key={todo.id}
                index={index}
                onChange={props.onToggle}
              />
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoList;
