import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './Info.css';

const Info = (props) => {
    
    // console.log(props);
    const {img,phone,name,email,salary}=props.user;
     
    return (
        <div className="Info">
            
            <div>
                <img src={img} alt=""/>
            </div>
            <div> 
                <h2 className="Name">{name}</h2>
                <h5>{email}</h5>
                <h3>{phone}</h3>
                <p><small>Annual Income:${salary}</small></p>
                <button className="Friends"
                onClick={()=> props.handleAddUser(props.user)}>
                    <FontAwesomeIcon icon={faPlusCircle} /> Add Friend</button>
            </div>
            
        </div>
    );
};

export default Info;