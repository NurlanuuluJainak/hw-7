import Button from '../UI/Button/Button'
import styled from 'styled-components'
export const ExpensesFilter = (props) =>{
    return (
        <ExpensesFilterContent >
            <ExpensesFilterControl >
                <ExpnesesFilterControlLable>Filter by year</ExpnesesFilterControlLable>
             
            </ExpensesFilterControl>
                <div >

                <ExpensesFilterSelect value={props.selected} onChange={props.getValue}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                </ExpensesFilterSelect>
                </div>
        
        </ExpensesFilterContent>
    )
}

const ExpensesFilterContent = styled.div`
   display: flex;
    justify-content: space-between;
    max-width: 1000px;
    align-items: center;
    margin: 0 auto;
`
const ExpensesFilterControl = styled.div`
  display: flex;
    align-items: center;
    gap: 20px;
`
const ExpnesesFilterControlLable = styled.label`
   font-size: 1.3rem;
    color: #fff;
    font-weight: bold;
    font-family: sans-serif;
`
const ExpensesFilterSelect = styled.select`
    padding: 5px 30px;
    border-radius: 5px;
    font-weight: 600;
`