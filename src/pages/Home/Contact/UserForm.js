import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {  Zoom } from 'react-reveal';
// import { Toast } from 'bootstrap';

export const UserForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rsqt7sf', 'template_03m6mup', form.current, 'zpMzdKN2tV_s5p5Qk')
            .then((result) => {
                console.log("yeah it's awesome", result.text);
                alert("Thank you for your information!")
                if (result.ok === 'ok') {
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
                <Zoom bottom cascade>
                    <h3 className='text-start fw-bold' style={{ color: '#B7950B' }} >About Me</h3>
                </Zoom>
            </div>

            <form ref={form} class="row g-3" onSubmit={sendEmail}>
                {/* <Fade right> */}
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

                {/* </Fade> */}
            </form>
        </>
    );
};

export default UserForm;