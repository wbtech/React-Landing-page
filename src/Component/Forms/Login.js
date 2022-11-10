import React,{useState} from 'react'

const Login = () => {
const [state, setState] = useState({
    user:{
        email: " ",
        password: " ",
    }
})

let {user} = state

//setState
let changeInput =(event) => {
    setState((state) => ({
        user: {
            ...state.user,
            [event.target.name] : event.target.value
        }
    }))
}

let submitLogin = (event) => {
    event.preventDefault();
    console.log(user)

}


  return (
    <>
    {JSON.stringify(state)}
        <div>
            <div>
                <div>
                    <h3>Login Here</h3>
                </div>
                <form onSubmit={submitLogin}>
                   
                    <div>
                        <input 
                        name='email'
                        value={user.email}
                        onChange={changeInput}
                        type= "email"
                        placeholder= 'email'
                        />
                    </div>
                    <div>
                        <input 
                        name='password'
                        value={user.password}
                        onChange={changeInput}
                        type= "password"
                        placeholder= 'password'
                        />
                    </div>
                    <div>
                        <input type='submit' value={"Login"} />
                    </div>
                    
                </form>
            </div>
        </div>
    </>
  )
}

export default Login