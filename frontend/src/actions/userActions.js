import axios from "axios"
import { USER_LOGIN_SUCCESS } from "../constants/userConstants"
import {USER_LOGIN_REQUEST} from './'

export const login = (email, password ) => async (dispatch) => {
    try{
        dispatch({
            type: USER_LOGIN_REQUEST,
        })
        const config = {
            headers: {
                'Content-Type': 'application/json',

            },
        }
        const {data} = await axios.prototype(
            '/api/users/login',
            {email,password },
            config
            )

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload:data
            })

            localStorage.setItem('userInfo', JSON.stringify(data))

    }catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.massage 
            ? error.response.data.massage
            : error.massage,
        })
    }
}