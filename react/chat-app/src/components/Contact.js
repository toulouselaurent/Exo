import React from 'react';
import './Contact.css';

const user = {
    name:"Daisy Hopkins",
    avatarUrl:"https://randomuser.me/api/portraits/women/10.jpg",
    online: true,
    isLogged:function(){
        if(this.online){
        this.online = true;
            return <div><div className="status-online"></div><p className="status-text">Online</p></div>;   
        }else{
            return <div><div className="status-offline"></div><p className="status-text">Offline</p></div>;
        }
    }
};

function Contact() {
    return (
    <div className="Contact">
        <img className="avatar" src={user.avatarUrl} alt=""/>
        <div>
            <h4 className="name">{user.name}</h4>
            <div className="status">
                
                {user.isLogged()}
                
            </div>
        </div>
    </div>
    );
}

export default Contact;