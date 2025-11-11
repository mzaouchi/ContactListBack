import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllContacts } from '../Redux/Actions'
import CardContact from './CardContact'
const ListContacts=()=>{

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllContacts())
    },[dispatch])

    const contacts = useSelector(state => state.contacts)

    return(
        <div>
            {
                contacts.map((el,i,t)=> <CardContact key={el._id} el={el}/>)
            }
        </div>
    )
}

export default ListContacts