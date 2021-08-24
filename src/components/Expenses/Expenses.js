import React, {useState} from 'react'
import './Expense.css'
import Card from '../UI/Card'
import ExpensesFilter from '../NewExpense/ExpensesFilter'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

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
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items = {filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses
