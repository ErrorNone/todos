import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function useInputValue(defaultValue = "") {
    const [value, setValue] = useState(defaultValue);
    return {
      bind: {
        value,
        onChange: (event) => setValue(event.target.value),
      },
      clear: () => setValue(""),
      value: () => value,
    };
  }

  function submitHandler(event) {
    event.preventDefault();

    if (input.value()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <>
      <Form onSubmit={submitHandler} className="w-100">
        <Form.Group
          className="d-flex mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            {...input.bind}
            placeholder="Write todo..."
            className="rounded-0 rounded-start"
          />
          <Button
            type="submit"
            className="rounded-0 rounded-end"
            variant="primary"
          >
            Add
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
