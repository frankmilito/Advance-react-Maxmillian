import React, {useState} from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  })
  const titleChangeHandler = e => {
    setUserInput({
      ...userInput,
      title: e.target.value,
    })
  }
  const amountChangeHandler = e => {
    setUserInput({
      ...userInput,
      amount: e.target.value,
    })
  }
  const dateChangeHandler = e => {
    let newDate = e.target.value
    const data = new Date(newDate)
    setUserInput({
      ...userInput,
      date: e.target.value,
    })
  }
  const submitHandler = e => {
    e.preventDefault()
    setUserInput({
      title: '',
      amount: '',
      date: '',
    })
    props.saveExpense(userInput)
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            type="text"
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
