import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
function Header() {
    const [{basket, user}, dispatch] =useStateValue();
    const handleAuthentication=()=>{
        console.log(user);
        if(user){
            auth.signOut();
        }

    };
    return (
        <Container>
            <Link to="/">
                <Logo>
                    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="banner" />
                </Logo>
            </Link>

            <SearchBar>
                <input type="text" />
                <Icon>
                    <SearchIcon />
                </Icon>

            </SearchBar>
            <Nav>
                <Link to={!user && "/login"}>
                <Option onClick={handleAuthentication}>
                    <LineOne>
                        Hello {user? user.email : 'Guest'}
                    </LineOne>
                    <LineTwo >
                        {user? 'Sign Out' : 'Sign In'}
                    </LineTwo>
                </Option>
                </Link>
                <Option>
                    <LineOne>
                        Returns
                    </LineOne>
                    <LineTwo>
                        &Orders
                    </LineTwo>

                </Option>
                <Option>
                    <LineOne>
                        Your
                    </LineOne>
                    <LineTwo>
                        Prime
                    </LineTwo>
                </Option>
                <Link to="/checkout">
                    <OptionBasket>
                        <ShoppingBasketIcon />
                        <Count>
                            {basket?.length}
                        </Count>
                    </OptionBasket>
                </Link>

            </Nav>
        </Container>
    )
}

export default Header
const Container = styled.div`
    height:60px;
    display:flex;
    align-items:center;
    background-color:#131921;
    position:sticky;
    top:0;
    z-index:100;

`
const Logo = styled.div`
img{
    width:100px;
    object-fit:contain;
    margin:0 20px;
    margin-top:18px;
}
  


`
const SearchBar = styled.div`

display: flex;
flex:1;
align-items:center;
border-radius:24px;
input{
    height:12px;
    padding:10px;
    border:none;
    width:100%;
}

`
const Icon = styled.div`
    
    padding:5px;
    height:22px;
    background-color:#cd9042;

`
const Nav = styled.div`
    display:flex;
    justify-content:space-evenly;
`
const Option = styled.div`
    display:flex;
    flex-direction:column;
    color:white;
    margin-left:10px;
    margin-right:10px;
`
const LineOne = styled.span`
    font-size:10px;

`
const LineTwo = styled.span`
    font-size:13px;
    font-weight:600;
`
const OptionBasket = styled.div`
    display:flex;
    align-items:center;
    color:white;
`
const Count = styled.span`
    margin-left:10px;
    margin-right:10px;
`