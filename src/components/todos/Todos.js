import React, { Component } from 'react'
import Todo from './Todo'

class Todos extends Component {

  render() {
    return(
      <ul>
        {this.props.store.getState().todos.map((todo, i) => {
          return <Todo text={todo.text} key={i} id={todo.id} store={this.props.store}/> })
        }
      </ul>
    )
  }
}

export default Todos
