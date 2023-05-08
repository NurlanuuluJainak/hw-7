import { ExpensesDate } from '../ExpensesDate/ExpensesDate'
import styled from 'styled-components'

export const ExpenseCard = ({el}) => {
    

 
    return(

       <DivItem >
        <Content>
        <Date>
        <ExpensesDate date={el.date}/>
        </Date>
       <Title>
        <h2>{el.title}</h2>
       </Title>
        </Content>
        <Price>
        <PriceText>$ {el.price}</PriceText>
        </Price>
       </DivItem>
    )
}

const DivItem = styled.div`
     display: flex;
    max-width: 1000px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
   margin-top: 20px;
   padding: 10px 20px;
    border-radius: 10px;
    background-color: #4B4B4B;
`

const Content = styled.div`
  display: flex;
gap: 150px;
`
const Date = styled.div`
    font-size: 1.2rem;
    padding: 10px 20px;
    background: #2A2A2A;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
    color: #FFFFFF;
`
const Title = styled.div`
    color: #FFF;
    font-size: 1.5rem;
`
const Price = styled.div`
  background: #40005D;
border: 1px solid #FFFFFF;
border-radius: 10px;
padding: -0px 20px;
`
const PriceText = styled.p`
     font-size: 1.2rem;
    color: #FFF;
    font-weight: 600;
`