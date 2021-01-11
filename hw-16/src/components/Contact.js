import React from 'react';
import './style-hw-16.css';

function Contact(props) {
    
    // const male = '\u2642';
    // const female = '\u2640';
    // const noGender = '\u00D7';

    let contactGender;
    if(props.gender === "male"){
        contactGender = '\u2642';
    }else if (props.gender === "female"){
        contactGender = '\u2640';
    }else{
        contactGender = '\u00D7';
    }

    return(
        <div className="contact">
            <span className="gender">{contactGender}</span>
            <div className="contact-info">
                <p className="name">{props.firstName} {props.lastName}</p>
                <p>{props.phone}</p>
            </div>
        </div>
    )
}

export default Contact;
