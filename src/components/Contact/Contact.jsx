import React from 'react';
import css from './Contact.module.css'

const Contact = ({ contacts, onDeleteContact }) => (
    <ul className={css.list}>{contacts.map(({id, name, number}) => (
        <li className={css.item} key={id}>
            <p className={css.text}><span className={css.name}>{name}</span>: {number}</p>
            <button className={css.btn} onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
    ))}
    </ul>
);

export default Contact;
