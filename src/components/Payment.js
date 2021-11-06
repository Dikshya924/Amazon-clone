import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from '../axios';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format'
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from '../reducer';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [successed,setSuccessed]=useState(false);
    const [processing, setProccessing]=useState("");
    const [clientSecret, setClientSecret]=useState(true);
    const stripe = useStripe();
    const elements = useElements();
    const history=useHistory();
    useEffect(()=>{
        //generate the special stripe secret which allows us to charge a customer
            const getClientSecrete = async ()=>{
                const response =await axios({
                    method: `post`,
                    // stripe expects the total in a currencies sub units
                    url: `/payments/create?total=${getBasketTotal(basket) * 100}`
                });
                setClientSecret(response.data.clientSecret)
            }
    },[basket])
    console.log('the secrete is', clientSecret);
    const handleSubmit = async event => {
            event.preventDefault();
            setProccessing(true); 
            

            const payload= await stripe.confirmCardPayment(clientSecret,{payment_method:{
                card: elements.getElement(CardElement)
            }}).then(({paymentIntent})=>{
                    // paymentIntent=payment confirmation
                    setSuccessed(true);
                    setError(null);
                    setProccessing(false);
                    history.replace('/orders')
            })
    }
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <Wrapper>
            <Container>
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                {/* delivery address */}
                <Section>
                    <Title>
                        <h3>Delivery Address</h3>
                    </Title>
                    <Payment_Address>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Kathmandu, Nepal</p>
                    </Payment_Address>
                </Section>
                {/* review items */}

                <Section>
                    <Title>
                        <h3>Review Items and Delivery</h3>
                    </Title>
                    <Payment_Items>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}

                            />
                        ))}
                    </Payment_Items>

                </Section>
                {/* payment method */}
                <Section>
                    <Title>
                        <h3>Payment Method</h3>
                    </Title>
                    <Payment_Details>
                        {/* Stripe */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <PriceContainer>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        
                                            <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"$"}

                                />
                                <button disabled={processing || disabled || successed}>
                                    <span>{processing? <p>Processing</p>:"Buy now"}</span>

                                </button>
                            </PriceContainer>
                        {/* error */}
                        {error &&<div>{error}</div>}
                        </form>
                    </Payment_Details>
                </Section>
            </Container>
        </Wrapper>
    )
}

export default Payment
const Wrapper = styled.div`
    background-color:white;
    h1{
       text-align:center;
       padding:10px;
       font-weight:400;
       background-color:rgb(234, 237, 237);
       border-bottom:1px solid lightgray; 
    }
    h1 > a{
        text-decoration:none;
    }

`
const Container = styled.div``
const Section = styled.div`
    display:flex;
    padding:20px;
    margin:0 20px;
    border-bottom: 1px solid lightgray;

`
const Title = styled.div`
    flex:0.3;
`
const Payment_Address = styled.div`
    flex:0.7;
`
const Payment_Items = styled.div`
    flex:0.7;
`
const Payment_Details = styled.div`
    flex:0.7;
`
const PriceContainer = styled.div``