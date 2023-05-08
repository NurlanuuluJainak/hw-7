import { useState } from 'react';
import './App.css';
import { Expenses } from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpenses/NewExpenses';
const producDate = [
  {
    title:"Alma",
    price:120,
    date: new Date(2021,6,19),
    id:'1'
  },
  {
    title:"Banan",
    price:220,
    date:new Date(2022, 6 , 26),
    id:"2"
  },
  {
    title:"Sok",
    price:2000,
    date:new Date(2021,5,14),
    id:"3"
  },
  {
    title:"car",
    price:1420,
    date:new Date(2020,4,23),
    id:"4"
  },
]


function App() {
  const [newProduc,setNewProduc] = useState(producDate)

  const addNewExpensesHandler = (data) => {
 setNewProduc((prev) => {
  return [
    data,
    ...prev,
  ]
 })
  }


  return (
    <div className="App">
   
          <div>
            <NewExpense onSubmit={addNewExpensesHandler} />
            <Expenses data={newProduc} />
          </div>
  </div>
    

  );
}

export default App;
