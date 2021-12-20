import {render, screen, fireEvent} from '@testing-library/react'
import List from './List'
import '@testing-library/jest-dom/extend-expect';
describe ('List component', () =>{
    render (<List/>)
    const input = screen.getByPlaceholderText('Adicionar nova tarefa')
    const botao = screen.getByTestId('add-task')
    fireEvent.change(input, {
        target: {
            value: 'Estudar react'
        }
    })
    fireEvent.click(botao)
    const itemUmLista = screen.getByText('Estudar react')
    expect (itemUmLista).toHaveTextContent('Estudar react')

    const input = screen.getByPlaceholderText('Adicionar nova tarefa')
    const botao = screen.getByTestId('add-task')
    fireEvent.change(input, {
        target: {
            value: 'Estudar js'
        }
    })
    fireEvent.click(botao)
    const itemDoisLista = screen.getByText('Estudar js')
    expect (itemDoisLista).toHaveTextContent('Estudar js')
})
it ('sould not create a new task when the title in empty', () =>{
    render (<List/>)
    const botao = screen.getByTestId ('add-task')

    fireEvent.click(botao)

    expect(screen.queryByTestId('task')).not.toBeInTheDocument()


it('sould be able to delete a task', ()=> {
        render (<List/>)
    const input = screen.getByPlaceholderText('Adicionar nova tarefa')
    const botao = screen.getByTestId('add-task')
    fireEvent.change(input, {
        target: {
            value: 'Estudar react'
        }
    })
    fireEvent.click(botao)
    
    const input = screen.getByPlaceholderText('Adicionar nova tarefa')
    const botao = screen.getByTestId('add-task')
    fireEvent.change(input, {
        target: {
            value: 'Estudar js'
        }
    })
    fireEvent.click(botao)
    const itemDoisLista = screen.getByText('Estudar js')
    expect (itemUmLista)= screen.getByText('Estudar react')

    expect (itemUmLista).toBeInTheDocument() 
    expect (itemDoisLista).toBeInTheDocument()


    
const [itemUmListaBotaoRemover] = screen.getAllByTestId('remove-task')

        fireEvent.click(itemUmListaBotaoRemover)
        expect (itemUmLista).not.toBeInTheDocument()
        expect (itemDoisLista).toBeInTheDocument()


})
it ('sould be able to complete a task', () =>{
render (<List/>)
const input = screen.getByPlaceholderText('Adicionar nova tarefa')
    const botao = screen.getByTestId('add-task')
})
fireEvent.change(input, {
    target: {
        value: 'Estudar js'
    }
})
fireEvent.click(botao)
const [Item1, Item2] = screen.getAllByTestId ('task')
if (Item1.firstChild){
fireEvent.click(Item1.firstChild)
}
expect(Item2).toBeInTheDocument()
expect (Item1).not.toHaveClass('completed')
})