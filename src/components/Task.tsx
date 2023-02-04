import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

export function Task() {
  return (
    <div className={styles.taskBox}>
      <input type="checkbox" name="task" id="task"/>
      <label htmlFor="task">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci consequuntur eos. Aperiam dolores consequuntur culpa nam doloribus?</label>
      <button>
        <Trash size={18}/>
      </button>
    </div>
  )
}