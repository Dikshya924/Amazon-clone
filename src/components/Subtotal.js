import React from 'react'
import CurrencyFormat from 'react-currency-format'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';
import { useHistory } from 'react-router-dom';
function Subtotal() {
    const history=useHistory();
    const [{basket}, dispatch] =useStateValue();
    return (
        <Container>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                        <small>
                            <input type="checkbox" />This order contains a gift
                        </small>


                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}

            />
            <Button onClick={e=> history.push('/payment')}>Proceed to Checkout</Button>


        </Container>
    )
}

export default Subtotal
const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
width:300px;
height:100px;
padding:20px;
background-color:#f3f3f3;
border:1px solid #dddddd;
border-radius:3px;
small{
    display:flex;
    align-items:center;

    input{
        margin-right:5px;
    }
}
Button{
    background-color:#f0c14b;
    border-radius:2px;
    width:100%;
    height:30px;
    border:1px solid;
    margin-top:10px;
    border-color:#a88734 #9c7e31 #846a29;
    color:#111;

}


`
