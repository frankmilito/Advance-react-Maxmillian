import React, {useState} from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const initial_state = [
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
function App() {
  const [expenses, setExpense] = useState(initial_state)

  const addExpense = expenseData => {
    setExpense(prevState => {
      return [expenseData, ...prevState]
    })
  }
  return (
    <div className="App">
      <NewExpense addExpense={addExpense} />
      <div className="container">
        <Expenses expenses={expenses} />
      </div>
    </div>
  )
}

export default App
