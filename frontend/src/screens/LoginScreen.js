import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import {Form,Button,Row,Col, FormGroup } from 'react-bootstrap'
import { useDispatch,useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";

const LoginScreen = ({location, history}) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('') 
 
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {loading, error, userInfo}= userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo){
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

       const submitHandler = (e) => {
           e.preventDefault()
        // despatch login
        dispatch(login(email, password))
       }

    return (
        <FormContainer>
            <h1>התחברות </h1>
            < Message variant='danger'>{'cvngnx'} </Message> 
            {error && < Message variant='danger'>{error} </Message>  }
            {loading && <Loader/>}
              {/* email */}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='אימיל'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
            </Form.Group>
            {/* password */}
            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='סיסמה'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
            </Form.Group>
            {/* button sing in */}
            <Button type='submit' variant='primary'>התחברות</Button>
            </Form>
            {/*  */}
            <Row className='py-3'>
                <Col>
                    לא רשום?{''}
                    <Link to ={redirect ? `/register?redirect=${redirect}` : 'register'}>
                    לחץ להרשמה
                    </Link>
                </Col>
            </Row>

        </FormContainer>
    )
}

export default LoginScreen