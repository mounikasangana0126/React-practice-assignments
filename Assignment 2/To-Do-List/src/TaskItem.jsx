import React, { useState } from 'react';
import { RiTaskLine } from "react-icons/ri";
import { IoArrowUndo } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const TaskItem = ({ task, editTask, deleteTask, toggleTaskCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleEdit();
          }}
        />
      ) : (
        <span
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          onDoubleClick={() => setIsEditing(true)}
        >
          {task.text}
        </span>
      )}
      <button className='icons-btn' onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? <IoArrowUndo /> : <RiTaskLine />}
      </button>
      <button className='icons-btn' onClick={() => deleteTask(task.id)}><MdDelete />
</button>
    </li>
  );
};

export default TaskItem;
