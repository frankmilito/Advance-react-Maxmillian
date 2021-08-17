import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import Card from '../UI/Card'
import ExpensesFilter from '../NewExpense/ExpensesFilter'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('')
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }
const filteredExpenses = props.expenses.filter(expense=>expense.date.getFullYear().toString() ===filteredYear)
  return (
    <div className="expense-container">
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length===0 ? <p style={{color:'#fff'}}>No Expenses Found.</p>:(
        filteredExpenses.map(expense => (
          <ExpenseItem expense={expense} />
        ))
        )}
      </Card>
    </div>
  )
}

export default Expenses
