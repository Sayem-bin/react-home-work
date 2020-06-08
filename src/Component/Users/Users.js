import React, { useState } from 'react';
import Data from '../../FakeData/Data';
import './Users.css';
import Info from '../Info/Info';
import Summary from '../Summary/Summary';





const Users = () => {
    const first=Data.slice();
    const[User,setUser]=useState(first);
    const [Summary1,setSummary1]=useState([]);


    const handleAddUser=(user)=>{
        const newSummary1=[...Summary1,user];
        setSummary1(newSummary1);
    }
   
    return (
        <div className="Users-container"> 
            <div className="Data-container">
            
                  {
                    User.map(user=> <Info 
                        handleAddUser={handleAddUser}
                        user={user}>
                         </Info>)
                  }
              
            </div>
            <div className="Total-container">
                 <Summary Summary1={Summary1}></Summary>
            </div>
        </div>
    );
};

export default Users;