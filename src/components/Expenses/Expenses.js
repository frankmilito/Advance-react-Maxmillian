import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import Card from '../UI/Card'
import ExpensesFilter from '../NewExpense/ExpensesFilter'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }
  const {expenses} = props

  return (
    <div className="expense-container">
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenses.map(expense => (
          <ExpenseItem expense={expense} />
        ))}
      </Card>
    </div>
  )
}

export default Expenses
