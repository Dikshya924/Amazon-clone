import React from 'react'
import styled from 'styled-components'
import Product from './Product'
function Home() {
    return (
        <Main>
            <Container>
                <Banner>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_2x._CB429090087_.jpg" alt="banner" />
                </Banner>
                <Row>
                    <Product
                        id="123345"
                        title="Homall Gaming Chair Office Chair High Back"
                        price={199.99}
                        image="https://m.media-amazon.com/images/I/61HEqHMkRhL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                    <Product
                        id="123325"
                        title="ASUS TUF Dash 15 (2021) Ultra Slim Gaming Laptop,"
                        price={199.99}
                        image="https://m.media-amazon.com/images/I/81f-JgUXsoS._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                </Row>
                <Row>
                    <Product
                        id="124444"
                        title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller,"
                        price={199.99}
                        image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    <Product
                        id="123325"
                        title="ASUS TUF Dash 15 (2021) Ultra Slim Gaming Laptop,"
                        price={199.99}
                        image="https://m.media-amazon.com/images/I/81f-JgUXsoS._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                     <Product
                        id="123325"
                        title="ASUS TUF Dash 15 (2021) Ultra Slim Gaming Laptop,"
                        price={199.99}
                        image="https://m.media-amazon.com/images/I/81f-JgUXsoS._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                </Row>
                <Row>
                    <Product
                        id="123325"
                        title="ASUS TUF Dash 15 (2021) Ultra Slim Gaming Laptop,"
                        price={199.99}
                        image="https://m.media-amazon.com/images/I/81f-JgUXsoS._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                </Row>
            </Container>
        </Main>
    )
}

export default Home
const Main = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
margin-left:auto;
margin-right:auto;
max-width:1500px;
`
const Container = styled.div`
`
const Banner = styled.div`
img{  
    max-width:100%;
    z-index:-1;
    margin-bottom:-140px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));

}

`
const Row = styled.div`
    display:flex;
    z-index:1;
    margin-left:5px;
    margin-right:5px;

`