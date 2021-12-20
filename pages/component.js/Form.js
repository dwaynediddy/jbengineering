const submitHandler = () => {
    alert('submit successful')
}

export default function Form() {
    return (
        <div className="container">
            <h2>Contact Us</h2>
            <form className="contactForm" onSubmit={submitHandler}>
                <label>Add Fist name</label>
                <input 
                    type="text"
                    placeholder="Name"
                    className='formFirstName'
                    required
                    />
                <label>Add Last name</label>
                <input 
                    type="text"
                    placeholder="Last Name"
                    className='formLastName'
                    />
                <label>Add Email</label>
                <input 
                    type="email"
                    placeholder="Add Email"
                    className='formEmail'
                    required
                    />
                <label>Add Contact Number</label>
                <input 
                    type="number"
                    placeholder="Add contact number"
                    className='formNumber'
                    required
                    />
                    <label>tell us whatchu want</label>
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