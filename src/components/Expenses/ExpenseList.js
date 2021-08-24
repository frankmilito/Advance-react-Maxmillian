import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList(props) {
    if(props.items.length === 0) {
        return <p style={{color:'white', textAlign:'center', fontWeight:'bold'}}>No Expense Found </p>
    }
    return (
        <div>
        {
        props.items.map(expense => (
          <ExpenseItem expense={expense} />
        ))}
        </div>
    )
}

export default ExpenseList
