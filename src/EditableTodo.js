import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const [todo, setTodo] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit(evt) {
    // if the element is showing Todo -> show TodoForm
    // have to update the class of the Todo to be .hidden

  }

  /** Call remove fn passed to this. */
  function handleDelete() {


  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    //toggle back and call update()
    
  }

  return (
    <div className="EditableTodo">
      EITHER
      <TodoForm />
      OR
      <div className="mb-3">
        <div className="float-right text-sm-right">
          <button
            className="EditableTodo-toggle btn-link btn btn-sm"
            onClick={toggleEdit}
          >
            Edit
          </button>
          <button
            className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
            onClick={handleDelete}
          >
            Del
          </button>
        </div>
        <Todo />
      </div>
    </div>
  );
}

export default EditableTodo;