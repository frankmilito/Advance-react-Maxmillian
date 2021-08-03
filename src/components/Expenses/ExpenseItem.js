import React, {useState} from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {
  const {id, amount, date} = props.expense
  const [title, setTitle] = useState(props.expense.title)
  const clickHandler = () => {
    setTitle('UpdaTE')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
        <button
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '8px 15px',
            margin: '0 5px',
            borderRadius: '10px',
          }}
          onClick={clickHandler}
        >
          Change Title
        </button>
      </div>
    </Card>
  )
}

export default ExpenseItem
