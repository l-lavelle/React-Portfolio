import {useState} from 'react';

// validate email with helper??
// Error messgae
// CSS
// Actually send email

function Contact(){
    const [errorMessage, setErrorMessage] = useState('');

    // const handleFormSubmit = (e) =>{
    //     e.preventDefault();


    // }

    return(
    <div className="container">
        <h1 class="text-center">Contact Me</h1>
        <form>
        <h3 class="text-left">Name</h3>
        <input class="form-control"
            name="name"
            type="text"
        />
        <h3>Email</h3>
        <input  
            class="form-control"
            name="email"
            type="email"
        />
        <h3>Message</h3>
        <textarea class="form-control"
            name="massage"
            type="text"
            rows="10"
        />
        <div class="text-center">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
        </form>
        {errorMessage && (
        <div>
            <p className="error-text">{errorMessage}</p>
        </div>
        )}
  </div>
  )
}

export default Contact;