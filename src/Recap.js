import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Recap.scss'
import { useStateValue } from './StateProvider'

function Recap() {

    const [{ info }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const cancel = () => {
        if (window.confirm('Are you sure you want to cancel this contact form?')) {
            navigate('/');
        }
    }

    const send = () => {
        // Handle contact form with beckend
        navigate('/');
    }

    return (
        <div className='recap'>
            <div className='recap__container'>
                <h1>Recapitulate information</h1>
                <p><strong className='recap__left'>First Name:</strong> <span className='recap__right'>{info?.firstName}</span></p>
                <p><strong className='recap__left'>Last Name:</strong> <span className='recap__right'>{info?.lastName}</span></p>
                <p><strong className='recap__left'>E-mail:</strong> <span className='recap__right'>{info?.email}</span></p>
                <p><strong className='recap__left'>Address:</strong> <span className='recap__right'>{info?.address}</span></p>
                <p><strong className='recap__left'>Message:</strong> <span className='recap__right'>{info?.message}</span></p>

                <button className='recap__cancelButton' onClick={cancel}>
                    &#xab; Cancel
                </button>

                <button className='recap__sendButton' onClick={send}>
                    Send &#xbb;
                </button>
            </div>
        </div>
    )
}

export default Recap
