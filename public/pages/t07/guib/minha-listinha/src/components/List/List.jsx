import { useState } from 'react'
import { FiTrash2, FiPlus } from 'react-icons/fi'

import './list.style.css'

const List = () => {
    const [list, setList] = useState([])
    const [newTask, setNewTask] = useState('')

    function handleCreateNewTask() {
        const task = {
            id: Math.random(),
            title: newTask,
            isComplete: false
        }
      
        if(task.title === '') {
            return
        }
      
      setList([...list, task])
      setNewTask('')
      
    }

    function handleToggleTaskCompletion(id) {
        const newTasks = list.map(task => task.id === id? {
    ...task,
    isComplete: !task.isComplete,
        }:task)

        setList(newTasks)
    }

    function handleDeleteTask(id) {
        const tasksFiltered = list.filter(task => task.id !== id)
        setList(tasksFiltered)


    }
    return(
     <section className='list'>
         <header>
             <h2>Tarefas a fazer:</h2>

             <div className='inpuit-container' style={{display: 'flex'}}>
              <input 
              type='text'
              placeholder='Adicionar nova tarefa'
              onChange= {e => setNewTask(e.target.value)}
              value={newTask}
              />
              <button className='add-task' data-test-id='add-task' onClick={handleCreateNewTask} >
                  <FiPlus size={16} color='#fff' />
              </button>
             </div>
         </header>
         <main>
             <ul>
                 {
                     list.map(task => 
                        <li key={task.id}>
                     <div data-testid='task'  className={task.isComplete? 'completed': ''}>
                         <label className ='checkbox-container'>
                             <input 
                             type='checkbox'
                             onClick={() => handleToggleTaskCompletion(task.id)}   
                             cheked={task.isComplete}  
                             readOnly              
                             />
                            <span className='checkmark'></span>
                         </label>
                     <p>{task.title}</p>
                     </div>
                     <button className='remove-task' data-testid='remove-task' onClick={() => handleDeleteTask(task.id)} >
                         <FiTrash2 size={16} />
                     </button>
                        </li>
                     )
                 }
             </ul>
         </main>
     </section>
    )

}

export default List