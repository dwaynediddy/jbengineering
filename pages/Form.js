import react, { useState } from 'react';


export default function Form() {
    // state handler for single input
    // const [fname, setFname] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        alert('submit successful')
    }

    // const handleChange = e => {
    //     setFname(e.target.value)
    //     console.log(input)
    // }

    const [input, setInput] = useState({
        fname: '',
        lname: '',
        email: '',
        phoneNumber: ''
    })

    const handleChange = e => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        console.log(input)
    }

    return (
        <div className="formContainer">
            <h2>Contact Us</h2>
            <form className="contactForm" onSubmit={submitHandler}>
                <label>Add Fist name</label>
                <input 
                    onChange={handleChange}
                    type="text"
                    placeholder="Name"
                    className='formFirstName'
                    name='fname'
                    value={input.fname}
                    required
                    />
                <label>Add Last name</label>
                <input 
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                className='formLastName'
                name='lname'
                value={input.lname}
                />
                <label>Add Email</label>
                <input 
                onChange={handleChange}
                type="email"
                placeholder="Add Email"
                className='formEmail'
                name='email'
                value={input.email}
                required
                />
                <label>Add Contact Number</label>
                <input 
                onChange={handleChange}
                    type="number"
                    placeholder="Add contact number"
                    className='formNumber'
                    name='phoneNumber'
                    value={input.phoneNumber}
                    required
                    />
                    <label>tell milk whatchu want</label>
                    <textarea 
                    name='message' 
                    className='formMessageArea'
                    placeholder='enter some details about what you want milk dawg to blow up' 
                    />
                    <label>pdf/word/filesubmitter goes here...</label>
                    <input 
                        type='file'
                        className='formFileSubmitter'
                    />
                    <button className='formSubmitButton'>Submit</button>
                </form>
        </div>
    )
}