import { PlusCircle } from 'phosphor-react'
import { ChangeEvent } from 'react';
import styles from './NewTask.module.css'

interface NewTaskProps {
  taskTitle: string;
  onNewTaskTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNewTask: () => void;
}

export function NewTask({ taskTitle, onNewTaskTitleChange, handleNewTask }: NewTaskProps) {
  const isInputEmpty = taskTitle.length === 0

  return (
    <div className={styles.containerAddNewTask}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa'
        value={taskTitle}
        onChange={onNewTaskTitleChange}
      />
      <button 
        onClick={handleNewTask}
        disabled={isInputEmpty}
      >
        Criar 
        <PlusCircle size={20}/>
      </button>
    </div>
  )
}