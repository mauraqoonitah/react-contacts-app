import React from 'react';
import ContactList from './ContactList';
import {getData} from '../utils/data';

function ContactApp(){
    const contacts = getData();

    return (
        <div className='contact-app'>
            <h1>Daftar Kontak</h1>
            <ContactList contacts={contacts}></ContactList>

        </div>
    )
}

export default ContactApp;