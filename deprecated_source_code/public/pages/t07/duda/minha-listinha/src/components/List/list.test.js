import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import List from './List'

describe('List component', () =>{
 it('should create a new task', () =>{
   render(<List />)
    const input = screen.getByPlaceholderText('Adicionar tarefas')
    const botao = screen.getByTestId('add-task')

    fireEvent.change(input, {
        target:{
         value: 'estudar react'
        }
    })
    fireEvent.click(botao)
    const itemUmLista = screen.getByText('estudar react')
    expect(itemUmLista).toHaveTextContent('estudar react')

    fireEvent.change(input, {
        target:{
         value: 'estudar js'
        }
    })
    fireEvent.click(botao)
    const itemDoisLista = screen.getByText('estudar js')
    expect(itemDoisLista).toHaveTextContent('estudar js')
})
 it('should not create a new task when the title is emprty', () =>{ 
    render(<List />)
    const botao = screen.getByTestId('add-task')
    fireEvent.click(botao)

    expect(screen.queryByTestId('task')).not.toBeInTheDocument()
 })

 it('shoulde be able to delete a task', ()=> {

    render(<List />)
    const input = screen.getByPlaceholderText('Adicionar tarefas')
    const botao = screen.getByTestId('add-task')

    fireEvent.change(input, {
        target:{
         value: 'estudar react'
        }
    })
    fireEvent.click(botao)

    fireEvent.change(input, {
        target:{
         value: 'estudar js'
        }
    })
    fireEvent.click(botao)

    const itemDoisLista = screen.getByText('estudar js')
    const itemUmLista = screen.getByText('estudar react')

    expect(itemDoisLista).toBeInTheDocument
    expect(itemUmLista).toBeInTheDocument

    const[itemUmListaBotaoRemover] = screen.getAllByTestId('remove-task')

    fireEvent.click(itemUmListaBotaoRemover)

    expect(itemDoisLista).not.toBeInTheDocument
    expect(itemUmLista).toBeInTheDocument
})
  it('shoulde be able to complete a task', ()=> {
      render(<List />)
      const input = screen.getByPlaceholderText('Adicionar tarefas')
      const botao = screen.getByTestId('add-task')

       fireEvent.change(input, {
        target:{
         value: 'estudar react'
        }
    })
       fireEvent.click(botao)

       fireEvent.change(input, {
        target:{
         value: 'estudar js'
        }
    })
       fireEvent.click(botao)


    const [item1, item2] = screen.getAllByTestId('task')

    if(item1.firstChild) {
       fireEvent.click(item1.firstChild)      
     }

     expect(item1).toBeInTheDocument()
     expect(item1).toHaveClass('completed')

     expect(item2).toBeInTheDocument()
     expect(item2).not.toHaveClass('completed')

    })

})