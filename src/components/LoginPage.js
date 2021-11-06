import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase';
function LoginPage() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        // firebase login stuffs
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();
        // firebase register stuffs
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully created an account
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <Wrapper>
            <Link to="/">
                <Logo>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="Amazaon Logo" />
                </Logo>
            </Link>
            <Container>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice.</p>
                <button onClick={register}>Create your Amazon Account</button>
            </Container>

        </Wrapper>
    )
}

export default LoginPage
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100vh;
    background-color:white;
`
const Logo = styled.div`
    img{
        margin-top:20px;
        margin-bottom:20px;
        object-fit:contain;
        width:100px;
        margin-right:auto;
        margin-left-auto;

    }
`
const Container = styled.div`
    width:300px;
    height:fit-content;
    display:flex;
    flex-direction:column;
    border-radius:5px;
    border:1px solid lightgray;
    padding:20px;

    h1{
        font-weight:500;
        margin-bottom:20px; 
    }
    h5{
        margin-bottom:5px;
    }
    input{
        height:30px;
        width:98%;
        margin-bottom:18px;
        background-color:white;
    }
    p{
        margin-top:15px;
        font-size:12px;
    }
    form > button{
       
            background:#f0c14b;
            border:1px solid;
            width:100%;
            height:30px;
            margin-top:10px;
            border-color:#a88734 #9c7e31 #846a29;
            color:#111;
        
    }
    button{
        border-radius:2px;
        width:100%;
        height:30px;
        margin-top:10px;
        border:1px solid;
        background-color:lightgray;
    }
`
