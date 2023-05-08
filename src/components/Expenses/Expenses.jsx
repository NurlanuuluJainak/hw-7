import { useState } from "react"
import { ExpenseCard } from "../ExpenseCard/ExpenseCard"
import { ExpensesFilter } from "../ExpenseFIlter/ExpensesFilter"
import styled from "styled-components"
import { ExpensesChart } from "../chart/Expenseschart"


export const Expenses = ({data}) => {

    const [selectedYear,setSelectedYear] = useState("2023")

    function getSelectValue(event){
        setSelectedYear(event.target.value)
    }
    console.log(selectedYear)
    
    const filteredYear = data.filter((el) =>{
        return el.date.getFullYear().toString() === selectedYear
        
    })
    
    return(
        <ExpensesCardFilter>
            <ExpensesFilter value={selectedYear} getValue={getSelectValue}/>
            <ExpensesChart  filteredExpenses={filteredYear}/>
        {filteredYear.map((el) =>(
           <ExpenseCard el={el} key={el.id} />
        ))}
        </ExpensesCardFilter>
    )
}
const ExpensesCardFilter = styled.div`
       padding: 30px 0px;
    background-color: #2A2A2A;
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 10px;

`