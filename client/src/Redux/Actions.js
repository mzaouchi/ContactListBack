import { GETALLCONTATCS, GETONECONTACT } from "./ActionTypes"
import axios from 'axios'

export const getAllContacts=()=>async(dispatch)=>{
    try {
       const res = await axios.get('/contacts/getAllContacts')

       dispatch(
        {
            type : GETALLCONTATCS,
            payload : res.data.contacts
        }
       )
    } catch (error) {
        console.log(error)
    }
}

export const addContact=(newContact, navigate)=>async(dispatch)=>{
    try {
        await axios.post('/contacts/addContact', newContact)

        dispatch(getAllContacts())

        navigate('/ListContacts')
    } catch (error) {
        console.log(error)
    }

}


export const getOneContact=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/contacts/getOneContact/${id}`)

        dispatch(
            {
                type : GETONECONTACT,
                payload : res.data.contact
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const updateContact=(id, upContact, navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/contacts/updateContact/${id}`, upContact)

        dispatch(getAllContacts())

        navigate('/ListContacts')
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/contacts/deleteContact/${id}`)

        dispatch(getAllContacts())
    } catch (error) {
        console.log(error)
    }
}