import React from 'react';
import ContactItem from './ContactItem';

function ContactList({contacts}){
    return (
        <div className='contact-list'>
            {
                contacts.map((contact) => (
                    <ContactItem key={contact.id} {...contact}></ContactItem>
                ))
            }

        </div>
    );
}

export default ContactList;