import React, {useState} from 'react'

const RegisterForm = () => {

    const [state, setstate] = useState({
        user:{
            username:" ",
            email: " ",
            password: " ",
            tel: " ",
            bio:"",
            terms:false

        }
});

let {user} = state;

//two way binding
let updateInput = (event) => {
    setstate((state) =>({
        user: {
            ...state.user,
           [event.target.name] : event.target.value
        }
    }));
};

//update the terms boolean
let updateCheck = (event) => {
    setstate((state) =>({
        user: {
            ...state.user,
           [event.target.name] : event.target.checked
        }
    }));
};

let submitLogin = (event) => {
        event.preventDefault();
        console.log(user)
    }

  return (
<div>
     {JSON.stringify(state)}
        <div>
            <div>
                <div>
                    Welcome To Registration Form 
                </div>
                <form onSubmit={submitLogin}>
                <div>
                    <input 
                    name="username"
                    value={user.username}
                    onChange ={updateInput}
                    type="text" placeholder='username' />
                </div>
                
                <div>
                    <input 
                    name="email"
                    value={user.email}s
                    onChange ={updateInput}
                     type="email" placeholder='Email' />
                </div>

                <div>
                  <input 
                    name="password"
                    value={user.password}
                    onChange ={updateInput}
                     type="password" placeholder='Password'/>
                </div>

                <div>
                    <input 
                    name="tel"
                    value={user.tel}
                    onChange ={updateInput}
                     type="tel" placeholder='tel' />
                </div>


                <div>
                    <textarea 
                     name="bio"
                     value={user.bio}
                     onChange ={updateInput}
                    rows={5} placeholder="Bio" />
                </div>
                <div>
                   <input 
                    name="terms"
                    onChange ={updateCheck}
                   type="checkbox" />Accept Terms
                </div>
            
                <div>
                    <input type="submit" value="Register" />
                </div>
                </form>
            </div>
        </div>
   
    </div>
  )
}

export default RegisterForm