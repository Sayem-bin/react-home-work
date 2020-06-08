import React from 'react';

const Summary = (props) => {
    const Summary1=props.Summary1;
    
    // const total=Summary1.reduce((total,users)=>total+users.salary,0)

     

    let total=0;
    for(let i=0;i<Summary1.length;i++){
        const user= Summary1[i];
        total=total+user.salary;
    }



    return (
        <div>
            <h4 className="summary"> Summary  </h4>
            <p>Friends Added:{Summary1.length}</p>
            <p>Total Annual Salary:{total}</p>

        </div>
    );
};

export default Summary;