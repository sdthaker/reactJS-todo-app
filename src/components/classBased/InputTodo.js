import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: "",
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if(this.state.title.trim()) {
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        });
    }
    else{
        alert('Please provide an item to be added to the todo list')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add todo..."
          className="input-text"
          value={this.state.title}
          name="title"
          onChange={this.onChange}
        />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}
export default InputTodo