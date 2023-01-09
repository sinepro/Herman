import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Form.scss'
import { useStateValue } from './StateProvider';

function Form() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const [{ info }, dispatch] = useStateValue();

    const [error, setError] = useState(null);

    const send = (e) => {
        e.preventDefault();

        if (firstName === "" ||
            lastName === "" ||
            email === "" ||
            address === "") {
            setError('Fulfill contact form information *');
            return;
        }

        dispatch({
            type: "SET_CONTACT_INFO",
            info: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                address: address,
                message: message,
            }
        })

        //console.log(info);
        navigate('/recap');
    }

    return (
        <div className='form'>
            <div className='form__container'>
                <h1>Contact Form</h1>

                <form action=''>
                    <h5>First Name *</h5>
                    <input type={'text'} value={firstName} onChange={(e) => (setFirstName(e.target.value))} />

                    <h5>Last Name *</h5>
                    <input type={'text'} value={lastName} onChange={(e) => (setLastName(e.target.value))} />

                    <h5>E-mail *</h5>
                    <input type={'text'} value={email} onChange={(e) => (setEmail(e.target.value))} />

                    <h5>Address *</h5>
                    <input type={'text'} value={address} onChange={(e) => (setAddress(e.target.value))} />

                    <h5>Message</h5>
                    <textarea value={message} onChange={(e) => (setMessage(e.target.value))} />

                    <br />
                    {error && <div className='form__error'>{error}</div>}

                    <button type={'submit'} onClick={send}>
                        Send
                    </button>
                </form>
            </div>
        </div >
    )
}

export default Form
