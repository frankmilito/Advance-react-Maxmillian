import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense = props => {
  const saveExpenseFormData = expenseData => {
    const newExpensedata = {
      ...expenseData,
      id: Math.random().toString(),
    }
    props.addExpense(newExpensedata)
  }
  return (
    <div className="new-expense">
      <ExpenseForm saveExpense={saveExpenseFormData} />
    </div>
  )
}

export default NewExpense
