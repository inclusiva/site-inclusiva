import { useState } from 'react'
import { FiTrash2, FiPlus } from 'react-icons/fi'
import './list.styles.css' 

const List = () =>{
  const [list, setList] = useState([])
  const [newTask, setNewTask] = useState('')

function handleCreateNewTask(){
  const task={
  id: Math.random(),
  title: newTask,
  isComplete: false
}
    if(task.title === ''){
          return
}
  setList([...list, task])
  setNewTask('')
}
function handleToggleTaskCompletion(id){
  const newTasks = list.map(task => task.id === id? {
     ...task,
     isComplete: !task.isComplete,
  }:task )
   setList(newTasks)
}
function handleDeleteTask(id){
  const tasksFiltered = list.filter(task=> task.id !== id)
   setList(tasksFiltered)
}

          return(
    
  <section className='list'>
    <div><h1>Seja uma mana atarefada mulher!</h1></div>
      <header>
        <h2>Tarefas</h2>
         <div className='input-container' >
          <input type='text' placeholder='Adicionar tarefas' onChange={e => setNewTask(e.target.value)} value={newTask}  />
          <button className='add-task' data-testid='add-task'  onClick={handleCreateNewTask}  >
          <FiPlus size={16} cor='#fff'/></button>
         </div>
        <main>
       <ul>
     {
             list.map(task => 
              <li key={task.id} >
               <div data-testid='task'  className= {task.isComplete? 'completed': ''} >
                <label className='checkbox-container' >
                 <input  type='checkbox' checked={task.isComplete} readOnly onClick={() => {handleToggleTaskCompletion(task.id)} 
     }
                />
              <span className='checkmark' ></span>
            </label>
          <p>{task.title}</p>
         </div>
      <button className='remove-task' data-testid='remove-task' onClick={() => handleDeleteTask(task.id)} ><FiTrash2 size={16} /></button>
    </li>
   )

  }
      </ul>
     </main>
    </header>
  </section>

  )
  }

    
    export default List 