import React from 'react';
import type { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggleComplete }) => {
  const taskStyle = {
    textDecoration: task.completed ? 'line-through' : 'none',
    color: task.completed ? 'gray' : 'black',
  };

  return (
    <li>
      <span style={taskStyle}>{task.title}</span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <button onClick={() => onDelete(task.id)}>Удалить</button>
    </li>
  );
};

export default TaskItem;