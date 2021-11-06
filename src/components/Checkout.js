import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
function Checkout() {
    const [{ basket, user },dispatch]=useStateValue();
    return (
        <Container>
            <Left>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Pay_Balance/apay_pc_banner_2.jpg" alt="checkoutBanner" />
                <Title>
                    <h3>Hello, {user?.email}</h3>
                    <h2>Your Shopping Basket</h2>
                </Title>
                {basket?.map(item =>(
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
           
                    />
                ))}
                
            </Left>
            <Right>
                <Subtotal />
            </Right>
        </Container>
    )
}

export default Checkout
const Container = styled.div`
    display:flex;
    height:max-content;
    padding:20px;
    background-color:white;
`
const Left = styled.div`
img{
    max-height:30vh;
    max-width:100%;
    margin-bottom:10px;
}
`
const Right = styled.div`
margin-left:10px;
`
const Title = styled.div`
    margin-right:10px;
    padding:10px;
    border-bottom:1px solid lightgray;
`
