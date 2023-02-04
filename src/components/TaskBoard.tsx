import { ChangeEvent, useState } from 'react'


import { ClipboardText } from 'phosphor-react'
import { Task } from './Task'
import { TaskData } from '../App';

import styles from './TaskBoard.module.css'

interface TaskBoardProps {
  tasks: TaskData[];
  handleTaskCompleted: (id: string) => void;
  deleteTask: (id: string) => void;
}


export function TaskBoard({ tasks, handleTaskCompleted, deleteTask }: TaskBoardProps) {

  function getQuantityOfTasksCompleted() {
    let count = 0
    tasks.forEach(task => task.isCompleted ? count++ : count)
    return count
  }
  
  const quantityOfTasksCreated = tasks.length
  const quantityOfTasksCompleted = getQuantityOfTasksCompleted()

  return (
    <>
      <header className={styles.taskBoardHeader}>
        <div>
          <strong className={styles.tasksCreated}>Tarefas criadas</strong>
          <strong className={styles.countOfTasks}>{quantityOfTasksCreated}</strong> 
        </div>

        <div>
          <strong className={styles.tasksCompleted}>Concluídas</strong>
          <strong className={styles.countOfTasks}>
            {
              quantityOfTasksCompleted !== 0 
                ? (`${quantityOfTasksCompleted} de ${quantityOfTasksCreated}`)
                : (quantityOfTasksCompleted)
            }
          </strong> 
        </div>
      </header>

      {
        tasks.length === 0 
          ? (
            <section className={styles.taskBoardEmpty}>
              <ClipboardText size={56}/>
              <div>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </section>
          )
        : (
          <section className={styles.taskBoard}>
            {
              tasks.map(task => (
                <Task 
                  task={task}
                  handleTaskCompleted={handleTaskCompleted}
                  deleteTask={deleteTask}
                  key={task.id}
                />
              ))
            }
          </section>
        )
      }
    </>
  )
}