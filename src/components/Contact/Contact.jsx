import React from 'react';
import PropTypes from 'prop-types';
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

Contact.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
}

export default Contact;
