import React, { useState, useEffect } from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });
    const { name, email } = formState;
    useEffect(() => {
        console.log('hey');
    }, []);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        })
    }
    return ( 
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Write your name"
                  value={ name }
                  onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Write your email"
                  value={ email }
                  onChange={ handleInputChange }
                />
            </div>

            { (name === '123' && <Message />) }

        </>
     );
}
 
export default SimpleForm;