import React from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'

function App() {
  return (
    
    <>
  
  <Alert/>
  <ExpenseForm/>
  <ExpenseList/>


    </>
      
  );
}

export default App;
