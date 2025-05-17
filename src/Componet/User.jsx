import React from 'react';
import { use } from 'react';

const User = ({userPromise}) => {
const user = use(userPromise);
console.log(user);


const handleSubmit = (e) => {
    e.preventDefault();
   const name = e.target.name.value;
   const email = e.target.email.value;
   const user = {name,email};
   console.log(user);


// create a new user
fetch('http://localhost:3000/user',{
    method:'Post',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(user)
})
 .then(res => res.json())
 .then(data => {
    console.log(data);
 })
}
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' name='name' />
            <br />
            <input type="email" placeholder='Email' name='email' />
            <br />
            <button type='submit'>Add User</button>
          </form>


            <div>
            {
                user.map((user) => <p key={user.id}>{user.name} :{user.email} </p>) 
             }
            </div>
        </div>
    );
};

export default User;