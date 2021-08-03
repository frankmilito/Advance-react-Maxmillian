import './App.css'
import Expenses from './components/Expenses/Expenses'

function App() {
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
  return (
    <div className="App">
      <h1>Let's get started</h1>
      <div className="container">
        <Expenses expenses={expenses} />
      </div>
    </div>
  )
}

export default App
