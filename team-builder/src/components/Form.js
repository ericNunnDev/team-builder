import React, { useState } from 'react';

const Form = props => {
    const [input, setInput] = useState('');

    return ( 
        <div>
            <form>
                <label htmlFor='name'>
                    Name: 
                    <input
                      type='text'
                      name='name' 
                    />
                </label>
                <label htmlFor='email'>
                    Email: 
                    <input
                      type='email'
                      name='email' 
                    />
                </label>
                <label htmlFor='role'>
                    Role: 
                    <input
                      type='text'
                      name='role' 
                    />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </div>
     );
}
 
export default Form;