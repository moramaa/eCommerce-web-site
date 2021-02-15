import axios from 'axios'
import {PRODUCT_LIST_FAIL,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_REQUEST} from  '../constants/productsConstants'

export const listProducts =() => async(despatch) => {
try {
    dispatch({type: PRODUCT_LIST_REQUEST})
    
    const {data} =await axios.get('/api/products')
    
    dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data
    })
    
    
} catch (error) {
    dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: error.response && error.response.data.massage 
        ? error.response.data.massage
        : error.massage,
    })
    
}
} 