import React from 'react';

const User = (props) => {
    const {data} = props;
    console.log(data);
    return (
        <div>
          <h1>User Component</h1>
            <h4>{data.Name}</h4>
            <h4>{data.age}</h4>
            
        </div>
    );
};

export default User;