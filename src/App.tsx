import { ChangeEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header'
import { NewTask } from './components/NewTask';
import { TaskBoard } from './components/TaskBoard'

import styles from './App.module.css'

export interface TaskData {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskData[]>([])
  const [newTaskTitle, setNewTaskTitle] = useState('')

  function onNewTaskTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskTitle(event.target.value)
  }

  function handleNewTask() {
    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
    setNewTaskTitle('')
  }

  function handleTaskCompleted(id: string) {
    const taskChanged = tasks.find(task => task.id === id)
    const newTask ={
      ...taskChanged!,
      isCompleted: !taskChanged!.isCompleted,
    }
    const tasksWithoutTheChangedOne = tasks.filter(task => task.id !== id)
    setTasks(newTask.isCompleted ? [...tasksWithoutTheChangedOne, newTask] : [newTask, ...tasksWithoutTheChangedOne])
  }

  function deleteTask(id: string) {
    const taskDeleted = tasks.find(task => task.id === id)
    if (taskDeleted?.isCompleted) {
      const taskWithoutTheDeletedOne = tasks.filter(task => task !== taskDeleted)
      setTasks(taskWithoutTheDeletedOne)
    }
    else {
      alert('Parece que você não completou essa tarefa ainda. Complete ela para excluir.')
    }
  }
  
  return (
    <>
      <Header/>
      
      <main className={styles.wrapper}>
        <NewTask
          onNewTaskTitleChange={onNewTaskTitleChange}
          taskTitle={newTaskTitle}
          handleNewTask={handleNewTask}
        />

        <TaskBoard 
          tasks={tasks}
          handleTaskCompleted={handleTaskCompleted}
          deleteTask={deleteTask}
        />

      </main>
    </>
  )
}

