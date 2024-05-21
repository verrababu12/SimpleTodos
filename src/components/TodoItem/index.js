// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" onClick={onDelete} className="delete-btn">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
