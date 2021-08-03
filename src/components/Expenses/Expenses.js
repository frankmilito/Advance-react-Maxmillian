import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import Card from '../UI/Card'

function Expenses(props) {
  const {expenses} = props
  return (
    <div className="expense-container">
      <Card className="expenses">
        {expenses.map(expense => (
          <ExpenseItem expense={expense} />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
