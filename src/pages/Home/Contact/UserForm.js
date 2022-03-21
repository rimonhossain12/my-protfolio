import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { Toast } from 'bootstrap';

export const UserForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rsqt7sf', 'template_03m6mup', form.current, 'zpMzdKN2tV_s5p5Qk')
            .then((result) => {                        
                console.log("yeah it's awesome",result.text);
                if (result.ok === 'ok'){
                    document.getElementById('toaster').onclick();  
                }
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    };

    return (
        <>
            <div>
                <h3 className='text-start fw-bold' style={{ color: '#B7950B', marginBottom: '4vh' }} >Get In Touch</h3>
            </div>
            <form ref={form} class="row g-3" onSubmit={sendEmail}>
                <div className="col-md-10 text-start">
                    <input type="text" name="name" className="form-control" placeholder='Name' required />
                </div>
                <div className="col-md-10 text-start">
                    <input type="email" name="email" className="form-control" placeholder='Email Address' required />
                </div>
                <div className="form-floating col-md-10">
                    <textarea className="form-control" type="text" name="message" placeholder="Leave a comment here" style={{ height: '100px' }} required></textarea>
                    <label for="floatingTextarea2">Comments</label>
                </div>
                <button type="submit" value="Send" className="btn btn-primary col-md-10">send</button>
            </form>
        </>
    );
};

export default UserForm;