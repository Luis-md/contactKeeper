import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext'
import contactReducer from './contactReducer'

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'


const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Parabirilim",
                email: 'p@m.com',
                phone: '111-222-333',
                type: 'personal'
            },
            {
                id: 2,
                name: "Chica",
                email: 'c@m.com',
                phone: '231-222-333',
                type: 'professional'
            },
            {
                id: 3,
                name: "Boeck",
                email: 'b@m.com',
                phone: '100-222-333',
                type: 'personal'
            },
            {
                id: 4,
                name: "Alves",
                email: 'alves@m.com',
                phone: '321-222-333',
                type: 'professional'
            },
        ],
        current: null,
        filtered: null
    }

    const [ state, dispatch ] = useReducer(contactReducer, initialState);

    //ADD CONTACTS

    const addContact = contact => {
        contact.id = uuidv4();
        dispatch({type: ADD_CONTACT, payload: contact})
    }

    //DELETE CONTACT

    const deleteContact = id => {
        dispatch({type: DELETE_CONTACT, payload: id})
    }

    //SET CURRENT CONTACT

    const setCurrent = contact => {
        dispatch({type: SET_CURRENT, payload: contact})
    }

    //CLEAR CURRENT CONTACT
    
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})
    }
    //UPDATE CONTACT
    const updateContact = contact => {
        dispatch({type: UPDATE_CONTACT, payload: contact})
    } 

    //FILTER CONTACTS
    const filterContacts = text => {
        dispatch({type: FILTER_CONTACTS, payload: text})
    } 

    //CLEAR FILTER
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER})
    }

    return <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}>
            {props.children}
        </ContactContext.Provider>
}

export default ContactState;