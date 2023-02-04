import { ClipboardText } from 'phosphor-react'
import { Task } from './Task'
import styles from './TaskBoard.module.css'

export function TaskBoard() {
  return (
    <>
      <header className={styles.taskBoardHeader}>
        <div>
          <strong className={styles.tasksCreated}>Tarefas criadas</strong>
          <strong className={styles.countOfTasks}>0</strong> 
        </div>

        <div>
          <strong className={styles.tasksCompleted}>Concluídas</strong>
          <strong className={styles.countOfTasks}>0</strong> 
        </div>
      </header>

      {/* <section className={styles.taskBoardEmpty}>
        <ClipboardText size={56}/>
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </section> */}

      <section className={styles.taskBoard}>
        <Task/>
      </section>
    </>
  )
}