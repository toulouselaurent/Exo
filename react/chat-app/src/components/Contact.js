import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

// destructurer le props -> ({name avatar etc ...

function Contact(props) {
    return (
    <div className="Contact">
        <img className="avatar" src={props.avatarUrl} alt={props.name}/>
        <div>
            <h4 className="name">{props.name}</h4>
            <div className="status">

{/* condition vrai ? true :  false */}

                <div className={ props.online ? "status-online" : "status-offline"}></div>
                <p className="status-text">{ props.online ? "Online" : "Offline" }</p>          
            </div>
        </div>
    </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};

export default Contact;