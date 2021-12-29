
import React, {useState, useEffect} from "react"
import styles from "./TodoItem.module.css"
import { FaTrash } from "react-icons/fa"

//funcitonal component(stateless) since there is no state, the state is passed in as props from the parent component
//A class component that only has markup within the render() method can safely be converted to a function component.

// function TodoItem(props) {
//     return (
//         <li>{props.todo.title}</li>
//     );
// }

const TodoItem = props => {
  const [editing, setEditing] = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { completed, id, title } = props.todo

  let viewMode = {}
  let editMode = {}

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  //No array specified: it executes on every re-render and performs the cleanup before it runs next time and of course before the component unmount.
  //No dependency in array: The effect will run/render just once similar to componentDidMount() in class components 
  //No dependency in array + return function: The effect will run/render just once when the component is unmounted, similar to componentDidUnmount() in class components
  //Dependency is specified which changes every now and then: The effect will run/render every time teh dependency is updated 
  useEffect(() => {
        return () => {
            console.log("Cleaning up...")
        }
    }, [])

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
            <FaTrash style={{ color: "orangered", fontSize: "16px" }}/>
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={e => {
          props.setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  )
}

export default TodoItem