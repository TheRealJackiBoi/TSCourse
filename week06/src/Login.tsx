import { useContext, useRef } from "react";
import { UserContext } from "./App";
import useAuth from "./useAuth";

const Login = () => {

  const [user, setUser] = useContext(UserContext)

  const {login, logout} = useAuth(setUser)

  const emailRef = useRef<HTMLInputElement>()
  const passwordRef = useRef<HTMLInputElement>()

  return (
    <div>
      {user ? (
      <>
        <h1>Welcome {user.name}</h1>
        <button onClick={logout}>Logout</button>
      </>
      )
    :
    (
      <div className="flex flex-col">
        <input className="text-slate-900 w-1/8 rounded mx-auto my-2" type="text" ref={emailRef} />
        <input className="text-slate-900 w-1/8 rounded mx-auto my-2" type="password" ref={passwordRef} />
        <button onClick={() => {
          if (emailRef.current && passwordRef.current) {
            login(emailRef.current.value, passwordRef.current.value)
          }
        }}>Login</button>
      </div>
    )
    }
    </div>
  );
}

export default Login