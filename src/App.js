import React, {useState} from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const [expense, setExpense] = useState({})
  const expenses = [
    {id: 1, title: 'Toilet paper', amount: 398.78, date: new Date(2021, 7, 2)},
    {id: 2, title: 'New Tv', amount: 235.09, date: new Date(2021, 4, 12)},
    {
      id: 3,
      title: 'Car Insurance',
      amount: 318.78,
      date: new Date(2021, 5, 22),
    },
    {id: 5, title: 'Maintenance', amount: 400.0, date: new Date(2021, 11, 14)},
  ]

  const addExpense = expenseData => {
    setExpense(expenseData)
  }
  return (
    <div className="App">
      <NewExpense addExpense={addExpense} />
      <div className="container">
        <Expenses expenses={expenses} expense={expense} />
      </div>
    </div>
  )
}

export default App
