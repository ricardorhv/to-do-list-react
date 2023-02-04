import { Trash } from 'phosphor-react'
import { ChangeEvent } from 'react';
import { TaskData } from '../App';
import styles from './Task.module.css'

interface TaskProps {
  task: TaskData;
  handleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function Task({ task, handleTaskCompleted, deleteTask }: TaskProps) {
  function onIsCompletedTaskChange() {
    handleTaskCompleted(task.id)
  }

  function handleDeletedTask() {
    deleteTask(task.id)
  }

  return (
    <div className={styles.taskBox}>
      <input 
        type="checkbox" 
        name="task" 
        id="task"
        checked={task.isCompleted}
        onChange={onIsCompletedTaskChange}
      />
      <label htmlFor="task">{task.title}</label>
      <button 
        title='Deletar tarefa'
        onClick={handleDeletedTask}
      >
        <Trash size={18}/>
      </button>
    </div>
  )
}