import React, { Component } from 'react'
import TodoItem from './todoitem'
export default class Todolist extends Component {
    render() {

        const{items, clearList, handleDelete, handleEdit} = this.props

        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">Todo List</h3>
                
                {
                    items.map((item) => {
                        return(
                            <TodoItem key={item.id} title={item.title} handleDelete={()=> handleDelete(item.id)} handleEdit={()=> handleEdit(item.id)} />
                        )
                    })
                }
                <button onClick={clearList} type="button" className="btn btn-danger btn-block text-capitalize mt-5">clear list</button>
            </ul>
        )
    }
}
