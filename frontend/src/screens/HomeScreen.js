import React,{useEffect} from 'react'
import {Row,Col } from 'react-bootstrap'
import {useDispatchm, useSelector} from 'react-redux'
import Product from '../components/Product'
import {listProducts} from '../actions/productsActions'

const HomeScreen = () => {
    
    useEffect(() => {
        dispatchEvent(lis)
    },[])

    return (
        <>
        <header >
            <h1>products</h1>
        </header>
         <Row>
         {products.map(product => (
             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}>
              </Product>       
         </Col>
         ) )}    
        </Row>   
        </>
    ) 
}

export default HomeScreen
