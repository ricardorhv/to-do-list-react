import { ClipboardText, PlusCircle } from 'phosphor-react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskBoard } from './components/TaskBoard'

export function App() {
  return (
    <>
      <Header/>
      
      <main className={styles.wrapper}>
        <div className={styles.containerAddNewTask}>
          <input type="text" placeholder='Adicione uma nova tarefa'/>
          <button>
            Criar 
            <PlusCircle size={20}/>
          </button>
        </div>

        <TaskBoard/>

      </main>
    </>
  )
}

