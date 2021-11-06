import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../StateProvider';
function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket },dispatch]=useStateValue();
    const removeFromBasket=()=>{
       //remove item from basket
       dispatch({
           type: 'REMOVE_FROM_BASKET',
           id:id,
       })
   }
    return (
        <Container>
            <img src={image} alt="product image" />
            <Info>
                <Title>
                <p>{title}</p>
                </Title>
               
                <p><small>$</small><strong>{price}</strong></p>
                <Rating>
                    {Array(rating)
                        .fill().
                        map((_, i) => (
                            <p>⭐</p>
                        ))}

                </Rating>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </Info>
        </Container>
    )
}

export default CheckoutProduct
const Container = styled.div`
    display:flex;
    margin-bottom:20px;
    margin-top:30px;
 
    img{
        object-fit:contain;
        width:180px;
        height:180px;
    }
`
const Info = styled.div`
    padding-left:30px;
    button{
        background:#f0c14b;
        border:1px solid;
        margin-top:10px;
        border-color:#a88734 #9c7e31 #846a29;
        color:#111;
    }

`
const Rating = styled.div`
display:flex;
`
const Title=styled.div`
    font-size:17px;
    font-weight:700;
`